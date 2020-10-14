import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	LoginComponent,
  HomeComponent
} from './pages';
// import { AuthGuard, RoleGuard } from './guard';
import * as routes from './routes';

const appRoutes: Routes = [
	{
		path: routes.HOME, component: HomeComponent,
    // canActivate: [AuthGuard],
  },
  { path: routes.LOGIN, component: LoginComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
