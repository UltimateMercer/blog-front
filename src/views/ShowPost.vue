<template>
  
  <div>
    <div class="container" v-if="loading">
      Estou carregando o post = {{ $route.params.id }}
    </div>

    <div v-else>
      <ViewPost  :post="post" :showText="true"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ViewPost from "@/components/ViewPost";
//import bkImage from "../img/e-u-p-s.jpg"
export default {
  name: "ShowPost",
  components: { ViewPost },
  data() {
    return {
      loading: true,
      post: null,
      tag:null
    };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await axios.get(
      "http://127.0.0.1:3333/articles/" + id
    );
    this.post = res.data;

    /*const tagRes = await axios.get(
      "http://127.0.0.1:3333/articles/" + this.post.id
    );
    this.tag = tagRes.data;
    this.loading = false;*/
    this.loading = false;
  }
}
</script>