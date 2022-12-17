import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: 'management',
    component: ManagementComponent,
    children: [
      {
        path: 'prd',
        loadChildren: ()=>import('./prod-management/prod-management.module').then(
          (m) => m.ProdManagementModule
        ),
      },
      {
        path: 'user',
        loadChildren: ()=>import('./user-management/user-management.module').then(
          (m) => m.UserManagementModule
        ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
