import type { App } from 'vue'
import { sicocoV3 } from '@sutekitechid/flowbite-vue'
import '@sutekitechid/flowbite-vue/dist/style.css'

export default (app: App) => {
  app.use(sicocoV3)
}