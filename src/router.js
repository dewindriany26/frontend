/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
    // =============================================================================
    // USER LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            beforeEnter: (to, from, next) => {
              if (store.getters['auth/authenticated'] && store.getters['auth/userRole'] == "user") {
                return next()
              }
              return router.push('/login')
            },
            children: [
                {
                    path: '/',
                    redirect: '/user/dashboard'
                },
                {
                    path: '/user/dashboard',
                    name: 'dashboard-user',
                    component: () => import('./views/pages/user/Dashboard.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas',
                    name: 'kelas-user',
                    component: () => import('./views/pages/user/Kelas.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },


        // =============================================================================
        // Application Routes
        // =============================================================================
                {
                    path: '/apps/todo',
                    redirect: '/apps/todo/all',
                    name: 'todo',
                },
                {
                    path: '/apps/todo/:filter',
                    component: () => import('./views/apps/todo/Todo.vue'),
                    meta: {
                        rule: 'editor',
                        parent: "todo",
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/chat',
                    name: 'chat',
                    component: () => import('./views/apps/chat/Chat.vue'),
                    meta: {
                        rule: 'editor',
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/email',
                    redirect: '/apps/email/inbox',
                    name: 'email',
                },
                {
                    path: '/apps/email/:filter',
                    component: () => import('./views/apps/email/Email.vue'),
                    meta: {
                        rule: 'editor',
                        parent: 'email',
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/calendar/vue-simple-calendar',
                    name: 'calendar-simple-calendar',
                    component: () => import('./views/apps/calendar/SimpleCalendar.vue'),
                    meta: {
                        rule: 'editor',
                        no_scroll: true,
                    }
                },
                {
                    path: '/apps/eCommerce/shop',
                    name: 'ecommerce-shop',
                    component: () => import('./views/apps/eCommerce/ECommerceShop.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'eCommerce'},
                            { title: 'Shop', active: true },
                        ],
                        pageTitle: 'Shop',
                        rule: 'editor'
                    }
                },
                {
                    path: '/apps/eCommerce/wish-list',
                    name: 'ecommerce-wish-list',
                    component: () => import('./views/apps/eCommerce/ECommerceWishList.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'eCommerce', url:'/apps/eCommerce/shop'},
                            { title: 'Wish List', active: true },
                        ],
                        pageTitle: 'Wish List',
                        rule: 'editor'
                    }
                },
                {
                    path: '/apps/eCommerce/checkout',
                    name: 'ecommerce-checkout',
                    component: () => import('./views/apps/eCommerce/ECommerceCheckout.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'eCommerce', url:'/apps/eCommerce/shop'},
                            { title: 'Checkout', active: true },
                        ],
                        pageTitle: 'Checkout',
                        rule: 'editor'
                    }
                },

        // =============================================================================
        // Pages Routes
        // =============================================================================
                {
                    path: '/pages/profile',
                    name: 'page-profile',
                    component: () => import('@/views/pages/Profile.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'Profile', active: true },
                        ],
                        pageTitle: 'Profile',
                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/user-settings',
                    name: 'page-user-settings',
                    component: () => import('@/views/pages/user-settings/UserSettings.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'User Settings', active: true },
                        ],
                        pageTitle: 'Settings',
                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/faq',
                    name: 'page-faq',
                    component: () => import('@/views/pages/Faq.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'FAQ', active: true },
                        ],
                        pageTitle: 'FAQ',
                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/knowledge-base',
                    name: 'page-knowledge-base',
                    component: () => import('@/views/pages/KnowledgeBase.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', active: true },
                        ],
                        pageTitle: 'KnowledgeBase',
                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/knowledge-base/category',
                    name: 'page-knowledge-base-category',
                    component: () => import('@/views/pages/KnowledgeBaseCategory.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
                            { title: 'Category', active: true },
                        ],
                        parent: 'page-knowledge-base',
                        rule: 'editor'
                    },
                },
                {
                    path: '/pages/knowledge-base/category/question',
                    name: 'page-knowledge-base-category-question',
                    component: () => import('@/views/pages/KnowledgeBaseCategoryQuestion.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/' },
                            { title: 'Pages' },
                            { title: 'KnowledgeBase', url: '/pages/knowledge-base' },
                            { title: 'Category', url: '/pages/knowledge-base/category' },
                            { title: 'Question', active: true },
                        ],
                        parent: 'page-knowledge-base',
                        rule: 'editor'
                    },
                },
            ],
        },
        {
          path: '',
          component: () => import('./layouts/main/Main.vue'),
          beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated'] && store.getters['auth/userRole'] == "dosen") {
              return next()
            }
            return router.push('/login')
          },
          children: [
            {
                path: '/dosen',
                redirect: '/dosen/dashboard'
            },
            {
                path: '/dosen/dashboard',
                name: 'dashboard-dosen',
                component: () => import('./views/pages/dosen/Dashboard.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kelas',
                name: 'kelas-dosen',
                component: () => import('./views/pages/dosen/Kelas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/tugas-masuk',
                name: 'tugas-dosen',
                component: () => import('./views/pages/dosen/TugasKelas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
          ],
        },

        {
          path: '',
          component: () => import('./layouts/main/Main.vue'),
          beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated'] && store.getters['auth/userRole'] == "admin") {
              return next()
            }
            return router.push('/admin/login')
          },
          children: [
            {
                path: '/admin',
                redirect: '/admin/dashboard',
            },
            {
                path: '/admin/dashboard',
                name: 'dashboard-admin',
                component: () => import('./views/pages/admin/Dashboard.vue'),
                meta: {
                    rule: 'editor',
                }
            },
          ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            beforeEnter: (from, to, next) => {
                if (store.getters['auth/authenticated']) {
                    switch (store.getters['auth/userRole']) {
                        case 'user':
                            return router.push('/user')

                        case 'dosen':
                            return router.push('/dosen')

                        case 'admin':
                            return router.push('/admin')

                        default:
                            break;
                    }
                }
                return next()
            },
            children: [
                {
                    path: '/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/auth/Auth.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/admin/login',
                    name: 'admin-login',
                    component: () => import('@/views/pages/admin/auth/Auth.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/pages/forgot-password',
                    name: 'page-forgot-password',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/reset-password',
                    name: 'page-reset-password',
                    component: () => import('@/views/pages/ResetPassword.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/lock-screen',
                    name: 'page-lock-screen',
                    component: () => import('@/views/pages/LockScreen.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/comingsoon',
                    name: 'page-coming-soon',
                    component: () => import('@/views/pages/ComingSoon.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'page-error-500',
                    component: () => import('@/views/pages/Error500.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/not-authorized',
                    name: 'page-not-authorized',
                    component: () => import('@/views/pages/NotAuthorized.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/maintenance',
                    name: 'page-maintenance',
                    component: () => import('@/views/pages/Maintenance.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})


export default router
