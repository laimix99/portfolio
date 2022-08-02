import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';
import IndexPage from '../pages/IndexPage.vue';
import TodoPage from '../pages/TodoPage.vue';
import SpinnerPage from '../pages/SpinnerPage.vue';
import CalculatorLayout from '../layouts/CalculatorLayout.vue';
import CalculatorPage from '../pages/CalculatorPage.vue'
import StockPage from '../pages/StockPage.vue';
import OneMoviePage from '../pages/movies/OneMoviePage.vue';
import MoviesPage from '../pages/movies/MoviesPage.vue';
import MoviesLayout from '../layouts/MoviesLayout.vue';
import LoginLayout from '../layouts/LoginLayout.vue';
import LoginPage from '../pages/login/LoginPage.vue';
import DeliLayout from '../layouts/DeliLayout.vue';
import ClientPage from '../pages/deli/ClientPage.vue';
import ServicesPage from '../pages/deli/ServicesPage.vue';
import TodoLayout from '../layouts/TodoLayout.vue';
import KryptoLayout from '../layouts/KryptoLayout.vue'
import BreewLayout from '../layouts/BreewLayout.vue'
import СommissionerLayout from '../layouts/СommissionerLayout.vue'
import TrelloLayout from '../layouts/TrelloLayout.vue'
import PhotographerLayout from '../layouts/PhotographerLayout.vue'
import GeeckoLayout from '../layouts/GeeckoLayout.vue'
import ErrorPage from '../pages/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: IndexPage,
        },
        // {
        //   path: 'todo',
        //   component: TodoPage,
        // },
        {
          path: 'spinner',
          component: SpinnerPage,
        },
        // {
        //   path: 'calculator',
        //   component: CalculatorPage,
        // },
        {
          path: 'stock',
          component: StockPage,
        },
      ],
    },
    {
      path: '/movies',
      component: MoviesLayout,
      children: [
        {
          path: '',
          component: MoviesPage,
        },
        {
          path: ':id',
          component: OneMoviePage,
        },
      ],
    },
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '',
          component: LoginPage,
        },
      ],
    },
    {
      path: '/deli',
      component: DeliLayout,
      children: [
        {
          path: '',
          component: ClientPage,
        },
        {
          path: 'services',
          component: ServicesPage,
        },
      ],
    },
    {
      path: '/todo',
      component: TodoLayout,
      children: [
        {
          path: 'v1',
          component: TodoPage,
        },
      ],
    },
    {
      path: '/todo',
      component: TodoLayout,
      children: [
        {
          path: 'v1',
          component: TodoPage,
        },
      ],
    },    
    {
      path: '/calculator',
      component: CalculatorLayout,
      children: [
        {
          path: 'v1',
          component: CalculatorPage,
        },
      ],
    },
    {
      path: '/krypto',
      component: KryptoLayout,
      children: [
      
      ],
    },
    {
      path: '/breew',
      component: BreewLayout,
      children: [
      
      ],
    },
    {
      path: '/commissioner',
      component: СommissionerLayout,
      children: [
        
      ],
    },
    {
      path: '/trello',
      component: TrelloLayout,
      children: [
        
      ],
    },
    {
      path: '/photographer',
      component: PhotographerLayout,
    },{
      path: '/geecko',
      component: GeeckoLayout,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorPage',
      component: ErrorPage,
      meta: {
        page: 'not-found',
      },
    },
  ],
});

export default router;
