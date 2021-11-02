import Vue from 'vue'
import Vuex from 'vuex'
// const state={
//     name:'宋彦涛'
// }
// const mutations={
//     budaicanshu(state){
//         state.name='不带参数传递'
//     },
//     daicanshu(state,payload){
//         state.name=payload.name
//     }
// }
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        name: '宋_涛',
        list: [{
            id: 1,
            name: '你好，Vuex',
            money: 122
        }]

    },
    getters: {
        // this.$getters.getters//调用
        lists2: (state) => {
            var numArr = state.lists.map(num => {
                return {
                    id: new Date(),
                    name: "**" + num.name + "**",
                    money: num.money / 2
                }
            })
            return numArr
        }
    },
    mutations: {
        // $store.commit()//触发
        budaicanshu(state) {
            state.name = '不带参数传递'
        },
        daicanshu(state, payload) {
            state.name = payload.name
        }
    },
    actions: {
        // $store.dispatch()//触发
        getLists({ commit }) {
            // _address：封装有关地址请求的接口
            _address.getAllList().then((lists) => {
                // commit 触发 mutation 改变 lists
                commit("init", lists)
            })
        }
    }
})