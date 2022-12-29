<template>
  <main class="d-flex flex-wrap justify-content-center ">
    <MovieCard
        class="m-4"
        v-for="(movie, index) in movies"
        :key="index"
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
import MovieCard from '@/components/MovieCard/MovieCard.vue';
export default {
  data() {
    return {
        movies: {}
    };
  },
  methods: {
    addToWatchList(added, movieId, imgUrl, movieTitle, ratingNote) {
      let arrayString = localStorage.getItem("WatchList") || {};
      if (added) {
        // add to watch list
        let myArray = JSON.parse(arrayString);
        myArray[movieId] = [];
        myArray[movieId].push({ imgUrl, movieTitle, ratingNote });
        console.log(myArray);
        localStorage.setItem("WatchList", JSON.stringify(myArray));
      } else {
        // deletefrom watch list
        let myArray = JSON.parse(arrayString);
        delete myArray[movieId];
        console.log(myArray);
        localStorage.setItem("WatchList", JSON.stringify(myArray));
      }
    },
  },
  components:{
    MovieCard,
  },
  created(){
      let arrayString = localStorage.getItem("WatchList") || {};
      this.movies = JSON.parse(arrayString);
    }
};
</script>

<style lang="scss" scoped>
main {
  background: var(--vampire-black);
}
</style>
