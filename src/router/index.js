import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/Home/Home')
const Accident = () => import('views/accident/Accident')
const ProFile = () => import('views/profile/ProFile')
const ShowCat = () => import('views/showcat/ShowCat')

Vue.use(Router)



const routes = [
    {
        path: '',
        redirect: '/Home'
    },
    {
        path: '/Home',
        component: Home
    },
    {
        path: '/Accident',
        component: Accident
    },
    {
        path: '/ShowCat',
        component: ShowCat
    },
    {
        path: '/ProFile',
        component: ProFile
    }
]
const router = new Router({
    routes,
    mode: 'history'
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
export default router