import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import LoginComponent from './components/LoginComponent.vue'
import AddResto from './components/AddResto.vue'
import UpdateResto from './components/UpdateResto.vue'
const routes=[
    {
        name:"HomePage",
        component:HomePage,
        path:"/"
    },
    {
        name:"SignUp",
        component:SignUp,
        path:"/sign-up"
    },
    {
        name:"LoginComponent",
        component:LoginComponent,
        path:"/login"
    },
    {
        name:"AddResto",
        component:AddResto,
        path:"/add-restaurant"
    },
    {
        name:"UpdateResto",
        component:UpdateResto,
        path:"/update-restaurant/:id"
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;