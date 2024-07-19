import { WeatherCondition, weatherType } from './weatherTypes';


 export  type PresentWeatherProps = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
    weather: Array<{ 
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;

}
export interface WeatherItem {
  dt: number;
  weather: {
    id: number;
    main: WeatherCondition;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
}


