<template>
  <div id="app">
    <div class="container">
      <div v-if="ERROR_FROM_SERVER">
        <md-empty-state
          md-icon="phonelink_off"
          md-label="We are so sorry..."
          md-description="[ Error from Server ]">
          <md-button v-on:click="GET_DATA" class="md-primary md-raised">Try again...</md-button>
        </md-empty-state>         
      </div>    

      <div v-else>
        <ProductsTable :products="products" />
      </div> 
    </div>
  </div>
</template>


<script>
import ProductsTable from './components/ProductsTable.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    ProductsTable
  },
  methods: {
    ...mapActions(["GET_DATA"])
  },
  computed: {
    ...mapState(["ERROR_FROM_SERVER", "products"])
  },  
  mounted() {
    this.GET_DATA()
  }    
}
</script>
