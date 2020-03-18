<template>
    <div>
        <div class="container-fluid p-0">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 my-3">
                <h1 class="mt-3 mb-2">
                    <strong> {{ post.title }} </strong>
                </h1>
                <h5 class="mb-4">
                    {{ post.updated_at | moment("dddd, D [de] MMMM [de] YYYY") }}
                </h5> 
            </div>   
        </div>
        <div class="container-fluid mb-5 p-0">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 my-3">
                <div class="page">
                    <div class="post serif" v-html="post.body" v-if="showText">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    


</template>

<style lang="scss">
   
</style>

<script>
export default {
     name: "ViewPost",

        props: {
            post: Object,
             showText: {
                type: Boolean,
                default: false
            }
        }
}
</script>