import { Component } from '@angular/core';
import { PresentacionHComponent } from './presentacion-h/presentacion-h.component';
import { BannerHComponent } from './banner-h/banner-h.component';
import { CardHComponent } from './card-h/card-h.component';

@Component({
  selector: 'app-habitaciones',
  imports: [PresentacionHComponent, BannerHComponent, CardHComponent],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  habitacion = [
    {
      id: 1,
      nombre: 'Panoramicic Ocean View Room',
      descripcion: 'Ideal para compartir con amigos o familiares, esta habitación ofrece dos camas queen y un amplio ventanal con vista panorámica.',
      precio: '$95.00',
      imagen: 'https://i.pinimg.com/736x/f9/67/e5/f967e54850d6b7dacc2fb52e51d82fa7.jpg'
    },
    {
      id: 2,
      nombre: 'Beachfront Suite with Dip Pool',
      descripcion: 'Esta habitación es un refugio de comodidad y funcionalidad. Disfrute de una atmósfera cálida y acogedora en un entorno tranquilo.',
      precio: '$120.00',
      imagen: 'https://i.pinimg.com/736x/9c/5e/5f/9c5e5fff2e88976e2ae9fa208f42a33f.jpg'
    },

    {
      id: 3,
      nombre: 'Pool villa',
      descripcion: 'Nuestra habitación ofrece el espacio y la comodidad que necesitas. Aprovecha y refresca tu día con bebidas del minibar.',
      precio: '$120.00',
      imagen: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/11.jpg'
    },

    {
      id: 4,
      nombre: 'Premium Twin Bed',
      descripcion: 'Ideal para compartir con amigos o familiares, esta habitación ofrece dos camas queen y un amplio ventanal con vista panorámica.',
      precio: '$95.00',
      imagen: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/9-2.jpg'
    },
    {
      id: 5,
      nombre: 'Premium Queen Bed',
      descripcion: 'Esta habitación es un refugio de comodidad y funcionalidad. Disfrute de una atmósfera cálida y acogedora en un entorno tranquilo.',
      precio: '$120.00',
      imagen: 'https://i.pinimg.com/736x/b6/aa/91/b6aa915a8af1139561f0b9ec24a2e5af.jpg'
    },

    {
      id: 6,
      nombre: 'Pool villa',
      descripcion: 'Nuestra habitación ofrece el espacio y la comodidad que necesitas. Aprovecha y refresca tu día con bebidas del minibar.',
      precio: '$120.00',
      imagen: 'https://i.pinimg.com/736x/65/5c/d2/655cd2dca8ec331d45270bad39c7749f.jpg'
    },
    {
      id: 7,
      nombre: 'Luxury Oceanfront Villa',
      descripcion: 'Despierta con el sonido de las olas en esta lujosa villa frente al mar con piscina privada.',
      precio: '$180.00',
      imagen: 'https://i.pinimg.com/736x/7b/db/a4/7bdba40f432dc9d8ac0da6ae6c3a88a2.jpg'
    },
    {
      id: 8,
      nombre: 'Garden Suite',
      descripcion: 'Rodeada de naturaleza, esta suite ofrece tranquilidad y comodidad con acceso directo al jardín.',
      precio: '$105.00',
      imagen: 'https://i.pinimg.com/736x/ad/40/b4/ad40b4330cb471cc1d2fc48be58ae513.jpg'
    },
    {
      id: 9,
      nombre: 'Sunset View Room',
      descripcion: 'Admira las puestas de sol desde el balcón privado de esta habitación con una vista inigualable.',
      precio: '$130.00',
      imagen: 'https://i.pinimg.com/736x/ae/4c/f1/ae4cf15f9958577c6616768c3fc822a2.jpg'
    },
    {
      id: 10,
      nombre: 'Deluxe Family Room',
      descripcion: 'Espaciosa y perfecta para familias, equipada con camas múltiples y área de estar.',
      precio: '$140.00',
      imagen: 'https://i.pinimg.com/736x/99/ad/df/99addf352512989b50451f137ae11697.jpg'
    },
    {
      id: 11,
      nombre: 'Romantic Suite',
      descripcion: 'Ambiente íntimo con jacuzzi privado, ideal para parejas.',
      precio: '$160.00',
      imagen: 'https://i.pinimg.com/736x/d9/70/1f/d9701f1fd6b571ff64c70b3d6b476325.jpg'
    },
    {
      id: 12,
      nombre: 'Sky View Loft',
      descripcion: 'Una experiencia elevada con vistas panorámicas desde la parte más alta del hotel.',
      precio: '$170.00',
      imagen: 'https://i.pinimg.com/736x/65/5c/d2/655cd2dca8ec331d45270bad39c7749f.jpg'
    },
    {
      id: 13,
      nombre: 'Eco-Friendly Room',
      descripcion: 'Diseñada con materiales sostenibles y equipada con tecnología de ahorro energético.',
      precio: '$110.00',
      imagen: 'https://i.pinimg.com/736x/c2/0e/c5/c20ec5f6f761cf8aa9dbbe9a05b9081a.jpg'
    },
    {
      id: 14,
      nombre: 'Tropical Bungalow',
      descripcion: 'Una encantadora cabaña rodeada de palmeras, ideal para una experiencia relajante cerca de la naturaleza.',
      precio: '$115.00',
      imagen: 'https://i.pinimg.com/736x/9d/49/f3/9d49f3a994bf46fd0959414e2da9650a.jpg'
    },
    {
      id: 15,
      nombre: 'Honeymoon Paradise Suite',
      descripcion: 'Suite exclusiva para recién casados con terraza privada, decoración romántica y servicios premium.',
      precio: '$190.00',
      imagen: 'https://i.pinimg.com/736x/9e/69/81/9e6981c9ff9de59b64c51e8c2a0ff39e.jpg'
    }

  ];
}
