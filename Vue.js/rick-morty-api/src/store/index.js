import { createStore } from 'vuex'
// I could've done this assignments easily without having to use vuex but I decided to use it because I am 
// currently practicing it for the project.

export default createStore({
    state: {
        // useless state i know  
        rickFound: false,
        characters: [],
        page: 1
    },
    mutations: {
        getCharacters(state){
            state.characters = [];
            fetch(`https://rickandmortyapi.com/api/character/?page=${state.page}`)
                .then(response => {
            if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          state.characters = data.results;
          console.log(state.characters);
        });
        },
        // If I had to describe mutations as far as I know I would say that they're 
        // basically js functions to change state values.
        findRick(state) {
            state.characters = [];
            fetch('https://rickandmortyapi.com/api/character/?name=pickle').then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((data) => {
                state.characters = data.results;
                state.rickFound = true;
                console.log(state.characters);
                console.log(state.rickFound);
            });
        },
        increasePageNumber(state){
            state.page++
            state.characters = [];
            fetch(`https://rickandmortyapi.com/api/character/?page=${state.page}`)
                .then(response => {
            if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          state.characters = data.results;
          console.log(state.characters);
        });
        }
    }
})