<template>
  <div class="row-container">
    <div class="room-name">{{ room }}</div>

    <div className="row">
      <div
        class="booking-slot"
        v-for="day in daysOfWeek"
        :key="day + room"
      ></div>

      <booked-slot
        :bgColor="i === 0 || i % 2 === 0 ? `#068f789c` : `#e0a0159c`"
        :booking="booking"
        :btnText="booking.name"
        :key="booking.id"
        :width="generateWidth(booking)"
        :left="generateLeftPosition(booking)"
        :zIndex="i === 0 || i % 2 === 0 ? 5 : 6"
        v-for="(booking, i) in bookings"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import BookedSlot from "./BookedSlot.vue";

export default {
  name: "BookingRow",
  props: {
    room: {
      type: String,
      required: true,
    },
    bookings: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: { BookedSlot },
  computed: {
    ...mapGetters(["currentWeekBookings", "daysOfWeek"]),
  },
  methods: {
    generateTimestamps(day) {
      const newDate = new Date(day);
      newDate.setHours(0, 0, 0, 0);
      return newDate;
    },

    generateWidth(booking) {
      const daysOfWeekDates = this.daysOfWeek.map((day) => new Date(day));
      const bookStartTimeStamp = this.generateTimestamps(booking.start);
      const bookEndTimeStamp = this.generateTimestamps(booking.end);

      let width = 0;

      daysOfWeekDates.forEach((day) => {
        if (day >= bookStartTimeStamp && day <= bookEndTimeStamp) {
          if (
            day.getTime() === bookStartTimeStamp.getTime() ||
            day.getTime() === bookEndTimeStamp.getTime()
          ) {
            width += 5.5;
          } else {
            width += 11;
          }
        }
      });

      return width;
    },
    generateLeftPosition(booking) {
      let left;

      const bookingStart = this.generateTimestamps(booking.start);
      const daysOfWeekDates = this.daysOfWeek.map((day) =>
        this.generateTimestamps(day)
      );

      const startIndex = daysOfWeekDates.findIndex(
        (day) => day.getTime() === bookingStart.getTime()
      );

      if (startIndex === -1) {
        return 0;
      } else {
        left = startIndex * 11 + 5.5;
        return left;
      }
    },
  },
};
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(7, 11vw);
  position: relative;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  border-bottom: 1px solid #ddd;
}

.color {
  color: #068f789c;
}

.room-name {
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
  width: 13vw;
  box-sizing: border-box;
  display: grid;
  align-content: center;
  padding-left: 0.5rem;
}

/* booking slot styles */

.room {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.booking-slot {
  flex: 1;
  border-right: 1px solid #ddd;
  position: relative;
  min-height: 4rem;
  box-sizing: border-box;
}
</style>
