# github-search-app

## Problem and Solution statement

This project provide a Front End Solution to search users and repositories from Github using the [github API](https://docs.github.com/en/rest/reference/). Application usage local storage to store the search results. This improves the application performance as well as user interaction. Results once searched will be cached in local storage as well as redux store and no request will be sent to server if same search is perfomed again even after browser refresh.

### Getting Started

Clone this repo to your local machine using

```shell
$ git clone
```

Install the dependecies using npm

```shell
$ npm install
```

Start the app

```shell
$ npm start
```

It Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### Deployment Guide

```shell
$ npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Repository Structure:

        src/
    ├── common
    ├── components
    │   ├── Button
    │   ├── Dropdown
    │   ├── InputField
    │   ├── RepoDetails
    │   └── UserDetails
    ├── config
    ├── containers
    │   ├── HomeContainer
    │   ├── RepoContainer
    │   ├── ResultContainer
    │   └── UserContainer
    ├── resources
    └── store
        ├── actions
        └── reducers

## Tech Stack

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/) and [redux-persist](https://github.com/rt2zz/redux-persist)
- [React Router](https://github.com/ReactTraining/react-router)
- Vanilla CSS

### TradeOff/Left Out

- Unit tests are not covered due to lack of time
- Browser responsiveness for mobile needs some work

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
