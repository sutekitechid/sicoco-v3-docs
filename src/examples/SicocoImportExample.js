import { defineNuxtPlugin } from 'nuxt/app'
import { sicocoV3 } from '@sutekitechid/flowbite-vue'
import inputId from '../locales/input/id'
import inputEn from '../locales/input/en'
import commonsId from '../locales/commons/id'
import commonsEn from '../locales/commons/en'
import errorHandlingId from '../locales/error-handling/id'
import errorHandlingEn from '../locales/error-handling/en'

import '@sutekitechid/flowbite-vue/icomoon/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(sicocoV3, {
    i18n: {
      enabled: false,
      locales: {
        id: {
          ...inputId,
          ...commonsId,
          ...errorHandlingId
        },
        en: {
          ...inputEn,
          ...commonsEn,
          ...errorHandlingEn
        }
      }
    }
  })
})
