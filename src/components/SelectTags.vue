<template>
    <div>
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select multiple class="form-control" id="exampleFormControlSelect2">
        <option>Selecione </option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
</template>
<script>
//import axios from "axios";
//import 'vue-select/dist/vue-select.css';

export default {

    props: {
        select: Object
    }

    /*async created(){
        const res = await axios.get("http://127.0.0.1:3333/tags");
        this.tags = res.data;
    },*/


  /*methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }*/
}

</script>