import { Pipe, PipeTransform } from '@angular/core';
import { IProductTable } from '../prod-table/product.interface';

@Pipe({
  name: 'prodSearch',
})
export class ProdSearchPipe implements PipeTransform {
  // first param value
  transform(value: IProductTable[] | null, searchTerm: string) {
    if (value != null) {
      if (searchTerm === '') return value;

      if (searchTerm.length > 1) {
        return [...value].filter((i) => {
          if (i.name.includes(searchTerm)) {
            return i;
          }
          return;
        });
      }
    }
    return value;
  }
}
