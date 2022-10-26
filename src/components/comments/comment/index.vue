<!--
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-07-02 14:17:33
 * @LastEditTime: 2022-10-26 17:20:14
 * @Description: 
-->
<template>
  <div class="comment-box clear_float">
    <a :href="htmlUrl" target="_blank">
      <img :src="avatar" class="avatar-img radius-5px" :alt="htmlUrl" />
    </a>
    <div class="common-textarea view">
      <div>
        <span class="pa_right_10">
          <a :href="htmlUrl" class="username" target="_blank">{{ username }}</a>
        </span>
        <span class="font-grey">{{ datetime }}</span>
      </div>
      <div class="mr_column_10">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: { type: String, default: "评论1" },
    username: { type: String, default: "用户1" },
    avatar: { type: String, default: "/33_正.ico" },
    htmlUrl: { type: String, default: "https://github.com/nightmare-mio" },
    datetime: { type: String, default: "2022-10-25 00:00:00" },
  },
  data() {
    return {};
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
