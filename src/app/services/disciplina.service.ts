import { Injectable } from '@angular/core';

interface disciplina{
  title: string;
  name: string;
  hora: string;
}

@Injectable()
export class DisciplinaService {

  constructor() { }
   lista: Array<disciplina> = [
      {
        title: 'a',
        name: 'oi',
        hora:  '12-14:30'

      }
  ]
}