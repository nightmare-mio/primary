<template>
  <div class="comments-box">
    <div class="mr_column_10 clear_float">
      <!-- todo 美化样式 -->
      <div class="github_username">
        <!-- todo 未登入时候隐藏  -->
        <span v-if="userInfo == null"> github用户名 </span>
        <!-- todo 添加登出操作 -->
        <span v-else class="action_cursor" @click="open(userInfo.html_url)">
          {{ userInfo.login }}
        </span>
      </div>
    </div>
    <div class="gt-header">
      <span class="action_cursor avatar">
        <span v-if="userInfo == null">
          <!-- todo Github图标点击登入 -->
          <github theme="filled" size="50" fill="#e6e9f3" />
        </span>
        <span v-else>
          <a :href="userInfo.html_url" target="_blank">
            <img
              :src="userInfo.avatar_url"
              class="radius-5px"
              :alt="userInfo.html_url"
              width="50"
            />
          </a>
        </span>
      </span>
      <textarea
        class="common-textarea"
        :placeholder="userInfo == null ? '请登入后评论' : '支持markDown语法'"
        style="height: 5rem"
        v-model="content"
      >
      </textarea>
    </div>
    <div class="mr_column_10 clear_float">
      <div class="right_float">
        <div
          class="button button-primary button-rounded button-normal login_btn"
          @click="auth"
          v-if="userInfo == null"
        >
          使用Github登入
        </div>
        <div v-else>
          <span
            class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
            @click="readonly"
          >
            预览
            <!-- todo md预览 -->
          </span>
          <span
            class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
            @click="release"
          >
            评论
            <!-- todo 评论 -->
          </span>
        </div>
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
import { post } from "@/axios/axios";
import { auth, commentapi } from "@/apis/api";

export default {
  components: {
    Github,
    Comment,
  },
  data() {
    return { userInfo: null, content: null };
  },
  methods: {
    auth() {
      const authorize_uri = "https://github.com/login/oauth/authorize";
      const client_id = "f48220e1b60084879128";
      const redirect_url = "http://localhost:8081/api/auth/rallback";
      window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_url=${redirect_url}`;
    },
    user() {
      var token = this.$cookies.get("token");
      post(auth.user, { token: token }).then((result) => {
        console.log("result===========", result.data.data);
        // TODO 把用户信息保存到user中
        this.userInfo = result.data.data;
      });
    },
    open(url) {
      window.open(url, "_blank");
    },
    readonly() {
      // TODO 预览
    },
    release() {
      post(commentapi.add, { content: this.content })
        .then((result) => {})
        .catch((err) => {});
      // TODO 评论
    },
  },
  mounted() {
    this.user();
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
