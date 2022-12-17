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

Router & Modules:
router-outlet is used to render the view based browser url
Lazy-loading - load modules on demand, no need to render module on app start.
RouterModule - it is responsible for routing happening inside he nagular
RouterModule.forRoot - it is placed because on app module or we can say root module level
RouterModule.forChild -  it is placed on the lazy loaded modules for routing


Components:
interpolation
Basic pipe - json, async

Concepts:
Observable vs Promise
Lazy loading behaviour of promise, tested by using subscribe
stream vs single source of truth
how to prevent memory leak while using observable
