<template>
  <div class="header">
    <div class="room-name">Rooms:</div>
    <div class="day" v-for="day in daysOfWeek" :key="day">
      {{ day }}
      <div class="today" v-if="isToday(day)">today</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BookingHeader",
  computed: {
    ...mapGetters(["daysOfWeek"]),
  },
  methods: {
    isToday(day) {
      const currentDate = new Date();
      const dateParts = day.split(", ")[1].split(" ");
      const month = dateParts[0];
      const dayOfMonth = parseInt(dateParts[1], 10);
      //prettier-ignore
      const months = [
              "Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ];
      const monthNumber = months.indexOf(month);

      return (
        currentDate.getDate() === dayOfMonth &&
        currentDate.getMonth() === monthNumber &&
        currentDate.getFullYear() === currentDate.getFullYear()
      );
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  min-height: 6rem;
  align-items: center;
  background-color: #ddd;
}

.day {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ddd;
  padding: 10px;
  background-color: #f3f3f3;
  box-sizing: border-box;
  width: 12.5%;
  width: 11vw;
  box-sizing: border-box;
}

.room {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.room-name {
  width: 12.5%;
  background-color: #f9f9f9;
  padding: 10px;
  border-right: 1px solid #ddd;
  width: 13vw;
  box-sizing: border-box;
}

.today {
  font-size: 0.7rem;
  background-color: rgba(35, 116, 116, 0.945);
  color: white;
  border-radius: 4px;
  width: 50%;
  margin: 0.25rem auto 0;
  padding: 0.25rem 0;
}
</style>
