<template>
<img class="logo" src="../assets/logo.jpg" />
    <h2>Sign Up </h2>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Your Name"/>
        <input type="email" v-model="email" placeholder="Enter Your Email"/>
        <input type="password" v-model="password" placeholder="Enter Your Password"/>
        <button @click="signUp">Sign Up</button> 
        <p><router-link to="/login">Login</router-link></p>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name:"SignUp",    
        data(){
            return{
                name:'',
                password:'',
                email:''
            }
        },
        methods:{
            async signUp(){
                let result = await axios.post("http://localhost:3000/users",{
                    name:this.name,
                    email:this.email,
                    password:this.password
                });

                if(result.status == 201){
                    localStorage.setItem("user-info",JSON.stringify(result.data))
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

<style scoped>
    
</style>