import { Component, OnInit,Directive, ElementRef, Renderer2,ViewChild} from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  message:string;

  constructor(private data: DataService,private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
      var source = '<source src="{{message}}" type="audio/mp3">';
      
      const element = this.renderer.selectRootElement('audio'); 
      this.renderer.setAttribute(element, 'src', message);
      if(message != ""){element.play()}      
    })
    
  }


}
