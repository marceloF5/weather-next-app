import { Stack } from 'components/base'
import { CardBox, Text } from 'components/ui'
import { useWeather } from 'shared/context/weather'

const ForecastDesktop = () => {
    const { currentWeatherInfo } = useWeather()

    const locationText = `${
        currentWeatherInfo?.state || currentWeatherInfo.timezone.split('/')[0]
    }, ${
        currentWeatherInfo?.city || currentWeatherInfo.timezone.split('/')[1]
    } ${currentWeatherInfo?.country ? `(${currentWeatherInfo.country})` : ''}`

    return (
        <Stack gap="2">
            <Stack>
                {currentWeatherInfo?.timezone || currentWeatherInfo?.city ? (
                    <Text weight="bold" size="2.5rem">
                        {locationText}
                    </Text>
                ) : (
                    <Text>Loading Timezone</Text>
                )}
            </Stack>
            <Stack as="ul" gap="2">
                <CardBox as="li" isToday>
                    <Text>{currentWeatherInfo.dt}</Text>
                    <Text weight="bold" size="6rem">
                        {currentWeatherInfo.temp}
                    </Text>
                    <Stack gap="0.5">
                        <Stack gap="0.5" justify="center">
                            <Text size="1rem">Feels Like:</Text>
                            <Text size="1rem" weight={'bold'}>
                                {currentWeatherInfo.feelsLike}
                            </Text>
                            <Text size="1rem">Wind Speed:</Text>
                            <Text size="1rem" weight={'bold'}>
                                {currentWeatherInfo.windSpeed}
                            </Text>
                        </Stack>

                        <Stack gap="0.5" justify="center">
                            <Text size="1rem">Pressure:</Text>
                            <Text size="1rem" weight={'bold'}>
                                {currentWeatherInfo.pressure}
                            </Text>
                            <Text size="1rem">Sunrise:</Text>
                            <Text size="1rem" weight={'bold'}>
                                {currentWeatherInfo.sunrise}
                            </Text>
                        </Stack>

                        <Stack gap="0.5" justify="center">
                            <Text size="1rem">Humidity:</Text>
                            <Text size="1rem" weight={'bold'}>
                                {currentWeatherInfo.humidity}
                            </Text>

                            <Text size="1rem">Sunset:</Text>
                            <Text size="1rem" weight={'bold'}>
                                {currentWeatherInfo.sunset}
                            </Text>
                        </Stack>
                    </Stack>
                </CardBox>
                {currentWeatherInfo?.forecasts?.map(({ dt, temp }) => (
                    <CardBox as="li" key={dt}>
                        <Text>{dt}</Text>
                        <Text weight="bold" size="4rem">
                            {temp}
                        </Text>
                        <Text weight="bold">{temp}</Text>
                    </CardBox>
                ))}
            </Stack>
        </Stack>
    )
}

export default ForecastDesktop
