export default [
    {
        path: 'add/image',
        name: 'upload.image',
        component: () => import('../views/upload/UploadImage.vue')
    },
    {
        path: 'view/images',
        name: 'view.images',
        component: () => import('../views/upload/ViewImages.vue')
    }
]