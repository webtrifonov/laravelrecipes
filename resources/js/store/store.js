import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { FETCH } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [
            {'id': 1, 'title': 'Морковь в кляре', 'text': 'текст текст текст',},
            {'id': 2, 'title': 'Рыба жареная', 'text': 'текст текст текст',},
        ]
    },
    getters: {
        // reversedRecipes: (state, getters) => {
        //     console.log(state);
        //     console.log(getters);
        //     return state.recipes.reverse();
        // },
        recipes: (state) => (isReversed) => {
            if (isReversed) {
                return state.recipes.reverse();
            } else {
                return state.recipes;
            }
        }
    },
    mutations: {
        removeLastRecipe(state, payload) {
            state.recipes.splice(state.recipes.length - payload.count);
        },
        [FETCH.RECIPES.SUCCESS] (state, payload) {
            console.log(state);
            console.log(payload);
            state.recipes = payload.results.data;
        }
    },
    actions: {
        async fetchRecipes(context) {
            const response = await axios('/api/v0/list');
            const recipes = await response.data;
            console.log(recipes);
            context.commit(FETCH.RECIPES.SUCCESS, recipes);
        }
    },
})
