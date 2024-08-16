import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swiper-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-modal.component.html',
  styleUrls: ['./swiper-modal.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperModalComponent {
  @Input() selectedProjectTitle!: string; // Accepts the ID of the selected project
  isModalOpen: boolean = false;
  modalbg: string = '';

  openModal(projectTitle: string): void {
    this.selectedProjectTitle = projectTitle;
    this.setModalBackground(projectTitle);
    this.isModalOpen = true;
  };

  closeModal(): void {
    this.isModalOpen = false;
  };

  private setModalBackground(projectTitle: string): void {
    switch (projectTitle) {
      case 'SUPERPOT':
        this.modalbg = 'assets/images/superPot-bg.png';
        break;
      case 'ISKO-INFO':
        this.modalbg = 'assets/images/isko-bg.png';
        break;
      case 'GENRE PREDICTOR':
        this.modalbg = 'assets/images/genre-bg.png';
        break;
      case 'DATA SCIENCE':
        this.modalbg = 'assets/images/cory-bg.png';
        break;
      case 'BALL TOSS':
        this.modalbg = 'assets/images/ball-bg.png';
        break;
      default:
        this.modalbg = ''; // Default or fallback image
        break;
    }
  };
};
