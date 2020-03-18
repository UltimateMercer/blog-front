<template>
    <div class="card card-plain card-body border border-dark rounded mb-3">
        <h3 class="mb-1">
            <span class="">
                <strong>{{ post.title }}</strong>
            </span> 
        </h3>
        <hr class="mt-1 mb-2">
        <p class="">
            {{ post.updated_at | moment("D [de] MMMM [de] YYYY") }}
        </p>

        <router-link :to="`/posts/${post.id}`">
            <span class="marker marker-primary link">Read this post...</span>    
        </router-link>

    </div>
</template>

<style lang="scss">
    
</style>
<script>
    export default {
        name: "Post",

        props: {
            post: Object
        }
    }
</script>