<template>
  <div id="page-wrap">
    <div id="img-wrap">
      <img :src="product.imageUrl" />
    </div>
    <div id=" product-details">
      <div class="header">
        <h1>{{ product.name }}</h1>
        <h3 id="price">${{ product.price }}</h3>
      </div>

      <p>Average Rating:{{ product.averageRating }}</p>
      <button id="add-to-cart">Add to cart</button>
      <h4>Product Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import { products } from "../fake-data";

export default {
  name: "ProductsDetailPage",
  data() {
    return {
      product: products.find(
        (p) => p.id === this.$router.currentRoute._value.params.id
      ),
    };
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  top: 24px;
  right: 16px;
}

.green-button {
  background-color: green;
}

.grey-button {
  background-color: #888;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
