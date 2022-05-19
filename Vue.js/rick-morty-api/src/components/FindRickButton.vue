<template>
<!-- button to call a global function that gets pickle rick name and image from an api -->
  <button @click="$store.commit('findRick')">Find Pickle Rick</button>
</template>

<script>
export default {
    name: "FindRickButton",
}
</script>

<style>
button{
    cursor: pointer;
    font-size: 5rem;
    padding: 5rem;
    margin-top: 10vh;
    border-radius: 28px;
    background: #ffd500;
    box-shadow:  16px 16px 100px #665500,
             -16px -16px 100px #ffff00;
}
</style>