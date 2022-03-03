import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precentage'
})
export class PrecentagePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value+"%";
  }

}
