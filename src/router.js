import Vue from 'vue'
import Router from 'vue-router'

import TournamentPage from "./view/TournamentPage";
Vue.use(Router)

const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'tournament',
                component: TournamentPage,
            }
        ]
    }
)
export default router
