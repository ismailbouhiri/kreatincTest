<template>
  <div class="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap");
  
  :root {
    --vampire-black: #080405;
    --fire-brick: rgb(178, 34, 34);
    --blood-organ: #5a0b08;
    --light-silver: #d5d7dc;
    --cool-grey: #8990a4;
    --davys-grey: #55585b;
    --sidebar-width: 300px;
  }

  *, ::before, ::after
  {
    background: none;
    border: none;
  }

  body {
    font-family: "Poppins", sans-serif !important;
  }

  .app {
    background-color: var(--davys-grey);
  }
</style>
