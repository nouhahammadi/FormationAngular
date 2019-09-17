import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
