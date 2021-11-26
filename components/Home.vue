<template>
  <div>
    <v-row class="align-center mt-10">
      <v-col cols="12" sm="6">
        <div
          class="
            text-h4 text-justify
            blue--text
            text--darken-4
            font-weight-bold
          "
        >
          La mejor tecnología a tu disposición
        </div>
      </v-col>
      <v-col sm="6">
        <div class="d-flex aling-center">
          <v-img
            src="/principal.svg"
            contain
            transition="scale-transition"
            aspect-ratio="1.4"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <div
      class="text-h6 blue--text text--darken-4 font-weight-bold my-10"
    >
      Productos destacados
      <CardProducto :productos="productosDestacados"/>
    </div>
    <div
      class="text-h6 blue--text text--darken-4 font-weight-bold my-10"
    >
      Nuestros servicios
      <CardServicio/>
    </div>
  </div>
</template>

<script>
import CardServicio from '@/components/CardServicio.vue'
import CardProducto from '@/components/CardProducto.vue'
import { mapState } from 'vuex'
export default {
  components: {
    CardServicio,
    CardProducto
  },

  computed: {
    ...mapState(['productosDestacados']),
  },
}
</script>