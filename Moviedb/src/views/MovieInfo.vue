<template>
  <!-- <div class="page"> -->
  <div v-if="movie[0]" class="container mt-5 page">
    <div class="row">
      <div class="col order-2 order-sm-1">
        <div class="movie-info">
          <h2 class="fw-semibold my-2 text-white">{{ movie[0].movieTitle }}</h2>
          <div>
            <div class="mt-4 border text-center w-25 py-2 rounded">
              <i class="fa-solid fa-star"></i>
              <span class="rating fw-bold ms-1">{{
                movie[0].vote_average
              }}</span>
            </div>
            <div class="rating mb-2 fw-semibold">
              Vote count: {{ movie[0].vote_count }}
            </div>
          </div>
          <p class="">{{ movie[0].overview }}</p>
          <h5 class="title">categories</h5>
          <div class="categories d-flex gap-3 my-4 fw-400 mt-3">
            <div
              v-for="category in movie[0].genres"
              :key="category.id"
              class="border px-3 text-light py-2 bg-secondary rounded-5"
            >
              {{ category.name }}
            </div>
          </div>
          <div>
            <!-- i feel the page is empty i added face description -_- normaly api should return big description of the movie -->
            <h4>Description</h4>
            <p class="">{{ movie[0].overview }} {{ movie[0].overview }}</p>
            <p class="">{{ movie[0].overview }}</p>
            <p class="">{{ movie[0].overview }}</p>
          </div>
          <h6 v-if="movie[0].homepage">
            for more information:
            <a
              class="text-light fw-semibold"
              :href="movie[0].homepage"
              target="_blank"
              >Cick here</a
            >
          </h6>
        </div>
      </div>
      <div class="col order-1 order-sm-2">
        <div class="imgContainer">
          <img
            :src="movie[0].imgUrl"
            class="img-thumbnail"
            alt="Movie picture"
          />
          <h5 class="mt-2 text-light">{{ movie[0].release_date }}</h5>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="d-flex flex-column justify-content-center">
    <h1 class="text-center m-5 text-white">Movie not found</h1>
    <img src="../assets/Monster404.svg" class="errimg" alt="404 picture" />
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movie: [],
    };
  },
  async created() {
    // call api to get the details of the movie
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "?api_key=" + process.env.VUE_APP_API_KEY
      )
      .then((response) => {
        this.movie.push({
          imgUrl:
            "https://image.tmdb.org/t/p/original/" + response.data.poster_path,
          movieTitle: response.data.original_title,
          vote_average: response.data.vote_average,
          vote_count: response.data.vote_count,
          overview: response.data.overview,
          release_date: response.data.release_date,
          genres: response.data.genres,
          homepage: response.data.homepage,
        });
      })
      .catch((res) => {
        console.log(res);
      });
  },
};

</script>
<style lang="scss" scoped>
.page {
  color: var(--light-silver);
  gap: 5;
  .title {
    color: #ffff00;
  }
  .movie-info {
    i {
      color: #ffff00;
      font-size: 1rem;
    }
  }
  .imgContainer {
    min-width: 12rem;
    max-width: 28rem;
  }
}
.errimg {
  max-width: 24rem;
}
// .mycontainer {
//   padding: 2rem;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-flow: wrap row;
//   font-size: 14px;

//   color: var(--light-silver);
//   background: var(--vampire-black);
//   .imgContainer {
//     max-width: 24rem;
//     min-width: 14rem;
//     .movieImg {
//       width: 100px;
//       object-fit: contain;
//     }
//   }
// }
</style>
