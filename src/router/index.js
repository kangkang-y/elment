import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/button.vue'
import Con1 from '@/components/con21.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Button',
    component: Button,
    children: [{
      path: 'Con1',
      component: Con1
    },
    {
      path: '/',
      redirect: 'Con1'
    }]
  },
  {
    path: '/',
    redirect: 'Button'
  }
  ]
})
