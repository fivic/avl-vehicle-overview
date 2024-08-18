import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VehicleNamePipe',
})
export class VehicleNamePipePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ##')[0].trim();
  }
}
