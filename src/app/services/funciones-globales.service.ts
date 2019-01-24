import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesGlobalesService {

  constructor() { }

  removeOpacity(){
    document.getElementById("mainNav").classList.add("oscurecer");
  }

  addOpacity(){
    document.getElementById("mainNav").classList.remove("oscurecer");
  }


}
