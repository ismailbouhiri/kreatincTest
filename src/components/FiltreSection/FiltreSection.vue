<template>

  <div class="w-100 text-start filtres">
    <CheckFiltre :categories="categories" :titlefiltre="'Category'" />
    <RatingFiltre />
    <CheckFiltre :categories="languages" :titlefiltre="'Languages'" />
    <ButtonCustom class="mt-2" style="margin: 50px"
      >Apply Filtres</ButtonCustom
    >
  </div>
</template>

<script>
import ButtonCustom from "@/components/ButtonCustom/ButtonCustom.vue";
import CheckFiltre from "./FiltreComponents/CheckFiltre.vue";
import RatingFiltre from "./FiltreComponents/RatingFiltre.vue";

export default {
  data() {
    return {
      categories: ["Romantic", "Action", "Comedy"],
      languages: ["Arabic", "French", "English"],
    };
  },
  components: {
    CheckFiltre,
    RatingFiltre,
    ButtonCustom,
  },
};
</script>

<style lang="scss" scoped>
.filtres {
  color: var(--light-silver) !important;
}

.SearchBox {
  width: 100%;
  background-color: var(--vampire-black);
  color: var(--light-silver);
  padding: 2px;
  border-color: var(--light-silver);

  input {
    border: none;
    background-color: transparent;
    color: var(--light-silver);
    width: 150px;
  }

  input:hover,
  input:focus,
  input:active {
    border: none;
    outline: none;
  }
}
</style>
