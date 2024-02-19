<template>
  <button
    :style="buttonStyle"
    :onclick="handleClick"
    class="absolute-container"
  >
    <div :disabled="popupShown" class="text-container">
      {{ btnText }}
    </div>
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BookedSlot",

  data() {
    return {
      popupShown: false,
    };
  },
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    booking: {
      type: Object,
      required: true,
    },
    width: {
      type: Number,
      required: true,
      default: 5.5,
    },
    left: {
      type: Number,
      required: true,
      default: 0,
    },
    zIndex: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  computed: {
    buttonStyle() {
      return {
        left: `${this.left}vw`,
        width: `${this.width}vw`,
        backgroundColor: `${this.bgColor}`,
        zIndex: `${this.zIndex}`,
      };
    },
  },
  methods: {
    ...mapActions(["openPopup"]),
    handleClick() {
      this.openPopup(this.booking);
    },
  },
};
</script>

<style scoped>
.absolute-container {
  position: absolute;
  background-color: rgba(46, 114, 114, 0.637);
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  min-height: 3rem;
  border: 2px solid rgb(251, 255, 0);
  border-radius: 4px;
  box-sizing: border-box;
}
.text-container {
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  font-size: 0.75rem;
  background-color: transparent;
  color: white;
}
</style>
