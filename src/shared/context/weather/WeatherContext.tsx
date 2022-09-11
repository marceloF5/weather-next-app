import { createContext } from 'react'

import { TCityInfo, TCityInfoMapped, TCurrentWeatherInfo } from 'shared/types'

type TWeatherContextProps = {
    currentWeatherInfo: TCurrentWeatherInfo
    listOfCitiesFound: TCityInfoMapped[]
    listOfCities: TCityInfo[]
    handleCurrentWeatherByCoordinates: (cityInfo?: TCityInfoMapped) => void
    handleCurrentWeatherByList: (cityInfo: TCityInfoMapped) => void
    handleRemoveCityFromList: (id: number) => void
    handleListOfCities: (city: string) => void
    resetListOfCitiesFound: () => void
}

const WeatherContext = createContext<TWeatherContextProps>({
    currentWeatherInfo: {
        city: '',
        country: '',
        dt: '',
        feelsLike: '',
        forecasts: [],
        humidity: '',
        latitude: 0,
        longitude: 0,
        pressure: '',
        state: '',
        sunrise: '',
        sunset: '',
        temp: '',
        timezone: '',
        windSpeed: ''
    },
    listOfCitiesFound: [],
    listOfCities: [],
    handleCurrentWeatherByCoordinates: () => null,
    handleCurrentWeatherByList: () => null,
    handleRemoveCityFromList: () => null,
    handleListOfCities: () => null,
    resetListOfCitiesFound: () => null
})

export default WeatherContext
