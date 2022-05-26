<template>
<div>
<nav>
    <p>Mohammed</p>
    <p>Leaderboard</p>
</nav>
</div>
</template>

<script>
export default {
    name: "Navigation",
}
</script>

<style lang="scss">
    nav{
        width: 100vw;
        height: 15vh;
        background-color: var(--secondary-color);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
        p{
            font-size: 3rem;
            cursor: pointer;
            transition: .3s;
            text-transform: uppercase;
        &:hover{
            color: gold;
        }
        }
    }
</style>