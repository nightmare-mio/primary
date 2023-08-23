<!--
 * @Author: nightmare-mio wanglongwei2009@qq.com
 * @Date: 2022-07-04 14:12:54
 * @LastEditTime: 2023-08-23 16:32:51
 * @Description: 
-->
<template>
  <span class="input input--haruki">
    <input
      v-model="stary_number"
      class="input__field input__field--haruki"
      :class="{ 'input__field--haruki-action': flag }"
      type="text"
      id="input-1"
      @focus="flag = true"
      @blur="isNull()"
    />
    <label class="input__label input__label--haruki" for="input-1">
      <span class="input__label-content input__label-content--haruki"
        >设置星星数量</span
      >
    </label>
  </span>
</template>

<script>
export default {
  data() {
    return {
      stary_number: "",
      flag: false,
    };
  },
  methods: {
    isNull() {
      console.log(this.stary_number);
      if (this.stary_number == "") {
        this.flag = false;
      }
    },
  },
};
</script>

<style>
.input {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 400px;
  width: calc(100% - 2em);
  vertical-align: top;
}

.input__field {
  position: relative;
  display: block;
  float: right;
  padding: 0.8em;
  width: 60%;
  border: none;
  border-radius: 0;
  background: #f0f0f0;
  color: #aaa;
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-appearance: none; /* for box shadows to show on iOS */
}

.input__field:focus {
  outline: none;
}

.input__label {
  display: inline-block;
  float: right;
  padding: 0 1em;
  width: 40%;
  color: #6a7989;
  font-weight: bold;
  font-size: 70.25%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input__label-content {
  position: relative;
  display: block;
  padding: 1em 0;
  font-size: 16px;
  width: 100%;
}

.graphic {
  position: absolute;
  top: 0;
  left: 0;
  fill: none;
}

.icon {
  color: #ddd;
  font-size: 150%;
}

/* Individual styles */

/* Haruki */

.input--haruki {
  margin: 4em 1em 1em;
}

.input__field--haruki {
  padding: 0.4em 0.25em;
  width: 100%;
  background: transparent;
  color: #afb5bb;
  font-size: 1.55em;
}

.input__label--haruki {
  position: absolute;
  width: 100%;
  text-align: left;
  pointer-events: none;
}

.input__label-content--haruki {
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.input__label--haruki::before,
.input__label--haruki::after {
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 4px;
  background: #6a7989;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.input__label--haruki::before {
  top: 0;
}

.input__label--haruki::after {
  bottom: 0;
}

.input__field--haruki-action
  + .input__label--haruki
  .input__label-content--haruki,
.input--filled .input__label-content--haruki {
  -webkit-transform: translate3d(0, -90%, 0);
  /* transform: translate3d(0, -90%, 0); */
}

.input__field--haruki-action + .input__label--haruki::before,
.input--filled .input__label--haruki::before {
  -webkit-transform: translate3d(0, -0.5em, 0);
  /* transform: translate3d(0, -0.5em, 0); */
}

.input__field--haruki-action + .input__label--haruki::after,
.input--filled .input__label--haruki::after {
  -webkit-transform: translate3d(0, 0.5em, 0);
  /* transform: translate3d(0, 0.5em, 0); */
}
.input__field--haruki-action {
  outline: none;
}
</style>