import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css', '../app.component.css'],
})
export class IntroductionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  playAudio(type) {
    var bleep = new Audio();
    if (type == 'develop') {
      bleep.src = './assets/sounds/button-6.mp3';
    } else if (type == 'design') {
      bleep.src = './assets/sounds/button-09.mp3';
    }
    bleep.play();
  }
}
