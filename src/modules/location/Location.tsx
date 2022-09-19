import { useEffect, useRef, useState } from 'react'

import { Stack } from 'components/base'
import { Field, ListBox, ListItem, Text } from 'components/ui'
import { useWeather } from 'shared/context/weather'
import { TCityInfoMapped } from 'shared/types'

const Location = () => {
    const {
        listOfCitiesFound,
        handleListOfCities,
        handleCurrentWeatherByCoordinates,
        resetListOfCitiesFound
    } = useWeather()
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const isResultListOpen = !!(listOfCitiesFound.length > 1)
    const searchByCityRef = useRef<HTMLInputElement>(null)
    const listOfCitiesFoundWithRef = useRef<HTMLLIElement[]>([])
    searchByCityRef.current?.focus()

    useEffect(() => {
        listOfCitiesFoundWithRef.current =
            listOfCitiesFoundWithRef.current.slice(0, listOfCitiesFound.length)
    }, [listOfCitiesFound.length])

    const handleKeyDown = (index: number) => {
        if (listOfCitiesFoundWithRef.current.length > 1) {
            const nextElement = listOfCitiesFoundWithRef.current[index]
                .nextElementSibling as HTMLLIElement
            const hasNextElement = !!nextElement

            hasNextElement
                ? nextElement.focus()
                : listOfCitiesFoundWithRef.current[0].focus()
        }
    }

    const handleFocusToInput = () => searchByCityRef.current?.focus()

    const handleFocusToList = () =>
        listOfCitiesFoundWithRef.current.length
            ? listOfCitiesFoundWithRef.current[0].focus()
            : setErrorMsg('Please, search by city, state or country')

    const handleResetListOfCities = () => {
        resetListOfCitiesFound()
        if (searchByCityRef.current) {
            searchByCityRef.current.value = ''
        }
    }

    const handleSelectCity = (cityinfo: TCityInfoMapped) => {
        handleCurrentWeatherByCoordinates(cityinfo)

        if (searchByCityRef.current) {
            searchByCityRef.current.value = ''
        }
    }

    const handleKeyUp = (index: number) => {
        if (listOfCitiesFoundWithRef.current.length > 1) {
            const previousElement = listOfCitiesFoundWithRef.current[index]
                .previousElementSibling as HTMLLIElement
            const hasPreviousElement = !!previousElement

            hasPreviousElement
                ? previousElement.focus()
                : listOfCitiesFoundWithRef.current[
                      listOfCitiesFoundWithRef.current.length - 1
                  ].focus()
        }
    }

    return (
        <Stack align="center" gap="2" position="relative">
            <Stack gap="1" direction="vertical">
                <Field
                    type="text"
                    name="searchByCity"
                    placeholder="search city..."
                    onChange={(ev) => {
                        setErrorMsg(null)
                        handleListOfCities(ev.target.value)
                    }}
                    onKeyDown={(ev) => {
                        if (ev.code === 'Enter') handleFocusToList()
                        if (ev.code === 'Escape') handleResetListOfCities()
                        if (ev.code === 'ArrowDown') handleFocusToList()
                    }}
                    ref={searchByCityRef}
                    tabIndex={0}
                    autoComplete="off"
                />
                {!!errorMsg && (
                    <Text size="1.5rem" weight="bold" hasError>
                        {errorMsg}
                    </Text>
                )}
            </Stack>

            <ListBox isOpen={isResultListOpen}>
                {listOfCitiesFound.map((cityinfo, i) => (
                    <ListItem
                        ref={(el) => {
                            el && (listOfCitiesFoundWithRef.current[i] = el)
                        }}
                        tabIndex={0}
                        key={cityinfo.latitude + cityinfo.longitude}
                        onKeyDown={(ev) => {
                            if (ev.code === 'Enter') handleSelectCity(cityinfo)
                            if (ev.code === 'Escape') handleFocusToInput()
                            if (ev.code === 'ArrowDown') handleKeyDown(i)
                            if (ev.code === 'ArrowUp') handleKeyUp(i)
                        }}
                        onClick={() => handleSelectCity(cityinfo)}
                    >
                        <p>
                            {cityinfo.city}
                            {cityinfo.state ? ', ' + cityinfo.state : ''}
                            {cityinfo.country ? ', ' + cityinfo.country : ''}
                        </p>
                    </ListItem>
                ))}
            </ListBox>
        </Stack>
    )
}

export default Location
