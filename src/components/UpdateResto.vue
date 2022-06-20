<template>
<HeaderComponent/>
    <h1>Update Restaurant </h1>
    <form class="addResto">
        <input type="text" v-model="restaurant.name" placeholder="Enter name"/>
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact"/>
        <input type="text" v-model="restaurant.address" placeholder="Enter address"/>
        <button @click="updateResto">Update </button>
    </form>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default{
    name:"UpdateResto" ,
    data(){
       return{
         restaurant:{
            name:'',
            contact:'',
            address:'',
         }
       }

    },
    components:{
        HeaderComponent
    },

    methods:{
        async updateResto(){
             const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });

             if(result.status == 200){
             this.$router.push({name:'HomePage'})
           }
        }
        },

        async mounted(){
            let user = localStorage.getItem('user-info');

            if(!user)
            {
                this.$router.push({name:'SignUp'});  
            }

            const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);

            this.restaurant = result.data;
             console.warn(result);

        }   
}
</script>
