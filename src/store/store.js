import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        addtaskm:false,
        addmemberm:false
    },
    mutations:{
        addTaskModalt: state =>{
            state.addtaskm = true;
        },
        addTaskModalf: state =>{
            state.addtaskm = false;
        },
        addMemberModalt: state =>{
            state.addmemberm = true;
        },
        addMemberModalf: state =>{
            state.addmemberm = false;
        },
    }
})