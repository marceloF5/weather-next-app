import { Stack } from 'components/base'
import { CardBox, Text } from 'components/ui'
import { useWeather } from 'shared/context/weather'
import { css } from 'styled-components'

const ListOfWeatherCities = () => {
    const {
        listOfCities,
        handleCurrentWeatherByList,
        handleRemoveCityFromList
    } = useWeather()

    const newListOfCities = listOfCities.map((city) => {
        return {
            ...city,
            concat: `${city?.state}, ${city?.city} ${
                city?.country ? `(${city.country})` : ''
            }`
        }
    })

    return (
        <Stack direction="vertical" gap="2">
            <Text>Other Cities</Text>
            <Stack as="ul" gap="2">
                {newListOfCities?.map((city) => (
                    <CardBox
                        subBox
                        as="li"
                        css={css`
                            cursor: pointer;
                            display: 'flex';
                            align-items: 'center';
                        `}
                        key={city.id}
                        onClick={() => handleCurrentWeatherByList(city)}
                    >
                        <Text size="1.5rem">{city.concat}</Text>
                        <Text size="2.5rem" weight={'bold'}>
                            {city.temp}
                        </Text>
                        <Text
                            size="1rem"
                            weight={'bold'}
                            css={css`
                                cursor: pointer;
                            `}
                            onClick={() => handleRemoveCityFromList(city.id)}
                        >
                            DELETE
                        </Text>
                    </CardBox>
                ))}
            </Stack>
        </Stack>
    )
}

export default ListOfWeatherCities
