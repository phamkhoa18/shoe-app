import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/product.model';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(filteredProducts: any[], isSearch: String): unknown {
    if (!filteredProducts || !isSearch) {
      return filteredProducts;
    }
    return filteredProducts.filter((item) =>
      item.includes(isSearch.toLowerCase())
    );
  }

}
