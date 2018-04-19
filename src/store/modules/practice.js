/**
 * 用于学习store
 */
const storeGetter = {
    state: {
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        count: 0,
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementPayload(state,n) {
            state.count += n;
        },
        incrementObject(state, payload) {
            state.count += payload.amount;
        },
    },
    actions: {
        increment({ commit }) {
            commit('increment')
        },
        // 异步载荷Action
        incrementPayloadtAsync({ commit }, val) {
            setTimeout(() => {
                commit('incrementPayload',val)
            }, 1000)
        },
        //异步对象Action
        incrementObjectAsync({ commit }, val) {
            setTimeout(() => {
                commit('incrementObject', val)
            }, 1000)
        },
        //组合 Action
        actionA({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment')
                    resolve()
                }, 1000)
            })
        },
        //组合 Action(执行完actionA后)
        actionB({ dispatch, commit },val) {
            return dispatch('actionA').then(() => {
                commit('incrementPayload',val)
            })
        }

    },


}
// export default { practice, storeGetter}//这样用报错，因为export default只能导出一个
export  { practice, storeGetter}
