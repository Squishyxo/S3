<template>
  <div>
    <!-- Empty card to display the name and the image -->
    <section id="content">
      <article v-for="(character, index) in characters" :key="index" id="main">
        <p id="name">{{ character.name }}</p>
        <img :src="character.image" />
        <p>{{ character.gender }}</p>
      </article>
    </section>
    <button class="nextBtn" @click="increasePageNumber">Next Page</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
  methods: {
    getCharacters() {
      this.$store.commit('getCharacters');
    },
    increasePageNumber() {
      this.$store.commit('increasePageNumber');
    },
  },
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
article {
  width: 15%;
  box-shadow: 2px 2px 6px 1px #0d161c;
  height: 35%;
  background-color: #0d161c;
  border-right: 4px solid #0d161c;
  margin: auto;
  margin-top: 15vh;
}
article p {
  color: #fff;
  padding: 20px;
}
img {
  width: 70%;
}
p {
  margin: 0.6rem;
}
.nextBtn {
  position: relative;
  bottom: 1%;
  margin: 3rem;
}
</style>
