import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import App from './App.vue'

/**
 * Render page with naive ui
 */
export const render =async () => {
  const app = createSSRApp(App)
  const { collect } = setup(app)
  const appHtml = await renderToString(app)
  const cssHtml = collect()
  return {
    cssHtml,
    appHtml
  }
}
