import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-h',
  imports: [RouterModule, CommonModule],
  templateUrl: './card-h.component.html',
  styleUrl: './card-h.component.css'
})
export class CardHComponent {
  @Input() habitacion: any;
}
