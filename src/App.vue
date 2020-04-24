<template>
  <div id="app">
    <div class="container">

      <div v-if="ERROR_FROM_SERVER"></div>

      <modal name="error-display" :show="true" :width="400" :height="200">
        <div class="error">
          <h3 class="error-title">We so sorry...</h3>
          <h4 class="error-type">[ Error from Server ]</h4>
          <a href="#" class="btn" v-on:click="GET_DATA">Try again</a>
        </div>
      </modal>      

      <ProductsTable />
    
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
    ...mapActions(["GET_DATA"]),
    show () {
     this.$modal.show('error-display')
    },
    hide () {
     this.$modal.hide('error-display')
   }
  },
  computed: {
    ...mapState(["ERROR_FROM_SERVER"])
  },  
  mounted() {
    this.$modal.show('error-display')
    this.GET_DATA()
    //console.log(this.GET_DATA())
  }    
}
</script>

<style lang="scss">

a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .container {
    .error {
      text-align: center;
      position: relative;
      line-height: 30px;

      .btn {
        padding: 10px 15px;
        background: #00A11E;
        border-radius: 2px;
        color: #fff;
        font-size: 14px;
        line-height: 70px;
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;    
        transition: all .2s ease-in-out;
        outline: none;
        
        &:hover {
          transition: all .2s ease-in-out;
          box-shadow: 0 0 0 3px rgba(0, 163, 30, .6)
        }    
      }
    }
  }
}
</style>
