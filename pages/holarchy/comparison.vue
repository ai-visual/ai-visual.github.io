<template>
  <div class="container">
    <div class="title">
      <p>holarchy</p>
    </div>
    <div class="comparisonVideo">
      <div class="thumbnail-youtube" v-if="this.youtubeURL">
        <iframe
          class="youtube"
          width="696"
          height="392"
          :src="this.youtubeURL"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="thumbnail-ai">
        <video width="696" height="392" controls>
          <source v-bind:src="this.videoURL" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="try">
      <router-link to="/holarchy/select">Try with a different video.</router-link>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "../../const";
import settings from "../../middleware/axios";

export default {
  data() {
    return {
      youtubeURL: "",
      videoURL: ""
    };
  },

  created() {
    const url = this.$route.query.url;
    this.youtubeURL = url;

    const video_id = this.$route.query.video_id;
    this.videoURL = `${BASE_URL}/video?id=${video_id}`;
  }
};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.title {
  text-align: center;
}

.title p {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 111px;
  width: 100%;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 11px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.comparisonVideo {
  margin: 0 auto;
}

.thumbnail-youtube {
  position: relative;
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  overflow: hidden;
  float: left;
}

.thumbnail-ai {
  position: relative;
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  overflow: hidden;
  float: right;
}

.youtube {
  padding-bottom: 122px;
  display: block;
  margin: auto;
  padding-left: 120px;
}

video {
  display: block;
  margin: auto;
  margin-right: 120px;
  margin-bottom: 122px;
  text-align: center;
}

.try {
  padding-bottom: 81px;
}

.try a {
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

.try a::after {
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

.try a:hover::after {
  transform: scale(1, 1);
}

.try {
  text-align: center;
}

@media screen and (max-width: 1665px) {
  .thumbnail-youtube {
    text-align: center;
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }

  .thumbnail-ai {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }

  .youtube {
    display: block;
    margin: auto;
    padding-bottom: 40px;
    padding-left: 0px;
  }

  video {
    display: block;
    margin: auto;
    margin-bottom: 62px;
  }
}

@media screen and (max-width: 720px) {
  .thumbnail-youtube {
    text-align: center;
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }

  .thumbnail-ai {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }

  .youtube {
    width: 100%;
    height: 80%;
    display: block;
    margin: auto;
  }

  video {
    width: 100%;
    height: 80%;
    display: block;
    margin: auto;
    margin-bottom: 62px;
  }
}
</style>
