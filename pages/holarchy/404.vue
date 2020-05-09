<template>
  <div class="container">
    <div class="noGood">
      <p>holarchy</p>
    </div>
    <div class="message">
      <p>Not Found Youtube link.</p>
    </div>
    <div class="tryAgain">
      <router-link to="/holarchy/select">Try again.</router-link>
    </div>
  </div>
</template>

<script>
import urlParser from "js-video-url-parser";

export default {
  data() {
    return {
      thumbnailURL: ""
    };
  },
  created() {
    const url = this.$route.query.url;
    console.log(url);
    const parsedData = urlParser.parse(url);
    if (!parsedData) {
      console.log("正しいURLではありません");
    } else {
      console.log(parsedData.id);
      // https://i1.ytimg.com/vi/VIDEO ID/hqdefault.jpg
      this.thumbnailURL =
        "https://www.youtube.com/embed/" + parsedData.id + "?color=white";
    }
    return this.thumbnailURL;
  },
  methods: {
    getId() {
      this.$router.push({ path: "running", query: { url: this.thumbnailURL } });
    }
  }
};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.noGood {
  text-align: center;
  padding-bottom: 111px;
}

.noGood p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 900px;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 11px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.message {
  position: flex;
  text-align: center;
  padding-bottom: 278px;
}

.message p {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 900px;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 30px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.tryAgain {
  text-align: center;
  margin-bottom: 379px;
}

.tryAgain a {
  text-align: center;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 30px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.tryAgain a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #ffffff;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform 0.3s;
}

.tryAgain a:hover::after {
  transform: scale(1, 1);
}
</style>
