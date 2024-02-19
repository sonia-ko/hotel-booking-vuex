<template>
  <div>
    <bookings-row
      :bookings="filteredBookings(room)"
      v-for="room in roomNames"
      :key="room.name"
      :room="room"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BookingsRow from "./BookingsRow.vue";

export default {
  name: "BookingsContainer",

  components: { BookingsRow },
  computed: {
    ...mapGetters(["roomNames", "currentWeekBookings", "daysOfWeek"]),
  },
  methods: {
    filteredBookings(room) {
      const filtered = this.currentWeekBookings.filter(
        (booking) => booking.roomDetails.name === room
      );

      return filtered;
    },
  },
};
</script>
