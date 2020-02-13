import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: string[]=['Butter','bread','milk'];
  getItems(): string[]{
    return this.items;
  }
  constructor() { }
}
