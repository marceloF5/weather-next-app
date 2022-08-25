import { Stack } from 'components/base'
import { Field, ListBox, ListItem } from 'components/ui'
import { useWeather } from 'shared/context/weather'

const Location = () => {
    const {
        listOfCitiesFound,
        handleListOfCities,
        handleCurrentWeatherByCoordinates
    } = useWeather()

    return (
        <Stack align="center" gap="2" position="relative">
            <Field
                type="text"
                name="searchByCity"
                placeholder="search city..."
                onChange={(e) => handleListOfCities(e.target.value)}
            />

            <ListBox isOpen={!!listOfCitiesFound?.length}>
                {listOfCitiesFound?.map((cityinfo) => (
                    <ListItem key={cityinfo.latitude + cityinfo.longitude}>
                        <div
                            style={{
                                display: 'flex',
                                marginBottom: '10px',
                                cursor: 'pointer'
                            }}
                            onClick={() =>
                                handleCurrentWeatherByCoordinates(cityinfo)
                            }
                        >
                            <p>{cityinfo.state},</p>
                            <p>{cityinfo.city}</p>
                        </div>
                    </ListItem>
                ))}
            </ListBox>
        </Stack>
    )
}

export default Location
