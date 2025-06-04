// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Codepulse',
      description: 'Full Stack Web Application with Angular, ASP.NET Core Web API, Entity Framework Core, using JWT Token for Authorisation.',
      image: 'assets/images/projects-thumbnails/codepulse.PNG',
      link: '/work/codepulse'
    },
    {
      title: 'Andrew Complainer',
      description: 'Static Musical Website with HTML5, CSS3, PHP.',
      image: 'assets/images/projects-thumbnails/andrew-complainer.PNG',
      link: '/work/andrew-complainer'
    },
    {
      title: 'EF Derma',
      description: 'Responsive Beauty Salon Website with Angular HTML5 CSS3 Bootstrap Typescript.',
      image: 'assets/images/projects-thumbnails/ef-derma.PNG',
      link: '/work/ef-derma'
    },
    {
      title: 'Exchange Subs',
      description: 'Full Stack Web Application with Angular, ASP.NET Core Web API, Entity Framework Core, using JWT Token for Authorisation. The application is under construction.',
      image: 'assets/images/projects-thumbnails/exchange-subs.PNG',
      link: '/work/exchange-subs'
    },
    {
      title: 'ToDo List',
      description: 'A simple ToDo List Application with Angular HTML5 CSS3 Bootstrap Typescript.',
      image: 'assets/images/projects-thumbnails/todo-list.PNG',
      link: '/work/todo-list'
    },
    {
      title: 'Digital Tuner',
      description: 'An embedded system I created with Arduino Uno.',
      image: 'assets/images/projects-thumbnails/digital-tuner.PNG',
      link: '/work/digital-tuner'
    }
  ];
}
