import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ManagementComponent } from './management/management.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { RoleGuard } from './shared/role.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/service/auth.interceptor';

@NgModule({
  declarations: [AppComponent, ManagementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HotToastModule.forRoot(),
  ],
  providers: [
    RoleGuard,
    {
      //proper way of declaring interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
