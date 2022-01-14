import axios from 'axios'
export const strict = false
export const state = () => ({
    productosDestacados: [],
    productos: [],
    detallesProducto: [],
    porPaginaDestacados: 4,
    porPagina: 12,
    pagina: 1,
    paginas: 0,
    categoria: ''
})

export const mutations = {
    SET_DESTACADOS(state, payload) {
        state.productosDestacados = payload

    },
    SET_PRODUCTOS(state, payload) {
        state.productos = payload
    },
    SET_PAGINA(state, payload) {
        state.pagina = payload
    },
    SET_DETALLES_PRODUCTO(state, payload) {
        state.detallesProducto = payload

    },
    SET_CATEGORIA(state, payload) { 
        state.categoria = payload
    },
   
}

export const actions = {
    async getDestacados({ commit, state }) {
        await axios.get(process.env.VUE_APP_API_URLDESTACADOS + `?page=${state.porPaginaDestacados}`)
            .then(res => {
                return commit('SET_DESTACADOS', res.data)
            })
    },

    async getProductos({ commit, state }) {
        commit('SET_PAGINA', 1)
        commit('SET_CATEGORIA', '')
        await axios.get(process.env.VUE_APP_API_URLPRODUCTOS + `?page=${state.pagina}`)
            .then(res => {
                state.paginas = Math.ceil(res.data.count / state.porPagina)
                return commit('SET_PRODUCTOS', res.data.results)
            })
    },

    async getSiguiente({ commit, state }) {
        if (state.categoria === '') {
            await axios.get(process.env.VUE_APP_API_URLPRODUCTOS + `?page=${state.pagina}`)
                .then(res => {
                    return commit('SET_PRODUCTOS', res.data.results)
                })

        } else {
            await axios.get(process.env.VUE_APP_API_URLPRODUCTOS + `?page=${state.pagina}&categoria=${state.categoria}`)
                .then(res => {
                    return commit('SET_PRODUCTOS', res.data.results)
                })
        }
    },

    async getCategoria({ commit, state }, payload) {
        commit('SET_PAGINA', 1)
        commit('SET_CATEGORIA', payload)
        await axios.get(process.env.VUE_APP_API_URLPRODUCTOS + `?categoria=${state.categoria}`)
            .then(res => {
                state.paginas = Math.ceil(res.data.count / state.porPagina)
                return commit('SET_PRODUCTOS', res.data.results)
            })
    },

    async getDetallesProducto({ commit }, payload) {
        const detalles = []
        await axios.get(process.env.VUE_APP_API_URLPRODUCTOS + `${payload}`)
            .then(res => {
                detalles.push(res.data)
                return commit('SET_DETALLES_PRODUCTO', detalles)
            })
    }
}

export const getters = {
    getPagina(state) {
        return state.pagina
    },
}





























