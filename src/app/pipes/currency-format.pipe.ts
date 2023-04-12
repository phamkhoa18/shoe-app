import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: Number): string {
    return value.toLocaleString() + 'đ';
  }
}
