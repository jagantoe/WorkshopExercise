import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PEOPLE, Person } from './data';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WorkshopExercise';

  people: Person[] = PEOPLE;
  firstChoice = model<Person>();
  secondChoice = model<Person>();
  thirdChoice = model<Person>();

}
