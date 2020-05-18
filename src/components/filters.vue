<template>
  <div class="container">
    <label class="filter" v-for="filter in Object.keys(filters)" :key="filter">
      {{filter}}
      <input type='checkbox' :checked='filters[filter]' :value='filter' @change="clickCheckbox" />
    </label>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Filters',
  computed: mapState([
    'filters'
  ]),
  methods: {
    ...mapMutations(['checkFilter']),
    clickCheckbox (e) {
      this.checkFilter(e.target.value)
    }
  }
}
</script>

<style>
label.filter {
  padding: 5px 8px;
  cursor: pointer;
}
</style>
