# Spring Financial Assignment

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Leaderboard

This is a vue app setup with Vite that uses apollo composable for communicating with the graphql backend. It displays a list of users and their points total. The app user can sort the users by points total or alphabetically by name. 

## Header Bar

### Create

The top left plus icon opens a sidebar where the user can add a user. Form validation for the create user screen is done with Vuelidate.

### Search

Search field will filter the user list displayed in whatever order is set. Only the name is searchable. The input has a clear button.

### Settings

The gear icon will open the settings panel in the side bar. The app has translations for english and french using il8n. Language can be set here. I got the translations for french from google translation so may not be perfect. 

The list is refreshed on points change, create user, delete user and sort change. By default the list is refetched every 3 seconds. The settings bar has a checkbox button that can toggle off the auto refetch. The user can also change the set number of seconds the refetch happens. The minimum amount is 1 second. 

## Table
Shows a list of the users and their scores. Plus/minus buttons will change the points total and reorder will happen from the refresh. 

X button on the right of the table item will open a dialog to confirm that you want to delete the user. 

## Setup
The front end has a file .env that you can set the url you are running the backend from. 