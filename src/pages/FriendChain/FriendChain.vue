<template>
  <div class="wrapper">
    <a class="friendChain" href="">One</a>
    <a class="friendChain" href="">two</a>
    <a class="friendChain" href="">One</a>
    <a class="friendChain" href="">One</a>
    <a class="friendChain" href="">One</a>
    <a class="friendChain" href="">One</a>
    <a class="friendChain" href="">One</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  padding: 20px 0;
  width: inherit;
  /* 声明一个容器 */
  display: grid;
  /* 声明列的宽度,数字3表示的重复3次，即有3列宽度为200px*/
  /* 声明行间距和列间距 */
  grid-template-columns: repeat(5, 185px);
  grid-gap: 20px 0;
  /* 分别表示两行的高度 */
  grid-template-rows: repeat(5, 25px);
}
.friendChain {
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
}
.friendChain:hover {
  color: #5f91ff;
}
</style>