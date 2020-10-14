import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Layout/layout.component';

import {
	LoginComponent,
  HomeComponent,
  SettingsComponent,
  ReportsComponent
} from './pages';
import { AuthGuard } from './guards/auth.guard';
import * as routes from './routes';

const appRoutes: Routes = [
	{
		path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: routes.HOME, component:  HomeComponent},
      { path: routes.REPORTS, component:  ReportsComponent},
      { path: routes.SETTINGS, component:  SettingsComponent},
    ]
  },
  { path: routes.LOGIN, component: LoginComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
