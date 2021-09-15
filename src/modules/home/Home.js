import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator, Text, ImageBackground, TouchableOpacity, ScrollView, Image, RefreshControl } from 'react-native'
import { HomeStyle } from './HomeStyle';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons'


export default function Home() {

    const [data, setdata] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [hoursdata, sethoursdata] = useState(null);
    const [latitude, setlatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    Geolocation.getCurrentPosition(info => setlatitude(info.coords.latitude));
    Geolocation.getCurrentPosition(info => setlongitude(info.coords.longitude));



    const fetchweather = async () => {
        try {
            const fetch_current = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2a50c4942b570058222a77bcd50a326f&units=metric`)
            const response = await fetch_current.json();
            setdata(response);

        } catch (error) {
            console.log(error);

        }


    }
    const fetch_hours_info = async () => {
        try {
            const hours = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=2a50c4942b570058222a77bcd50a326f&units=metric`)
            const jsonobj = await hours.json();
            sethoursdata(jsonobj);

        } catch (error) {
            console.log(error)
        }
    }
    const day = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    useEffect(() => {

        fetchweather();
        fetch_hours_info();

    }, [])
    useEffect(() => {

        fetchweather();
        fetch_hours_info();

    }, [refreshing])

    

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        Geolocation.getCurrentPosition(info => setlatitude(info.coords.latitude));
        Geolocation.getCurrentPosition(info => setlongitude(info.coords.longitude));
        fetchweather();
        fetch_hours_info();
        wait(1000).then(() => setRefreshing(false));
    }, []);

    // console.log(data);
    // console.log(hoursdata);

    return (
        <ScrollView
            contentContainerStyle={HomeStyle.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <ImageBackground source={require('../../assets/bgimg.jpg')} style={HomeStyle.main_container}>




                <View style={HomeStyle.app_title_container}>
                    <Text style={HomeStyle.title}>Weather</Text>
                </View>

                <View style={HomeStyle.weather_info}>
                    {!data ?
                        (<View style={HomeStyle.indicator}><ActivityIndicator size="small" color="#fff" /></View>)
                        :
                        (
                            <View style={{ flex: 2.7, }}>
                                <View style={{ flex: 0.7, marginLeft: '5%' }}>
                                    <View style={HomeStyle.location}>
                                    
                                    <Icon name="location-sharp"  size={15} color="white"/>
                                    <Text style={HomeStyle.cityName}>{data.name} , {data.sys.country}</Text>
                                    </View>
                                    <Text style={HomeStyle.current_date}>{day[new Date(data.dt * 1000).getDay()]}, {month[new Date(data.dt * 1000).getMonth()]} {new Date(data.dt * 1000).getDate()}      {new Date(data.dt * 1000).getHours()}:{new Date(data.dt * 1000).getMinutes()}</Text>
                                </View>


                                <View style={HomeStyle.current_temp_container}>

                                    <View style={HomeStyle.current_temp}>
                                        <Icon
                                        name="sunny-sharp"
                                             style={HomeStyle.tinyLogo}
                                            
                                            size={40}
                                            color="yellow"
                                        />
                                        <Text style={HomeStyle.temp}>{Math.ceil(data.main.temp)}'</Text>
                                    </View>

                                    <View style={HomeStyle.current_weather_info}>
                                        <Text style={{ color: 'gray' }}>{data.weather[0].description}</Text>
                                        <Text style={{ color: 'gray' }}>{Math.ceil(data.main.temp_max)}' / {Math.ceil(data.main.temp_min)}'</Text>
                                        <Text style={{ color: 'gray' }}>feels like {Math.ceil(data.main.feels_like)}'</Text>
                                    </View>
                                </View>

                            </View>
                        )}
                    {!hoursdata ?
                        (<View style={HomeStyle.indicator}><ActivityIndicator size="small" color="#fff" /></View>)
                        :
                        (
                            <View style={HomeStyle.weather_days_container}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {hoursdata.list.map((item, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={HomeStyle.hours_btn}>
                                                <Text style={HomeStyle.hours}>{(new Date(item.dt * 1000)).getHours()}:00</Text>
                                                <Icon name="sunny-sharp"   size={20} color="yellow"/>
                                                <Text style={HomeStyle.hours_temp} >{Math.ceil(item.main.temp)}'</Text>
                                                <Text style={HomeStyle.hours}>{item.main.humidity}%</Text>

                                            </TouchableOpacity>
                                        )
                                    })}



                                </ScrollView>
                            </View>
                        )}


                </View>
                {!hoursdata ?
                    (<View style={HomeStyle.indicator}><ActivityIndicator size="small" color="#fff" /></View>)
                    :
                    (
                        <View style={HomeStyle.additional_info}>
                            <ScrollView>
                                {hoursdata.list.map((item, index) => {
                                    return (
                                        <View key={index} style={HomeStyle.nextDay_info}>
                                            <Text style={HomeStyle.day_name}>{day[(new Date(item.dt * 1000)).getDay()]}</Text>
                                            <View style={HomeStyle.day_rain}>
                                            <Text style={{color:'gray'}}>{item.main.humidity}%</Text>
                                            <Icon color="yellow"  name="sunny-sharp"   size={20} />
                                                </View>
                                            
                                            
                                            <View style={HomeStyle.day_temp}>
                                            
                                            <Text style={{color:'gray'}} >{Math.ceil(item.main.temp_max)}' / {Math.ceil(item.main.temp_min)}'</Text>
                                             </View>
                                        </View>
                                    )
                                })}


                            </ScrollView>

                        </View>
                    )}


            </ImageBackground>
        </ScrollView>
    )
}
