<template>
  <div class="grid-wrap">
    <ProductGridItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductGridItem from "./ProductGridItem";
export default {
  name: "ProductGrid",
  props: ["products"],
  components: {
    ProductGridItem,
  },
};
</script>
