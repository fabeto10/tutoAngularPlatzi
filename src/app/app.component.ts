import { Component } from '@angular/core';

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
}
