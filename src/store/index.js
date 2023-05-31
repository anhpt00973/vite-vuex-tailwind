// store/index.js
import { createStore } from 'vuex'
import stack from './modules/stack'
import darkModeThemes from "../@core/layouts/components/skin-darkmode/DarkModeThemes.json"
const store = createStore({

    state: {
        isDarkMode: null,
        miniVariant: true,
        count: 0,
        nModel: 1,
        drawer: false,
        arrLott: [
          { name: "", value: 0}
        ],
        isShowConfirm: false,
        dialogConfirm: {
          auth: false,
          title: '',
          message: '',
          button: {},
          callback: () => {}
        },
        formData: '',
        sessions: [],
      },
      getters: {
        getIsDarkMode: (state) => {
          return state.isDarkMode
        },
        getMiniVariant: (state) => {
          return state.variant
        },
        getIsShowConfirm: (state) => {
          return state.isShowConfirm
        },
        getArrLott : (state) => {
          return state.arrLott
        },
        getDialogConfirm: (state) => {
          return state.dialogConfirm
        },
        getFormData: (state) => {
          return state.formData
        },
        getSessionsData: (state) => {
          return state.sessions
        }
      },
      mutations: {
        SET_ISDARKMODE(state, payload) {
          state.isDarkMode = payload;
        },
        SET_MINIVARIANT(state, payload) {
          state.miniVariant = payload
        },
        set_nModel (state, payload) {
          state.nModel = payload
        },
        SET_DRAWER (state, payload) {
          state.drawer = payload
        },
        createArrLott (state) {
          let i = 0
          let text = ""
          while (i<=99) {
            if (i<=9) { text = "0" + JSON.stringify(i) }
            else { text = JSON.stringify(i) }
            state.arrLott[i] = { name: text, value: 0 }
            i++
          }
        },
        SET_ARRLOTT(state, payload) {
          state.arrLott = payload
        },
        SET_SHOWCONFIRM (state, payload) {
          state.isShowConfirm = payload
        },
        SET_CONFIG_CONFIRM_DIALOG (state, payload) {
          state.dialogConfirm = payload
        },
        SET_FORM_DATA (state, payload) {
          state.formData = payload
        },
        SET_SESSIONS_DATA (state, payload) {
          state.sessions = payload
        }
      },
      actions: {
        getTheme({commit, state}, value) {
          if (value == 'dark') {
            document.documentElement.style.setProperty('--background-family1', darkModeThemes[1]["background-family1"]) 
            document.documentElement.style.setProperty('--container-background1', darkModeThemes[1]["container-background1"]) 
            document.documentElement.style.setProperty('--text-color1', darkModeThemes[1]["text-color1"])
            document.documentElement.style.setProperty('--highlight-text-color1', darkModeThemes[1]["highlight-text-color1"])
            document.documentElement.style.setProperty('--container-acive-color1', darkModeThemes[1]["container-acive-color1"]) 
            document.documentElement.style.setProperty('--border-color1', darkModeThemes[1]["border-color1"]) 
    
            document.documentElement.style.setProperty('--background-family2', darkModeThemes[1]["background-family1"]) 
            document.documentElement.style.setProperty('--container-background2', darkModeThemes[1]["container-background1"]) 
            document.documentElement.style.setProperty('--text-color2', darkModeThemes[1]["text-color1"]) 
            document.documentElement.style.setProperty('--highlight-text-color2', darkModeThemes[1]["highlight-text-color1"]) 
            document.documentElement.style.setProperty('--container-acive-color2', darkModeThemes[1]["container-acive-color1"]) 
            document.documentElement.style.setProperty('--border-color2', darkModeThemes[1]["border-color"]) 
            document.documentElement.style.setProperty('--button-color1', darkModeThemes[1]["button-color1"])
            document.documentElement.style.setProperty('--navbar-text-color1', darkModeThemes[1]["navbar-text-color1"])
            
          } else if (value == 'light') {
            document.documentElement.style.setProperty('--background-family1', darkModeThemes[2]["background-family1"]) 
            document.documentElement.style.setProperty('--container-background1', darkModeThemes[2]["container-background1"]) 
            document.documentElement.style.setProperty('--text-color1', darkModeThemes[2]["text-color1"])
            document.documentElement.style.setProperty('--highlight-text-color1', darkModeThemes[2]["highlight-text-color1"])
            document.documentElement.style.setProperty('--container-acive-color1', darkModeThemes[2]["container-acive-color1"]) 
            document.documentElement.style.setProperty('--border-color1', darkModeThemes[2]["border-color1"]) 
    
            document.documentElement.style.setProperty('--background-family2', darkModeThemes[2]["background-family1"]) 
            document.documentElement.style.setProperty('--container-background2', darkModeThemes[2]["container-background1"]) 
            document.documentElement.style.setProperty('--text-color2', darkModeThemes[2]["text-color1"]) 
            document.documentElement.style.setProperty('--highlight-text-color2', darkModeThemes[2]["highlight-text-color1"]) 
            document.documentElement.style.setProperty('--container-acive-color2', darkModeThemes[2]["container-acive-color1"]) 
            document.documentElement.style.setProperty('--border-color2', darkModeThemes[2]["border-color"]) 
            document.documentElement.style.setProperty('--button-color1', darkModeThemes[2]["button-color1"])
            document.documentElement.style.setProperty('--navbar-text-color1', darkModeThemes[2]["navbar-text-color1"])
    
          } else if (value == 'default') {
            document.documentElement.style.setProperty('--background-family1', darkModeThemes[0]["background-family1"]) 
            document.documentElement.style.setProperty('--container-background1', darkModeThemes[0]["container-background1"]) 
            document.documentElement.style.setProperty('--text-color1', darkModeThemes[0]["text-color1"])
            document.documentElement.style.setProperty('--highlight-text-color1', darkModeThemes[0]["highlight-text-color1"])
            document.documentElement.style.setProperty('--container-acive-color1', darkModeThemes[0]["container-acive-color1"]) 
            document.documentElement.style.setProperty('--border-color1', darkModeThemes[0]["border-color1"]) 
    
            document.documentElement.style.setProperty('--background-family2', darkModeThemes[0]["background-family2"]) 
            document.documentElement.style.setProperty('--container-background2', darkModeThemes[0]["container-background2"]) 
            document.documentElement.style.setProperty('--text-color2', darkModeThemes[0]["text-color2"]) 
            document.documentElement.style.setProperty('--highlight-text-color2', darkModeThemes[0]["highlight-text-color2"]) 
            document.documentElement.style.setProperty('--container-acive-color2', darkModeThemes[0]["container-acive-color2"]) 
            document.documentElement.style.setProperty('--border-color2', darkModeThemes[0]["border-color2"]) 
            
            document.documentElement.style.setProperty('--button-color1', darkModeThemes[0]["button-color1"])
            document.documentElement.style.setProperty('--navbar-text-color1', darkModeThemes[0]["navbar-text-color1"])
          }
        },
     },
     modules: {
        stack,
    },
})

export default store
