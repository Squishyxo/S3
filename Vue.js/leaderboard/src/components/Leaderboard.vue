<template>
<div>
    <!-- This form is hidden until a button is clicked that is why I used v-if with the help of store as well -->
    <form @submit.prevent="addStudent" id="addForm" v-if="popUp">
        <div @click="closeForm" class="close">&#x2718;</div>
        <h2>ADD A NEW STUDENT</h2>
        <div>
        <label for="name">Name</label>
        <input v-model="name" class="nameInput" type="text" name="student" id="student" placeholder="Enter the student name" required>
        <label for="points">Points</label>
        <input v-model="points" class="passwordInput" type="number" name="points" id="points" placeholder="Enter the student's points" required>
        <button type="submit">+</button>
        </div>
    </form>
    <img @click="switchOrder" src="../assets/arrow.png" class="switchOrder"/>
    <div v-if="addHovered" class="addStudentLabel">ADD A NEW STUDENT</div>
    <!-- when clicking this button a function gets called which goes to the store to change the value of "popUp state" -->
  <button @click="addStudentForm"
    @mouseover="addHovered = true"
     @mouseleave="addHovered = false"
   class="addStudent">+</button>
<section id="table">
    <div class="header">
        <div>RANK</div>
        <div>NAME</div>
        <div>POINTS</div>
    </div>
    <!-- I used v-for because I don't know how many list item I should have. Therefore, v-for loops and creates an element for every object inside the array -->
    <ul id="leaderboard" v-for="(student, index) in students" :key="student.name">
        <!-- I added 1 because index starts from zero and that is not what I want here -->
        <li>#{{index+1}}</li>
        <li>{{student.name}}</li>
        <li>{{student.points}}</li>
    </ul>
</section>
</div>
</template>

<script>
// I could have imported every function from firebase with only one line but I just imported the functions that I used for faster program
import {
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
// I connectd firebase in a different file and here I am importing the database from that file
import db from '../database';
export default {
    name: "Navigation",
    data(){
        return{
            students: [],
            addHovered: false,
            name: '',
            hi: false,
            points: null
        }
    },
    computed: {
        popUp(){
            // this returns the stete of "popUp". I used this for v-if to know when to show the form
            return this.$store.state.popUp
        }
    },
    mounted: function () {
        // this function gets called immediately when loading the page
    this.getStudents();
  },
    methods: {
         getStudents(){
            //  this function connects to my firebase database to retrieve the data from there then it pushes the data to a local array
            onSnapshot(query(collection(db, 'students'), orderBy("points", "desc")), snapshot => {
         snapshot.docs.forEach(doc => {
          const data = doc.data();
          console.log(this.students);
            this.students.push(
              data
            );
        });
      });
        },
         switchOrder(){
            //  exactly the same as function getStudents but with the opposite order
            this.students = []
            onSnapshot(query(collection(db, 'students'), orderBy("points", 'asc')), snapshot => {
         snapshot.docs.forEach(doc => {
          const data = doc.data();
          console.log(this.students);
            this.students.push(
              data
            );
        });
      });
        },
        addStudent(){
            // I used v-model to store the input name and points then I used an external function "addDoc" to post new addition data to the database
            addDoc(collection(db, 'students'), {
                name: this.name,
                points: this.points,
            })
            this.closeForm()
            this.students = []
        },
        addStudentForm(){
            // this goes to the store to call a function "mutation" called addStudentForm
            this.$store.commit('addStudentForm')
        },
        closeForm(){
            // this goes to the store to call a function called closeForm
            this.$store.commit('closeForm')
        }
    }
}
</script>

<style lang="scss">
.addStudent{
    position: fixed;
    right: 8rem;
    top: 20rem;
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--secondary-color);
    border-radius: 7px;
    color: gold;
    background-color: var(--secondary-color);
    font-size: 2rem;
    cursor: pointer;
}
.addStudentLabel{
    position: fixed;
    right: 5rem;
    top: 16rem;
    width: 15rem;
    height: 3rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-size: 1.2rem;
    text-align: center;
    padding: 9px 0;
    border-radius: 3px;
    border: 3px solid gold;
}
.switchOrder{
    position: fixed;
    left: 5rem;
    top: 16rem;
    width: 100px;
    background-color: gold;
    cursor: pointer;
}
    #addForm{
        position: fixed;
        width: 60vw;
        height: 40vh;
        background: var(--primary-color);
        left: 20%;
        top: 30%;
        border-radius: 1rem;
        border: 2px solid #fff;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h2, div{
            text-align: center;
            // padding-top: 2rem;
            color: var(--secondary-color);
            font-size: 2rem;
            input{
                width: 50vw;
                height: 5vh;
                margin: 1rem;
                padding: 1rem;
                background-color: var(--primary-color);
                border: 2px solid var(--secondary-color);
                font-size: 1.5rem;
                color: #fff;
                &:focus{
                border: 5px solid gold;
            }
            }
        }
        button{
            width: 10vw;
            height: 5vh;
            color: #fff;
            font-size: 1.5rem;
            background-color: var(--secondary-color);
            cursor: pointer;
        }
        .close{
            position: absolute;
            right: 2rem;
            top: 1rem;
            cursor: pointer;
        }
    }
    #table{
        width: 60%;
        margin: auto;
        margin-top: 5rem;
        background-color: var(--secondary-color);
        font-size: 2rem;
        padding: 2rem 2rem;
        margin-bottom: 10rem;
        box-shadow: gold 0px 19px 38px, gold 0px 15px 12px;
        .header{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        #leaderboard{
            margin-top: 1.5rem;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
            list-style: url('../assets/rocket--.png');
            background-color: gold;
            height: 3rem;
            border-radius: .5rem;
            border: 2px solid var(--primary-color);
        }
    }
</style>