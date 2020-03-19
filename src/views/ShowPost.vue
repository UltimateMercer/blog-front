<template>
  
  <div>
    <div class="container" v-if="loading">
      Estou carregando o post = {{ $route.params.id }}
    </div>

    <div v-else>
      <ViewPost  :post="post" :showText="true"/>
      <div class="container-fluid p-0">
        <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 my-3">
          <h5>
            <Tags v-for="(Tag, i) in tags" :key="i" :tag="Tag"/>
          </h5>
        </div>  
        
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ViewPost from "@/components/ViewPost";
import Tags from "@/components/Tags";
//import bkImage from "../img/e-u-p-s.jpg"
export default {
  name: "ShowPost",
  components: { ViewPost, Tags },
  data() {
    return {
      loading: true,
      post: null,
      
      tags:[]
    };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await axios.get(
      "http://127.0.0.1:3333/articles/" + id
    );
    this.post = res.data;

    const tagRes = await axios.get(`http://127.0.0.1:3333/articles/${id}/tags/`);
    this.tags = tagRes.data;
    this.loading = false;
  }
}
</script>