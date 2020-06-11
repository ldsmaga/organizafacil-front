import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeText'
})
export class RemoveTextPipe implements PipeTransform {

  transform(value:string, text: string): string {
    if(typeof value === "undefined") return value;
    return value.replace(text,"");
  }
}
