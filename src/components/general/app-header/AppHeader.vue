<template>
  <header class="header">
    <div class="container container-inner">
      <div class="logo">HOTEL BOOKING</div>
      <nav class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/calendar/">Calendar</router-link></li>
          <li><router-link to="/contacts/">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  background-color: #1612125b;
  color: #fff;
}

.container-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav ul {
  list-style: none;
  display: flex;
}

.nav ul li {
  margin-right: 1rem;
}

.nav ul li:last-child {
  margin-right: 0;
}

.nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
