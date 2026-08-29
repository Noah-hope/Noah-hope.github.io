import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HomeHero from '../components/HomeHero.vue'
import HomePosts from '../components/HomePosts.vue'
import HomeMoments from '../components/HomeMoments.vue'
import DailyFeed from '../components/DailyFeed.vue'
import BlogList from '../components/BlogList.vue'
import ProjectCards from '../components/ProjectCards.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
    app.component('HomePosts', HomePosts)
    app.component('HomeMoments', HomeMoments)
    app.component('DailyFeed', DailyFeed)
    app.component('BlogList', BlogList)
    app.component('ProjectCards', ProjectCards)
  }
}
