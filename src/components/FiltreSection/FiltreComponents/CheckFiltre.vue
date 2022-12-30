<template>
  <FiltreTitle :titlefiltre="titlefiltre" />
  <form
    @submit.prevent="selectAnswer"
    class="collapse" :id="titlefiltre">
    <ul class="ms-3 mt-2">
      <li
        class="list-group-item mt-2"
        v-for="(category, index) in categories"
        :key="{ index }"
      > 
        <label class="form-check-label" :for="category.id">
          <input
            v-model="selections"
            class="form-check-input me-1 rounded-pill category"
            type="checkbox"
            :value="category.id"
            :id="category.id"
          />
          {{ category.name }}
        </label>
      </li>
    </ul>
  </form>
</template>

<script>
import FiltreTitle from "./FiltreTitle.vue";
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    titlefiltre: {
      type: String,
      required: true,
    },
  },
  data(){
    return {
      selections: []
    }
  },
  components: {
    FiltreTitle,
  },
  watch:{
    selections(){
      this.$emit('filtreSelected', this.titlefiltre, this.selections)
    }
  }

};
</script>

<style lang="scss" scoped>
.category {
  background-color: var(--light-silver);
  &:checked {
    background-color: var(--fire-brick);
    outline: none;
    border: none;
  }
}
</style>
