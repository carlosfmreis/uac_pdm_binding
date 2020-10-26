import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  name: string;
  imageSrc: string = 'assets/icon/favicon.png';

  constructor() {}

  sayHi(): void {
    alert('Hi, ' + this.name + '!');
  }
}
