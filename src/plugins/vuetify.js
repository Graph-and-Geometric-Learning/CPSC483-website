// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
            primary: colors.blueGrey.darken2,
            secondary: colors.blueGrey.lighten4,
        }
      }
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
