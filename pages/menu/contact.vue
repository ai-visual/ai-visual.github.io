<template>
  <div class="container">
    <div class="contact">
      <p>Contact</p>
    </div>
    <div class="logo">
      <a href="https://cclab.sfc.keio.ac.jp/">
        <img src="~/assets/img/cclab-logo.png" alt />
      </a>
    </div>
    <div class="mail">
      <a href="mailto:sfc.cclab@gmail.com">sfc.cclab&#64;gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.contact {
  padding-bottom: 91px;
}

.contact p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100%;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-style: normal;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
}

.logo {
  text-align: center;
  padding-bottom: 92px;
}

.logo img {
  text-align: center;
  width: 30%;
}
@media screen and (max-width: 950px) {
  .logo img {
    text-align: center;
    width: 70%;
  }
}

.mail {
  text-align: center;
  padding-bottom: 112px;
}

.mail a {
  text-align: center;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 20px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.mail a::after {
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

.mail a:hover::after {
  transform: scale(1, 1);
}
</style>
