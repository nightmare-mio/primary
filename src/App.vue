<template>
    <router-view></router-view>
    <BackGroud></BackGroud>
</template>

<script>
import BackGroud from "./components/BackGroud.vue";
import Home from "./pages/Home.vue";
export default {
  components: { BackGroud, Home },
};
</script>

<style></style>
