import { Injectable } from '@angular/core';
import{Subject}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
hide=new Subject<boolean>;
  constructor() { }
  hidetoolbar(val:boolean){
    this.hide.next(val);
  }
}