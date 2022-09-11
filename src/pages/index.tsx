import { GetServerSidePropsContext } from 'next'
import React from 'react'
import { getSelectorsByUserAgent } from 'react-device-detect'

import { Stack } from 'components/base'
import {
    ForecastDesktop,
    Location,
    ListOfWeatherCities,
    ForecastMobile
} from 'modules'
import WeatherProvider from 'shared/context/weather/WeatherProvider'
import { TNextPageWithLayout } from 'shared/types'

type THomeProps = {
    initialState: {
        initial_city_info: string
        initial_list_of_cities_found: string
    }
}

const Home: TNextPageWithLayout = ({ initialState }: THomeProps) => {
    const { initial_city_info, initial_list_of_cities_found } = initialState

    return (
        <WeatherProvider
            initial_city_info={initial_city_info}
            initial_list_of_cities_found={initial_list_of_cities_found}
        >
            <Stack gap="3">
                <Location />
                <ForecastDesktop />
                <ListOfWeatherCities />
            </Stack>
        </WeatherProvider>
    )
}

Home.getMobileLayout = function getMobileLayout(
    Component: any,
    { initialState }: THomeProps
) {
    const { initial_city_info, initial_list_of_cities_found } = initialState

    return (
        <Component>
            <WeatherProvider
                initial_city_info={initial_city_info}
                initial_list_of_cities_found={initial_list_of_cities_found}
            >
                <Stack direction="vertical" gap="2">
                    <Location />
                    <ForecastMobile />
                    <ListOfWeatherCities />
                </Stack>
            </WeatherProvider>
        </Component>
    )
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    const userAgent =
        (req ? req.headers['user-agent'] : navigator.userAgent) || 'Desktop'

    const { isMobile } = getSelectorsByUserAgent(userAgent)

    return {
        props: {
            isMobile,
            initialState: {
                initial_city_info: req.cookies['initial_city_info'] || null,
                initial_list_of_cities_found:
                    req.cookies['initial_list_of_cities_found'] || null
            }
        }
    }
}

export default Home
