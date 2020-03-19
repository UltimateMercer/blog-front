<template>
    <div class="card card-body border border-dark rounded mb-3">
        <h3 class="mb-1">
            <span class="">
                <strong>{{ post.title }}</strong>
            </span>
            
        </h3>
        <hr class="mt-1 mb-2">
        <p class="">
            {{ post.updated_at | moment("D [de] MMMM [de] YYYY") }}
        </p>
        <h5>
            <Tags v-for="(Tag, i) in tags" :key="i" :tag="tag"/>
        </h5>
        <h6>
            <router-link :to="`/posts/${post.id}`">
                <span class="btn btn-sm btn-primary">Read this post...</span>    
            </router-link>
            
            <button class="float-right btn btn-sm btn-danger" @click="deletePost()">Excluir</button>
            <router-link :to="`/posts/edit/${post.id}`">
                <span class="float-right btn btn-sm btn-warning"> Editar</span>    
            </router-link>
        </h6>
        

    </div>
</template>

<style lang="scss">
    
</style>
<script>
import axios from "axios";
import Tags from "@/components/Tags";

    export default {
        name: "Post",
        components: {Tags},
        props: {
            post: Object
        },
        
        data(){
            return {
                tags:[]
            }
        },

        methods: {
            async deletePost() {
                await axios.delete('http://127.0.0.1:3333/articles/' + this.post.id);
                //this.$router.push("/");
                this.$emit("deleted");
            }

        }

        /*async created(){
        const res = await axios.get(`http://127.0.0.1:3333/articles/${post.id}/tags/`);
        this.tags = res.data;
    }*/



    }
</script>