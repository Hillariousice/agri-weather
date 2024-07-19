
export type WeatherCondition = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clear' | 'Clouds' | 'Mist' |'Haze';

export const weatherType: Record<WeatherCondition, { icon: string; message: string; backgroundColor: string }> = {
    Thunderstorm: {
        icon: 'zap',
        message: 'Thunderstorm is coming, stay safe',
        backgroundColor: '#000000'    
    },
    Drizzle: {
        icon: 'cloud-rain',
        message: 'Drizzle is coming, it will rain a little',
        backgroundColor:'#36454f'
    },
    Rain: {
        icon: 'umbrella',
        message: 'Rain is coming, get your umbrella',
        backgroundColor: '#0000ff'
    },
    Snow: {
        icon:'cloud-snow',
        message: 'Snow is coming, get your mittens',
        backgroundColor: '#7f6065'
    },
    Clear: {
        icon: 'sun',
        message: 'Clear sky, enjoy the sun',
        backgroundColor: '#e47200'
    },
    Clouds: {
        icon: 'cloud',
        message: 'Cloudy day, stay warm',
        backgroundColor: '#363636'
    },
    Haze: {
        icon: 'wind',
        message: 'Haze is coming, it will be foggy',
        backgroundColor: '#58586e'
    },
    Mist: {
        icon: 'weather-windy-variant',
        message: 'Mist is coming, visibility will be low',
        backgroundColor: '#3e3e37'
    },
  
};