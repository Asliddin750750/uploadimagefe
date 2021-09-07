<template>
  <div class="home">
    <div class="p-grid">
      <div class="p-col-12 p-lg-6 p-lg-offset-3">
        <Button label="Logout" @click="onLogout" class="p-button-danger p-ml-auto p-my-2"/>
      </div>
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
import {ACCOUNT_REMOVE_TOKEN} from "../store/actions/account";

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
    },
    // logout
    onLogout() {
      // ACCOUNT_REMOVE_TOKEN mutation ishga tushadi
      this.$store.commit(ACCOUNT_REMOVE_TOKEN)
      // logout bo'lgandan keyin login oynaga o'tadi
      this.$router.push({name: 'login'})
    }
  }
})
</script>
