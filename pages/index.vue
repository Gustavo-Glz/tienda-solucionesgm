<template>
  <Home />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home"
        }
      ]
    }
  },
  created() {
    this.getDestacados()
  },

  methods: {
    ...mapActions(['getDestacados']),
  },
}
</script>