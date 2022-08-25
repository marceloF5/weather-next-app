import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

import { Container } from 'components/base'
import { WeatherProvider } from 'shared/context/weather'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import {
    initial_city_info_mock,
    initial_list_of_cities_found_mock
} from './page-mock'

type CustomRenderProps = {
    initial_city_info?: string
    initial_list_of_cities_found?: string
} & Omit<RenderOptions, 'queries'>

const customRender = (
    ui: ReactElement,
    {
        initial_city_info = JSON.stringify(initial_city_info_mock),
        initial_list_of_cities_found = JSON.stringify(
            initial_list_of_cities_found_mock
        ),
        ...renderOptions
    }: CustomRenderProps = {}
) =>
    render(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <WeatherProvider
                initial_city_info={initial_city_info}
                initial_list_of_cities_found={initial_list_of_cities_found}
            >
                <Container>{ui}</Container>
            </WeatherProvider>
        </ThemeProvider>,
        renderOptions
    )

export * from '@testing-library/react'
export { customRender }
