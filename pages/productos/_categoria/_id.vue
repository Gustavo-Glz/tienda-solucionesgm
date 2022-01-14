<template>
<ProductoDetalles :detallesProducto="detallesProducto"/>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      codigo: ''
    }
  },
  created() {
    this.codigo = parseInt(this.$route.params.codigo)
    this.getDetallesProducto(this.codigo)
  },
  methods: {
    ...mapActions(['getDetallesProducto']),
  },
  computed: {
    ...mapState(['detallesProducto'])
  }
}
</script>