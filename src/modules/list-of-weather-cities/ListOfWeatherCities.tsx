import { Stack } from 'components/base'
import { CardBox, Text } from 'components/ui'
import { useWeather } from 'shared/context/weather'

const ListOfWeatherCities = () => {
    const {
        listOfCities,
        handleCurrentWeatherByList,
        handleRemoveCityFromList
    } = useWeather()

    const newListOfCities = listOfCities?.map((city) => {
        return {
            ...city,
            concat: `${city?.city}${city?.state ? `, ${city.state} ` : ''}${
                city?.country ? ` (${city.country})` : ''
            }`
        }
    })

    if (!listOfCities?.length) {
        return (
            <Stack justify="center" direction="vertical" gap="2">
                <Text>
                    There is no list of cities. Search and chose one to add in
                    the list.
                </Text>
            </Stack>
        )
    }

    return (
        <Stack direction="vertical" gap="2">
            <Text>Other Cities</Text>
            <Stack as="ul" gap="2">
                {newListOfCities?.map((city) => (
                    <CardBox
                        subBox
                        as="li"
                        hasCursor
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
                            hasCursor
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
