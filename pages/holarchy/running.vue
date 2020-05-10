<template>
  <div class="container">
    <transition name="page">
      <nuxt />
    </transition>
    <div class="thirdTitle">
      <p>holarchy</p>
    </div>
    <div class="thirdOrder">
      <p>Extracting features, please wait few minutes.</p>
    </div>
    <div class="container border">
      <div class="d-flex justify-content-center" id="p5Canvas"></div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "../../const";
import settings from "../../middleware/axios";
export default {
  data() {
    return {
      youtubeURL: ""
    };
  },
  created() {
    const url = this.$route.query.url;
    console.log("url:" + url);
    this.youtubeURL = url;
  },
  // methods: {
  //   getId() {
  //     this.$router.push({
  //       path: "comparison",
  //       query: { url: this.youtubeURL }
  //     });
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.$axios
        .get(`${BASE_URL}/generate?q=${this.youtubeURL}`)
        .then(response => response.data)
        .then(json => {
          this.$router.push({
            path: "comparison",
            query: { url: this.youtubeURL, video_id: json.video_id }
          });
        })
        .catch(err => {
          this.$router.push({
            path: "error",
            query: { message: err.response.data.message }
          });
        });
    });
    const script = function(p5) {
      let angle = 0.0;
      let scal = 20;
      let speed = 0.08;
      let val = 40;
      p5.setup = _ => {
        let canvas = p5.createCanvas(80, 80);
        canvas.parent("p5Canvas");
      };
      p5.draw = _ => {
        p5.fill(0, 14);
        p5.rect(10, 0, 100, 100);
        p5.fill(355);
        p5.noStroke();
        let x = val + p5.cos(angle) * scal;
        let y = val + p5.sin(angle) * scal;
        p5.circle(x, y, 10);
        angle += speed;
      };
    };
    const P5 = require("p5");
    new P5(script);
  }
};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");
.thirdTitle p {
  text-align: center;
  display: block;
  margin: 0px;
  width: 100%;
  font-family: neue-haas-grotesk-text, sans-serif;
  padding-bottom: 275px;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 11px;
  color: #ffffff;
  opacity: 1;
}
.thirdOrder {
  position: flex;
  text-align: center;
  padding-bottom: 61px;
}
.thirdOrder p {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100%;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 30px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}
.justify-content-center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  padding-bottom: 379px;
}
</style>