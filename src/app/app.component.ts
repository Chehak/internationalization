import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { $localize } from '@angular/localize/init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'i18n';

  constructor(private titleService: Title) {
    // this.titleService.setTitle($localize`${this.title}`);
  }
}
