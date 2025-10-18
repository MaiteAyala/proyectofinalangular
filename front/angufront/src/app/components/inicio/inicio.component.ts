import { Component } from '@angular/core';
import { BannerIComponent } from './banner-i/banner-i.component';
import { PresentacionIComponent } from './presentacion-i/presentacion-i.component';
import { SearchFormComponent } from './search-form/search-form.component';

@Component({
  selector: 'app-inicio',
  imports: [BannerIComponent, SearchFormComponent, PresentacionIComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
