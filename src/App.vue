<template>
  <div class="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
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
    // background: var(--vampire-black);
  }

  body {
    font-family: "Poppins", sans-serif !important;
  }

  .app {
    background-color: var(--davys-grey);
    display: flex;

    main {
      flex: 1 1 0;
      padding: 5rem;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
  }
</style>
