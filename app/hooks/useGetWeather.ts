import { useState, useEffect } from "react"
import * as Location from 'expo-location'; 
import {WEATHER_API_KEY} from '@env'
export const useGetWeather = () => {
    const  [loading, setLoading] = useState<boolean>(true)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [weather,setWeather] = useState<any>(null)
    const [lat, setLat] = useState<number | null>(null)
    const [lon, setLon] = useState<number | null>(null)

    const fetchWeather = async () => {
        try{ const response = await fetch(`https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
         const data = await response.json()
         setWeather(data)
         }catch(error:any){
           console.log(error)
         setErrorMsg(error)
         }finally{
           setLoading(false)
         }
       }
       
       useEffect(()=>{
         (async () =>{
           let { status } = await Location.requestForegroundPermissionsAsync()
           if(status !== 'granted'){
             setErrorMsg('Permission to access location was denied')
             return
           }
           let location = await Location.getCurrentPositionAsync({})
           setLat(location.coords.latitude)
           setLon(location.coords.longitude)
           await fetchWeather()
         })()
       },[lat, lon])
     return [loading, errorMsg, weather] 
}