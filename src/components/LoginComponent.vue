<template>
     <h2>Login Form </h2>
    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Your Email"/>
        <input type="password" v-model="password" placeholder="Enter Your Password"/>
        <button @click="login">Login</button> 
        <p><router-link to="/sign-up">Sign Up</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'LoginComponent',    
        data(){
            return{
                 email:'',
                password:''
            }
        },
        methods:{
            async login(){
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

                if(result.status==200 && result.data.length>0){
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'HomePage'})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'HomePage'});
            }
        }  
    }
</script>