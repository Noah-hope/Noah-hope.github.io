import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HomeMoments from '../components/HomeMoments.vue'
import DailyFeed from '../components/DailyFeed.vue'
import BlogList from '../components/BlogList.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeMoments', HomeMoments)
    app.component('DailyFeed', DailyFeed)
    app.component('BlogList', BlogList)
  }
}
