import Vue from 'vue'
import Vuex from 'vuex'

/* eslint-disable */
import { getProducts } from '../request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	products: [], // products from products.json
  	ERROR_FROM_SERVER: false // error loading data
  },
  mutations: {
  	SET_PRODUCTS(state, payload) {
  		state.products = payload
  	},
  	SET_ERROR(state, payload) {
  		state.ERROR_FROM_SERVER = payload
  	}
  },
  actions: {
  	GET_DATA({commit}) {
  		getProducts().then(success => {
  			commit('SET_PRODUCTS', success)
  			commit('SET_ERROR', false)
  		}).catch(err => {
  			console.log(err)
  			commit('SET_ERROR', true)
  		})
  	}
  },
  modules: {
  	
  }
})
