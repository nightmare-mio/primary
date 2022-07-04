<template>
  <div class="search-box">
    <div @mouseleave="inputIsNull()" class="search pa_5">
      <search
        theme="outline"
        size="20"
        fill="#000000"
        class="action_cursor pa_5"
        @mouseenter="mouse_flag = true"
      />
      <input
        type="text"
        :class="mouse_flag ? 'search_input_active' : 'search_input'"
        class="search_input_base"
        @focus="focus_action = true"
        @blur="inputIsNull(false)"
        v-model="text"
      />
    </div>
  </div>
</template>

<script>
import { Search } from "@icon-park/vue-next";
export default {
  components: {
    Search,
  },
  data() {
    return {
      mouse_flag: false,
      text: "",
      focus_action: false,
    };
  },
  methods: {
    inputIsNull(focus_action) {
      if (focus_action != undefined) {
        this.focus_action = focus_action;
      }
      if (this.focus_action === false) {
        if (this.text === "") {
          this.mouse_flag = false;
        }
      }
    },
  },
};
</script>

<style>
.search-box {
  margin: 20px 0 0 0;
}
.search {
  background-color: #ffffff;
  border-radius: 50px;
  display: inline-block;
}
.search_input_active {
  animation: search 0.6s cubic-bezier(0.25, 1, 0.5, 1) alternate both;
}
.search_input {
  animation: search_down 0.6s cubic-bezier(0.25, 1, 0.5, 1) alternate both;
  width: 0px;
}
.search_input_base {
  border: none;
  outline: none;
  vertical-align: 5px;
}
@keyframes search {
  from {
    width: 0px;
  }
  to {
    width: 300px;
  }
}
@keyframes search_down {
  from {
    width: 300px;
  }
  to {
    width: 0px;
  }
}
</style>
