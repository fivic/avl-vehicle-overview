import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { LoginPageComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { TableModule } from 'primeng/table';
import { VehicleNamePipePipe } from './vehicle-name-pipe.pipe';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OverviewComponent,
    VehicleNamePipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    SkeletonModule,
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
