import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTrademark'
})
export class FilterByTrademarkPipe implements PipeTransform {
  transform(items: any[], trademark: string): any[] {
    if (!items) return [];
    if (!trademark) return items;

    trademark = trademark.toLowerCase();
    return items.filter(item => {
      return item.trademark.title.toLowerCase().includes(trademark);
    }).slice(0, 8);
  }
}
