import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './swiper-modal.component.html',
  styleUrls: ['./swiper-modal.component.css']
})
export class SwiperModalComponent {

  isModalOpen: boolean = false;
  openModal(): void {
    this.isModalOpen = true;
    console.log(this.isModalOpen);
  };
  closeModal(): void {
    this.isModalOpen = false;
    console.log(this.isModalOpen);
  };

}
