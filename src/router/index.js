import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';
import IndexPage from '../pages/IndexPage.vue';                       //pages
import TodoPage from '../pages/TodoPage.vue';
import SpinnerPage from '../pages/SpinnerPage.vue';                   //pages
import CalculatorLayout from '../layouts/CalculatorLayout.vue';       //layouts
import CalculatorPage from '../pages/CalculatorPage.vue'              //pages
import StockPage from '../pages/StockPage.vue';                       //pages
import OneMoviePage from '../pages/movies/OneMoviePage.vue';          //pages
import MoviesPage from '../pages/movies/MoviesPage.vue';              //pages
import MoviesLayout from '../layouts/MoviesLayout.vue';               //layouts
import LoginLayout from '../layouts/LoginLayout.vue';                 //layouts
import LoginPage from '../pages/login/LoginPage.vue';                 //pages
import DeliLayout from '../layouts/DeliLayout.vue';                   //layouts
import ClientPage from '../pages/deli/ClientPage.vue';                //pages
import ServicesPage from '../pages/deli/ServicesPage.vue';            //pages
import TodoLayout from '../layouts/TodoLayout.vue';                   //layouts
import KryptoLayout from '../layouts/KryptoLayout.vue'                //layouts
import BreewLayout from '../layouts/BreewLayout.vue'                  //layouts
import СommissionerLayout from '../layouts/СommissionerLayout.vue'    //layouts
import TrelloLayout from '../layouts/TrelloLayout.vue'                //layouts
import PhotographerLayout from '../layouts/PhotographerLayout.vue'    //layouts
import GeeckoLayout from '../layouts/GeeckoLayout.vue'                //layouts
import SberLayout from '../layouts/SberLayout.vue'                    //layouts
import ErrorPage from '../pages/ErrorPage.vue';                       //layouts

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
      path: '/sber',
      component: SberLayout,
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
