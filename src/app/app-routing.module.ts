import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./client/client.module').then(mod => mod.ClientModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: PreloadAllModules } // <-- debugging purposes only
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
