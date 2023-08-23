
<template>
  <div class="clear_float">
    <a :href="htmlUrl" target="_blank">
      <img :src="avatar" class="avatar-img radius-5px" :alt="htmlUrl" />
    </a>
    <div class="common-textarea view block col90">
      <div class="block">
        <span class="pa_right_10">
          <a :href="htmlUrl" class="username" target="_blank">{{ username }}</a>
        </span>
        <span class="font-grey">{{ datetime }}</span>
        <!-- todo 回复功能 移动到最右边 水平对齐-->
        <!-- todo 回复功能 点击后跳转到输入框 -->
        <span class="action_cursor">
          <back-one theme="outline" size="24" fill="#4a90e2" @click="reply" />
        </span>
      </div>
      <div>
        <md-editor
          class="md-preview"
          v-model="msg"
          previewOnly
        />
      </div>
      <div class="pa_column_5" v-for="(item, index) in children" :key="index">
        <comment
          :id="item.comment.id"
          :msg="item.comment.content"
          :username="item.login"
          :avatar="item.avatarUrl"
          :htmlUrl="item.htmlUrl"
          :datetime="item.comment.insertDateTime"
          :children="item.children"
          :parent="item.comment.parent"
        ></comment>
      </div>
    </div>
  </div>
</template>

<script>
import { BackOne } from "@icon-park/vue-next";
import MdEditor from "md-editor-v3";

export default {
  name: "comment",
  components: { BackOne, MdEditor },
  props: {
    id: { type: String, require: true },
    msg: { type: String, default: "评论1" },
    username: { type: String, default: "用户1" },
    avatar: { type: String, default: "/33_正.ico" },
    htmlUrl: { type: String, default: "https://github.com/nightmare-mio" },
    datetime: { type: String, default: "2022-10-25 00:00:00" },
    children: { type: Array, default: [] },
    parent: { type: String, default: null },
  },
  data() {
    return { idComment: null };
  },
  methods: {
    reply() {
      var _this = this;
      if (_this.$parent.conlist == undefined) {
        _this.$parent.$parent.replyToP(this.id, this.parent);
      } else {
        _this.$parent.replyToP(this.id);
      }
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
.common-textarea {
  line-height: 1.5;
  font-size: 18px;
  padding: 10px;
  float: right;
}
.block {
  display: inline-block;
}
.col90 {
  width: 90%;
}
.md-preview {
  background-color: var(--black);
  line-height: 1.2;
  font-family: "楷体";
  font-size: 18px;
}
</style>
