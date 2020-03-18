<template>
    <div>
        <div class="container" v-if="loading">
            Estou carregando o post = {{ $route.params.id }}
        </div>
        <div v-else>
            <div class="container">
                <ViewPost :post="post"/>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import ViewPost from "@/components/ViewPost";
//import bkImage from "../img/e-u-p-s.jpg"
export default {
  name: "ArticleTags",
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

    
    this.loading = false;
  }
}
</script>