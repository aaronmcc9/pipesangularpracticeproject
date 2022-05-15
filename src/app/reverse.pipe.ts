import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any,) {
    if (value.length < 2) {
      return value
    }

    let rev = '';
    for (let i = value.length-1; i >= 0; i--) {
      rev += value[i];
    }

    return rev;
  }

}
