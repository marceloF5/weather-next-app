import { Layer } from 'react-layers-manager'

import { Stack } from 'components/base'
import { Text, Field } from 'components/ui'
import { useWeather } from 'shared/context/weather'

const Location = () => {
    const {
        listOfCitiesFound,
        handleListOfCities,
        handleCurrentWeatherByCoordinates
    } = useWeather()

    return (
        <Stack align="center" gap="2">
            <Field
                type="text"
                name="searchByCity"
                placeholder="search city..."
                onChange={(e) => handleListOfCities(e.target.value)}
            />
            <ul style={{ color: '#fff' }}>
                {listOfCitiesFound?.map((cityinfo) => (
                    <li key={cityinfo.latitude + cityinfo.longitude}>
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
                    </li>
                ))}
            </ul>
        </Stack>
    )
}

export default Location
