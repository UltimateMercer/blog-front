<template>
    <div class="container">
        <div class="card card-body border border-dark rounded">
            <h2 class="mt-2"> <strong> Novo post </strong></h2>
            <hr class="mt-0">
            <form @submit.prevent="submit">
            
            <input class="form-control form-control-lg form-dark mb-4" type="text" placeholder="Título" v-model="form.title">
            <vue-editor v-model="form.body" class="mb-4"/>
            <button class="btn btn-info"> Criar post</button>
        </form>
        </div>
        
        
    </div>
</template>
<script>
import axios from "axios";
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";

export default {
  components: { VueEditor },
  data(){
      return {
        form: {
            title: "",
            body: ""
        },
        selectedTags:[1,2]
      }
  },

  methods: {
      async submit() {
          const form = this.form;
          const postData = {
              ...form
          };

        const res = await axios.post("http://127.0.0.1:3333/articles",postData);

        const post = res.data;

        for (const tagId of this.selectedTags) {
            await axios.post(`http://127.0.0.1:3333/articles/${post.id}/tags/${tagId}`)
        }


        //res;

        //const tagRes = await axios.get("http://127.0.0.1:3333/articles/tags");
        //this.tag = tagRes.data;

        this.$router.push(`/posts/${res.data.id}/tags`);
      }
  }
};
</script>
<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>