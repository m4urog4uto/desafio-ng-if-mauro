import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioNgifNgforComponent } from './ejercicio-ngif-ngfor.component';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';



@NgModule({
  declarations: [
    EjercicioNgifNgforComponent
  ],
  imports: [
    CommonModule,
    LoadingModule,
  ],
  exports: [EjercicioNgifNgforComponent]
})
export class EjercicioNgifNgforModule { }
