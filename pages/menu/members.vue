<template>
  <div class="container">
    <div class="members">
      <p>Members</p>
    </div>
    <div class="membersList">
      <p class="txt">
        Scott Allen :
        <a href="https://scottallen.ws/">scottallen.ws</a>
        <br />Yusuke Yamada :
        <a href="https://portfolio.yamad07.world/">portfolio.yamad07.world/yamad07</a>
        <br />Reo Anzai :
        <a href="https://reoanzai.com/">reoanzai.com</a>
        <br />Ryo Nishikado :
        <a href="https://ryo-simon-mf.github.io/">ryo-simon-mf.github.io/</a>
        <br />Santa Naruse :
        <a href="https://santa-sukitoku.github.io/">santa-sukitoku.github.io/</a>
        <br />Aina Ono
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.members p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 900px;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-style: normal;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
  padding-bottom: 146px;
}

.membersList {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 292px;
}

.membersList p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 80px;
  color: #ffffff;
  width: 900px;
  font-family: neue-haas-grotesk-text, sans-serif;
  font-style: normal;
  font-size: 20px;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
  padding-bottom: 15px;
}

.membersList a {
  font-family: neue-haas-grotesk-text, sans-serif;
  font-size: 20px;
  line-height: 30px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.membersList a::after {
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

.membersList a:hover::after {
  transform: scale(1, 1);
}
</style>
