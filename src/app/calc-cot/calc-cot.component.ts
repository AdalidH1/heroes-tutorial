import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-cot',
  templateUrl: './calc-cot.component.html',
  styleUrls: ['./calc-cot.component.css']
})
export class CalcCotComponent {
  realizados: number = 0;
  total: number = 1;
  efectividad: number | null = null;

  calcularEfectividad() {
    if (this.realizados > this.total) {
      alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
      return;
    }

    this.efectividad = (this.realizados / this.total) * 100;
  }
}
