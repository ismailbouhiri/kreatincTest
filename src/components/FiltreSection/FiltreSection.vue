<template>
  <div class="w-100 text-start filtres">
    <CheckFiltre
      :categories="categories"
      :titlefiltre="'Category'"
      @filtreSelected="receiveData"
    />
    <RatingFiltre  @filtreSelected="receiveData"/>
    <CheckFiltre
      :categories="languages"
      :titlefiltre="'Languages'"
      @filtreSelected="receiveData"
    />
    <ButtonCustom @click="sendData" class="mt-2" style="margin: 50px">Apply Filtres</ButtonCustom>
  </div>
</template>

<script>
import ButtonCustom from "@/components/ButtonCustom/ButtonCustom.vue";
import CheckFiltre from "./FiltreComponents/CheckFiltre.vue";
import RatingFiltre from "./FiltreComponents/RatingFiltre.vue";

export default {
  data() {
    return {
      categories: [
        {id: 0, name: "Action"},
        {id: 12, name: "Adventure"},
        {id: 35, name: "Comedy"},
        {id: 18, name: "Drama"},
      ],
      languages: [
      {id: "en", name: "English"},
      {id: "ar", name: "Arabic"},
      {id: "fr", name: "French"},
      ],
      selectionsFicltre: [
        [],
        [],
        0
      ]
    };
  },
  components: {
    CheckFiltre,
    RatingFiltre,
    ButtonCustom,
  },
  methods:{
    receiveData(field, value){
      let index = (field === "Category") ? 0: (field === "Languages") ? 1: 2;
      this.selectionsFicltre[index] = value;
    },
    sendData()
    {
      this.$emit('filtre', this.selectionsFicltre);
    }
  }
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
