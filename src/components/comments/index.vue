<template>
  <div class="comments-box">
    <div class="mr_column_10 clear_float">
      <!-- todo 美化样式 -->
      <div class="github_username">
        <!-- todo 未登入时候隐藏  -->
        <span v-if="userInfo == null"> 游客 </span>
        <!-- todo 添加登出操作 -->
        <a
          v-else
          :href="userInfo.html_url"
          target="_blank"
          style="text-decoration: none; color: #fff"
        >
          {{ userInfo.login }}
        </a>
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
      <!-- todo 在此处做字数限制255 致敬一下varchar -->
      <div class="block">
        <textarea
          class="textarea"
          :placeholder="userInfo == null ? '请登入后评论' : '支持markDown语法'"
          v-model="content"
          v-if="readonlymodel == false"
        >
        </textarea>
        <div v-else class="kuang">
          <md-editor
            class="md-preview"
            v-model="content"
            previewOnly
            style="width: 852px"
          />
        </div>
      </div>
    </div>
    <div class="mr_column_10 clear_float">
      <div class="right_float">
        <n-space justify="space-between">
          <n-button
            class="button button-primary button-rounded button-normal login_btn"
            style="margin-right: 10px"
            @click="auth"
            v-if="userInfo == null"
            >使用Github登入</n-button
          >
          <n-button
            class="button button-primary button-rounded button-normal login_btn"
            style="margin-right: 10px"
            @click="authQQ"
            v-if="userInfo == null"
            >使用QQ登入</n-button
          >
          <n-button
            class="button button-primary button-rounded button-normal login_btn"
            style="margin-right: 10px"
            @click="authWX"
            v-if="userInfo == null"
            >使用WX登入</n-button
          >
        </n-space>

        <div v-if="userInfo != null">
          <span>
            <!-- todo 预览和编辑太像了，至少颜色上做更改 明显点  -->
            <n-button
              class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
              @click="readonlymodel = true"
              v-if="readonlymodel == false"
            >
              预览
            </n-button>
            <n-button
              class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
              @click="readonlymodel = false"
              v-else
            >
              编辑
            </n-button>
          </span>
          <n-button
            class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
            @click="release"
            >评论</n-button
          >
          <n-button
            class="hero-cta button button-plain button-uppercase button-rounded preview_btn"
            @click="logout"
            >登出</n-button
          >
        </div>
      </div>
    </div>
    <div v-if="conlist != null">
      <div class="pa_column_10" v-for="(item, index) in conlist" :key="index">
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
import { Github } from "@icon-park/vue-next";
import Comment from "./comment/index.vue";
import { get, post } from "@/axios/axios";
import { auth, commentapi } from "@/apis/api";
import MdEditor from "md-editor-v3";
import { CLIENTID, REDIRECTURI } from "@/config/config";

// 用于新标签打开
MdEditor.config({
  markedRenderer(renderer) {
    renderer.link = (href, title, text) => {
      return `<a href="${href}" target="_blank">${text}</a>`;
    };

    return renderer;
  },
});
export default {
  components: {
    Github,
    Comment,
    MdEditor,
  },

  props: {
    idArticle: { type: String },
  },
  watch: {
    idArticle: {
      handler: function (newValue, oldValue) {
        this.id = newValue;
        this.getRelease(newValue);
      },
    },
    idComment: {
      handler: function (newValue, oldValue) {
        if (newValue != null) {
          this.content = "";
          var _this = this;
          var parent = _this.parent;
          debugger;
          var array = this.conlist;
          if (parent != null) {
            let item = array.find((item) => {
              return item.comment.id == parent;
            });
            array = item.children;
          }

          var item = array.find((item) => {
            return item.comment.id == newValue;
          });
          var login = item.login;
          this.content = "[@" + login + "](" + item.htmlUrl + ")";
        }
      },
    },
    content: {
      handler: function (newValue, oldValue) {
        if (newValue == "") {
          this.idComment = null;
          this.parent = null;
        }
      },
    },
  },
  data() {
    return {
      id: null,
      userInfo: null,
      content: null,
      token: null,
      conlist: null,
      idComment: null,
      readonlymodel: false,
      parent: null,
    };
  },
  methods: {
    logout() {
      // TODO 登出
    },
    authQQ() {
      // TODO qq授权
    },
    authWX() {
      // TODO Wx授权
    },
    auth() {
      const authorize_uri = "https://github.com/login/oauth/authorize";
      const client_id = CLIENTID;
      const redirect_uri = REDIRECTURI + "/" + this.$route.params.id;
      window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
    },
    user() {
      var token = this.token;
      post(auth.user, { token: token }).then((result) => {
        this.userInfo = result.data.data;
      });
    },
    open(url) {
      window.open(url, "_blank");
    },
    release() {
      var content = this.content;
      var idUser = this.userInfo.id;
      var id = this.id;
      var parent = this.idComment;
      if (this.parent != null) {
        parent = this.parent;
      }
      post(commentapi.add, {
        content: content,
        idUser: idUser,
        idArticle: id,
        parent: parent,
      }).then((result) => {
        if (result.data.msg == "添加成功") {
          this.content = null;
          this.$router.go(0);
        }
      });
    },
    getToken() {
      this.token = this.$cookies.get("token");
    },
    getRelease(id) {
      get(commentapi.add + "/" + id)
        .then((result) => {
          this.conlist = result.data.data;
        })
        .catch((err) => {});
    },
    replyToP(id, parent) {
      debugger;
      this.idComment = id;
      this.parent = parent;
    },
  },
  mounted() {
    this.getToken();
    this.user();
  },
};
</script>

<style scoped>
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
  background-color: var(--black);
  line-height: 1.2;
  font-family: "楷体";
  font-size: 18px;
  color: #ffffff;
  height: 100px;
  width: 52rem;
  padding: 10px;
  resize: none;
}
.width_52 {
  width: 52rem;
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
.block {
  display: inline-block;
  float: right;
}
.kuang {
  border: 1px solid;
}
.github_username {
  float: right;
}
.right_float {
  float: right;
}
.md-preview {
  background-color: var(--black);
  line-height: 1.2;
  font-family: "楷体";
  font-size: 18px;
  color: #ffffff;
  width: 52rem;
  padding: 10px;
  resize: none;
}
</style>
