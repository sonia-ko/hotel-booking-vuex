<template>
  <div class="container">
    <h1>Our Calendar</h1>
    <navigation-buttons />
    <calendar-container />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavigationButtons from "@/components/booking/NavigationButtons.vue";
import CalendarContainer from "@/components/booking/CalendarContainer.vue";

export default {
  name: "CalendarPage",
  components: { CalendarContainer, NavigationButtons },
  methods: {
    ...mapActions(["fetchRooms", "fetchCurrentWeekBookings"]),
  },
  // once the page loads, the room names and the booking for the current week are fetched
  created() {
    this.fetchRooms();
    this.fetchCurrentWeekBookings();
  },
};
</script>
