<template>
    <div>
        <h1>Рецептики</h1>
        <recipes-list />
    </div>
</template>

<script>
import RecipesList from '../components/RecipesList';
  export default {
    name: 'Index',
    components: {
      RecipesList,
    }
  }
</script>

<style scoped>

</style>
