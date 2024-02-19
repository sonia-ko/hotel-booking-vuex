# Hotel Booking

This is a Vue hotel booking calendar. It uses the following technologies:

- Vue.js to create the components and manage the UI.
- Vuex for state management to handle the reservations data and navigation state

## Demo

The demo can be checked [here](https://hotel-booking-vuex.netlify.app).

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project description

The calendar looks like:
![image](https://github.com/sonia-ko/hotel-booking-vuex/assets/57558085/79e2e039-2886-401c-8045-c6a9d149a29d)


- Each row in the table represents an apartment.
- Each column represents a day of the week (Mon-Sun).
- &quot;Forward&quot; button moves the calendar a week ahead.
- &quot;Back&quot; button moves the calendar a week ago.
- &quot;Today&quot; button returns the calendar to the current week.
- Reservations start from the middle of the start date and end in the middle of the end date.
![image](https://github.com/sonia-ko/hotel-booking-vuex/assets/57558085/98f8e49e-89a3-4c58-80c1-2a684c2d7029)

- If there are 2 reservations on the same day at the same time, it will be shown in the calendar like this:
![image](https://github.com/sonia-ko/hotel-booking-vuex/assets/57558085/a4f45651-a532-4721-917c-c7c039d3f48a)

- When the user clicks on the reservation, there is a small pop-up with reservation details:
![image](https://github.com/sonia-ko/hotel-booking-vuex/assets/57558085/821a463e-b1d0-42c7-9068-94b207026b18)

- By clicking on X button, the user closes the pop-up.

## Project structure

The project has the following structure:

- src folder
- api folder - there is a fake API on this project that allows to get the data from bookings.json file. As the database is quite large and it is not efficient to store all those bookings in our Vuex store, the API returns only the bookings for the selected week and the unique room names.

Inside the src folder we need the following folders:

- pages - folder with the pages.
- fonts - the fonts are stored in this folder.
- components - here are the general components (like buttons) and components related to the bookings page.
- store - VUEX store.
- styles - font settings and global.css file are used on the project.
- main.js - router settings can be found here.
- App.vue

## Fonts

There are 2 fonts used in the project:

- "oxygenlight";
- "arvobold";
