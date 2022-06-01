<template>
<div>
  <Navigation />
<div id="content">
  <section>
      <p>This website is to practice package Axios and SCSS language.</p>
  </section>
  </div>
</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: { Navigation },
    name: "home",
}
</script>

<style scoped lang="scss">
 #content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 6%;
    section{
    width: 80%;
    text-align: center;
    p{
        color: var(--third-color);
        font-size: 2.5rem;
        letter-spacing: .3rem;
    }
}
}


</style>