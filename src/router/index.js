import { createRouter, createWebHistory } from "vue-router";
import ProductsDetailPage from "../views/ProductDetailPage.vue";
import ProductsPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
const routes = [
  {
    path: "/",
    name: "Product",
    component: ProductsPage,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductsDetailPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/:catchAll(.*) ",
    component: NotFoundPage,
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
