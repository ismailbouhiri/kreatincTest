<template>
  <main>
    <div v-if="searchFor" class="m-5">
      <h3 >Search results for: {{ searchFor }}</h3>
      <h5 v-if="!searchResult">No results founded</h5>
      <div class="d-flex justify-content-center flex-wrap">
        <MovieCard
            class="m-4"
            v-for="(movie, index) in searchResult"
            :key="index"
            :imgUrl="movie.imgUrl"
            :movieTitle="movie.movieTitle"
            :rating="movie.ratingNote"
            :id="movie.movieId"
            :AddWatchList="
              (added, id, img, title, note) => {
                addToWatchList(added, id, img, title, note);
              }
            "
        />
      </div>

    </div>
    <div v-if="!searchFor">
      <h4 class="fw-semibold">Best Rating</h4>
      <div class="mt-4">
        <BestRating
          :AddWatchList="
            (added, id, img, title, note) => {
              addToWatchList(added, id, img, title, note);
            }
          "
        />
      </div>
      <h4 class="fw-semibold mt-5">Most Popular</h4>
      <div class="gap-5 mt-4 d-flex flex-wrap justify-content-center">
        <MovieCard
          v-for="(movie, index) in movies[currentPage]"
          :key="index"
          :imgUrl="movie.imgUrl"
          :movieTitle="movie.movieTitle"
          :rating="movie.ratingNote"
          :id="movie.movieId"
          :AddWatchList="
            (added, id, img, title, note) => {
              addToWatchList(added, id, img, title, note);
            }
          "
        />
      </div>
      <div class="pagination-container mt-5">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click="prevPage" aria-label="Previous">
              <i class="fa-solid fa-angles-left"></i>
            </a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              @click="goTo"
              :class="currentPage < 99 && 'activepage'"
              >{{ currentPage < 99 ? currentPage : 1 }}
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="goTo">{{
              currentPage < 99 ? currentPage + 1 : 2
            }}</a>
          </li>
          <li class="page-item disabled">
            <a class="page-link" @click="goTo">...</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              @click="goTo"
              :class="currentPage === 99 && 'activepage'"
              >99</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              @click="goTo"
              :class="currentPage === 100 && 'activepage'"
              >100</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" @click="nextPage" aria-label="Next">
              <i class="fa-solid fa-angles-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- We can use bootstrap vue but I already custom my own -_- hh mistake-->
    <!-- <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination> -->
  </main>
</template>

<script>
import BestRating from "@/components/BestRating/BestRating.vue";
import MovieCard from "@/components/MovieCard/MovieCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      currentPage: 1,
      movies: {},
      watchList: {},
      searchFor: "",
      searchResult: [],
    };
  },
  components: {
    BestRating,
    MovieCard,
  },
  created() {
    this.getData();
  },
  watch: {
    currentPage() {
      this.getData();
    },
    $route() {
        this.searchFor = this.$route.query.search;
        this.SearchforMovie();
    }
  },
  methods: {
    async SearchforMovie() {
      await axios
        .get(
          'https://api.themoviedb.org/3/search/movie?api_key=c3995fba79fbed18d0cfdab2ef0845ff&query=' + this.searchFor
        )
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.data.results.length ; i++) {
            if ( response.data.results[i].poster_path)
            {
              this.searchResult.push({
                imgUrl:
                  "https://image.tmdb.org/t/p/original/" +
                  response.data.results[i].poster_path,
                movieTitle: response.data.results[i].title,
                ratingNote: response.data.results[i].vote_average,
                movieId: response.data.results[i].id,
              });
            }
          }
        }).catch((err) => {
          console.log(err);
        });
    },
    addToWatchList(added, movieId, imgUrl, movieTitle, ratingNote) {
      let arrayString = localStorage.getItem("WatchList") || {};
      if (added) {
        // add to watch list
        let myArray = JSON.parse(arrayString);
        myArray[movieId] = [];
        myArray[movieId].push({ imgUrl, movieTitle, ratingNote });
        localStorage.setItem("WatchList", JSON.stringify(myArray));
      } else {
        // deletefrom watch list
        let myArray = JSON.parse(arrayString);
        delete myArray[movieId];
        localStorage.setItem("WatchList", JSON.stringify(myArray));
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage <= 99) {
        this.currentPage += 1;
      }
    },
    goTo(e) {
      this.currentPage = parseInt(e.target.innerText);
    },
    async getData() {
      if (!this.movies[this.currentPage]) {
        this.movies[this.currentPage] = [];
        await axios
          .get(
            "http://api.themoviedb.org/3/movie/popular?api_key=c3995fba79fbed18d0cfdab2ef0845ff&page=" +
              this.currentPage
          )
          .then((response) => {
            for (let i = 0; i < 18; i++) {
              this.movies[this.currentPage].push({
                imgUrl:
                  "https://image.tmdb.org/t/p/original/" +
                  response.data.results[i].poster_path,
                movieTitle: response.data.results[i].title,
                ratingNote: response.data.results[i].vote_average,
                movieId: response.data.results[i].id,
                // overview: response.data.results[i].overview,
              });
            }
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  border-right: 0.1px solid var(--light-silver);

  background: var(--vampire-black);
  color: var(--light-silver);
  padding: 2rem;
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


  .pagination {
    background: rgba(137, 144, 164, 0.2);
    margin-bottom: 0;
    padding: 0.2rem 1rem;
    border-radius: 5px;
    .page-item {
      .page-link {
        border: none;
        border-radius: 5px;
        background: #37363e;
        color: var(--light-silver);
        margin: 0.2rem;

        &:hover {
          background: var(--fire-brick);
        }
      }
    }
  }
}
.activepage {
  background: var(--fire-brick) !important;
}
</style>
