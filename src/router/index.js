import Vue from 'vue'
import Router from 'vue-router'
import DashboardV1 from 'examples/Dashboard.v1.vue'
import APIExample from 'examples/APIExample'

// UI Element Groups
// import General from 'pages/ui-elements/General.vue'
// import Icons from 'pages/ui-elements/Icons.vue'
// import Buttons from 'pages/ui-elements/Buttons.vue'
// import Sliders from 'pages/ui-elements/Sliders.vue'
// import Timeline from 'pages/ui-elements/Timeline.vue'
// import Modals from 'pages/ui-elements/Modals.vue'

// forms
// import GeneralElements from 'pages/forms/GeneralElements.vue'
// import AdvancedElements from 'pages/forms/AdvancedElements.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard/v1',
      name: 'DashboardV1',
      component: DashboardV1
    },
    {
      path: '/examples/api-example',
      name: 'APIExample',
      component: APIExample
    }
  ],
  linkActiveClass: 'active'
})
