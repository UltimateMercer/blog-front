<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/" class="">Home</router-link> |
      <router-link to="/CreatePost">Create Post</router-link> |
      <router-link to="/NewTag">New Tag</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "style/ultimate.min.css";

#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;*/
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
