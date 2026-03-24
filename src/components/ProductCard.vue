<template>
  <div class="card">
    <img :src="producto.image" class="imagen" />

    <h3>{{ producto.title }}</h3>

    <p>{{ producto.description.substring(0, 80) }}...</p>

    <p class="precio">
      {{ formatearPrecio(producto.price) }}
    </p>

    <button>Ver más</button>
  </div>
</template>

<script>
export default {
  props: ["producto"],
  methods: {
    formatearPrecio(valor) {
      return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP"
      }).format(valor * 900);
    }
  }
};
</script>

<style scoped>
.card {
  background: white;
  padding: 15px;
  border-radius: 15px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.imagen {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

.precio {
  color: #1abc9c;
  font-weight: bold;
}

button {
  background: #1abc9c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
}
</style>