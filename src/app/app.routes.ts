import { provideRouter, RouterConfig } from '@angular/router';

import { HomePage } from './pages/home.page';
import { ButtonsPage } from './pages/buttons.page';
import { AlertsPage } from './pages/alerts.page';

const routes: RouterConfig = [
    { path: '', component: HomePage },
    { path: 'buttons', component: ButtonsPage },
    { path: 'alerts', component: AlertsPage },
    { path: '**', redirectTo: '' },
];

export const appRouterProviders = [
    provideRouter(routes)
];
