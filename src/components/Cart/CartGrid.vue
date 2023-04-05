<template>
  <div class="grid-wrap">
    <CartGridItem
      v-for="product in cartItems"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import CartGridItem from "./CartGridItem";
export default {
  name: "CartGrid",
  components: {
    CartGridItem,
  },
  props: ["cartItems"],
};
</script>
