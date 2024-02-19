<template>
  <div class="calendar">
    <booking-header />
    <rows-container />
  </div>
  <pop-up v-if="popUpOpened" />
</template>

<script>
import BookingHeader from "./BookingHeader.vue";
import RowsContainer from "./RowsContainer.vue";
import PopUp from "../general/pop-up/PopUp.vue";
import { mapGetters } from "vuex";

export default {
  name: "CalendarContainer",
  components: { BookingHeader, RowsContainer, PopUp },
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
