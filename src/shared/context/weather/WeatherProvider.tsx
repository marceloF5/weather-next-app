import cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'

import { TCityInfo, TCityInfoMapped, TCurrentWeatherInfo } from 'shared/types'
import getCoordsOfCities from 'shared/utils/getCoordsOfCities'
import getWeatherByCoordinates from 'shared/utils/getWeatherByCoordinates'

import WeatherContext from './WeatherContext'

type TWeatherProviderProps = {
    children: React.ReactNode
    initial_city_info: string
    initial_list_of_cities_found: string
}

const DEFAULT_COORDS = {
    lat: 38.7259284,
    lon: -9.13738217
}

const WeatherProvider = ({
    children,
    initial_city_info,
    initial_list_of_cities_found
}: TWeatherProviderProps) => {
    const [currentWeatherInfo, setCurrentWeatherInfo] =
        useState<TCurrentWeatherInfo>(JSON.parse(initial_city_info))
    const [listOfCitiesFound, setListOfCitiesFound] = useState<
        TCityInfoMapped[]
    >([])
    const [listOfCities, setListOfCities] = useState<TCityInfo[]>(
        JSON.parse(initial_list_of_cities_found)
    )

    const resetListOfCitiesFound = () => setListOfCitiesFound([])

    const handleCurrentWeatherByCoordinates = useCallback(
        async (cityInfo?: TCityInfoMapped) => {
            try {
                const cookieLatLonCityStateCountry =
                    JSON.parse(initial_city_info)
                const weatherByCoordinates = await getWeatherByCoordinates(
                    cityInfo?.latitude ||
                        cookieLatLonCityStateCountry?.lat ||
                        DEFAULT_COORDS.lat,
                    cityInfo?.longitude ||
                        cookieLatLonCityStateCountry?.lon ||
                        DEFAULT_COORDS.lon
                )

                setCurrentWeatherInfo({
                    ...weatherByCoordinates,
                    city:
                        cityInfo?.city ||
                        cookieLatLonCityStateCountry?.city ||
                        '',
                    state:
                        cityInfo?.state ||
                        cookieLatLonCityStateCountry?.state ||
                        '',
                    country:
                        cityInfo?.country ||
                        cookieLatLonCityStateCountry?.country ||
                        ''
                })

                cookies.set(
                    'initial_city_info',
                    JSON.stringify({
                        lat: weatherByCoordinates.latitude,
                        lon: weatherByCoordinates.longitude,
                        city:
                            cityInfo?.city ||
                            cookieLatLonCityStateCountry?.city ||
                            '',
                        state:
                            cityInfo?.state ||
                            cookieLatLonCityStateCountry?.state ||
                            '',
                        country:
                            cityInfo?.country ||
                            cookieLatLonCityStateCountry?.country ||
                            ''
                    })
                )
                resetListOfCitiesFound()

                if (cityInfo) {
                    const id = cityInfo.latitude + cityInfo.longitude

                    if (!listOfCities?.length) {
                        setListOfCities([
                            {
                                ...cityInfo,
                                temp: weatherByCoordinates.temp,
                                id
                            }
                        ])

                        cookies.set(
                            'initial_list_of_cities_found',
                            JSON.stringify([
                                {
                                    ...cityInfo,
                                    temp: weatherByCoordinates.temp,
                                    id
                                }
                            ])
                        )

                        return
                    }

                    const hasCityAddedOnList = listOfCities.find(
                        (currentCity) => currentCity.id === id
                    )

                    if (hasCityAddedOnList) {
                        throw new Error('This city already exist')
                    }

                    setListOfCities([
                        ...listOfCities,
                        { ...cityInfo, temp: weatherByCoordinates.temp, id }
                    ])
                    cookies.set(
                        'initial_list_of_cities_found',
                        JSON.stringify([...listOfCities, { ...cityInfo, id }])
                    )
                }
            } catch (e) {
                // ADD MESSAGE ERROR COMPONENT
            }
        },
        [initial_city_info, listOfCities]
    )
    const handleCurrentWeatherByList = async (cityInfo: TCityInfoMapped) => {
        const weatherByCoordinates = await getWeatherByCoordinates(
            cityInfo?.latitude,
            cityInfo?.longitude
        )

        setCurrentWeatherInfo({
            ...weatherByCoordinates,
            city: cityInfo.city,
            state: cityInfo.state,
            country: cityInfo.country
        })
        cookies.set(
            'initial_city_info',
            JSON.stringify({
                lat: weatherByCoordinates.latitude,
                lon: weatherByCoordinates.longitude,
                city: cityInfo?.city,
                state: cityInfo?.state,
                country: cityInfo?.country
            })
        )
    }

    const handleRemoveCityFromList = (id: number) => {
        const newListOfCities = listOfCities.filter((city) => city.id !== id)

        setListOfCities(newListOfCities)
        cookies.set(
            'initial_list_of_cities_found',
            JSON.stringify(newListOfCities)
        )
    }

    const handleListOfCities = async (city: string) => {
        if (city === '') {
            resetListOfCitiesFound()
            return
        }
        try {
            const listOfCitiesInfo = await getCoordsOfCities(city)

            setListOfCitiesFound(listOfCitiesInfo)
        } catch (e) {
            console.log(e)
            // ADD MESSAGE ERROR COMPONENT
        }
    }

    useEffect(() => {
        handleCurrentWeatherByCoordinates()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <WeatherContext.Provider
            value={{
                currentWeatherInfo,
                listOfCities,
                listOfCitiesFound,
                handleCurrentWeatherByCoordinates,
                handleListOfCities,
                handleCurrentWeatherByList,
                handleRemoveCityFromList,
                resetListOfCitiesFound
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider
