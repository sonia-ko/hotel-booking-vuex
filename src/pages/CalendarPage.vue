<template>
  <div class="container">
    <h1>Our Calendar</h1>
    <navigation-buttons />
    <booking-calendar />
  </div>
</template>

<script>
import NavigationButtons from "@/components/booking/NavigationButtons.vue";
import BookingCalendar from "@/components/booking/BookingCalendar.vue";
import { mapActions } from "vuex";

export default {
  name: "CalendarPage",
  components: { BookingCalendar, NavigationButtons },
  created() {
    this.fetchRooms();
    this.fetchCurrentWeekBookings();
  },

  methods: {
    ...mapActions(["fetchRooms", "fetchCurrentWeekBookings"]),
  },
};
</script>
