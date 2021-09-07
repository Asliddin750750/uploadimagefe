import {
    ACCOUNT_REMOVE_TOKEN,
    ACCOUNT_SET_PROFILE,
    ACCOUNT_SET_TOKEN,
    ACCOUNT_UPDATE_PROFILE
} from "../actions/account";
import axios from "axios";

const TOKEN = "token";

const state = {
    profile: null,
    token: localStorage.getItem(TOKEN)
}

if (state.token) {
    axios.defaults.headers.common['Authorization'] = `Token ${state.token}`
}

const getters = {
    isAuthenticated: state => !!state.profile,
    accountFullName: (state) => {
        if (!state.profile) {
            return "-";
        }

        if (!state.profile.last_name && !state.profile.first_name) {
            return state.profile.username;
        }

        return `${state.profile.last_name} ${state.profile.first_name}` //(${state.profile.username});
    }
}

const mutations = {
    // profileni set qiladi
    [ACCOUNT_SET_PROFILE]: (state, profile) => {
        state.profile = profile
    },
    [ACCOUNT_UPDATE_PROFILE]: (state, form) => {
        Object.keys(form).forEach(key => {
            state.profile[key] = form[key];
        })
    },
    // Logoutga javob beradi
    [ACCOUNT_REMOVE_TOKEN]: (state) => {
        state.profile = null
        state.token = null

        axios.defaults.headers.common['Authorization'] = null
        localStorage.removeItem(TOKEN)
    },
    // tokenlar qiymatini o'zgartiradi
    [ACCOUNT_SET_TOKEN]: (state, data) => {
        state.token = data.data.token

        axios.defaults.headers.common['Authorization'] = `Token ${data.data.token}`
        localStorage.setItem(TOKEN, state.token)
    }
}

export default {
    state,
    getters,
    mutations
}