<template>
  <div class="container">
    <h1>Contacts Page</h1>
    <ul class="contacts">
      <li>Street 127 N 15th St</li>
      <li>Philadelphia,Pennsylvania</li>
      <li>19102</li>
      <li>(215) 564-2400</li>
      <li>United States</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactsPage.vue",
  components: {},
};
</script>

<style scoped>
.contacts {
  padding: 3rem;
  background-color: rgba(31, 20, 20, 0.37);
  color: white;
  width: 25rem;
  margin: 3rem 0 0;
  border-radius: 12px;
  font-size: 1.25rem;
}
</style>
