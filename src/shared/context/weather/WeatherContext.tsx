import { createContext } from 'react'

import { TCityInfo, TCityInfoMapped, TCurrentWeatherInfo } from 'shared/types'

type TWeatherContextProps = {
    currentWeatherInfo: TCurrentWeatherInfo
    listOfCitiesFound?: TCityInfoMapped[]
    listOfCities: TCityInfo[]
    handleCurrentWeatherByCoordinates: (cityInfo?: TCityInfoMapped) => void
    handleCurrentWeatherByList: (cityInfo: TCityInfoMapped) => void
    handleRemoveCityFromList: (id: number) => void
    handleListOfCities: (city: string) => void
}

const WeatherContext = createContext<TWeatherContextProps>({
    currentWeatherInfo: {
        city: '',
        country: '',
        dt: 0,
        feelsLike: 0,
        forecasts: [],
        humidity: 0,
        latitude: 0,
        longitude: 0,
        pressure: 0,
        state: '',
        sunrise: 0,
        sunset: 0,
        temp: 0,
        timezone: '',
        windSpeed: 0
    },
    listOfCitiesFound: [],
    listOfCities: [],
    handleCurrentWeatherByCoordinates: () => null,
    handleCurrentWeatherByList: () => null,
    handleRemoveCityFromList: () => null,
    handleListOfCities: () => null
})

export default WeatherContext
