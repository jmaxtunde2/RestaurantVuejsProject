<template>
<HeaderComponent/>
    <h1>Add new resto </h1>
    <form class="addResto">
        <input type="text" v-model="restaurant.name" placeholder="Enter name"/>
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact"/>
        <input type="text" v-model="restaurant.address" placeholder="Enter address"/>
        <button @click="addResto">Add </button>
    </form>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default{
    name:"AddResto"
    ,
    data(){
       return{
         restaurant:{
            name:'',
            contact:'',
            address:'',
         }
       }

    },
    methods:{
       async addResto(){
            // console.warn(this.name,this.contact,this.address)
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });

             if(result.status == 201){
             this.$router.push({name:'HomePage'})
           }

            console.warn(result);

        }
    },
    components:{
        HeaderComponent
    },

        mounted(){
            let user = localStorage.getItem('user-info');

            if(!user){
                this.$router.push({name:'SignUp'});
            }
        }   
}
</script>

<style scoped>

</style>
