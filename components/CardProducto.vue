<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="({id, nombre, imagen, precio, categoria }, index) in productos"
        :key="index"
      >
        <v-card class="d-flex flex-column mb-10" elevation="0" height="330" hover link :to=" 'productos/' + categoria.toLowerCase() + '/' + id">
          <v-img class="mx-auto" :src="imagen" width="180" contain></v-img>
          <v-card-text class="text-body-2 text-justify black--text py-0"
            >{{ nombre }}
          </v-card-text>
          <v-card-title
            class="blue--text text--darken-4 text-h6 font-weight-bold py-2"
            >{{ convertirPesos(precio) }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    productos: Array,
  },

  methods: {
    convertirPesos(precio) {
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
      }).format(precio)
    },
  },
}
</script>