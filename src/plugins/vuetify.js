import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        colors: {
          primary: '#00b4d8',   // celeste
          secondary: '#90dbf4', // celeste claro
          accent: '#0077b6',    // azul fuerte
          background: '#f1faff'
        }
      }
    }
  }
})