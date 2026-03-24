import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    productos: [],
    categoriaSeleccionada: 'todos',
    loading: false,
    error: null
  },

  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_CATEGORIA(state, categoria) {
      state.categoriaSeleccionada = categoria
    }
  },

  actions: {
    async obtenerProductos({ commit }) {
      commit('SET_LOADING', true)

      try {
        const res = await axios.get('https://fakestoreapi.com/products')

        const productosTraducidos = res.data.map(p => ({
          id: p.id,
          title: traducirNombre(p.title),
          price: convertirPrecio(p.price),
          description: traducirDescripcion(p.description),
          category: traducirCategoria(p.category),
          image: p.image
        }))

        commit('SET_PRODUCTOS', productosTraducidos)
      } catch (error) {
        commit('SET_ERROR', 'Error al cargar productos')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    productosFiltrados: (state) => {
      if (state.categoriaSeleccionada === 'todos') {
        return state.productos
      }
      return state.productos.filter(
        p => p.category === state.categoriaSeleccionada
      )
    }
  }
})

/* 🔥 FUNCIONES DE TRADUCCIÓN */

function traducirCategoria(cat) {
  const mapa = {
    electronics: 'Electrónica',
    jewelery: 'Joyería',
    "men's clothing": 'Ropa Hombre',
    "women's clothing": 'Ropa Mujer'
  }
  return mapa[cat] || cat
}

function convertirPrecio(price) {
  return Math.round(price * 900)
}

function traducirNombre(nombre) {
  return nombre // puedes mejorar esto después
}

function traducirDescripcion(desc) {
  return desc
}