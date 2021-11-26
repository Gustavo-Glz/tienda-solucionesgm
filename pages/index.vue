<template>
    <Home/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.getDestacados()
  },

  methods: {
    ...mapActions(['getDestacados']),
  },
}
</script>