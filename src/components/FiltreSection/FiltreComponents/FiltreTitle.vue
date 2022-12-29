<template>
  <a
    class="text-decoration-none"
    data-bs-toggle="collapse"
    :href="'#' + titlefiltre"
    role="button"
    aria-expanded="false"
    :aria-controls="titlefiltre"
  >
    <div
      class=" mt-4 ps-4 d-flex align-items-center categoryFiltre"
      @click="toggleCategory"
    >
      <i
        class="fa-solid fa-caret-right fs-5"
        :class="{ 'fa-caret-down': categoryCicked }"
      ></i>
      <span class="ms-2" :class="{ active: categoryCicked }">{{
        titlefiltre
      }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    titlefiltre: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categoryCicked: false,
    };
  },
  methods: {
    toggleCategory(e) {
      e.preventDefault();
      this.categoryCicked = !this.categoryCicked;
    },
  },
};
</script>

<style lang="scss" scoped>
.categoryFiltre {
  color: var(--cool-grey);
}
.fa-caret-down {
  color: var(--fire-brick);
}
.active {
  color: var(--light-silver);
  font-weight: 600;
}
</style>
