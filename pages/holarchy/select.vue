<template>
  <div class="container">
    <div class="title">
      <p>holarchy</p>
    </div>
    <div class="order">
      <p>1.Select a video from youtube and paste link below.</p>
    </div>
    <div class="search">
      <form v-on:submit.prevent="submitURL">
        <label class="ef">
          <i class="fas fa-search"></i>
          <input type="text" v-model="youtubeURL" placeholder="URL of YouTube" />
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import urlParser from "js-video-url-parser";

export default {
  data() {
    return {
      youtubeURL: ""
    };
  },
  methods: {
    submitURL() {
      //console.log(this.youtubeURL);
      const url = this.youtubeURL;
      const parsedData = urlParser.parse(url);
      if (!parsedData) {
        this.$router.push({
          path: "404"
        });
      }
      if (parsedData.provider != "youtube") {
        this.$router.push({
          path: "404"
        });
      } else {
        console.log(parsedData.id);
        this.$router.push({
          path: "decision",
          query: { url: this.youtubeURL }
        });
      }
    }
  }
};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.title {
  text-align: center;
}

.title p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 62px;
  width: 900px;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-style: normal;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 11px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.order p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 278px;
  width: 900px;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-style: normal;
  font-size: 30px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.fa-search {
  color: #ffffff;
  font-size: 25px;
  transform: scaleX(-1);
}

.search {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 379px;
}

.search input[type="text"] {
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 30px;
  box-sizing: border-box;
  width: 40%;
  padding: 0em;
  padding-bottom: 1.5px;
  padding-left: 2px;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #cbcbcb;
  border: none;
  border-bottom: 2px solid #ffffff;
  background: transparent;
}

.ef input[type="text"]:focus {
  border-bottom: 2px solid #f3373d;
  outline: none;
}
</style>
