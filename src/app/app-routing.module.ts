import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {
    path: 'management',
    canActivate:[RoleGuard],
    component: ManagementComponent,
    children: [
      {
        path: 'prd',
        loadChildren: () =>
          import('./prod-management/prod-management.module').then(
            (m) => m.ProdManagementModule
          ),
      },

      //TODO :Work With Sample Data
      {
        path: 'user',
        loadChildren: () =>
          import('./user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
    ],
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./shopping/shopping.module').then((m) => m.ShoppingModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
