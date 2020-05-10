<template>
  <div class="container">
    <div class="secondTitle">
      <p>holarchy</p>
    </div>
    <div class="secondOrder">
      <p>2.If this is the video you've chosen, press Run.</p>
    </div>
    <div class="thumbnail" v-if="this.thumbnailURL">
      <iframe
        class="embedYoutube"
        width="870"
        height="490"
        :src="this.thumbnailURL"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="run">
      <nuxt-link to @click.native="getId">Run</nuxt-link>
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

.secondTitle {
  text-align: center;
  margin-bottom: 62px;
}

.secondTitle p {
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

.secondOrder {
  position: flex;
  text-align: center;
  padding-bottom: 43px;
}

.secondOrder p {
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

.embedYoutube {
  display: block;
  margin: auto;
  padding-bottom: 40px;
}

.run {
  text-align: center;
  padding-bottom: 81px;
}

.run a {
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

.run a::after {
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

.run a:hover::after {
  transform: scale(1, 1);
}

@media screen and (max-width: 875px) {
  .secondTitle {
    text-align: center;
    margin-bottom: 62px;
  }

  .secondTitle p {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    font-family: neue-haas-grotesk-text, sans-serif;
    font-size: 40px;
    font-style: normal;
    letter-spacing: 11px;
    color: #ffffff;
    opacity: 1;
    text-decoration: none;
  }

  .secondOrder {
    position: flex;
    text-align: center;
    padding-bottom: 43px;
  }

  .secondOrder p {
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

  .embedYoutube {
    width: 100%;
    height: 80%;
    display: block;
    margin: auto;
    padding-bottom: 40px;
  }
}
</style>
