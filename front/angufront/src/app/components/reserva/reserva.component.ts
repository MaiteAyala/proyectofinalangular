import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitacionesComponent } from '../habitaciones/habitaciones.component';
import { SearchFormRComponent } from './search-form-r/search-form-r.component';
import { CommonModule } from '@angular/common';

declare const bootstrap: any; // Declara bootstrap para TypeScript

@Component({
  selector: 'app-reserva',
  imports: [SearchFormRComponent, CommonModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})


export class ReservaComponent implements OnInit {
  habitacionId: number | null = null;
  habitacion: any = null;


  habitaciones = [
    {
      id: 1,
      nombre: 'Premium Twin Bed',
      descripcion: 'Ideal para compartir con amigos o familiares, esta habitación ofrece dos camas queen y un amplio ventanal con vista panorámica.',
      precio: '$95.00',
      imagen: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/9-2.jpg',
      imagen2: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/6.jpg',
      imagen3: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
      id: 2,
      nombre: 'Premium Queen Bed',
      descripcion: 'Esta habitación es un refugio de comodidad y funcionalidad. Disfrute de una atmósfera cálida y acogedora en un entorno tranquilo.',
      precio: '$120.00',
      imagen: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/10-1.jpg',
      imagen2: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imagen3: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
      id: 3,
      nombre: 'Pool villa',
      descripcion: 'Nuestra habitación ofrece el espacio y la comodidad que necesitas. Aprovecha y refresca tu día con bebidas del minibar.',
      precio: '$120.00',
      imagen: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/11.jpg',
      imagen2: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imagen3: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
      id: 4,
      nombre: 'Premium Twin Bed',
      descripcion: 'Ideal para compartir con amigos o familiares, esta habitación ofrece dos camas queen y un amplio ventanal con vista panorámica.',
      precio: '$95.00',
      imagen: 'https://codex-themes.com/thegem/sites/luxury-hotel/wp-content/uploads/2018/11/9-2.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    
    },
    {
      id: 5,
      nombre: 'Premium Queen Bed',
      descripcion: 'Esta habitación es un refugio de comodidad y funcionalidad. Disfrute de una atmósfera cálida y acogedora en un entorno tranquilo.',
      precio: '$120.00',
      imagen: 'https://i.pinimg.com/736x/b6/aa/91/b6aa915a8af1139561f0b9ec24a2e5af.jpg',
      imagen2: 'https://i.pinimg.com/736x/ad/42/3e/ad423ed92fb157deeb58ee5df32533df.jpg',
      imagen3: 'https://i.pinimg.com/736x/2b/02/9a/2b029a0b622c304f555f39d846dccc0d.jpg'
    },

    {
      id: 6,
      nombre: 'Luxury Oceanfront Villa',
      descripcion: 'Disfruta de la tranquilidad con vista a nuestros jardines tropicales, perfecta para una escapada relajante.',
      precio: '$120.00',
      imagen: 'https://i.pinimg.com/736x/65/5c/d2/655cd2dca8ec331d45270bad39c7749f.jpg',
      imagen2: 'https://i.pinimg.com/736x/f8/10/01/f81001cfbdbdf14cef09ce8885e0af1c.jpg',
      imagen3: 'https://i.pinimg.com/736x/9c/14/69/9c1469fe07aa994148d8610fc537396b.jpg'
    },{
      id: 7,
      nombre: 'Luxury Oceanfront Villa',
      descripcion: 'Disfruta de la tranquilidad con vista a nuestros jardines tropicales, perfecta para una escapada relajante.',
      precio: '$982.00',
      imagen: 'https://i.pinimg.com/736x/7b/db/a4/7bdba40f432dc9d8ac0da6ae6c3a88a2.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 8,
      nombre: 'Deluxe Ocean Breeze',
      descripcion: 'Experimenta el sonido del mar desde tu balcón privado. Ideal para quienes aman el océano.',
      precio: '$130.00',
      imagen: 'https://i.pinimg.com/736x/ad/40/b4/ad40b4330cb471cc1d2fc48be58ae513.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 9,
      nombre: 'Executive Suite',
      descripcion: 'Amplia y moderna, equipada con sala de estar y área de trabajo. Ideal para estancias largas o viajes de negocios.',
      precio: '$145.00',
      imagen: 'https://i.pinimg.com/736x/ae/4c/f1/ae4cf15f9958577c6616768c3fc822a2.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 10,
      nombre: 'Romantic Sunset Room',
      descripcion: 'Ambiente cálido y romántico con vistas al atardecer. Perfecto para parejas.',
      precio: '$125.00',
      imagen: 'https://i.pinimg.com/736x/99/ad/df/99addf352512989b50451f137ae11697.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 11,
      nombre: 'Family Comfort Room',
      descripcion: 'Espaciosa y cómoda, ideal para familias con niños. Incluye zona de juegos.',
      precio: '$135.00',
      imagen: 'https://i.pinimg.com/736x/d9/70/1f/d9701f1fd6b571ff64c70b3d6b476325.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 12,
      nombre: 'Luxury Penthouse',
      descripcion: 'Lo mejor del hotel. Amplia terraza privada, jacuzzi y vistas 360° al mar.',
      precio: '$210.00',
      imagen: 'https://i.pinimg.com/736x/65/5c/d2/655cd2dca8ec331d45270bad39c7749f.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 13,
      nombre: 'Tropical Bungalow',
      descripcion: 'Una encantadora cabaña rodeada de palmeras, ideal para una experiencia relajante cerca de la naturaleza.',
      precio: '$115.00',
      imagen: 'https://i.pinimg.com/736x/c2/0e/c5/c20ec5f6f761cf8aa9dbbe9a05b9081a.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 14,
      nombre: 'Tropical Bungalow',
      descripcion: 'Una encantadora cabaña rodeada de palmeras, ideal para una experiencia relajante cerca de la naturaleza.',
      precio: '$115.00',
      imagen: 'https://i.pinimg.com/736x/9d/49/f3/9d49f3a994bf46fd0959414e2da9650a.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    },
    {
      id: 15,
      nombre: 'Honeymoon Paradise Suite',
      descripcion: 'Suite exclusiva para recién casados con terraza privada, decoración romántica y servicios premium.',
      precio: '$190.00',
      imagen: 'https://i.pinimg.com/736x/9e/69/81/9e6981c9ff9de59b64c51e8c2a0ff39e.jpg',
      imagen2: 'https://i.pinimg.com/736x/44/2c/f0/442cf046ba3a72c97a3a406328a8604f.jpg',
      imagen3: 'https://i.pinimg.com/736x/2a/a2/72/2aa272de138c2a3f5064580464b9f046.jpg'
    }
    
  ];


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.habitacionId = Number(this.route.snapshot.paramMap.get('id'));
    this.habitacion = this.habitaciones.find(h => h.id === this.habitacionId);
  }


  confirmarReserva(event: Event) {
    event.preventDefault();
    
    // Abre el modal con Bootstrap JavaScript (requiere jQuery y Bootstrap.bundle.min.js)
    const modal = new bootstrap.Modal(document.getElementById('reservaConfirmadaModal'));
    modal.show();
  }
}