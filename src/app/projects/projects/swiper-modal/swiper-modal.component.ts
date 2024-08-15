import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swiper-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper-modal.component.html',
  styleUrls: ['./swiper-modal.component.css']
})
export class SwiperModalComponent {
  @Input() selectedProjectTitle!: string; // Accepts the ID of the selected project
  isModalOpen: boolean = false;

  openModal(projectTitle: string): void {
    this.selectedProjectTitle = projectTitle;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
