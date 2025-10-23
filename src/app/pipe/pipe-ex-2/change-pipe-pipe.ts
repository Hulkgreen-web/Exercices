import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changePipe'
})
export class ChangePipePipe implements PipeTransform {

  transform(value: string, choice:"letter" | "number"): string {
    if (choice === "number") {
      return value.replace(/[^0-9]/g, "");
    }
    return value.replace(/[0-9]/g, "");
  }

}
