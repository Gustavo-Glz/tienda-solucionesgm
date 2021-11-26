<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="({ titulo, descripcion, imagen }, index) in servicios"
        :key="index"
      >
        <v-card class="pt-4" elevation="0" height="350" hover link>
          <v-img class="ma-auto" :src="imagen" contain width="130"></v-img>
          <v-card-subtitle
            class="blue--text text--darken-4 text-h6 text-center"
          >
            {{ titulo }}
          </v-card-subtitle>
          <v-card-text class="text-body-2 text-justify black--text">
            {{ descripcion }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        {
          titulo: "Soporte Técnico",
          descripcion: "Mantenimiento de equipo de cómputo, laptops, impresoras entre otros.",
          imagen: require("@/assets/img/servicios/soporte.png"),
        },
        {
          titulo: "Ensamble de Equipos",
          descripcion: "Ensamblamos tu equipo de acuerdo a tus necesidades y presupuesto.",
          imagen: require("@/assets/img/servicios/ensamble.png"),
        },
        {
          titulo: "Recarga de Cartuchos",
          descripcion: "Servicio de recarga de cartuchos de tinta y tóner con materiales de alta calidad.",
          imagen: require("@/assets/img/servicios/recarga.png"),
        },
        {
          titulo: "Asesoría",
          descripcion: "Analizamos tus necesidades ofreciendo siempre la mejor solución.",
          imagen: require("@/assets/img/servicios/asesoria.png"),
        },
      ],
    };
  },
};
</script>