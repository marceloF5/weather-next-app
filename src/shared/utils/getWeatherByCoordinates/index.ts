import {
    TCoordinates,
    TForecast,
    TWeatherMapped,
    TWeatherResponse
} from 'shared/types'

import { convertTimeToDateOfWeek, convertTimeToHour } from '../convertTimeTo'

async function getWeatherByCoordinates(
    lat?: number,
    lon?: number
): Promise<TWeatherMapped> {
    let url = ''

    if (!lat || !lon) {
        const userLocation = await new Promise<TCoordinates>(
            (resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            }
        )
        const {
            coords: { latitude, longitude }
        } = userLocation
        url = `${process.env.OPEN_WEATHER_API_URL_COORD}lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${process.env.OPEN_WEATHER_TOKEN}`
    } else {
        url = `${process.env.OPEN_WEATHER_API_URL_COORD}lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.OPEN_WEATHER_TOKEN}`
    }

    const response = await fetch(url)
    const weatherInfo = (await response.json()) as TWeatherResponse

    try {
        if (!weatherInfo) throw new Error('No weather info found')

        const forecasts = weatherInfo.daily.slice(1, 7).map((item) => {
            return {
                dt: convertTimeToDateOfWeek(item.dt),
                temp: `${item.temp.day.toFixed()}º`
            } as TForecast
        })

        return {
            timezone: weatherInfo.timezone,
            latitude: weatherInfo.lat,
            longitude: weatherInfo.lon,
            dt: convertTimeToDateOfWeek(weatherInfo.current.dt),
            temp: `${weatherInfo.current.temp.toFixed()}º`,
            feelsLike: `${weatherInfo.current.feels_like.toFixed()}º`,
            humidity: `${weatherInfo.current.humidity.toFixed()}%`,
            pressure: `${weatherInfo.current.pressure.toFixed()} MB`,
            sunrise: convertTimeToHour(weatherInfo.current.sunrise),
            sunset: convertTimeToHour(weatherInfo.current.sunset),
            windSpeed: `${weatherInfo.current.wind_speed.toFixed(2)} km/h`,
            forecasts
        }
    } catch (_) {
        // This catch could be improved with real error message
        throw new Error('API unavailable')
    }
}

export default getWeatherByCoordinates
