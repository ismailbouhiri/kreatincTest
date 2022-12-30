<template>
  <FiltreTitle :titlefiltre="'Rating'" />
  <div class="collapse" id="Rating">
    <div class="rating-wrapper ms-3 ps-4">
      <input
        v-model="stars"
        type="radio"
        id="star1"
        value="5"
      />
      <label
        for="star1"
        class="star-rating"
      >
        <i class="fas fa-star d-inline-block"></i>
      </label>
     <input
        v-model="stars"
        type="radio"
        id="star2"
        value="4"
      />
      <label
        for="star2"
        class="star-rating"
      >
        <i class="fas fa-star d-inline-block"></i>
      </label>
      <input
        v-model="stars"
        type="radio"
        id="star3"
        value="3"
      />
      <label
        for="star3"
        class="star-rating"
      >
        <i class="fas fa-star d-inline-block"></i>
      </label>

      <input
        v-model="stars"
        type="radio"
        id="star4"
        value="2"
      />
      <label
        for="star4"
        class="star-rating"
      >
        <i class="fas fa-star d-inline-block"></i>
      </label>

      <input
        v-model="stars"
        type="radio"
        value="1"
        id="star5"
      />
      <label
        for="star5"
        class="star-rating"
      >
        <i class="fas fa-star d-inline-block"></i>
      </label> 
    </div>
  </div>
</template>

<script>
import FiltreTitle from "./FiltreTitle.vue";

export default {
  data() {
    return {
      stars: ''
    };
  },
  components: {
    FiltreTitle,
  },
  watch:{
    stars(){
      this.$emit('filtreSelected', "rating", this.stars)
    }
  }
};
</script>

<style lang="scss" scoped>
.rating-wrapper {
  direction: rtl !important;
  label {
    color: var(--light-silver);
    cursor: pointer;
    font-size: 1rem;
    padding: 0.3rem;
    transition: color 0.5s;
  }

  input {
    display: none;
  }

  label:hover,
  label:hover ~ label,
  input:checked ~ label {
    color: var(--fire-brick);
  }

}
</style>
