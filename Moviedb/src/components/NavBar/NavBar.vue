<template>
  <nav class="navbar navbar-expand-lg  text-light mynav">
    <div class="container-fluid">
      <img src="../../assets/film.png" class="m-2" alt="Brand logo" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              >home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/watchlist"
              >Watch list
            </router-link>
          </li>
        </ul>
        <form
          @submit.prevent="searchBy"
          class="SearchBox border rounded-pill p-1 d-flex  align-items-center"
        >
          <i class="fa fa-search fs-6 ms-2" aria-hidden="true"></i>
          <input
            v-model="search"
            @click="hideIcon"
            class="align-self-end ps-2"
            type="text"
            placeholder="Search by title"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchBy() {
      if (this.search)
        this.$router.push({
          path: this.$route.path,
          query: { search: this.search },
        });
      else if (this.$route.query) this.$router.push({ path: this.$route.path });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-link{

  color: var(--light-silver);
  &:hover {
    color: white;
  }
}
.router-link-exact-active{
  color:var(--fire-brick) !important;
  border-bottom: 3px solid var(--fire-brick);
}
.SearchBox {
  margin-right: 20px;
  background-color: none;
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
.mynav{
  background-color: #caaa03;
  border-bottom: 2px solid white;;
}
</style>
