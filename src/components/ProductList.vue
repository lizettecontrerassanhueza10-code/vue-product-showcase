<template>
  <div class="contenedor">
    <h2 class="titulo">Lista de Productos</h2>

    <!-- FILTRO -->
    <div class="filtros">
      <button @click="categoriaSeleccionada = ''">Todas</button>
      <button @click="categoriaSeleccionada = 'Ropa Hombre'">Hombre</button>
      <button @click="categoriaSeleccionada = 'Ropa Mujer'">Mujer</button>
      <button @click="categoriaSeleccionada = 'Joyería'">Joyería</button>
      <button @click="categoriaSeleccionada = 'Electrónica'">Electrónica</button>
    </div>

    <!-- PRODUCTOS -->
    <div class="grid">
      <ProductCard
        v-for="producto in productosFiltrados"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard
  },

  data() {
    return {
      productos: [],
      categoriaSeleccionada: ""
    };
  },

  computed: {
    productosFiltrados() {
      if (!this.categoriaSeleccionada) {
        return this.productos;
      }
      return this.productos.filter(
        p => p.category === this.categoriaSeleccionada
      );
    }
  },

  methods: {
    traducirCategoria(cat) {
      if (cat === "electronics") return "Electrónica";
      if (cat === "jewelery") return "Joyería";
      if (cat === "men's clothing") return "Ropa Hombre";
      if (cat === "women's clothing") return "Ropa Mujer";
      return cat;
    },

    traducirTexto(texto) {
      return texto
        .replace("Men", "Hombre")
        .replace("Women", "Mujer")
        .replace("Shirt", "Camisa")
        .replace("Jacket", "Chaqueta");
    }
  },

  async mounted() {
    const res = await axios.get("https://fakestoreapi.com/products");

    this.productos = res.data.map(p => ({
      id: p.id,
      title: this.traducirTexto(p.title),
      price: p.price,
      description: this.traducirTexto(p.description),
      image: p.image,
      category: this.traducirCategoria(p.category)
    }));
  }
};
</script>

<style scoped>
.contenedor {
  padding: 20px;
}

.titulo {
  text-align: center;
  color: #0d3b66;
  font-size: 32px;
}

.filtros {
  text-align: center;
  margin: 20px;
}

.filtros button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: #caf0f8;
  cursor: pointer;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>