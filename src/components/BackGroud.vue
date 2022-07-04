<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.sky_init();
    // 响应式，当窗口改变时候重新绘制背景
    window.onresize = () => {
      this.sky_init();
    };
  },
  data() {
    return {
      hue: 232, // 十六进制颜色
      maxStars: 1500, // 星星的数量
    };
  },
  methods: {
    sky_init() {
      var _this = this;
      var canvas = this.$refs.canvas;
      // 获取画布
      var ctx = canvas.getContext("2d");
      // 设置画布的大小
      var w = (canvas.width = window.innerWidth);
      var h = (canvas.height = window.innerHeight);

      var stars = []; //星星的数组
      var count = 0;

      // --------------------------------------绘制星星-------------------------------------------

      // 星星的节点
      var canvas2 = document.createElement("canvas"),
        // 获取星星的画布
        ctx2 = canvas2.getContext("2d");
      // 设置星星的大小
      canvas2.width = 100;
      canvas2.height = 100;
      var half = canvas2.width / 2,
        // 绘制一个矩形，并用放射状/圆形渐变进行填充：(x0,y0,r0,x1,y1,r1)
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
      // gradient.addColorStop(stop 0~1,color);
      gradient2.addColorStop(0.025, "#fff");
      gradient2.addColorStop(0.1, "hsl(" + _this.hue + ", 61%, 33%)");
      gradient2.addColorStop(0.25, "hsl(" + _this.hue + ", 64%, 6%)");
      gradient2.addColorStop(1, "transparent");

      // 填充画布样式
      ctx2.fillStyle = gradient2;
      ctx2.beginPath(); // 起始一条路径，或重置当前路径
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill(); // 填充当前绘制（路径）

      var Star = function () {
        this.orbitRadius = _this.random(_this.maxOrbit(w, h));
        this.radius = _this.random(60, this.orbitRadius) / 12;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = _this.random(0, _this.maxStars);
        this.speed = _this.random(this.orbitRadius) / 900000;
        this.alpha = _this.random(2, 10) / 10;

        stars[count++] = this;
      };

      Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = _this.random(10);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
          canvas2,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius
        );
        this.timePassed += this.speed;
      };

      for (var i = 0; i < _this.maxStars; i++) {
        new Star();
      }

      (function animation() {
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "hsla(" + _this.hue + ", 64%, 6%, 0.9)";
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = "lighter";
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        }
        window.requestAnimationFrame(animation);
      })();
    },
    maxOrbit(x, y) {
      // 取max正方形对角线作直径，返回半径
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    },
    random(min, max) {
      // 返回min-max范围随机数
      // 如果传入参数小于2
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }
      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style type="text/css">
/* 置顶于左上角 */
* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}
canvas {
  position: fixed;
  display: block;
  z-index: -1;
  left: 0;
  top: 0;
}
</style>
