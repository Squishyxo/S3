<template>
<div>
  <div class="api2Link"><a href="http://i464018.hera.fhict.nl/API_Assignment/index.html" target="_blank">API 2</a></div>
  <router-view/>
</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
:root{
  --primary-color: #1A1A1D;
  --secondary-color: #6F2232;
  --third-color: #fff;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Bebas Neue', cursive;
  overflow-x: hidden;
}
body{
  background-color: var(--primary-color);
}
.api2Link{
  position: fixed;
  bottom: 2%;
  right: 2%;
  width: 5vw;
  height: 10vh;
  border-radius: 10px;
  background: #6F2232;
  font-weight: 600;
  letter-spacing: .15rem;
  color: var(--third-color);
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: var(--third-color);
    text-decoration: none;
    font-size: 1.5rem;
  }
}
</style>
