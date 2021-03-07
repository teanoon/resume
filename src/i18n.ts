import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const path = process.env.PUBLIC_URL || ''

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${path}/locales/{{lng}}/{{ns}}.json`
    },
    lng: 'zh-CN',
    fallbackLng: 'zh-CN',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
