<template>
  <div class="contact_list">
    <div
      class="ico_display"
      :class="{ action: action[0] }"
      @mouseenter="action[0] = true"
      @mouseleave="action[0] = false"
    >
      <github-one
        class="action_cursor mr_10"
        theme="outline"
        size="22"
        fill="#ffffff"
        @click="githubLink()"
      />
    </div>
    <div
      class="ico_display"
      :class="{ action: action[1] }"
      @mouseenter="action[1] = true"
      @mouseleave="action[1] = false"
    >
      <mail
        class="action_cursor mr_10"
        theme="outline"
        size="22"
        fill="#ffffff"
        @click="mailLink()"
      />
    </div>
    <div
      class="ico_display"
      :class="{ action: action[2] }"
      @mouseenter="action[2] = true"
      @mouseleave="action[2] = false"
    >
      <tencent-qq
        class="action_cursor mr_10"
        theme="outline"
        size="22"
        fill="#ffffff"
      />
    </div>
  </div>
</template>

<script>
import { GithubOne, Mail, TencentQq } from "@icon-park/vue-next";
export default {
  components: {
    GithubOne,
    Mail,
    TencentQq,
  },
  data() {
    return {
      action: [false],
    };
  },
  methods: {
    githubLink() {
      window.open("https://github.com/nightmare-mio", "_blank");
    },
    mailLink() {
      window.open(
        "https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=wanglongwei2009@qq.com",
        "_blank"
      );
    },
  },
};
</script>

<style>
.contact_list {
  padding: 100px 0px;
  position: fixed;
  left: 10rem;
}
.action {
  animation: flash 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes flash {
  10%,
  90% {
    transform: translate3d(0, -1px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(0, -4px, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 4px, 0);
  }
}
.ico_display {
  display: inline-block;
}
</style>
