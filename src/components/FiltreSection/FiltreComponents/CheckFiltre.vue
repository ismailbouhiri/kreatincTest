<template>
  <FiltreTitle :titlefiltre="titlefiltre" />
  <div class="collapse" :id="titlefiltre">
    <ul class="ms-3 mt-2">
      <li
        class="list-group-item mt-2"
        v-for="(category, index) in categories"
        :key="{ index }"
      > 
        <!-- {{ test() }} -->
        <label class="form-check-label" :for="category + index">
          <input
            class="form-check-input me-1 rounded-pill category"
            type="checkbox"
            :value="category"
            :id="category + index"
          />
          {{ category }}
        </label>
      </li>
    </ul>
  </div>
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
  components: {
    FiltreTitle,
  },

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
