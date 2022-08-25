import { render } from '@testing-library/react'

import { WeatherProvider } from 'shared/context/weather'

import Location from '../Location'

import '@testing-library/jest-dom'

describe('Location', () => {
    it('renders a snap', () => {
        const { container } = render(
            <WeatherProvider
                initial_city_info={'initial_city_info'}
                initial_list_of_cities_found={'initial_list_of_cities_found'}
            >
                <Location />
            </WeatherProvider>
        )

        expect(container).toMatchSnapshot()
    })
})
