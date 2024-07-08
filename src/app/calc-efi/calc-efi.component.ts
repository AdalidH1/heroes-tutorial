import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-efi',
  templateUrl: './calc-efi.component.html',
  styleUrls: ['./calc-efi.component.css']
})
export class CalcEfiComponent {
  eficacia: number = 0;
  eficiencia: number = 0;
  efectividad: number | null = null;

  calcularEfectividad() {
    if (this.eficacia > 100 || this.eficiencia > 100) {
      alert('Los valores de eficacia y eficiencia no pueden ser mayores que 100%.');
      return;
    }

    this.efectividad = (this.eficacia * this.eficiencia) / 100;
  }
}
