import { TCityInfoMapped, TCityInfoResponse } from 'shared/types'

async function getCoordsOfCities(city: string): Promise<TCityInfoMapped[]> {
    const url = `${process.env.OPEN_WEATHER_API_URL_CITY}q=${city}&limit=10&appid=${process.env.OPEN_WEATHER_TOKEN}`
    const response = await fetch(url)
    const cityInfoResponse = (await response.json()) as TCityInfoResponse[]

    try {
        if (!cityInfoResponse.length) throw new Error('No city info found')

        const cityInfoMapped = cityInfoResponse.map((info) => ({
            city: info.name,
            state: info.state,
            country: info.country,
            latitude: info.lat,
            longitude: info.lon
        }))

        return cityInfoMapped
    } catch (_) {
        // This catch could be improved with real error message
        throw new Error('API unavailable')
    }
}

export default getCoordsOfCities
