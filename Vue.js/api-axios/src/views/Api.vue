<template>
<div>
  <Navigation />
  <div id="content">
  <button @click="getCharacters">GET CHARACTERS</button>
  <section id="cards">
      <!-- looping through the characters array and display its data -->
  <article v-for="(character, index) in characters" :key="index">
        <p id="name">{{ character.name }} <br> Nickname: {{ character.nickname }}</p>
        <img :src="character.img" />
      </article>
    </section>
    <p class="loading" v-if="loading">Loading...</p>
  </div>
</div>
</template>

<script>
// I will use package axios to fetch data
import axios from 'axios';
import Navigation from '@/components/Navigation.vue'
export default {
  components: { Navigation },
  data(){
      return{
      characters: [],
      loading: false
      }
  },
    methods: {
    getCharacters(){
        this.loading = true;
        // resetting the array to make sure we add the data to an empty array
        this.characters = []
     axios.get('https://www.breakingbadapi.com/api/characters')
     .then(data => {
        this.characters = data.data
     this.loading = false
     }).catch((error) => {
         console.log(error)
     })
    }
}
}
</script>

<style lang="scss" scoped>
#content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    button{
    margin-top: 10vh;
    width: 12rem;
    height: 5rem;
    border-radius: 10px;
    background: #6F2232;
    font-weight: 600;
    letter-spacing: .15rem;
    color: var(--third-color);
    cursor: pointer;
    font-size: 1.5rem;
    box-shadow:  1px 1px 20px #2f0e15,
                -1px -1px 20px #af364f;
}
    #cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        article {
        width: 20%;
        box-shadow: 2px 2px 6px 1px #0d161c;
        height: 30%;
        background-color: var(--secondary-color);
        margin: 1rem;
        margin-top: 15vh;
        padding: 5px;
                p{
        color: #fff;
        font-size: 2rem!important;
        letter-spacing: .1rem;
            }
            img {
        width: 50%;
        height: 70%;
        padding: 1rem;
                }
        }
    }
    .loading{
        position: absolute;
        top: 50%;
        left: 43%;
        font-size: 5rem;
        color: var(--third-color);
    }
}
@media (max-width: 600px) {
     article {
        width: 100%!important;
        }
}


</style>