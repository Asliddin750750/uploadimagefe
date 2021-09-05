<template>
  <div class="home">
    <table>
      <tr>
        <th>Nomi</th>
        <th>Poytaxti</th>
        <th>Aholisi</th>
      </tr>
      <tr v-for="c in countries" :key="c.id">
        <td>{{ c.nomi }}</td>
        <td>{{ c.poytaxti }}</td>
        <td>{{ c.aholisi }}</td>
      </tr>
    </table>
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
