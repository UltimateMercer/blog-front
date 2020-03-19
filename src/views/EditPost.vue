<template>
<div>
    <div class="container" v-if="loading">
      Estou carregando o post = {{ $route.params.id }}
    </div>
    <div v-else class="container">
        <div class="card card-body border border-dark rounded">
            <h2 class="mt-2"> <strong> Editar post </strong></h2>
            <hr class="mt-0">
            <form @submit.prevent="submit">
            
                <input class="form-control form-control-lg form-dark mb-4" type="text" placeholder="Título" v-model="form.title">
                <label for="exampleFormControlSelect2">Tags</label>
                <select multiple class="form-control mb-4" v-model="selectedTags">
                    <option selected>Selecione as tags deste post</option>
                    <option v-for="tag in tags" :key="tag.id" :value="tag.id" :selected="selectedTags == 'tag.id'">{{ tag.title }}</option>
                </select>
                <vue-editor v-model="form.body" class="mb-4"/>
                <button class="btn btn-info"> <font-awesome-icon icon="user-secret" /> Editar post</button>
            </form>
        </div>
    </div>
</div>
    
</template>
<script>
import axios from "axios";
//import SelectTags from "@/components/SelectTags";
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";

export default {
    components: { VueEditor },
    data(){
        return {
            loading: true,
            form: {
                title: "",
                body: ""
            },
            originalSelectedTags:[],
            selectedTags:[],
            tags:[]
        }
    },

    async created(){
        const id = this.$route.params.id;
        const resArt = await axios.get("http://127.0.0.1:3333/articles/" + id);
        this.form = resArt.data;

        const res = await axios.get("http://127.0.0.1:3333/tags");
        this.tags = res.data;

        const tagRes = await axios.get(`http://127.0.0.1:3333/articles/${id}/tags/`);
        //this.selectedTags = tagRes.data;
        this.selectedTags = tagRes.data.map(tag => tag.id);
        this.originalSelectedTags = this.selectedTags.concat();


        this.loading = false;
    },

    methods: {
        async submit() {
            const form = this.form;
            const postData = {
                ...form
            };

            const res = await axios.put("http://127.0.0.1:3333/articles/" + this.form.id ,postData);

            const post = res.data;
            //res;
            for (const tagId of this.originalSelectedTags) {
                await axios.delete(`http://127.0.0.1:3333/articles/${post.id}/tags/${tagId}`)
            }

            for (const newTagId of this.selectedTags) {
                await axios.post(`http://127.0.0.1:3333/articles/${post.id}/tags/${newTagId}`)

            }

            this.$router.push(`/posts/${post.id}`);
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