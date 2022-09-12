import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-questionnaire';

  public age: string;

  public onAgeChange(value: string): void {
    console.log({ value });
    this.age = value;
  }
}
