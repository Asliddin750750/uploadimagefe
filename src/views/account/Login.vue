<template>
  <div class="login">
    <div class="p-grid p-px-6 p-pt-3 p-nogutter">
      <div class="p-col-12 p-lg-6 p-lg-offset-3">
        <Panel>
          <template #header>
            <h3 class="p-m-0">Tizimga kirish</h3>
          </template>
          <form @submit.stop.prevent="onLogin">
            <div class="p-fluid">
              <div class="p-field p-grid">
                <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Username</label>
                <div class="p-col-12 p-md-10">
                  <InputText v-model="form.username"/>
                </div>
              </div>
              <div class="p-field p-grid">
                <label class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Password</label>
                <div class="p-col-12 p-md-10">
                  <Password v-model="form.password" :feedback="false"/>
                </div>
              </div>
            </div>
            <div class="p-d-flex">
              <Button label="Login" type="submit" class="p-ml-auto" v-model="answer"/>
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
import {ACCOUNT_REMOVE_TOKEN, ACCOUNT_SET_PROFILE, ACCOUNT_SET_TOKEN} from "../../store/actions/account";

export default defineComponent({
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    async onLogin() {

      this.$store.commit(ACCOUNT_REMOVE_TOKEN)

      let resp = await $axios.post('login/', this.form)

      if(resp.data.ok) {
        this.$store.commit(ACCOUNT_SET_PROFILE, resp.data.data.user)
        this.$store.commit(ACCOUNT_SET_TOKEN, resp.data)
        this.$router.push({name: 'home'})
      } else {
        this.answer = resp.data
      }
    }
  }
})
</script>