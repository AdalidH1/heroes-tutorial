import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-emp',
  templateUrl: './calc-emp.component.html',
  styleUrls: ['./calc-emp.component.css']
})
export class CalcEmpComponent {
  unidadesProducidas: number = 0;
  tiempoPlaneado: number = 0;
  tiempoReal: number = 0;
  eficiencia: number | null = null;
  efectividad: number | null = null;

  calcularEfectividad() {
    if (this.tiempoReal <= 0) {
      alert('El tiempo real no puede ser menor o igual a cero.');
      return;
    }

    this.eficiencia = (this.tiempoPlaneado / this.tiempoReal) * 100;
    this.efectividad = (this.unidadesProducidas / this.tiempoPlaneado) * 100;
  }
}
