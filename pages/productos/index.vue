<template>
  <BaseProductos />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  head() {
    return {
      title: 'Productos |',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Products page"
        }
      ]
    }
  },
  created() {
    this.getProductos();
  },

  methods: {
    ...mapActions(['getProductos'])
  }
}
</script>