import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-proceso-admin',
  templateUrl: './proceso-admin.component.html',
  styleUrls: ['./proceso-admin.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTooltipModule, MatIconModule],
})
export class ProcesoAdminComponent {

}
