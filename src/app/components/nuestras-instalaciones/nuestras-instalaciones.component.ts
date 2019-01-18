import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestras-instalaciones',
  templateUrl: './nuestras-instalaciones.component.html',
  styleUrls: ['./nuestras-instalaciones.component.scss']
})
export class NuestrasInstalacionesComponent implements OnInit {

  id: string = "ninstalaciones";
  constructor() { }

  ngOnInit() {
    //window.onload = function() {

      // Video
      var video = <HTMLMediaElement> document.getElementById("video");
    
      // Botones
      var playButton = document.getElementById("play-pause");
      var muteButton = document.getElementById("mute");
      var fullScreenButton = document.getElementById("full-screen");
    
      // Sliders
      var seekBar = <HTMLInputElement> document.getElementById("seek-bar");
      var volumeBar = <HTMLInputElement> document.getElementById("volume-bar");
    
    
      // Event listener para el botón play/pause
      playButton.addEventListener("click", function() {
        if (video.paused == true) {
          // Play video
          video.play();
    
          // Actualiza el botón a 'Pausa'
          playButton.innerHTML = "<i class='fas fa-pause'></i>";
        } else {
          // Pause the video
          video.pause();
    
          // Actualiza el botón a 'Play'
          playButton.innerHTML = "<i class='fas fa-play'></i>";
        }
      });
    
    
      // Event listener para el botón mute
      muteButton.addEventListener("click", function() {
        if (video.muted == false) {
          // Mutear el video
          video.muted = true;
    
          // Actualiza el botón a sonido
          muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
        } else {
          // Desmutea el video
          video.muted = false;
    
          // Actualiza el botón a mute
          muteButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
        }
      });
    
    
      // Event listener para el botón full-screen
      fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.requestFullscreen) {
          video.requestFullscreen(); // Firefox
        } else if (video.requestFullscreen/*video.webkitRequestFullscreen*/) {
          video.requestFullscreen; /*video.webkitRequestFullscreen();*/ // Chrome y Safari
        }
      });
    
    
      // Event listener para la barra de reproducción
      seekBar.addEventListener("change", function() {
        // Calcular el nuevo tiempo
        var time = video.duration * ((Number) (seekBar.value) / 100);
    
        // Actualizar el tiempo del video
        video.currentTime = time;
      });
    
      
      // Actualiza la barra de reproducción a la reproducción del vídeo
      video.addEventListener("timeupdate", function() {
        // Calcular el valor del slider
        var value = (100 / video.duration) * video.currentTime;
    
        // Actualizar el valor del slider
        //@ts-ignore
        seekBar.value = value;
      });
    
      // Pausar el video cuando la barra de reproducción está siendo arrastrada
      seekBar.addEventListener("mousedown", function() {
        playButton.innerHTML = "<i class='fas fa-pause'></i>";
        video.pause();
      });
    
      // Play el video cuando la barra de reproducción se suelta
      seekBar.addEventListener("mouseup", function() {
        playButton.innerHTML = "<i class='fas fa-play'></i>";
        video.play();
      });
    
      // Event listener para la barra de sonido
      volumeBar.addEventListener("change", function() {
        // Actualizar el volumen del video
        //@ts-ignore
        video.volume = Number.volumeBar.value;
      });
    //}
  }

  ngAfterViewInit() {
    
  }

}
