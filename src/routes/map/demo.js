export default [
    {
      path: '/',
      redirect: '/components'
    },
    {
      path: '*',
      component: resolve => require(['src/views/demo/demo.vue'], resolve),
    },
    {
      path: '/components',
      component: resolve => require(['src/views/demo/demo.vue'], resolve),
      meta: {
          title: 'component'
      },
      name: 'demo',
    }
]
