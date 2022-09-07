import { Component } from '@angular/core';
import { Product } from './product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 18;
  img = 'http://fondopantalla.com.es/file/90/2560x1600/crop/imgen-panor%C3%A1mica-golden-gate.jpg'
  btnDisabled = true;
  person = {
    name: "Nicolas",
    age: 18,
    avatar: 'http://fondopantalla.com.es/file/90/2560x1600/crop/imgen-panor%C3%A1mica-golden-gate.jpg'
  }
  products:  Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/image/album.webp',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/image/bike.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/image/album.webp'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/image/books.webp'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/image/house.webp'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/image/glasses.webp'
    }
  ]
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = "";
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
