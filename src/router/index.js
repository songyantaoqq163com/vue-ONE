import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/shouye/HelloWorld'
import infoPlain from "@/components/shouye/infoPlain"
import plain1 from "@/components/shouye/plain1"
import info from "@/components/shouye/info"
import NEWnew from "@/components/shouye/NEWnew"

import elmean from "@/components/elmean"
import plain from "@/routers/Plain"
import Child from "@/routers/Child"
import MaxChild from "@/routers/MaxChild"
import Home from "@/Aside/Home"
import Login from "@/Aside/Login"

import derive from "@/components/firstone/derive"
import calendar from "@/components/firstone/calendar"
import Round from "@/components/firstone/Round"
import echarts from "@/components/firstone/Echarts"
import echartsone from '@/components/firstone/Echarts1'
import Roll from "@/components/firstone/roll"
import prop from "@/components/firstone/prop"
import newroll from "@/components/firstone/newroll"
import hover from "@/components/firstone/hover"
import vuextext from "@/components/firstone/vuextext"

import Xialakuang from "@/components/secondtwo/Xialakuang"
import Wendang from "@/components/secondtwo/Wendang"
import Text from "@/components/secondtwo/Text"
import qie from "@/components/secondtwo/qie"
import videpplay from "@/components/secondtwo/videpplay"
import antv from "@/components/secondtwo/antv"

import Breadcrumb from "@/element/Breadcrumb"
import eleinput from "@/element/eleinput"
import elecheckbox from "@/element/elecheckbox"
import eleTable from "@/element/eleTable"
import Dialog from "@/element/Dialog"
import eleupload from "@/element/eleupload"
import eleSelect from "@/element/eleSelect"
import eleSteps from "@/element/eleSteps"

import Adrag from "@/components/carte/Adrag"
import carteone from "@/components/carte/carteone"



let router = new Router({
  base: '/www.index/',
  routes: [
    // {redirect: '/calends',默认导航的位置
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      meta: { title: '标题一' },
      component: Login

    },
    {
      path: '/carteone',
      name: 'carteone',
      component: carteone
    },
    {
      path: '/hello',
      name: 'Home',
      component: Home,
      children: [{
          path:'/two/antv',
          name:'antv',
          component:antv,
          meta:{requireAuth:true},
      },{
          path: '/NEWnew',
          name: 'NEWnew',
          meta: {
            requireAuth: true,
          },
          component: NEWnew
        },
        {
          path: '/Adrag',
          name: 'adrag',
          meta: {
            requireAuth: true,
          },
          component: Adrag
        }, {
          path: '/com/elmean',
          name: 'elmean',
          meta: {
            requireAuth: true,
          },
          component: elmean
        },
        {
          path: '/calends',
          name: 'calendar',
          meta: {
            requireAuth: true,
          },
          component: calendar
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          meta: {
            requireAuth: true,
          },
          component: HelloWorld
        },
        {
          path: '/infoPlain',
          name: 'infoPlain',
          meta: {
            requireAuth: true,
          },
          component: infoPlain
        }, {
          path: '/element/Dialog',
          name: 'Dialog',
          meta: {
            requireAuth: true,
          },
          component: Dialog
        },
        {
          path: '/echarts',
          name: 'echarts',
          meta: {
            requireAuth: true,
          },
          component: echarts
        }, {
          path: '/com/echarts',
          name: 'echartsone',
          meta: {
            requireAuth: true,
          },
          component: echartsone
        }, {
          path: '/derive',
          name: 'derive',
          meta: {
            requireAuth: true,
          },
          component: derive
        }, {
          path: '/Xialakuang',
          name: 'Xialakuang',
          meta: {
            requireAuth: true,
          },
          component: Xialakuang
        }, {
          path: '/com/Roll',
          name: 'Roll',
          meta: {
            requireAuth: true,
          },
          component: Roll
        }, {
          path: '/wendang',
          name: 'wendang',
          meta: {
            requireAuth: true,
          },
          component: Wendang
        }, {
          path: '/routers/Text',
          name: 'Text',
          meta: {
            requireAuth: true,
          },
          component: Text
        }, {
          path: '/routers/Child',
          name: 'Child',
          meta: {
            requireAuth: true,
          },
          component: Child
        }, {
          path: '/routers/MaxChild',
          name: 'MaxChild',
          meta: {
            requireAuth: true,
          },
          component: MaxChild
        }, {
          path: '/routers/Round',
          name: 'Round',
          meta: {
            requireAuth: true,
          },
          component: Round
        }, {
          path: '/routers/plain',
          name: 'plain',
          meta: {
            requireAuth: true,
          },
          component: plain
        }, {
          path: '/routers/info',
          name: 'info',
          meta: {
            requireAuth: true,
          },
          component: info
        }, {
          path: '/routers/plain1',
          name: 'plain1',
          meta: {
            requireAuth: true,
          },
          component: plain1
        }, {
          path: '/routers/qie',
          name: 'qie',
          meta: {
            requireAuth: true,
          },
          component: qie
        }, {
          path: '/routers/prop',
          name: 'prop',
          meta: {
            requireAuth: true,
          },
          component: prop
        }, {
          path: '/routers/videpplay',
          name: 'videpplay',
          meta: {
            requireAuth: true,
          },
          component: videpplay
        }, {
          path: '/element/input',
          name: 'eleinput',
          meta: {
            requireAuth: true,
          },
          component: eleinput
        }, {
          path: '/element/checkbox',
          name: 'elecheckbox',
          meta: {
            requireAuth: true,
          },
          component: elecheckbox
        }, {
          path: '/element/eleTable',
          name: 'eleTable',
          meta: {
            requireAuth: true,
          },
          component: eleTable
        }, {
          path: '/element/Breadcrumb',
          name: 'Breadcrumb',
          meta: {
            requireAuth: true,
          },
          component: Breadcrumb
        }, {
          path: '/element/eleupload',
          name: 'eleupload',
          meta: {
            requireAuth: true,
          },
          component: eleupload
        }, {
          path: '/element/eleSelect',
          name: 'eleSelect',
          meta: {
            requireAuth: true,
          },
          component: eleSelect
        },{
          path:'/element/eleSteps',
          name:'eleSteps',
          meta:{
            requireAuth:true,
          },
          component:eleSteps
        }, {
          path: '/fistone/roll',
          name: 'newroll',
          meta: {
            requireAuth: true,
          },
          component: newroll
        }, {
          path: '/fistone/hover',
          name: 'hover',
          meta: {
            requireAuth: true,
          },
          component: hover
        }, {
          path: '/fistone/vuextext',
          name: 'vuextext',
          meta: {
            requireAuth: true,
          },
          component: vuextext
        }
      ]
    },

  ],
  // mode:"history" 
});
router.beforeEach((to, from, next) => {
  console.log('index.js', from)
  if (to.meta.requireAuth == true) {
    if (sessionStorage.getItem('key-token') != null) {
      next()
    } else {
          if( to.fullPath==='/login'){
            next()
        }else{
            alert('请登录')
            next('/login')
        }
        return
    }
  } else {
    next()
    return
  }

  if (to.meta && to.meta.title) {
    document.title = to.meta.title
}

})

export default router;