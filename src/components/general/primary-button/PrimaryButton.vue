<template>
  <button @click="$emit('handleCLick')" class="btn-container">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    btnText: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleClick() {
      this.onClick();
    },
  },
};
</script>

<style scoped>
.btn-container {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: none;
  background-color: #097770a4;
  color: #e0cdbe;
  display: block;
  width: auto;
  border-radius: 4px;
}

.btn-container:hover {
  background-color: #0e9e95;
  cursor: pointer;
}
</style>
