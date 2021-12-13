<template>
  <h2>Upload Image</h2>
<!--  <FileUpload ref="upload" name="file" mode="basic" auto-->
<!--              :customUpload="true" @uploader="onUpload"/>-->
  <input type="file" accept="image/*" @change="onPhotoSelected"/>
</template>


<script>
import {$axios} from "@/plugins/axios";

export default {
  methods: {
    async onPhotoSelected(event) {
      // console.log(event.target.files[0])
      // alert(JSON.stringify(JSON.stringify(event.target.files['0'])))
      let formData = new FormData()
      formData.append("file", event.target.files[0])
      formData.append("brand", "Fiat")

      let resp = await $axios.post('upload/file/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (resp.data.success) {
        alert("Success")
      }

    }
  }
}
</script>