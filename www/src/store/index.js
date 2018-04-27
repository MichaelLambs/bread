import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router/index";

var production = !window.location.host.includes('localhost')
var baseUrl = production ? '//herokuapp.com/' : '//localhost:3000/'

var auth = axios.create({
  baseURL: baseUrl + 'auth/',
  withCredentials: true
});

var serverAPI = axios.create({
  baseURL: baseUrl + 'api/',
  withCredentials: true
});

vue.use(vuex)

export default new vuex.Store({
  state: {
    user: {},
    errorMessage: '',
    recipes: []
  },
  mutations: {
    // SETS RECIPES
    setRecipes(state, payload){
        state.recipes = payload;
    },
    // SETS CURRENT USER
    setUser(state, payload){
        state.user = payload
    },
    // SETS ERROR MESSAGE FOR BAD LOGIN/SIGNUP
    setErrMessage(state, payload){
        state.errorMessage = payload
    }
  },
  actions: {

    // GET ALL PUBLIC RECIPES
    topRecipes({commit, dispatch}, payload){
        serverAPI.get('recipes')
            .then(res => {
                commit('setRecipes', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    // LOGIN USER
    loginUser({commit, dispatch}, payload){
        auth.post('login', payload)
        .then(res => {
                commit('setUser', res.data.user)
                router.push({ name: 'Home'})
        })
        .catch(err => {
            commit('setErrMessage', "Incorrect email or password")
            console.log(err)
        })
    },
    // REGISTER NEW USER
    registerUser({commit, dispatch}, payload){
        auth.post('register', payload)
        .then(res => {
                commit('setUser', res.data.user)
                router.push({ name: 'Home'})
        })
        .catch(err => {
            commit('setErrMessage', "Username or email already in use")
            console.log(err)
        })
    },
    // AUTHENTICATE NEW USER
    authenticate({commit, dispatch}, payload){
        return new Promise((resolve, reject) => {
            auth.get('authenticate')
                .then(res => {
                    commit('setUser', res.data)
                    resolve()
                })
                .catch(err => {
                    router.push({name: 'Login'})
                    reject(err)
                })
        })
    }
  }
})
