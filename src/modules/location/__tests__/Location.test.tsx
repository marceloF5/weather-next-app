import '@testing-library/jest-dom'

import { customRender } from 'shared/utils/test-utils'

import Location from '../Location'

describe('<Location />', () => {
    it('render a snapshot of the component', () => {
        const { container } = customRender(<Location />)

        expect(container).toMatchSnapshot()
    })
})
