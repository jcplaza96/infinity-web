import { Component, OnInit, Input } from '@angular/core';
import { OfertasSliderComponent } from '../ofertas-slider/ofertas-slider.component';
import { FirebaseService } from 'src/app/services/firebase.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-slider-index',
  templateUrl: './slider-index.component.html',
  styleUrls: ['./slider-index.component.scss']
})
export class SliderIndexComponent implements OnInit {
  
  items: any;
  parent: string = "ofertas";

  constructor(private conexion: FirebaseService) { 
   // for (let index = 0; index < 2; index++) {
    //  this.ofertas[index]=(new OfertasSliderComponent());
    //  this.ofertas[index].imagen="/assets/img/slider-"+(index+1)+".jpg";
    //}
  }

  ngOnInit() {
    this.conexion.listaItem(this.parent).subscribe(item =>{
      this.items = item;
    })
    this.deslizarSlider();
  }

  deslizarSlider(){
    $(".carousel").on("touchstart", function(event){
      var xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
      });
      $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
      });
    });
  }

}
