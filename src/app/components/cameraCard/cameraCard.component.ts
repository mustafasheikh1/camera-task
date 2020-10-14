import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cam-card',
  templateUrl: './cameraCard.component.html',
  styleUrls: ['./cameraCard.component.scss']
})



export class CameraCardComponent implements OnInit{
  constructor(){}
  @Input() img: string
  @Input() status: boolean


  ngOnInit(): void{
  }
}
