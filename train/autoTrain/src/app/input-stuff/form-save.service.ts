import { Injectable } from '@angular/core';
import {FormThing} from './form';

@Injectable({
  providedIn: 'root'
})
export class FormSaveService {

  form: FormThing;
  date: string;
  hour: string;

  constructor() { }
}
