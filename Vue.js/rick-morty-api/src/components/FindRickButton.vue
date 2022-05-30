<template>
  <!-- button to call a global function that gets pickle rick name and image from an api -->
  <button @click="getCharacters">GET ALL CHARACTERS</button>
  <button @click="findRick">ONLY FIND PICKLE RICK</button>
</template>

<script>
export default {
  name: 'FindRickButton',
  methods: {
    // calling functions from the store
    getCharacters() {
      this.$store.commit('getCharacters');
    },
    findRick() {
      this.$store.commit('findRick');
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  /* margin-top: 10vh; */
  border-radius: 10px;
  background: #ffd500;
  box-shadow: 16px 16px 100px #665500, -16px -16px 100px #ffff00;
  margin: 5rem 1rem;
}
</style>
