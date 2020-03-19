<template>
    <div class="container">
        <div class="card card-body border border-dark rounded">
            <h2 class="mt-2"> <strong> Novo post </strong></h2>
            <hr class="mt-0">
            <form @submit.prevent="submit">
            
                <input class="form-control form-control-lg form-dark mb-4" type="text" placeholder="Título" v-model="form.title">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple class="form-control mb-4" id="exampleFormControlSelect2" v-model="selectedTags">
                    <option>Selecione as tags deste post</option>
                    <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.title }}</option>
                </select>
                <vue-editor v-model="form.body" class="mb-4"/>
                <button class="btn btn-info"> Criar post</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>