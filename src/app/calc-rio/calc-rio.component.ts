import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-rio',
  templateUrl: './calc-rio.component.html',
  styleUrls: ['./calc-rio.component.css']
})
export class CalcRioComponent {
  inversion: number = 0;
  beneficio: number = 0;
  roi: number | null = null;
  mensajeROI: string = '';

  calcularROI() {
    if (isNaN(this.inversion) || isNaN(this.beneficio)) {
      this.mensajeROI = 'Error: Ingrese valores numéricos válidos.';
      return;
    }

    this.roi = (this.beneficio - this.inversion) / this.inversion * 100;

    if (this.roi >= 0) {
      this.mensajeROI = `ROI: ${this.roi.toFixed(2)}%`;
    } else {
      this.mensajeROI = `ROI: -${(-this.roi).toFixed(2)}% (Pérdida)`;
    }
  }
}
