import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { LoginPageComponent } from './login/login.component';
import { overviewGuard, loginGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [overviewGuard],
  },
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [loginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
