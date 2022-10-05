<template>
  <div class="comments-box">
    <div class="mr_column_10 clear_float">
      <div class="github_username">github用户名</div>
    </div>
    <div class="gt-header">
      <github
        class="action_cursor avatar"
        theme="filled"
        size="50"
        fill="#e6e9f3"
      />
      <textarea
        class="common-textarea"
        placeholder="支持markDown语法"
        style="height: 5rem"
      ></textarea>
    </div>
    <div class="mr_column_10 clear_float">
      <div class="right_float">
        <div
          class="button button-primary button-rounded button-normal login_btn"
          @click="auth"
        >
          使用Github登入
        </div>
        <span
          class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
          >预览</span
        >
      </div>
    </div>
    <div class="pa_column_10">
      <comment></comment>
    </div>
    <div class="pa_column_10">
      <comment></comment>
    </div>
  </div>
</template>

<script>
import { Github } from "@icon-park/vue-next";
import Comment from "./comment/index.vue";
import { get } from "@/axios/axios";
export default {
  components: {
    Github,
    Comment,
  },
  data() {
    return {};
  },
  methods: {
    auth() {
      const authorize_uri = "https://github.com/login/oauth/authorize";
      const client_id = "f48220e1b60084879128";
      const redirect_url = "http://192.168.245.1:8081/api/auth/rallback";
      window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_url=${redirect_url}`;
    },
  },
};
</script>

<style>
.comments-box {
  margin: 20px 0 0 0;
  display: inline-block;
  width: inherit;
}
.gt-header {
  display: inline-block;
  width: inherit;
}
.avatar {
  vertical-align: top;
}
.common-textarea {
  background-color: var(--black);
  line-height: 1.2;
  font-family: "楷体";
  font-size: 18px;
  color: #ffffff;
  padding: 10px;
  width: 52rem;
  resize: none;
  float: right;
}
.login_btn {
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  background-color: #3e8ab2;
}
.preview_btn {
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
  margin-left: 15px;
  display: inline-block;
}
.github_username {
  float: right;
}
.right_float {
  float: right;
}
</style>
