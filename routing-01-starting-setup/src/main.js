import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, //our-domain.com///teams
    { path: '/users', component: UserList },
    { path: '/:notFound(.*)', component: NotFound }, // 다른 Route를 덮어쓰지 않기 위해 마지막에 작성
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
