import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { request } from 'http';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeModal', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 500,
        once: false,
        offset: -400,  // Ensures animations trigger as soon as the element is in the viewport
      });
      AOS.refresh();

      window.addEventListener('resize', () => AOS.refresh());
      window.addEventListener('orientationchange', () => AOS.refresh());

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

  emailData = {
    email: '',
    subject: '',
    message: ''
  };

  sendEmailModalOpen = false;
  openModal() { this.sendEmailModalOpen = true; }
  closeModal() {
    this.sendEmailModalOpen = false;
    this.emailStatus = null; // Reset email status when closing the modal
    this.emailData = {
      email: '',
      subject: '',
      message: ''
    }; // Reset email data when closing the modal
  }


  validateEmailForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      this.emailData.email &&
      emailPattern.test(this.emailData.email)
    );
  }

  validateSubjectOrMessage(data: string) {
    return (
      data && data.length >= 5
    );
  }

  emailStatus: 'success' | 'error' | null = null;

  sendEmail() {
    emailjs.send('service_0pir1td', 'template_mlg9imm', { ...this.emailData }, {
      publicKey: 'V1ovjeeoPRfAGNba2'
    }).then(() => {
      this.emailStatus = 'success';
      // Optionally close the modal after a short delay
      setTimeout(() => this.closeModal(), 1500);
    }, () => {
      this.emailStatus = 'error';
      // Optionally close the modal after a short delay
      setTimeout(() => this.closeModal(), 2000);
    }
    )
  }
}
