export type TCoordinates = {
    coords: {
        latitude: number
        longitude: number
    }
}

export type TForecast = {
    dt: string
    temp: string
}

export type TWeatherResponse = {
    lat: number
    lon: number
    timezone: string
    daily: Array<{
        temp: {
            day: number
        }
        dt: number
    }>
    current: {
        temp: number
        feels_like: number
        humidity: number
        sunrise: number
        sunset: number
        pressure: number
        wind_speed: number
        dt: number
    }
}

export type TWeatherMapped = {
    latitude: number
    longitude: number
    timezone: string
    temp: string
    feelsLike: string
    humidity: string
    sunrise: string
    sunset: string
    pressure: string
    windSpeed: string
    dt: string
    forecasts: TForecast[]
}

export type TCityInfoResponse = {
    country: string
    state: string
    name: string
    lat: number
    lon: number
}

export type TCityInfoMapped = {
    country: string
    state: string
    city: string
    latitude: number
    longitude: number
}

export type TCityInfo = TCityInfoMapped & {
    id: number
    temp: number
}

export type TCurrentWeatherInfo = TWeatherMapped &
    Pick<TCityInfoMapped, 'city' | 'country' | 'state'>

export type TNextPageWithLayout = NextPage & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getMobileLayout?: (Component: any, isMobile: boolean) => React.ReactNode
}
