import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString, propName) {

    if (value.length === 0 || filterString === '') {
      return value;
    }

    const filteredArray = [];
    for(let item of value){
    console.log(item[propName], filterString);

      if(item[propName].indexOf(filterString) !== -1){
        filteredArray.push(item)
      }
    }

    return filteredArray;
  }

}
