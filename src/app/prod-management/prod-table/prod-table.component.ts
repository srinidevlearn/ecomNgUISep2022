import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, delay, EMPTY, from, map, Observable, of, Subscription, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/service/prod-api.service';
import { IProductTable } from './product.interface';

@Component({
  selector: 'app-prod-table',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.scss']
})
export class ProdTableComponent implements OnInit {

  searchTerm:string = "";

  loading: boolean= false;
  product$:Observable<IProductTable[]>=  this.api.getAllProducts().pipe(catchError(this.handleError),tap(()=>{
    this.toastService.success("Loaded successfully")
  }),map(d=>d?.data));

  constructor(public router:Router,private toastService: HotToastService,private api:ApiService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  navigateTo(productId:string){
    this.router.navigate(["management","prd", productId])
  }


  handleError(){
    this.toastService.error("OOPS !!! Something went wrong please try again later")
    return EMPTY;
  }


  deleteProduct(){
    this.toastService.success("Mock Deleted happened successfully")
  }
}
