export default [
    {
        path: 'login',
        name: 'login',
        component: () => import('../views/account/Login.vue')
    },
    {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/account/Profile.vue')
    }
]