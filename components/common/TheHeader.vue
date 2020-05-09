<template>
  <header class="header">
    <div class="siteTitle">
      <ul>
        <li>
          <router-link to="/" class="site-title">AI-visual</router-link>
        </li>
      </ul>
    </div>
    <div class="menu">
      <ul class="menuList">
        <li class="works">
          <router-link to="#">Works</router-link>
          <ul class="worksList">
            <li>
              <router-link to="/holarchy/">holarchy</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/menu/about">About</router-link>
        </li>
        <li>
          <router-link to="/menu/members">Members</router-link>
        </li>
        <li>
          <router-link to="/menu/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
@import url("https://use.typekit.net/bvf7soa.css");

.menu {
  text-align: right;
}

.siteTitle ul li {
  list-style: none;
  min-width: 0px;
  float: left;
}

.siteTitle ul {
  padding-top: 30px;
  margin: 0%;
}

.siteTitle a {
  font-family: neue-haas-grotesk-text, sans-serif;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: italic;
  padding-left: 0px;
  font-size: 35px;
  font-style: italic;
  text-align: left;
  letter-spacing: 0px;
  color: #cbcbcb;
  opacity: 1;
}

.siteTitle a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #cbcbcb;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform 0.3s;
}

.siteTitle a:hover::after {
  transform: scale(1, 1);
}

.menu li {
  list-style: none;
  display: inline-block;
  min-width: 90px;
  margin-left: 60px;
}

.menu a {
  text-align: right;
  font-family: neue-haas-grotesk-display, sans-serif;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  font-style: normal;
  margin-left: 0px;
  letter-spacing: 0px;
  color: #cbcbcb;
  opacity: 1;
}

.menu a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #cbcbcb;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform 0.3s;
}

.menu a:hover::after {
  transform: scale(1, 1);
}

.menu ul {
  list-style-type: none;
  padding-top: 8px;
  padding-bottom: 93px;
  padding-right: 60px;
  padding-left: 0px;
  margin: 0px;
}

.menuList > li.works {
  position: relative;
}

.worksList li {
  margin-left: 0px;
}

ul .worksList {
  padding-bottom: 0px;
}

ul .worksList:hover {
  padding-bottom: 45px;
}

.worksList a {
  color: #00000000;
}

li.works ul.worksList {
  position: absolute;
  top: -7.5px;
  width: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

li.works:hover ul.worksList a {
  top: 45px;
  visibility: visible;
  opacity: 1;
  color: #cbcbcb;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>