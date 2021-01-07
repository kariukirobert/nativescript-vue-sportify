import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        foods: [{
                id: 1,
                name: "food1",
                price: 10,
                feedbacks: [{ emojicon: "😃", desc: "fine" }, { emojicon: "😍", desc: "worthy" }],
                img: '~/assets/images/fd1.jpg'
            },
            {
                id: 2,
                name: "food2",
                price: 20,
                feedbacks: [{ emojicon: "👎", desc: "noo" }, { emojicon: "👍", desc: "yee" }],
                img: '~/assets/images/fd2.jpg'
            },
            {
                id: 3,
                name: "food3",
                price: 30,
                feedbacks: [{ emojicon: "😃", desc: "cheki" }, { emojicon: "😍", desc: "wonda" }],
                img: '~/assets/images/IMG-20201026-WA0017.jpg'
            },
        ]
    },
    mutations: {

    },
    actions: {

    }
});