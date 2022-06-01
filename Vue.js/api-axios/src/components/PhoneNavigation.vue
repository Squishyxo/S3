<template>
<div>
      <section id="phoneNavigation">
          <h2>API</h2>
        <button @click="openNav" class="btn close-icon">
        <span></span>
        <span></span>
        <span></span>
            </button>
    <div class="overlay"></div>
    <div class="overlay2">
        <ul class="phoneNav">
            <router-link to="/"><li>HOME</li></router-link>
            <router-link to="/api1"><li>API 1</li></router-link>
            <router-link to="/api2"><li>API 2</li></router-link>
        </ul>
    </div>
    </section>
</div>
</template>

<script>
export default {
    methods: {
        openNav(){
            let btn = document.querySelector('.btn');
            let overlay = document.querySelector('.overlay');
            let overlay2 = document.querySelector('.overlay2');
            let nav = document.querySelector('.phoneNav');
            btn.classList.toggle('active');
            overlay.classList.toggle('active');
            overlay2.classList.toggle('active');
            nav.classList.toggle('active');
            
        },   
    }
}
</script>

<style>
#phoneNavigation{
    display: none;
    overflow: hidden;
}
@media (max-width: 600px) {
   #bigNav{
    display: none;
   } 
   #phoneNavigation{
       position: sticky;
       width: 100vw;
       height: 10vh;
       background-color: var(--secondary-color);
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
   #phoneNavigation h2{
       font-size: 3rem;
       margin-left: 2rem;
   }
   .overlay {
    width: 100vw;
    height: 90vh;
    background-color: var(--primary-color);
    position: fixed;
    bottom: 0%;
    left: 0%;
    transform: translatex(1000px);
    transition: .5s ease-in-out;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay.active {
    transform: translateY(0px);
}

.overlay2 {
    width: 95vw;
    height: 87vh;
    background-color: var(--secondary-color);
    position: fixed;
    bottom: 1.3%;
    left: 2.8%;
    transform: translatex(1000px);
    transition: 1.5s ease-in-out;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay2.active {
    transform: translateY(0px);
}
.phoneNav {
    position: fixed;
    font-size: 1.8rem;
    list-style: none;
    color: var(--primary-color);
    opacity: 0;
    transition: 2s ease-in-out;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.phoneNav a {
    text-decoration: none;
}

.phoneNav a li{
    margin: 20px;
    cursor: pointer;
    transition: all .5s;
    color: var(--primary-color);
    font-size: 4rem;
}

.phoneNav li:hover {
    transform: scale(1.2);
}

.phoneNav.active {
    opacity: 1;
}
.btn {
    position: absolute;
    top: 15%;
    right: 10%;
    z-index: 6;
    display: flex;
    width: 3rem;
    height: 4rem;
    outline: inherit;
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
}

.btn span {
    width: 45px;
    height: 3px;
    background: var(--primary-color);
    display: flex;
    position: absolute;
    transition: .3s;
}

.btn span:nth-child(1) {
    top: 20%;
}

.btn span:nth-child(2) {
    top: 60%;
    width: 35px;
}

.btn span:nth-child(3) {
    top: 40%;
    width: 27px;
}

.btn.is-active span {
    background: var(--primary-color);
}

.btn.active span:nth-child(1) {
    top: 50%;
    transform: rotate(-45deg);
}

.btn.active span:nth-child(2) {
    top: 50%;
    transform: rotate(45deg);
    width: 45px;
}

.btn.active span:nth-child(3) {
    display: none;
}
}
</style>