import { createStore } from 'vuex'
// I could've done this assignments easily without having to use vuex but I decided to use it because I am 
// currently practicing it for the project.

export default createStore({
    state: {
        // useless state i know  
        rickFound: false
    },
    mutations: {
        // If I had to describe mutations as far as I know I would say that they're 
        // basically js functions to change state values.
        findRick(state) {
            fetch('https://rickandmortyapi.com/api/character/?name=pickle').then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((data) => {
                console.log(data.results[0].name)
                state.rickFound = true;
                console.log(state.rickFound);
                document.getElementById('name').innerHTML = data.results[0].name;
                document.getElementById('image').src = data.results[0].image;
            });
        }
    }
})