import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  /*add hovered class to selected list */
let list=document.querySelectorAll(".navigation li");
 
function activelink(this: any){
  list.forEach((item)=>
  {
    item.classList.remove("hovered")})
    this.classList.add("hovered")
  }
 list.forEach(item=>item.addEventListener("mouseover",activelink))
 //menu toggle
 