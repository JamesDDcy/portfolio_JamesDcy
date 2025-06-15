import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { request } from 'http';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
        once: true,
        offset: 0,  // Ensures animations trigger as soon as the element is in the viewport
      });
      AOS.refresh();

      const filled = document.querySelector('.filled') as HTMLElement;
      const update = () => {
        if (filled) {
          filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
        }
        requestAnimationFrame(update);
      };
      update();
    }
  }
}
