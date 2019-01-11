import { Component, OnInit, ElementRef } from '@angular/core';
import { element } from 'protractor';
import { fillProperties } from '@angular/core/src/util/property';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
    selector: 'app-fernando',
    templateUrl: './fernando.component.html',
    styleUrls: ['./fernando.component.scss']
})
export class FernandoComponent implements OnInit {

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D ;
    x: number;
    y: number;
    constructor(public elmRef: ElementRef) {
        
        
    }
    
    
    
    ngOnInit() {     
        this.canvas =<HTMLCanvasElement> document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");        
        console.log(this.canvas);
        this.drawCirc(this.ctx);
    }
    

    ngAfterViewInit(): void {
    }

    drawCirc(ctx:CanvasRenderingContext2D) {
        this.x = this.getRandomArbitrary(0,400);
        this.y = this.getRandomArbitrary(0,400);
        ctx.fillRect(this.x,this.y,20,20);
    }
    rmCirc(ctx:CanvasRenderingContext2D) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x-1,this.y-1,22,22);
        ctx.fillStyle = "#000000";
    }

    game(e: MouseEvent){

        console.clear();
        console.log("x Raton: "+ (e.x - document.getElementById("canvas").offsetLeft));
        console.log("y Raton: "+ (e.y - document.getElementById("canvas").offsetTop));
        let xRatonCanvas = (e.x - document.getElementById("canvas").offsetLeft);
        let yRatonCanvas = (e.y - document.getElementById("canvas").offsetTop);
        console.log("x Cubo: "+this.x);
        console.log("y Cubo: "+this.y);
        if( (xRatonCanvas > this.x && xRatonCanvas < this.x +20) && (yRatonCanvas > this.y && yRatonCanvas < this.y + 20)){
            this.rmCirc(this.ctx);
            this.drawCirc(this.ctx);
        }
    
            console.log(document.getElementById("canvas").offsetTop);
            console.log(document.getElementById("container").offsetLeft);
        }

    checkCollision(e: MouseEvent){



    }

    test(event: MouseEvent) {
        console.log(event.x);
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}