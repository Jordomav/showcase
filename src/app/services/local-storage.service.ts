import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key, value) {
    return localStorage.setItem('ngChat.' + key, JSON.stringify(value));
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem('ngChat.' + key));
  }

  removeItem(key) {
    return localStorage.removeItem('ngChat.' + key);
  }

  constructor() { }
}
