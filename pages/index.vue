<template>
  <div class="container">
    <transition name="page">
      <nuxt />
    </transition>
    <div class="pageTitle">
      <p>AI-visual</p>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

export default {};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.pageTitle p {
  text-align: center;
  padding-top: 18%;
  padding-bottom: 24%;
  display: block;
  width: 100%;
  font-family: neue-haas-grotesk-text, sans-serif;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
</style>
