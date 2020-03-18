<template>
        <span class="badge badge-pill badge-dark">{{ tag.title }}</span>
</template>
<script>
export default {
    name: "Tags",

        props: {
            tag: Object
        }
}
</script>