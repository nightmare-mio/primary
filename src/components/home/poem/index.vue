<template>
  <div id="index-poem">
    <span ref="typing" class="poem-font"> </span>
  </div>
</template>

<script>
import Typed from "typed.js";
import { poem } from "@/apis/api";
import { get } from "@/axios/axios";
export default {
  components: {
    Typed,
  },
  data() {
    return {
      text: [],
    };
  },
  methods: {
    init() {},
  },
  mounted() {
    let typing = this.$refs.typing;
    get(poem.kuangsan).then((result) => {
      this.text = new Array(result.data.msg);
      new Typed(typing, {
        strings: this.text,
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
        showCursor: false,
      });
    });
  },
};
</script>

<style>
#index-poem {
  /* padding-top: 125px; */
  display: inline-block;
  width: 19rem;
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
</style>
