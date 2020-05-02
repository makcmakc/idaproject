<template>
  <div class="products">      
      <main>
  
        <md-table 
          v-model="people" 
          md-sort="name" 
          md-sort-order="asc" 
          md-card 
          md-fixed-header 
          @md-selected="onSelect">

          <md-table-toolbar>
            <h1 class="md-title">Table UI</h1>
          </md-table-toolbar>          

          <md-table-row slot="md-table-row" slot-scope="{ item }"  md-selectable="multiple" md-auto-select>
            <md-table-cell md-label="Product" md-sort-by="product">{{ item.product }}</md-table-cell>
            <md-table-cell md-label="Calories" md-sort-by="calories">{{ item.calories }}</md-table-cell>
            <md-table-cell md-label="Fat(g)" md-sort-by="fat">{{ item.fat }}</md-table-cell>
            <md-table-cell md-label="Carbs(g)" md-sort-by="carbs">{{ item.carbs }}</md-table-cell>
            <md-table-cell md-label="Protein(g)" md-sort-by="protein">{{ item.protein }}</md-table-cell>
            <md-table-cell md-label="Iron(%)" md-sort-by="iron">{{ item.iron }}</md-table-cell>
          </md-table-row>
        </md-table>

    </main>
  </div>
</template>

<script>

  export default {
    name: 'ProductsTable',
    props: ["products"],
    data: () => ({
      active: false,
      value: null,   
      selected: [],

      people: [
        {"id":1,"product":"Pork - Back Ribs","calories":991,"fat":16,"carbs":71,"protein":18,"iron":2},
        {"id":2,"product":"Butter Ripple - Phillips","calories":329,"fat":59,"carbs":76,"protein":41,"iron":9},
        {"id":3,"product":"Soup - French Onion, Dry","calories":223,"fat":99,"carbs":8,"protein":13,"iron":1},
        {"id":4,"product":"Beer - Camerons Auburn","calories":116,"fat":85,"carbs":61,"protein":91,"iron":24},
        {"id":5,"product":"Nutmeg - Ground","calories":816,"fat":57,"carbs":25,"protein":21,"iron":17},
      ]
    }),
    methods: {
      onSelect (items) {
        this.selected = items
      },
      getAlternateLabel (count) {
        let plural = ''

        if (count > 1) {
          plural = 's'
        }

        return `${count} user${plural} selected`
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

main {
  margin-top: 100px;

}

tbody .md-table-row td {
  border-top: none !important;
}

th {
  background: #fff;
  border-bottom: 1px solid #EDEDED;
}

tr:nth-child(2n - 1) {
    background: #fff;
}


</style>
