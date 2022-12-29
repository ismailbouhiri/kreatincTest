<template>
  <aside class="bg-dark">
    <div>
      <div class="mb-4 mt-2">
        <img src="../../assets/film.png" alt="Brand logo" />
      </div>
      <div class="menu-toggle-wrap">
        <button
          class="menu-toggle"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <span class="material-icons">
            <i class="fa-solid fa-angles-right"></i>
          </span>
        </button>
      </div>

      <div
        class="offcanvas offcanvas-start bg-dark SideMenu"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <div class="d-flex gap-2 align-items-center">
            <img src="../../assets/film.png" alt="Brand logo" />
            <h5 class="movieRating">Movies Rating</h5>
          </div>
          <button
            class="menu-toggle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span class="material-icons closeIcon">
              <i class="fa-solid fa-angles-left"></i>
            </span>
          </button>
        </div>
        <div class="offcanvas-body">
          <form
            @submit.prevent="searchBy"
            class="SearchBox border rounded-pill mb-4 d-flex px-2 align-items-center"
          >
            <i class="fa fa-search fs-6 ms-2" aria-hidden="true"></i>
            <input
              v-model="search"
              @click="hideIcon"
              class="align-self-end ps-2"
              type="text"
              placeholder="Search"
            />
        </form>
          <div class="menu">
            <router-link class="button" to="/watchlist">
              <div class="mynav-item" @click="ToggleWatchList">
                <span class="ps-3 material-icons">
                  <i class="fa-solid fa-eye"></i>
                </span>
                <span class="text">Watch list</span>
              </div>
            </router-link>
            <router-link class="button" to="/">
              <div class="mynav-item" @click="ToggleFiltre">
                <span class="ps-3 material-icons">
                  <i class="fa-solid fa-clapperboard"></i>
                </span>
                <span class="text">Movies</span>
              </div>
            </router-link>
            <transition>
              <div v-show="show_filtre" class="m-4 mt-0">
                <FiltreSection />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import FiltreSection from "@/components/FiltreSection/FiltreSection.vue";
export default {
  data() {
    return {
      show_filtre: true,
      search: ''
    };
  },
  components: {
    FiltreSection,
  },
  methods: {
    searchBy()
    {
      if (this.search)
        this.$router.push({ path: this.$route.path, query: { search: this.search }});
      else if (this.$route.query)
        this.$router.push({ path: this.$route.path});


      
    },
    ToggleFiltre() {
      this.show_filtre = !this.show_filtre;
    },
    ToggleWatchList() {
      this.show_filtre = false;
    },
  },
};
</script>

<style lang="scss" scoped>

aside {
  border-right: 2px solid gold;
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  padding: 1rem;

  background: var(--vampire-black);

  transition: 0.2s ease-out;
  @media (max-width: 768) {
    position: fixed;
    z-index: 99;
  }

  .SideMenu {
    width: 300px;
  }

  .movieRating {
    color: var(--light-silver);
    padding-top: 10px;
  }

  .menu-toggle-wrap {
    display: flex;
    flex-direction: column;

    align-items: flex-end;
    margin-bottom: 1rem;

    transition: 0.2s ease-out;
  }

  .menu-toggle {
    transition: 0.2s ease-out;

    .material-icons > i {
      transition: 0.2s ease-out;
      font-size: 1.3rem;
      color: var(--light-silver);
    }

    &:hover {
      .material-icons > i {
        color: var(--davys-grey);
        transform: translateX(1rem);
      }
      .closeIcon > i {
        transform: translateX(-1rem);
      }
    }
  }

  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      justify-content: center;
      flex-flow: wrap column;
      text-decoration: none;

      padding: 0.5 1rem;
      transition: 0.2s ease-out;
      .material-icons {
        & > i {
          width: 2rem;
        }
        font-size: 1.5rem;
        color: var(--light-silver);
        transition: 0.2s ease-out;
      }

      .text {
        margin-left: 10px;
        color: var(--light-silver);
      }

      &:hover > .mynav-item,
      &.router-link-exact-active > .mynav-item {
        background: var(--davys-grey);
        .material-icons > i {
          color: var(--fire-brick);
        }
      }
      &.router-link-exact-active > .mynav-item {
        border-right: 5px solid var(--fire-brick);
      }
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
.SearchBox {
  width: 100%;
  background-color: var(--vampire-black);
  color: var(--light-silver);
  padding: 5px;
  border-color: var(--light-silver);

  input {
    border: none;
    background-color: transparent;
    color: var(--light-silver);
    width: 150px;
  }

  input:hover,
  input:focus,
  input:active {
    border: none;
    outline: none;
  }
}
</style>
