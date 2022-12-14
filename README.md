## What is this APP?

This application aims to offer the best experience for users in querying weather forecasts worldwide.

## Motivation

As there are already many weather forecasting apps on the web, this repository has a different purpose which is to test and apply different techniques and knowledge, engineering concepts, measure performance and design from a real business model. In short: a space for proof of concept.

## Stack

This App adopted the following stack: React, Nextjs, Styled-components and Reakit. For test is adoped Jest and React Testing Library.

## Features Implemented

- Get user's geo location;
- Show current weather, based on user's location (or default location);
- Forecast for the next 7 days;
- User is able to add and remove cities;
- The application will preserve the list that was made in the previous session using localstorage.

Despite the features implemented above, in this first release, special attention was purposely paid to architectural scenarios, for example the SSR and the division of packages (bundle) in the construction between desktop and mobile.

## General Improvements

- Success feedback messages, alerts or errors in the operations of the App;
- Usability to be able to click on cards through the keyboard;
- The development of a Design system with definitions of typography, spacing, usability, colors and reuse of components;
- Adding icons;
- App does not have the minimum acceptable coverage. Although there are all the setup for unit testing already done;

Any other improvement is always welcome.

## Getting Started

Before running, install [NODE LTS](https://nodejs.org/en/) version.

Clone this repo and run `yarn`(recommended) or `npm i --force`

Copy of .env.example file and rename copy to .env, then add your OpenWeatherMap API Key. You should subscribe on Open Weather Map in order to get API KEY. More details in this [link](https://openweathermap.org/api).

Run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.