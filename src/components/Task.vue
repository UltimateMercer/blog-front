<template>
    <div class="">
        <div class="card mb-4">
            <div class="card-body">
                <h4 class=" mb-2">
                    <span class="marker marker-dark title"> {{ task.title }} </span>
                </h4>
                
                <h5 class="mb-2">
                    Status:
                    
                    <span v-if="task.completed===false" class="badge badge-pill badge-success">
                            Open
                    </span>
                    <span v-else class="badge badge-pill badge-danger">
                            Closed
                    </span>
                </h5>
                
                <router-link class="btn btn-info btn-sm" v-if="showOpenButton" :to="`/tasks/${task.id}`">
                     Show
                </router-link>
                <div v-if="showEditAndDelete">
                    <p class="">
                        <button class="btn btn-danger" @click="deleteTask()">
                            Delete
                        </button>
                    </p>
                </div>
                            
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Task",
  props: {
    task: Object,
    showOpenButton: {
      type: Boolean,
      default: false
    },
    showEditAndDelete: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async deleteTask() {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/todos/" + this.task.id
      );
      this.$router.push("/");
    }
  }
};
</script>