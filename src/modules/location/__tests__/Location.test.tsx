import { render, screen } from '@testing-library/react'
import Location from '../Location'
import '@testing-library/jest-dom'
import { WeatherProvider } from 'shared/context/weather'

describe('Location', () => {
    it('renders a heading', () => {
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