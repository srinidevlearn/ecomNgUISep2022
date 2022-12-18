import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, takeUntil, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/service/prod-api.service';
import { IProductTable } from '../prod-table/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  routerProductId: string = '';

  productModel: IProductTable = {
    id: '',
    name: '',
    image: '',
    description: '',
    isAvailable: false,
    category: '',
    manufacturer: '',
    price: 0,
  };
  productForm!: FormGroup;

  performOperation: 'add' | 'update' = 'update';

  destroy$ = new Subject<void>();

  constructor(
    public actRoute: ActivatedRoute,
    public api: ApiService,
    public fb: FormBuilder
  ) {
    this.actRoute.params.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      this.updateProductId(d);
    });

    this.productForm = this.fb.group({ ...this.productModel });
  }

  private updateProductId(obj: any) {
    this.routerProductId = obj?.id ? obj.id : '';
    if (this.routerProductId.toLowerCase() === 'add') {
      this.performOperation = 'add';
    } else {
      this.performOperation = 'update';
    }
  }

  ngOnInit(): void {
    if (this.performOperation === 'update') this.fetchProductRecord();
  }

  private fetchProductRecord() {
    this.api
      .getProductById(this.routerProductId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        this.productModel = d?.data;
        this.productForm.patchValue({...this.productModel})
      });

  }


  public add(){
    console.log(this.productForm.value)

  }

  public update(){
    console.log(this.productForm.value)
  }


  private addProductRecord() {
    // this.api.getProductById(this.routerProductId).subscribe(console.log)
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
