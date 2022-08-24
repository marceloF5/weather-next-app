function convertTimeToDateOfWeek(dayWeek: number) {
    return new Date(dayWeek * 1000).toLocaleDateString('en-US', {
        weekday: 'short'
    })
}

function convertTimeToHour(time: number) {
    return new Date(time * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    })
}

export { convertTimeToDateOfWeek, convertTimeToHour }
