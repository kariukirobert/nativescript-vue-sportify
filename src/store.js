import Vue from 'vue';
import Vuex from 'vuex';
import * as ApplicationSettings from "application-settings";

Vue.use(Vuex);

export default new Vuex.Store({
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
    },
    actions: {

    }
});