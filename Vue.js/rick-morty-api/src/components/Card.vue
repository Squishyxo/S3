<template>
<!-- Empty card to display the name and the image -->
 <article id="main">
  <p id="name"></p>
  <img id="image" src="" alt="">
 </article>
</template>

<script>
export default {
    name: "Card",
}
</script>

<style>
  article {
    width: 30%;
    box-shadow: 2px 2px 6px 1px #0D161C;
    height: 50vh;
    background-color: #0D161C;
    border-right: 4px solid #0D161C;
    margin: auto;
    margin-top: 15vh;
}
  article p{
 color: #fff;
padding: 20px;
}
</style>