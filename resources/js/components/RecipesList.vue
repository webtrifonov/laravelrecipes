<template>
   <div class="recipes-list">
       <div class="order">
           <div class="order-button order-button-asc">↑ По возрастанию</div>
           <div
               class="order-button order-button-desc"
               @click="removeLastRecipe"
           >↓ По убыванию</div>
       </div>
       <recipes-item
           v-for="(recipe) in recipes"
           :key="recipe.id"
           :recipe="recipe"
       />
       <paginate
           :page-count="10"
           :page-range="3"
           :margin-pages="2"
           :click-handler="clickCallback"
           :prev-text="'Prev'"
           :next-text="'Next'"
           :container-class="'pagination'"
           :page-class="'page-item'">
       </paginate>
   </div>
</template>

<script>
  import RecipesItem from './RecipesItem';
  import {mapState, mapGetters, mapActions} from 'vuex';
  import {FETCH} from '../store/mutation-types';

  export default {
    name: 'RecipesList',
    components: {
      RecipesItem
    },
    data() {
      return {
        isReversed: false,
        rec3: {'id': 3, 'title': 'Мороженое', 'text': 'текст текст текст'},
      }
    },
    async mounted() {
      this.fetchRecipes(4);
    },
    computed: {
      // ...mapState({
      //   recipes: (state) => state.recipes,
      // }),
      // ...mapGetters({
      //   reversedRecipes: 'reversedRecipes'
      // })
      recipes() {
        return this.$store.getters.recipes(this.isReversed);
      },
      ...mapGetters({
        recipes1: 'recipes',
      })
    },
    methods: {
      clickCallback(pageNum) {
        console.log(pageNum);
      },
      removeLastRecipe() {
        this.$store.commit('removeLastRecipe', {
          count: 2
        });
      },
      ...mapActions(['fetchRecipes'])
    }
  }
</script>

<style lang="scss">
.order {
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;
    .order-button {
        margin-left: 10px;
        background-color: #ff979b;
        padding: 3px 6px;
        cursor: pointer;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        &:hover {
            background-color: darken(#ff979b, 15%);
        }
        &:active {
            background-color: darken(#ff979b, 30%);
        }
    }
}
.pagination {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    .page-item, li:first-child, li:last-child {
        padding: 4px;
        background-color: #314076;
        color: #ffffff;
        margin: 0 2px;
        border-radius: 3px;
    }
}

</style>
