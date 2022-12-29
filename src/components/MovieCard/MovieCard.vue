<template>
  <div>
    <div class="card">
      <div class="rate">
        <i class="fa-solid fa-star"></i>
        <span class="rating">{{ rating }}</span>
      </div>
      <i
        class="fa-solid fa-square-plus bookmark"
        :class="added && 'active'"
        @click="() => {
          this.added = !this.added;
          AddWatchList(added, id, imgUrl, movieTitle,rating)
        }"
      ></i>
      <router-link class="link" :to="'/movie/'+ id">
          <img class="myimg" :src="imgUrl" alt="movie Img" />
          <div class="card-body">
              <h5 class="card-title fw-semibold">{{ movieTitle }}</h5>
          </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    movieTitle: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    id: {
      required: true,
    },
    AddWatchList: {
      type: Function,
      required: false,
    },
  },
  mounted(){
    let arrayString = localStorage.getItem("WatchList") || {};
    let myArray = JSON.parse(arrayString);
    if (myArray[this.id]) {
      this.added = true;
    }
  },
  data() {
    return {
      added: false
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 450px;
  .rate {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--fire-brick);
    border-radius: 20px;
    padding: 2px 7px;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 60px;
    span {
      font-size: 18px;
      font-weight: 600;
      margin-left: 1px;
    }
    i {
      color: hsl(60, 100%, 50%);
      font-size: 1rem;
    }
  }
  //   margin: auto;
  position: relative;
  box-shadow: 0px 0px 10px 2px var(--davys-grey);
  -webkit-box-shadow: 0px 0px 10px 2px var(--davys-grey);
  -moz-box-shadow: 0px 0px 10px 2px var(--davys-grey);
  border-radius: 5px;
  background: rgba(82, 79, 74, 0.6);
  width: 100%;
  height: 100%;
  max-width: 15rem;

  .bookmark {
    position: absolute;
    font-size: 3rem;
    top: -2px;
    right: 0.5rem;
    color: gold;
    cursor: pointer;
    -webkit-transition:color .4s ease-out;
    -moz-transition:color .4s ease-out;
    -o-transition:color .4s ease-out;
    transition:color .4s ease-out;
  }
  .myimg {
    background-image: url('../../../public/assets/movie.jpg');
    height: 350px;
    border-radius: 5px 5px 0px 0px;
    // height: 300px;
    // background-size: cover;
    // background-repeat: no-repeat;

  }
}
  .link{
    color: var(--light-silver) ;
    text-decoration: none;
  }

.active {
  color: var(--fire-brick) !important;
  transition: color ease-out !important;

}
</style>
