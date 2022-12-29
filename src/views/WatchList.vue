<template>
  <main class="d-flex flex-wrap justify-content-center">
    <MovieCard
      class="m-4"
      v-for="(movie, index) in filtreWatchList"
      :key="movie[0].movieId"
      :imgUrl="movie[0].imgUrl"
      :movieTitle="movie[0].movieTitle"
      :rating="movie[0].ratingNote"
      :id="index"
      :AddWatchList="
        (added, id, img, title, note) => {
          addToWatchList(added, id, img, title, note);
        }
      "
    />
  </main>
</template>

<script>
import MovieCard from "@/components/MovieCard/MovieCard.vue";
export default {
  data() {
    return {
      searchFor: "",
      movies: {},
    };
  },
  computed: {
    filtreWatchList() {
      let filtredMovie = Object.values(this.movies).filter((movie) => {
        return !this.searchFor
          ? movie
          : movie[0].movieTitle
              .toLowerCase()
              .includes(this.searchFor.toLowerCase());
      });
      return filtredMovie;
    },
  },
  watch: {
    $route() {
      this.searchFor = this.$route.query.search;
    },
  },
  methods: {
    addToWatchList(added, movieId, imgUrl, movieTitle, ratingNote) {
      let arrayString = localStorage.getItem("WatchList") || {};
      if (added) {
        // add to watch list
        let myArray = JSON.parse(arrayString);
        myArray[movieId] = [];
        myArray[movieId].push({ movieId, imgUrl, movieTitle, ratingNote });
        localStorage.setItem("WatchList", JSON.stringify(myArray));
      } else {
        // deletefrom watch list
        let myArray = JSON.parse(arrayString);
        delete myArray[movieId];
        localStorage.setItem("WatchList", JSON.stringify(myArray));
      }
    },
  },
  components: {
    MovieCard,
  },
  created() {
    let arrayString = localStorage.getItem("WatchList") || {};
    this.movies = JSON.parse(arrayString);
  },
};
</script>

<style lang="scss" scoped>
main {
  background: var(--vampire-black);
}
</style>
