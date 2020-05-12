import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'

import Auth from '../pages/Auth.vue'
import LoginLayout from '../layouts/auth/LoginLayout.vue'
import RegisterLayout from '../layouts/auth/RegisterLayout.vue'
import ForgotPasswordLayout from '../layouts/auth/ForgotPasswordLayout.vue'

import Search from '../pages/Search.vue'

import Course from '../pages/Course.vue'

import Lesson from '../pages/Lesson.vue'

import Profile from '../pages/Profile.vue'
import MyCoursesLayout from '../layouts/profile/MyCoursesLayout.vue'
import TeachersCenterLayout from '../layouts/profile/TeachersCenterLayout.vue'
import AccountSettingsLayout from '../layouts/profile/AccountSettingsLayout.vue'
import CustomerSupportLayout from '../layouts/profile/CustomerSupportLayout.vue'

import Form from '../pages/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      hideHeaderSearchBar: true,
    },
  },
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: '',
        redirect: 'login',
      },
      {
        path: 'login',
        name: 'login',
        component: LoginLayout,
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterLayout,
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: ForgotPasswordLayout,
      },
    ],
    meta: {
      hideHeader: true,
    },
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      hideHeaderSearchBar: true,
    },
  },
  {
    path: '/course/:courseId',
    name: 'course',
    component: Course,
    props: true,
  },
  {
    path: '/course/:courseId/section/:sectionId/lesson/:lessonId',
    name: 'lesson',
    component: Lesson,
    props: true,
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: '',
        redirect: 'my-courses',
      },
      {
        path: 'my-courses',
        name: 'my-courses',
        component: MyCoursesLayout,
      },
      {
        path: 'teachers-center',
        name: 'teachers-center',
        component: TeachersCenterLayout,
        props: true,
      },
      {
        path: 'account-settings',
        name: 'account-settings',
        component: AccountSettingsLayout,
        props: true,
      },
      {
        path: 'customer-support',
        name: 'customer-support',
        component: CustomerSupportLayout,
      },
    ],
  },
  {
    path: '/form/:formType',
    name: 'form',
    component: Form,
    props: true,
  },
  {
    // catch all route
    path: '*',
    redirect: { name: 'home' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
