<template>
  <v-container fluid>
    <div
      v-for="(
        {id, nombre, descripcion, detalles, categoria, precio, imagen }) in detallesProducto"
      :key="id"
    >
      <v-chip label class="ma-2" color="primary">
        <div class="text-h5 pa-2">{{ categoria }}</div>
      </v-chip>
      <v-row class="d-flex align-center justify-space-between my-10">
        <v-col cols="12" md="4">
          <v-img :src="imagen" width="300" height="350" contain></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <div class="text-h5 text-justify mb-5 font-weight-bold">
            {{ nombre }}
          </div>
          <div class="text-subtitle-1 mb-5 text-justify">{{ descripcion }}</div>
          <div class="text-subtitle-2 mb-5 text-justify">{{ detalles }}</div>
          <div class="text-h4 blue--text text--darken-4 font-weight-bold">
            {{ convertirPesos(precio) }}
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    detallesProducto: Array,
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
