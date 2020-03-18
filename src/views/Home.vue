<template>
  <div class="home">
    <img alt="Vue logo" class="mx-auto d-block mt-2 mb-4" src="../assets/logo4.png" />
    <font-awesome-icon class="text-dark" :icon="home" />
    <div class="container p-0 mb-4">
      <div class="col-12">
        <div class="row">
          <div v-for="(post, i) in posts" :key="i" class="col-lg-6 col-12">
            <Post :post="post"/>
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
      posts: []
      
    };
  },
  async created() {
    const res = await axios.get("http://127.0.0.1:3333/articles");
    this.posts = res.data;
  }
};
</script>
