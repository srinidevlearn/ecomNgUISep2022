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

**HTTP Call**

-> register HTTPCLIENTMODULE inside the required modules
-> to make http call we have to ensure proper DI(Dependecny Injection) in required Service file(i.e) our class having injectable decorator
-> http call is observable based so make sure that it is subscribe when you wish to perform http opertion
-> memory leak needs to be taken care.


**Forms**

-> Template driven forms are achecived using **[(ngModel)]** and registering FORMSMODULE in required Modules
-> reactive forms are acheived using **formBuilder.group({})**  and registering of REACTIVEFORMMODULE in required Forms fields


**Router**

-> to fetch params data from router url, need to use **ActivatedRoute**.

