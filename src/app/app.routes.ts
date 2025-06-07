// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CodepulseComponent } from './projects/codepulse/codepulse.component';
import { AndrewComplainerComponent } from './projects/andrew-complainer/andrew-complainer.component';
import { EfDermaComponent } from './projects/ef-derma/ef-derma.component';
import { ExchangeSubsComponent } from './projects/exchange-subs/exchange-subs.component';
import { TodoListComponent } from './projects/todo-list/todo-list.component';
import { DigitalTunerComponent } from './projects/digital-tuner/digital-tuner.component';

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Force home as entry
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work/codepulse', component: CodepulseComponent },
  { path: 'work/andrew-complainer', component: AndrewComplainerComponent },
  { path: 'work/ef-derma', component: EfDermaComponent },
  { path: 'work/exchange-subs', component: ExchangeSubsComponent },
  { path: 'work/todo-list', component: TodoListComponent },
  { path: 'work/digital-tuner', component: DigitalTunerComponent },
  { path: '**', redirectTo: '' }
];
