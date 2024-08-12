import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VEHICLES } from './vehicle.constants';
import { VehicleModel } from './vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor() {}

  public getVehicles(): Observable<VehicleModel[]> {
    return of(VEHICLES);
  }
}
