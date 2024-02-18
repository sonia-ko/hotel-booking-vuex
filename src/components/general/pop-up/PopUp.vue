<template>
  <div class="popup-container">
    <div class="popup">
      <button :onclick="btnCloseClickHandler" class="close-icon"></button>
      <div>
        <h2>{{ popupData.name }}</h2>
        <ul class="booking-list">
          <li>Phone: {{ popupData.phone }}</li>
          <li>Email: {{ popupData.email }}</li>
          <li>Start date: {{ popupData.start }}</li>
          <li>End date: {{ popupData.end }}</li>
          <li>Type of apartments: {{ popupData.typeOfApartments }}</li>
          <li>
            Number of quests:
            <ul>
              <li>Adults: {{ popupData.guestInfo.adults }}</li>
              <li>Children: {{ popupData.guestInfo.children }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PopUp",
  computed: {
    ...mapGetters(["popupData"]),
  },
  methods: {
    ...mapActions(["closePopUp"]),
    btnCloseClickHandler() {
      this.closePopUp();
    },
  },
};
</script>

<style scoped>
.popup-container {
  position: absolute;
  background-color: rgba(233, 221, 221, 0.932);
  z-index: 60;
  box-sizing: border-box;
  width: 35rem;
  padding: 2rem 3rem 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  border: 2px soid black;
  box-sizing: border-box;
}

.popup {
  display: grid;
  row-gap: 1.5rem;
}

.close-icon {
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  justify-self: end;
}

.close-icon::before,
.close-icon::after {
  content: "";
  position: absolute;
  top: 0;
  left: 11px;
  width: 2px;
  height: 24px;
  background-color: #000; /* You can change the color */
}

.close-icon::before {
  transform: rotate(45deg);
}

.close-icon::after {
  transform: rotate(-45deg);
}

.booking-list {
  margin: 2rem 0 0 0;
  padding-left: 1rem;
  display: grid;
  row-gap: 1.5rem;
}
</style>
