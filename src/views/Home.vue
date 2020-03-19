<template>
  <div>
      <div v-if="loading" class="container">
        <h1>Carregando artigos...</h1>
      </div>
     <div v-else class="home">
      <img alt="Vue logo" class="mx-auto d-block mt-2 mb-4" src="../assets/logo4.png" />
      <font-awesome-icon class="text-dark" :icon="home" />
      <div class="container p-0 mb-4">
        <div class="col-12">
          <div class="row">
            <div v-for="(post, i) in posts" :key="i" class="col-lg-6 col-12">
              <Post :post="post" @deleted="onDeleted(post)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";

export default {
  name: "Home",
  components: { Post },
  data() {
    return {
      posts: [],
      tags: [],
      loading: false
      
    };
  },
  async created() {
    const res = await axios.get("http://127.0.0.1:3333/articles");
    this.posts = res.data;
    this.loading = false;

  },

  methods:{
    onDeleted(post) {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }
  }
};
</script>
