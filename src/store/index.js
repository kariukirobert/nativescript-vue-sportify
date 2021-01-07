import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as ApplicationSettings from "application-settings";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        firstname: "",
        lastname: ""
    },
    mutations: {
        load(state) {
            if (ApplicationSettings.getString("store")) {
                this.replaceState(
                    Object.assign(state, JSON.parse(ApplicationSettings.getString("store")))
                );
            }
        },
        save(state, data) {
            state.firstname = data.firstname;
            state.lastname = data.lastname;
        }
    }
});

Vue.prototype.$store = store;

module.exports = store;