import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/noticias',
      name: 'News',
      component: News
    },
     {
      path: '/artigo',
      name: 'Details',
      component: Details
    }
     

  ]
})
