<template>
<!--  <div v-for="car in cars" :key="car">-->
<!--    <img :src="" alt="...">-->
<!--  </div>-->
<!--  <img :src="image" alt="">-->
  {{ image }}
</template>


<script>
import {$axios} from "@/plugins/axios";

export default {
  mounted() {
    this.getCars()
  },
  data() {
    return {
      cars: null,
      image: []
    }
  },
  methods: {
    async getCars() {
      let resp = await $axios.get('upload/view/')
      this.cars = resp.data.car
      for (let i in this.cars) {
        this.image.push(`http://127.0.0.1:8080/${this.cars[i].photo}`)
      }
    }
  }
}
</script>