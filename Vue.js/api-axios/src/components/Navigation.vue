<template>
<div>
  <nav id="bigNav">
      <ul>
        <router-link to="/"><li>HOME</li></router-link>
        <router-link to="/api"><li>API 1</li></router-link>
      </ul>
  </nav>
  <PhoneNavigation />
</div>
</template>

<script>
import PhoneNavigation from './PhoneNavigation.vue'
export default {
    components: {PhoneNavigation},
    name: "Navigation",
}
</script>

<style lang="scss" scoped>
#phoneNavigation{
    display: none;
    overflow: hidden;
}
nav{
    width: 100vw;
    height: 15vh;
    background-color: var(--secondary-color);
    ul{
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
            text-decoration: none;
            li{
                font-size: 3rem;
                list-style: none;
                color: var(--third-color);
                cursor: pointer;
                transition: .3s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
}
.router-link-active li {
    color: var(--primary-color);
}
</style>