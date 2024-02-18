<template>
  <div class="buttons-container">
    <primary-button :onclick="btnPrevClickHandler" btnText="<" />
    <primary-button :onclick="btnNextClickHandler" btnText=">" />
    <primary-button :onclick="btnTodayClickHandler" btnText="Today" />
  </div>
</template>

<script>
import PrimaryButton from "@/components/general/primary-button/PrimaryButton.vue";
import { mapActions } from "vuex";

export default {
  name: "NavigationButtons",
  components: { PrimaryButton },
  methods: {
    ...mapActions(["setNextWeek", "setPrevWeek", "setCurrentWeek"]),
    btnNextClickHandler() {
      this.setNextWeek();
    },
    btnPrevClickHandler() {
      this.setPrevWeek();
    },
    btnTodayClickHandler() {
      this.setCurrentWeek();
    },
  },
};
</script>

<style scoped>
.buttons-container {
  display: flex;
  column-gap: 2rem;
}
</style>
