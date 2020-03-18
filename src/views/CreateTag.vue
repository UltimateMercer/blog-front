<template>
    <div>
        <div class="container mb-5">
            <div class="card card-body border border-dark rounded">
                <h2 class="mt-2"> <strong> Nova tag </strong></h2>
                <hr class="mt-0 bg-dark">  
                <form @submit.prevent="submit">
                    <input class="form-control form-control-lg form-dark mb-4" type="text" placeholder="Nome da tag..." v-model="form.title">
                    <button class="btn btn-info"> Criar tag</button>
                </form>
            </div>
            
        </div>
        <div class="container">
            <div class="card card-body border border-dark rounded">
                <h2 class="mt-2"> <strong> Tags cadastradas </strong> </h2>
                <hr class="mt-0 bg-dark">
                <h5>
                    <Tags v-for="(Tag, i) in tags" :key="i" :tag="Tag"/>
                </h5>
            </div>
            
        </div>
    </div>
    
</template>
<script>
import axios from "axios";
import Tags from "@/components/Tags";

export default {
    name: "CreateTag",
    components: { Tags },
    data(){
      return {
        form: {
            title: ""
        },
        tags:[]
      }
  },

  async created(){
    const res = await axios.get("http://127.0.0.1:3333/tags");
    this.tags = res.data;
  },

  methods: {
      async submit() {
          const form = this.form;
          const tagData = {
              ...form
          };

        const res = await axios.post("http://127.0.0.1:3333/tags",tagData);

        res;
        
        this.$router.push("/");
      }
  }
};
</script>
