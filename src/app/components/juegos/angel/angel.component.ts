import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angel',
  templateUrl: './angel.component.html',
  styleUrls: ['./angel.component.scss']
})
export class AngelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var canvas = <HTMLCanvasElement> document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var longitud=1;
    var snake=[{x:0,y:0}];
    var xv=0;
    var yv=0;
    var fruta;
    var puntuacion=0;
    var vidas=3;

    window.onkeydown = function(event){
        var tecla = event.keyCode;
        if(tecla==37){
            xv=-1;
            yv=0;
        }
        if(tecla==38){
            xv=0;
            yv=-1;
        }
        if(tecla==39){
            xv=1;
            yv=0;
        }
        if(tecla==40){
            xv=0;
            yv=1;
        }
    }

    function generarFruta(){
     fruta={
        x: Math.floor(Math.random()*15),
        y: Math.floor(Math.random()*15)
      }
    }

    generarFruta();

    function frame(){
        if(vidas>0){
            var x=snake[0].x+xv;
            var y=snake[0].y+yv;
            if(x>14){
                x=0
            }
            if(x<0){
                x=14
            }
            if(y>14){
                y=0
            }
            if(y<0){
                y=14
            }
            snake.unshift({x:x,y:y});
    
            for (var i = 1; i < longitud; i++) {
                if(x==snake[i].x && y==snake[i].y){
                    longitud=1
                    vidas--;
                }
            }
    
            if(x==fruta.x && y==fruta.y){
                longitud++;
                puntuacion=puntuacion+100;
                generarFruta();
            }
    
            ctx.clearRect(0,0,560,480);
            ctx.strokeRect(0,0,15*30,15*30);
    
            for (var i = 0; i < longitud; i++) {
                ctx.fillRect(snake[i].x*30,snake[i].y*30,25,25);
            }
            ctx.fillRect(fruta.x*30,fruta.y*30,25,25);
    
            ctx.font = "18px fantasy";
            ctx.fillText("SCORE: "+puntuacion, 460, 20);
            ctx.fillText("LIVES: "+vidas, 460, 40);

        }else{
            ctx.clearRect(0,0,560,480);
            ctx.strokeRect(0,0,15*30,15*30);
            ctx.font = "18px fantasy";
            ctx.fillText("SCORE: "+puntuacion, 460, 20);
            ctx.fillText("LIVES: "+vidas, 460, 40);
            ctx.font = "30px fantasy";
            ctx.fillText("GAME OVER", 150, 200);
        }
    }
    setInterval(frame,100);
  }
}
