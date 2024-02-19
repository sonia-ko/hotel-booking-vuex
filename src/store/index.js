import { createStore } from "vuex";
import { getCurrentWeekBookings } from "../../api/bookingsService.js";
import { getBookingsForWeek } from "../../api/bookingsService.js";
import { getRoomNames } from "../../api/bookingsService.js";

export default createStore({
  state: {
    // unique rooms that will be shown in the booking calendar
    rooms: [],
    // the DB is quite large, so we get only the current week bookings from our fake server
    currentWeekBookings: [],
    // days of week that will be shown in the calendar
    daysOfWeek: [],
    today: new Date(),
    // the date according to which the week that the user sees will be configured
    baseDate: new Date(),
    // determines whether to show the popup
    popupOpened: false,
    // booking data object shown
    popupData: {},
  },
  mutations: {
    setBaseDate(state, date) {
      state.baseDate = date;
    },
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setCurrentWeekBookings(state, currentWeekBookings) {
      state.currentWeekBookings = currentWeekBookings;
    },
    setDaysOfWeek(state, days) {
      state.daysOfWeek = days;
    },
    setPopup(state, popUpOpened) {
      state.popupOpened = popUpOpened;
    },
    setPopUpData(state, booking) {
      state.popupData = booking;
    },
  },
  actions: {
    // gets the list of unique rooms
    async fetchRooms({ commit }) {
      try {
        const response = await getRoomNames();
        commit("setRooms", response);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    },
    //generate days of week depending on the baseDate
    generateDaysOfWeek({ commit }) {
      const baseDate = new Date(this.state.baseDate);
      const todayIndex = baseDate.getDay() === 0 ? 6 : baseDate.getDay() - 1;
      const daysOfWeek = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(baseDate);
        date.setDate(date.getDate() + i - todayIndex);
        const formattedDate = date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        daysOfWeek.push(formattedDate);
      }

      commit("setDaysOfWeek", daysOfWeek);
    },
    // this function executes once the calendar page is loaded to generate the table for the current week
    async fetchCurrentWeekBookings({ commit, dispatch }) {
      try {
        dispatch("generateDaysOfWeek");
        const bookings = await getCurrentWeekBookings();
        commit("setCurrentWeekBookings", bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    },
    // this function updates the bookings when the user clicks on 'next week' or 'previous week' buttons
    async updateBookings({ commit }) {
      try {
        const startDate = this.state.daysOfWeek[0];
        const endDate = this.state.daysOfWeek[6];
        const bookings = await getBookingsForWeek(startDate, endDate);
        commit("setCurrentWeekBookings", bookings);
      } catch (error) {
        console.error("Error fetching bookings for the week:", error);
      }
    },
    // set the week to next week and update the bookings
    async setNextWeek({ commit, state, dispatch }) {
      const baseDate = new Date(state.baseDate);
      baseDate.setDate(baseDate.getDate() + 7);
      commit("setBaseDate", baseDate);
      dispatch("generateDaysOfWeek");
      await dispatch("updateBookings");
    },
    // set the week to previous week and update the bookings
    async setPrevWeek({ commit, dispatch }) {
      try {
        const baseDate = new Date(this.state.baseDate);
        baseDate.setDate(baseDate.getDate() - 7);
        commit("setBaseDate", baseDate);
        dispatch("generateDaysOfWeek");
        await dispatch("updateBookings");
      } catch (error) {
        console.error("Error fetching bookings for the week:", error);
      }
    },
    // reset the calendar so that it shows the current week (when the user clicks on Today button)
    async setCurrentWeek({ commit, dispatch }) {
      try {
        commit("setBaseDate", new Date());
        await dispatch("generateDaysOfWeek");
        await dispatch("fetchCurrentWeekBookings");
      } catch (error) {
        console.error("Error fetching bookings for the week:", error);
      }
    },
    closePopUp({ commit }) {
      commit("setPopUpData", {});
      commit("setPopup", false);
    },
    openPopup({ commit }, booking) {
      commit("setPopUpData", booking);
      commit("setPopup", true);
    },
  },
  getters: {
    uniqueRoomNames(state) {
      const roomNamesSet = new Set();
      if (state.bookings) {
        state.bookings.forEach((booking) => {
          roomNamesSet.add(booking.roomDetails.name);
        });
      }
      return Array.from(roomNamesSet);
    },
    roomNames(state) {
      return state.rooms;
    },
    currentWeekBookings(state) {
      return state.currentWeekBookings;
    },
    daysOfWeek(state) {
      return state.daysOfWeek;
    },
    today(state) {
      return state.today;
    },
    popUpOpened(state) {
      return state.popupOpened;
    },
    popupData(state) {
      return state.popupData;
    },
  },
});
