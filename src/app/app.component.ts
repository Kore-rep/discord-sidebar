import { Component, type ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('scrollcontainer') scrollContainer!: ElementRef;
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
    this.updateOverflow();
  };

  dividerStyle = {
    w: 'w-auto',
    border: 'border-2',
    'b-color': 'border-gray-light',
  };

  styleToString = (): string => {
    let temp = '';
    for (const [, v] of Object.entries(this.dividerStyle)) {
      temp += ' ';
      temp += v;
    }
    return temp;
  };

  dividerStyleString: string = this.styleToString();

  updateOverflow(): void {
    const element: HTMLDivElement = this.scrollContainer.nativeElement;
    if (element.clientHeight < element.scrollHeight) {
      if (element.scrollHeight - element.scrollTop - element.clientHeight < 1) {
        this.dividerStyle['b-color'] = 'border-gray-light';
      } else {
        this.dividerStyle['b-color'] = 'border-accent-purple';
      }
    } else {
      this.dividerStyle['b-color'] = 'border-gray-light';
    }
    this.dividerStyleString = this.styleToString();
  }

  title = 'discord-sidebar';
}
