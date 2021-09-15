import { StyleSheet } from "react-native";
export  const HomeStyle =StyleSheet.create({
    main_container:{
     flex:1,
     resizeMode:'cover',
     justifyContent:'center',
    },
    app_title_container:{
        flex:0.7,
        alignItems:'center',
        justifyContent:'center',
        
    },
    weather_info:{
        flex:1,
        backgroundColor:'#242526',
        borderRadius:17,
        marginLeft:'3%',
        marginRight:'3%',
        marginBottom:8,
    },
    additional_info:{
        flex:1,
        backgroundColor:'#242526',
        
        borderTopLeftRadius:17,
        borderTopRightRadius:17,
        marginLeft:'3%',
        marginRight:'3%',
        
    },
    title:{
        color:"#ffff",
       
        fontSize:35
    },
    cityName:{
        color:'#ffff',
        marginLeft:8
      
        


    },
    current_date:{
        
        color:'gray',
        fontSize:11
    },
    current_temp_container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:'5%',
        marginRight:'5%'
      
    },
    temp:{
        color:'#ffff',
        fontSize:40,
        marginLeft:10
        

    },
    weather_days_container:{
        alignItems:'flex-start',
        justifyContent:'space-evenly',
        flex:2,
        flexDirection:'row',
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:'5%'
    },
    hours:{
        color:'gray',
        fontSize:11,
    },
    hours_temp:{
        color:'#fff',
        fontSize:17,
        marginTop:5
    },
    hours_btn:{
        
        padding:10,
        marginRight:22,
        alignItems:'center',
        justifyContent:'center'
    },
    nextDay_info:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        
        marginTop:'5%',
        marginLeft:'5%',
        
        

    },
    day_name:{
        flex:1,
        justifyContent:'center',
          color:'#fff',
          

    },
    day_rain:{
       flex:1,
       flexDirection:'row',
       alignItems:'center',
        justifyContent:'space-between',
        // fontSize:12,
        // color:"gray"
    },scrollView:{
     flex:1
    },
    indicator:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    tinyLogo:{
        width:45,
        height:50,
        marginLeft:0,
    },
  
    current_temp:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'  ,

     },
     current_weather_info:{
         flex:1,
         alignItems:'flex-end',


     },
     day_name:{
        flex:1,
        justifyContent:'center',
          color:'#fff',
          

    },day_name:{
        flex:1,
        justifyContent:'center',
          color:'#fff',
          

    },
    day_temp:{
       flex:1,
       alignItems:'flex-end',
       marginRight:15


    },
    location:{
        flex:2,
        flexDirection:'row',
        marginTop:'3%',
        alignItems:'center'

    }

})