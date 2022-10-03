<template>
    <router-view></router-view>
    <BackGroud></BackGroud>
</template>

<script>
import BackGroud from "./components/backGroud.vue";
import Home from "./pages/Home.vue";
export default {
  components: { BackGroud, Home },
};
</script>

<style></style>
