# EcomUiSep2022

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Scope of class

Learned how to create new Modules in angular 
Created SharedModule using 
`ng g m shared`


Learned how to create new components inside the module
Created new Hello World Component inside SharedModule
traverse to shared folder which was created during ng g m command
inside that folder to create HelloWorldComponent used
`ng g c hello-world`


Ensure generated component is decalred in declaration property inside the ngModule
if need to use inside the other module add the same components to export as well


I wish to reuse the components inside the AppModule so imported the SharedModule inside the AppModule and used app-hello-world selector inside app.components.ts