<template>
  <header id="nav">
    <span class="logo">AquiVaElLogo</span>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/about">About 1</router-link></li>
      <li><router-link to="/about">About 2</router-link></li>
      <li><router-link to="/about">About 3</router-link></li>
      <li><router-link to="/about">About 4</router-link></li>
    </ul>
  </header>
</template>
<style lang="scss">
#nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background: #d0d0d03d;
}

#nav, .home, .carrusel{
  padding: 0px 100px !important;
}
.logo {
  float: left;
}
.menu {
  display: flex;
  list-style: none;
  li {
    margin: 15px 15px;
    text-decoration: none;
    a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: white;
      }
    }
  }
}
</style>
