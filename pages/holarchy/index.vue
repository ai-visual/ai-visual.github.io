<template>
  <div class="container">
    <div class="start">
      <router-link to="/holarchy/select">holarchy</router-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.start {
  text-align: center;
}

.start a {
  text-align: center;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 40px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 11px;
  color: #ffffff;
  opacity: 1;
  margin-top: 18%;
  margin-bottom: 467px;
}

.start a::after {
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

.start a:hover::after {
  transform: scale(1, 1);
}
</style>
