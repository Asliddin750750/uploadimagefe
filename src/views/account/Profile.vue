<template>
  <div class="login">
    <div class="p-grid p-px-6 p-pt-3 p-nogutter">
      <div class="p-col-12 p-lg-6 p-lg-offset-3">
        <Panel>
          <template #header>
            <h3 class="p-m-0">Profilni tahrirlash</h3>
          </template>
          <form @submit.stop.prevent="onUpdate">
            <div class="p-fluid">
              <div class="p-field p-grid">
                <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">First name</label>
                <div class="p-col-12 p-md-10">
                  <InputText v-model="form.first_name"/>
                </div>
              </div>
              <div class="p-field p-grid">
                <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Last name</label>
                <div class="p-col-12 p-md-10">
                  <InputText v-model="form.last_name"/>
                </div>
              </div>
            </div>
            <div class="p-d-flex">
              <Button label="Update" type="submit" class="p-ml-auto"/>
            </div>
          </form>
        </Panel>
      </div>
    </div>
  </div>
</template>


<script>
import {defineComponent} from "vue";
import {$axios} from "../../plugins/axios";

export default defineComponent({
  mounted() {
    this.getProfile()
  },
  data() {
    return {
      form: {
        username: null,
        first_name: null,
        last_name: null
      },
      answer: ''
    }
  },
  methods: {
    async getProfile() {
      let resp = await $axios.get('profile/')
      this.form = resp.data.data.user
    },
    async onUpdate() {
      let resp = await $axios.put('profile/', this.form)
      console.log(resp.data)
      // if(resp.data.ok) {
      //   this.form = resp.data
      //   console.log(resp.data.data)
      // } else {
      //   this.form = resp.data
      //   console.log(resp.data.data)
      // }
    }
  }
})
</script>