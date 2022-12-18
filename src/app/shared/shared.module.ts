import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HelloWorldComponent
  ]
})
export class SharedModule { }
