import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  map,
  of,
} from 'rxjs';
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

  public filterVehicles(
    query: BehaviorSubject<string>
  ): Observable<VehicleModel[]> {
    return combineLatest([this.getVehicles(), query]).pipe(
      debounceTime(300),
      map(([vehicles, searchQuery]) =>
        vehicles.filter((vehicle) =>
          Object.values(vehicle).some((value: string | number | boolean) => {
            return value
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        )
      )
    );
  }
}
