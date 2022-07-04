<template>
  <div class="comment-box clear_float">
    <img src="/33_正.ico" class="avatar-img radius-5px" />
    <div class="common-textarea view">
      <div>
        <span class="pa_right_10">
          <a href="https://github.com/nightmare-mio" class="username">用户1</a>
        </span>
        <span class="font-grey">1小时前</span>
      </div>
      <div class="mr_column_10">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "评论1",
    };
  },
};
</script>

<style>
.view {
  border: 1px solid;
  background-color: var(--black);
  border-radius: 5px;
}
.avatar-img {
  width: 50px;
  display: inline-block;
}
.username {
  font-weight: 500;
  text-decoration: none;
  color: #5f91ff;
}
.radius-5px {
  border-radius: 5px;
}
</style>