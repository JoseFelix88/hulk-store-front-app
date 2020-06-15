import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateStr'
})
export class ValidateStrPipe implements PipeTransform {

  transform(value: string, validateStr?: string): string {
    return value == null || value == '' ? validateStr : value;
  }

}
