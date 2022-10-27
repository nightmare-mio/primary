<!--
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-07-02 14:17:33
 * @LastEditTime: 2022-10-27 15:38:03
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
        <!-- todo 回复功能 移动到最右边 水平对齐-->
        <span class="action_cursor">
          <back-one theme="outline" size="24" fill="#4a90e2" @click="reply" />
        </span>
      </div>

      <div class="mr_column_10">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
import { BackOne } from "@icon-park/vue-next";

export default {
  components: { BackOne },
  props: {
    id: { type: String, require: true },
    msg: { type: String, default: "评论1" },
    username: { type: String, default: "用户1" },
    avatar: { type: String, default: "/33_正.ico" },
    htmlUrl: { type: String, default: "https://github.com/nightmare-mio" },
    datetime: { type: String, default: "2022-10-25 00:00:00" },
  },
  data() {
    return { idComment: null };
  },
  methods: {
    reply() {
      this.$parent.replyToP(this.id);
    },
  },
  mounted() {},
};
</script>

<style scoped>
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
.textarea {
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
