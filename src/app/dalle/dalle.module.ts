import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DalleComponent } from './dalle.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DalleRoutingModule } from './dalle-routing.module';

@NgModule({
  declarations: [DalleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    DalleRoutingModule,
  ],
})
export class DalleModule {}
