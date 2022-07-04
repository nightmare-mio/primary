<template>
  <div id="index-title">
    <div class="title-box">
      <div class="Squares">
        <h1 class="index-title-1">三三の小屋</h1>
        <img v-bind:src="img33" class="title-img" />
      </div>
    </div>
    <Poem></Poem>
  </div>
</template>

<script>
import Poem from "../Poem.vue";
import img33 from "../../assets/img/33_正.png";
export default {
  components: { Poem },
  data() {
    return {
      img33: img33,
    };
  },
};
</script>

<style>
#index-title {
  display: inline-block;
  position: fixed;
  left: 10rem;
  height: 30rem;
  width: 20rem;
  vertical-align: top;
}
.title-box {
  width: inherit;
  height: 250px;
  padding: 125px 0 0 0;
}
.index-title-1 {
  text-align: center;
  font-size: 50px;
  user-select: none;
}
.title-img {
  width: 150px;
  margin: 10px 70px 0 70px;
  border-radius: 50%;
}
</style>
