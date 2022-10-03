<template>
  <div id="index-poem">
    <div>
      <div class="poem-font">
        <div class="line animation">
          <span>时幕天钟转轮回，崎曲泪离血染飞。</span>
        </div>
        <div class="line animation it">
          <span>狂焉病笑笑尘罪，三生只为一人归。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
#index-poem {
  /* padding-top: 125px; */
  display: inline-block;
  width: inherit;
  /* text-align: center; */
  margin: 0 16px;
  line-height: 1.6;
}
.poem-font {
  user-select: none;
  display: inline-block;
  font-family: "楷体";
  font-size: 18px;
}
.line {
  width: 100%;
  border-right: 2px solid #fff;
  white-space: nowrap;
  overflow: hidden;
}
.animation {
  animation: grow 2s steps(70) 1s normal both, blink 200ms infinite normal;
}
.it {
  animation-delay: 3.5s;
}
@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: 100%; /*段落长度 */
    border-right-color: transparent;
  }
  0% {
    border-right: 0;
  } /*光标起始位置不显示*/
  1% {
    border-right: 2px solid #fff;
  } /*光标显示*/
  99% {
    border-right: 2px solid #fff;
  }
  100% {
    border-right: 0;
  } /*结束位置光标不显示*/
}
@keyframes blink {
  from {
    border-right-color: #fff;
  }
  to {
    border-right-color: transparent; /*光标透明化*/
  }
}
</style>
