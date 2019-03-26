import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charcut party';

  isThisIngredientVital:boolean = true;

  displayGuestList:boolean = true;

  songList:string[] = ['Lateralus', 'Clenching the fist of dissent', 'Chop Suey!'];

  showMovies:boolean = true;
}
