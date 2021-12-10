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
    setDestacados(state, payload) {
        state.productosDestacados = payload

    },
    setProductos(state, payload) {
        state.productos = payload
    },
    setPagina(state, payload) {
        state.pagina = payload
    },
    setDetallesProducto(state, payload) {
        state.detallesProducto = payload

    }
}

export const actions = {
    async getDestacados({ commit, state }) {
        await axios.get(`http://localhost:8000/api/v1.0/destacados/?page=${state.porPaginaDestacados}`)
            .then(res => {
                return commit('setDestacados', res.data)
            })
    },

    async getProductos({ commit, state }) {
        await axios.get(`http://localhost:8000/api/v1.0/productos/?page=${state.pagina}`)
            .then(res => {
                state.paginas = Math.ceil(res.data.count / state.porPagina)
                return commit('setProductos', res.data.results)
            })
    },

    async getSiguiente({ commit, state }) {
        if (state.categoria === '') {
            await axios.get(`http://localhost:8000/api/v1.0/productos/?page=${state.pagina}`)
                .then(res => {
                    return commit('setProductos', res.data.results)
                })

        } else {
            await axios.get(`http://localhost:8000/api/v1.0/productos/?page=${state.pagina}&categoria=${state.categoria}`)
                .then(res => {
                    return commit('setProductos', res.data.results)
                })
        }
    },

    async getCategoria({ commit, state }, payload) {
        state.pagina = 1
        state.categoria = payload
        await axios.get(`http://localhost:8000/api/v1.0/productos/?categoria=${state.categoria}`)
            .then(res => {
                state.paginas = Math.ceil(res.data.count / state.porPagina)
                console.log(res.data.results)
                return commit('setProductos', res.data.results)
            })
    },

    async getDetallesProducto({ commit }, payload) {
        const detalles = []
        await axios.get(`http://localhost:8000/api/v1.0/productos/${payload}`)
            .then(res => {
                detalles.push(res.data)
                return commit('setDetallesProducto', detalles)
            })
    }
}

export const getters = {
    getPagina(state) {
        return state.pagina
    },
}





























