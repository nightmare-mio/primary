<template>
  <div id="menu-main">
    <div
      :class="{ menu_show: action[0] }"
      class="menu-item"
      @mouseleave="action[0] = false"
      @click="$router.push('/')"
    >
      <span v-if="action[0]" class="ico_text action_cursor">首页</span>
      <home
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[0] = true"
        class="action_cursor"
      />
    </div>
    <div
      :class="{ menu_show: action[1] }"
      class="menu-item"
      @mouseleave="action[1] = false"
      @click="$router.push('/note')"
    >
      <span v-if="action[1]" class="ico_text action_cursor">笔记</span>
      <notes
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[1] = true"
        class="action_cursor"
      />
    </div>
    <div
      :class="{ menu_show: action[2] }"
      class="menu-item"
      @mouseleave="action[2] = false"
      @click="$router.push('/Tools')"
    >
      <span v-if="action[2]" class="ico_text action_cursor">工具箱</span>
      <tool
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[2] = true"
        class="action_cursor"
      />
    </div>
    <div
      :class="{ menu_show: action[3] }"
      class="menu-item"
      @mouseleave="action[3] = false"
      @click="$router.push('/cattery')"
    >
      <span v-if="action[3]" class="ico_text action_cursor">藏猫馆</span>
      <cat
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[3] = true"
        class="action_cursor"
      />
    </div>
    <div
      :class="{ menu_show: action[4] }"
      class="menu-item"
      @mouseleave="action[4] = false"
      @click="$router.push('/friendChain')"
    >
      <span v-if="action[4]" class="ico_text action_cursor">友链</span>
      <like
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[4] = true"
        class="action_cursor"
      />
    </div>
    <div
      :class="{ menu_show: action[5] }"
      class="menu-item"
      @mouseleave="action[5] = false"
      @click="$router.push('/about')"
    >
      <span v-if="action[5]" class="ico_text action_cursor">关于我</span>
      <user
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[5] = true"
        class="action_cursor"
      />
    </div>
    <div
      :class="{ menu_show: action[6] }"
      class="menu-item"
      @mouseleave="action[6] = false"
      @click="$router.push('/setting')"
    >
      <span v-if="action[6]" class="ico_text action_cursor">设置</span>
      <setting-config
        theme="outline"
        size="22"
        fill="#ffffff"
        @mouseenter="action[6] = true"
        class="action_cursor"
      />
    </div>
  </div>
</template>

<script>
import {
  Home,
  Notes,
  Tool,
  Like,
  User,
  SettingConfig,
  Cat,
} from "@icon-park/vue-next";

export default {
  components: {
    Home,
    Notes,
    Tool,
    Like,
    User,
    SettingConfig,
    Cat,
  },
  data() {
    return {
      action: [],
    };
  },
};
</script>

<style>
body {
  color: #ffffff;
}
.menu_show {
  color: rgb(255, 255, 255);
  animation: shake 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards,
    show 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
#menu-main {
  display: inline-block;
  justify-content: end;
  position: fixed;
  width: 10rem;
  padding-top: 145px;
  height: 22.5rem;
}
.menu-item {
  float: right;
  clear: both;
  padding: 8px;
  /*存在换行符，有具体大小，所以会产生间隙*/
}
@keyframes shake {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(4px, 0, 0);
  }
}
@keyframes show {
  from {
    color: rgba(255, 255, 255, 0);
  }
  to {
    color: rgba(255, 255, 255, 1);
  }
}
</style>
