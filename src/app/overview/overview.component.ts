import { Component } from '@angular/core';
import { VehicleService } from '../core/vehicle/vehicle.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { VehicleModel } from '../core/vehicle/vehicle.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  vehicles$: Observable<VehicleModel[]> = of([]);
  searchQuery$ = new BehaviorSubject<string>('');

  constructor(private vehicleService: VehicleService) {
    this.vehicles$ = this.vehicleService.filterVehicles(this.searchQuery$);
  }

  onSearchQueryChange(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }
}
