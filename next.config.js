/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        OPEN_WEATHER_API_URL_COORD: process.env.OPEN_WEATHER_API_URL_COORD,
        OPEN_WEATHER_API_URL_CITY: process.env.OPEN_WEATHER_API_URL_CITY,
        OPEN_WEATHER_TOKEN: process.env.OPEN_WEATHER_TOKEN,
    },
};

module.exports = nextConfig;
