import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';
import IndexPage from '../pages/IndexPage.vue';                       //pages
import TodoPage from '../pages/TodoPage.vue';
import SpinnerPage from '../pages/SpinnerPage.vue';                   //SpinnerPage
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
import TodoLayout from '../layouts/TodoLayout.vue';                   //Todo
import KryptoLayout from '../layouts/KryptoLayout.vue'                //Krypto
import BreewLayout from '../layouts/BreewLayout.vue'                  //Breew
import CommissionerLayout from '../layouts/СommissionerLayout.vue'    //Commissioner
import TrelloLayout from '../layouts/TrelloLayout.vue'                //Trello
import PhotographerLayout from '../layouts/PhotographerLayout.vue'    //Photographer
import GeeckoLayout from '../layouts/GeeckoLayout.vue'                //Geecko
import SberLayout from '../layouts/SberLayout.vue'                    //Sber
import AvitoLayout from '../layouts/AvitoLayout.vue'                  //Avito
import TestLayout from  '../layouts/TestLayout.vue'
import FirstTask from '../layouts/FirstTask.vue'
import SecondTask from '../layouts/SecondTask.vue'
import ThirdTask from '../layouts/ThirdTask.vue'
import BicycleLayout from '../layouts/BicycleLayout.vue'
import ButtonAnimaccord from '../layouts/ButtonAnimaccord.vue'
import TodoTest from '../layouts/TodoTest.vue'
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
      component: CommissionerLayout,
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
      path: '/bicycle',
      component: BicycleLayout,
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
      path: '/avito',
      component: AvitoLayout,
    },
    {
      path: '/todo-test',
      component: TodoTest,
    },
    {
      path: '/test',
      component: TestLayout,
    },
    {
      path: '/first-task',
      component: FirstTask,
    },
    {
      path: '/second-task',
      component: SecondTask,
    },
    {
      path: '/third-task',
      component: ThirdTask,
    },
    {
      path: '/button-animaccord',
      component: ButtonAnimaccord,
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
