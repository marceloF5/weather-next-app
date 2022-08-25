import '@testing-library/jest-dom'

import { convertTimeToDateOfWeek, convertTimeToHour } from './index'

describe('Testing CovertTime to funtions', () => {
    it('should convert time to date of week', () => {
        const y = convertTimeToDateOfWeek(1661086937)

        expect(y).toStrictEqual('Sun')
    })

    it('should convert time to date hour', () => {
        const x = convertTimeToHour(1661086937)

        expect(x).toStrictEqual('02:02 PM')
    })
})
