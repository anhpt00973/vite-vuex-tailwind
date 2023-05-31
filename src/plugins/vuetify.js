import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '../sass/overrides.sass'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

export default createVuetify({
  theme: {
    defaultTheme: 'customDark',
    themes: {
      customDark: {
        dark: true,
        colors: {
          primary: '#4CAF50',
          secondary: '#03A9F4',
        },
      },
    },
    icons: {
      iconfont: 'fa' || 'md',
    },
  },
})