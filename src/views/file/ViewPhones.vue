<template>
  <div class="p-grid">
    <div class="p-col-4 p-offset-4">
      <div class="p-fluid">
        <div class="p-field">
          <label>Name</label>
          <InputText v-model="form.name"/>
        </div>
        <div class="p-field">
          <label>Image</label><br>
          <input type="file" @change="onImageSelected"/>
        </div>
        <Button label="Save" @click="addPhone"/>
      </div>
    </div>
  </div>
  <hr>
  <h2 class="p-text-center">List of phones</h2>
  <div class="p-grid">
    <div class="p-col-3" v-for="phone in phones" :key="phone.id">
      <h3 class="p-text-center">{{ phone.name }}</h3>
      <img :src="phone.image" alt="" style="width: 100%">
    </div>
  </div>
</template>


<script>
import {$axios} from "@/plugins/axios";

export default {
  mounted() {
    this.getPhones()
  },
  data() {
    return {
      phones: null,
      form: {
        name: null,
        image: null
      }
    }
  },
  methods: {
    async getPhones() {
      let resp = await $axios.get('file/view/phones/')
      this.phones = resp.data.phones
    },
    onImageSelected(event) {
      this.form.image = event.target.files[0]
    },
    async addPhone() {
      let fd = new FormData()
      fd.append('name', this.form.name)
      fd.append('image', this.form.image)
      let resp = await $axios.post('file/add/phone/', fd)
      alert(JSON.stringify(resp))
    }
  }
}
</script>