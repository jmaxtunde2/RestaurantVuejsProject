<template>
<HeaderComponent/>
    <h1> Welcome {{name}} to the Home page </h1>

    <table border="1">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
        </tr>
        <tr v-for="item in restaurants " :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td><router-link :to="'/update-restaurant/'+item.id">Update</router-link></td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:"HomePage"
    ,
    data(){
        return{
            name:'',
            restaurants:[]
        }
    },
    components:{
        HeaderComponent
    },

       async mounted(){
            let user = localStorage.getItem('user-info');

            this.name = JSON.parse(user).name;
            if(!user){
                this.$router.push({name:'SignUp'});
            }

            let result = await axios.get("http://localhost:3000/restaurant");

            console.warn(result)

            this.restaurants = result.data;

        }   
}
</script>
<style scoped>
    td{
        width: 160px;
        height: 40px;
    }
</style>