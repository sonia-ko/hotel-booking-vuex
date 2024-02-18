<template>
  <div class="calendar">
    <booking-header />
    <bookings-container />
  </div>
  <pop-up v-if="popUpOpened" />
</template>

<script>
import BookingHeader from "./BookingHeader.vue";
import BookingsContainer from "./BookingsContainer.vue";
import PopUp from "../general/pop-up/PopUp.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookingCalendar",
  components: { BookingHeader, BookingsContainer, PopUp },
  computed: {
    ...mapGetters(["popUpOpened"]),
  },
};
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 0;
}
</style>
