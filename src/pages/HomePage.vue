<template>
  <div class="container">
    <h1>Hotel bookings</h1>
    <p class="p">
      New had happen unable uneasy. Drawings can followed improved out sociable
      not. Earnestly so do instantly pretended. See general few civilly amiable
      pleased account carried. Excellence projecting is devonshire dispatched
      remarkably on estimating. Side in so life past. Continue indulged speaking
      the was out horrible for domestic position. Seeing rather her you not
      esteem men settle genius excuse. Deal say over you age from. Comparison
      new ham melancholy son themselves.
    </p>
    <button class="button">
      <router-link class="link" to="/calendar/">See the calendar</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
};
</script>

<style scoped>
.p {
  margin: 0 auto;
  width: 60%;
  text-align: center;
  font-size: 1.25rem;
}

.button {
  width: 14rem;
  background-color: rgba(3, 39, 36, 0.329);
  border-radius: 4px;
  padding: 1.5rem 0;
  border: none;
  display: block;
  margin: 2rem auto;
}

.button:hover {
  background-color: rgba(66, 88, 87, 0.329);
}

.link {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
}
</style>
