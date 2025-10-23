import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipePipe implements PipeTransform {

  transform(value: string, choice: string): string {
    return value.replace(/[^0-9]/g, "");
  }

}
