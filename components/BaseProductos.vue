<template>
  <v-container class="mt-10" fluid>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center">
          <v-btn icon @click.stop="drawer = !drawer"
            ><v-icon large>mdi-format-list-bulleted</v-icon></v-btn
          >
          <v-navigation-drawer v-model="drawer" absolute temporary app>
            <v-list nav class="pa-0">
              <v-list-item-group v-model="group">
                <div class="text-h6 white--text px-2 py-4" style="background-color: #2c3e50">
                  Categorías
                </div>
                <v-list-item
                  v-for="(categoria, index) in categorias"
                  :key="index"
                >
                  <v-list-item-title
                    class="text-subtitle-1 grey--text text--darken-2 px-2"
                    @click="getCategoria(categoria)"
                    >{{ categoria }}</v-list-item-title
                  >
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-virtual-scroll height="150" item-height="20"></v-virtual-scroll>
          </v-navigation-drawer>
          <span class="color text-h5 font-weight-black px-2">Productos</span>
        </div>
        <v-divider></v-divider>
        <CardProducto :productos="productos" />
        <div class="text-center my-5">
          <v-pagination
            v-model="getPagina"
            :length="paginas"
            @input="getSiguiente"
            circle
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      group: null,
      categorias: [
        "Accesorios",
        "Almacenamiento",
        "Audio",
        "Computadoras",
        "Componentes",
        "Consumibles",
        "Energía",
        "Impresoras",
        "Monitores",
        "Redes",
      ],
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    ...mapActions(["getSiguiente", "getCategoria"]),
  },

  computed: {
    ...mapState(["productos", "paginas"]),
    getPagina: {
      get() {
        return this.$store.getters.getPagina;
      },
      set(newPage) {
        this.$store.commit("SET_PAGINA", newPage);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  color: #2c3e50;
}
</style>