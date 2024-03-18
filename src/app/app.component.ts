import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideAperture,
  lucideBookOpen,
  lucideCalendarDays,
  lucideActivity,
  lucideSettings,
} from '@ng-icons/lucide';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent, SidebarButtonComponent],
  providers: [
    provideIcons({
      lucideAperture,
      lucideBookOpen,
      lucideCalendarDays,
      lucideActivity,
      lucideSettings,
    }),
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'discord-sidebar';
}
