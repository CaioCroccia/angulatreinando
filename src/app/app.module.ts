import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { TimerComponent } from './components/timer/timer.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './services/timer.service';
import { DisciplinaService } from './services/disciplina.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'disciplina', component: DisciplinaComponent},
    {path: 'timer', component: TimerComponent},

  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinaComponent, TimerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TimerService, DisciplinaService]
})
export class AppModule { }
