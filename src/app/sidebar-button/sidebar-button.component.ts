import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  lucideActivity,
  lucideAperture,
  lucideBookOpen,
  lucideCalendarDays,
  lucideSettings,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [NgIconComponent],

  providers: [
    provideIcons({
      lucideAperture,
      lucideBookOpen,
      lucideCalendarDays,
      lucideActivity,
      lucideSettings,
    }),
  ],
  templateUrl: './sidebar-button.component.html',
})
export class SidebarButtonComponent {
  @Input() callbackFunction: () => void = () => {};

  @Input() iconName!: string;
  @Input() tooltipText: string = 'tooltip!';
}
