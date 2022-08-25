import { useEffect, useState } from 'react'

import { Stack } from 'components/base'
import { Field, ListBox, ListItem } from 'components/ui'
import { useWeather } from 'shared/context/weather'

const Location = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {
        listOfCitiesFound,
        handleListOfCities,
        handleCurrentWeatherByCoordinates
    } = useWeather()

    useEffect(() => {
        if (listOfCitiesFound?.length > 1) {
            setIsOpen(true)
        }
    }, [listOfCitiesFound])

    return (
        <Stack align="center" gap="2" position="relative">
            <Field
                type="text"
                name="searchByCity"
                placeholder="search city..."
                onChange={(e) => handleListOfCities(e.target.value)}
            />

            <ListBox isOpen={isOpen}>
                {listOfCitiesFound?.map((cityinfo) => (
                    <ListItem
                        key={cityinfo.latitude + cityinfo.longitude}
                        onClick={() => {
                            handleCurrentWeatherByCoordinates(cityinfo)
                            setIsOpen(false)
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                marginBottom: '10px',
                                cursor: 'pointer'
                            }}
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
