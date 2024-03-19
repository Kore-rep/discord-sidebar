import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideAperture,
  lucideBookOpen,
  lucideCalendarDays,
  lucideActivity,
  lucideSettings,
  lucidePlus,
} from '@ng-icons/lucide';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent, SidebarButtonComponent, NgFor],
  providers: [
    provideIcons({
      lucideAperture,
      lucideBookOpen,
      lucideCalendarDays,
      lucideActivity,
      lucideSettings,
      lucidePlus,
    }),
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly possibleButtons: string[] = [
    'lucideAperture',
    'lucideBookOpen',
    'lucideCalendarDays',
    'lucideActivity',
  ];

  readonly buttonList: string[] = [];

  callbackFunc = (): void => {
    this.buttonList.push(
      this.possibleButtons[
        Math.floor(Math.random() * this.possibleButtons.length)
      ],
    );
  };

  title = 'discord-sidebar';
}
