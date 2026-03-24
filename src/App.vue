<template>
  <div id="app">
    <AppHeader />
    <ProductList />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ProductList from "./components/ProductList.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    ProductList,
    AppFooter
  }
};
</script>

<style>
body {
  background: #eaf6f6;
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
