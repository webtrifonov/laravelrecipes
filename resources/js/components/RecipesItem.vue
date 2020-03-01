<template>
   <div class="recipes-item">
      <h3>{{recipe.title}}</h3>
      <p>{{recipe.text}}</p>
   </div>
</template>

<script>
  export default {
    name: "RecipesItem",
    props: {
      'recipe': {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
    .recipes-item {
        border: 1px solid #cccccc;
        padding: 10px;
        display: block;
        position: relative;
        margin-bottom: 15px;
    }
</style>
