<template>
  <div class="home">
    <div class="p-grid">
      <div class="p-col-12 p-lg-6 p-lg-offset-3">
        <DataTable :value="countries" responsiveLayout="scroll">
          <Column field="nomi" header="Nomi"/>
          <Column field="poytaxti" header="Poytaxti"/>
          <Column field="aholisi" header="Aholisi"/>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {$axios} from "../plugins/axios";

export default defineComponent({
  mounted() {
    this.getCountries()
  },
  data() {
    return {
      countries: null
    }
  },
  methods: {
    async getCountries() {
      let resp = await $axios.get('country/')
      this.countries = resp.data
      console.log(this.countries)
    }
  }
})
</script>
