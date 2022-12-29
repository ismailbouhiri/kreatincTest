<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(movie, index) in movies"
        :class="index == 0 && 'active'"
        :key="index"
        class="carousel-item"
      >
        <div class="Owncard">
          <img :src="movie.imgUrl" class="cardimg" alt="" />
          <div class="infos">
            <h5>{{ movie.movieTitle }}</h5>
            <div class="rate">
              <i class="fa-solid fa-star"></i>
              <span class="rating">{{ movie.ratingNote }}</span>
            </div>
            <p class="mt-2">{{ movie.overview }}</p>
            <div class="d-flex mt-2">
              <ButtonCustom
                @click="
                  () =>{

                    this.added = !this.added;
                    AddWatchList(
                      this.added,
                      movie.movieId,
                      movie.imgUrl,
                      movie.movieTitle,
                      movie.ratingNote
                    )
                  }
                "
                >Add WatchList</ButtonCustom
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import ButtonCustom from "@/components/ButtonCustom/ButtonCustom.vue";
import axios from "axios";

export default {
  props: {
    AddWatchList: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      added :false,
      movies: [],
    };
  },
  components: {
    ButtonCustom,
  },
  methods: {
    async getData() {
      await axios
        .get(
          "http://api.themoviedb.org/3/movie/top_rated?api_key=c3995fba79fbed18d0cfdab2ef0845ff"
        )
        .then((response) => {
          for (let i = 0; i < response.data.results.length; i++) {
            this.movies.push({
              imgUrl:
                "https://image.tmdb.org/t/p/original/" +
                response.data.results[i].poster_path,
              movieTitle: response.data.results[i].title,
              ratingNote: response.data.results[i].vote_average,
              movieId: response.data.results[i].id,
              overview: response.data.results[i].overview,
            });
          }
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.Owncard {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  position: relative;

  .infos {
    width: 400px;
    display: none;
    color: var(--light-silver);
    background: rgba(8, 5, 6, 0.5);
    position: absolute;
    bottom: 1px;
    padding: 1rem 0.5rem;

    h5 {
      font-weight: 600;
      color: white;
    }
    .rate {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--fire-brick);
      border-radius: 20px;
      width: 60px;
      span {
        font-size: 18px;
        font-weight: 600;
        margin-left: 1px;
      }
      i {
        color: yellow;
        font-size: 1rem;
      }
    }
  }

  .cardimg {
    border-radius: 5px;
    width: 100%;
    height: 600px;
    object-fit: contain;
    cursor: pointer;
  }

  &:hover {
    .infos {
      display: block;
    }
  }
}

button {
  &:hover > span {
    background-color: var(--fire-brick);
    transition: 0.2s ease-out;
  }
  span {
    width: 80px;
    border-radius: 20px;
    background-color: var(--blood-organ);
  }
}
</style>
