import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Clean Blog',
                subheading: 'A Blog Theme by Start Bootstrap',
                img: 'img/home-bg.jpg'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                title: 'About Me',
                subheading: 'This is what I do.',
                img: 'img/about-bg.jpg'
            }
        },
        {
            path: '/sample-post',
            name: 'sample-post',
            component: () => import('./views/SamplePost.vue'),
            meta: {
                title: 'Man must explore, and this is exploration at its greatest',
                subheading: 'Problems look mighty small from 150 miles up\n' +
                    'Posted by Start Bootstrap on August 24, 2019',
                img: 'img/post-bg.jpg'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue'),
            meta: {
                title: 'Contact Me',
                subheading: 'Have questions? I have answers.',
                img: 'img/contact-bg.jpg'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./components/register/Register.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./components/profile/Profile.vue'),
        }
    ]
})
