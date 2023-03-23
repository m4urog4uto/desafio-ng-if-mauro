import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models';

@Component({
  selector: 'app-ejercicio-ngif-ngfor',
  templateUrl: './ejercicio-ngif-ngfor.component.html',
  styleUrls: ['./ejercicio-ngif-ngfor.component.css']
})
export class EjercicioNgifNgforComponent implements OnInit {
  public usuarios: Usuario[] = [
    new Usuario(1, 'Naruto', 'Uzumaki', 'naruto@mail.com', 16, true, new Date('1994-01-03')),
    new Usuario(3, 'Sasuke', 'Uchiha', 'sasuke@mail.com', 16, false, new Date('1992-05-14')),
    new Usuario(4, 'Kakashi', 'Hatake', 'kakashi@mail.com', 16, false, new Date('1980-02-24')),
    new Usuario(5, 'Sakura', 'Haruno', 'sakura@mail.com', 29, true, new Date('1995-08-12')),
    new Usuario(6, 'Itachi', 'Uchiha', 'itachi@mail.com', 21, true, new Date('2002-07-24')),
  ];
  isLoading: boolean = true;

  
  ngOnInit(): void {
    // Este es el ciclo de vida ON INIT (al inicializarse) del componente...
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }
}
