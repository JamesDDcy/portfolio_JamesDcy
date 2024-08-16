import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { SwiperModalComponent } from './swiper-modal/swiper-modal.component';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tools: string;
  description: string;
  year: string;
  image: string;
  textColor: string;
  hoverColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SwiperModalComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ProjectsComponent {
  @ViewChild(SwiperModalComponent) swiperModal!: SwiperModalComponent;

  projects: Project[] = [
    {
      title: 'SUPERPOT',
      tools: 'C++ | Arduino IDE | TailwindCSS | Firebase',
      description: 'A Smart Greenhouse Enclosure System IoT project that uses Vercel and TailwindCSS for the web application, Arduino IDE for backend, and Firebase as the database system.',
      year: '2024',
      image: 'assets/images/superPot.png',
      textColor: 'text-green-400',
      hoverColor: 'hover:text-green-600'
    },
    {
      title: 'ISKO-INFO',
      tools: 'Ruby on Rails | HTML/CSS | Firebase',
      description: 'A full-stack web application designed to assist UP Diliman students in the registration process. It utilizes Ruby on Rails for both the front-end and back-end, while employing Firebase as the database system.',
      year: '2023-2024',
      image: 'assets/images/iskoInfo.png',
      textColor: 'text-red-400',
      hoverColor: 'hover:text-red-600'
    },
    {
      title: 'GENRE PREDICTOR',
      tools: 'Python',
      description: 'A machine learning project which utilizes a BERT NLP model to classify movies into genres based on a short text description.',
      year: '2024',
      image: 'assets/images/movieGenrePredictor.png',
      textColor: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-600'
    },
    {
      title: 'DATA SCIENCE',
      tools: 'Python',
      description: 'A Data Science project that employed Python for NLP to analyze Twitter data relating to the mis/disinformation about Cory Aquino`s presidency and the EDSA revolution in the context of the 2022 elections.',
      year: '2023',
      image: 'assets/images/dataScience.png',
      textColor: 'text-amber-400',
      hoverColor: 'hover:text-amber-600'
    },
    {
      title: 'BALL TOSS',
      tools: 'Pyret',
      description: 'A simple UI game developed using Pyret, a functional programming language.',
      year: '2021',
      image: 'assets/images/ballToss.png',
      textColor: 'text-fuchsia-400',
      hoverColor: 'hover:text-fuchsia-600'
    },
    {
      title: 'TEST',
      tools: 'Pyret',
      description: 'TEST 123',
      year: '2021',
      image: 'assets/images/ballToss.png',
      textColor: 'text-fuchsia-400',
      hoverColor: 'hover:text-fuchsia-600'
    }
  ];

  openModal(projectTitle: string): void {
    this.swiperModal.openModal(projectTitle);
  }

  closeModal(): void {
    this.swiperModal.closeModal();
  }
}
