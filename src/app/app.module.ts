import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjercicioNgifNgforModule } from './ejercicios/ejercicio-ngif-ngfor/ejercicio-ngif-ngfor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EjercicioNgifNgforModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
