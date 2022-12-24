import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, EMPTY, Subject, Subscription, takeUntil, tap } from 'rxjs';
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

  loading: boolean = false;

  destroy$ = new Subject<void>();

  constructor(
    public actRoute: ActivatedRoute,
    public api: ApiService,
    public fb: FormBuilder,
    private toastService: HotToastService
  ) {
    this.loading = true;
    //tracking router event changes
    this.actRoute.params.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      this.updateProductId(d);
    });

    this.productForm = this.fb.group({ ...this.productModel });
  }

  private updateProductId(obj: any) {
    this.routerProductId = obj?.id ? obj.id : '';
    if (this.routerProductId.toLowerCase() === 'add') {
      this.performOperation = 'add';
      this.loading = false;
      this.productForm.patchValue({ ...this.productModel });
    } else {
      this.performOperation = 'update';
      this.fetchProductRecord();
    }
  }

  ngOnInit(): void {
  }

  private fetchProductRecord() {
    this.api
      .getProductById(this.routerProductId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        this.productModel = d?.data;
        this.productForm.patchValue({ ...this.productModel });
        this.loading = false;
      });
  }

  public add() {
    console.log(this.productForm.value);
  }

  public update() {
    console.log(this.productForm.value);
    this.api
      .updateProduct({ ...this.productForm.value })
      .pipe(catchError((e) => this.handleError(e)))
      .subscribe((d) => {
        this.toastService.success('Updated Successfully');
      });
  }

  private addProductRecord() {
    let temp = { ...this.productForm.value };
    delete temp.id; 
   
  }

  private handleError(e: any) {
    this.toastService.error('OOPS !!! Could not update');
    return EMPTY;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
