import { Component, OnInit } from '@angular/core'
import { Camera } from 'src/app/models'
import { DataService } from '../../services/data.service'
@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  cameras: Camera[] = [];
  randomImage = [
    "https://picsum.photos/id/0/5616/3744",
    "https://picsum.photos/id/1/5616/3744",
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/100/2500/1656",
    "https://picsum.photos/id/1000/5626/3635",
    "https://picsum.photos/id/1001/5616/3744",
    "https://picsum.photos/id/1002/4312/2868",
    "https://picsum.photos/id/1003/1181/1772",
    "https://picsum.photos/id/1004/5616/3744",
    "https://picsum.photos/id/1005/5760/3840",
    "https://picsum.photos/id/1006/3000/2000",
    "https://picsum.photos/id/1008/5616/3744"
  ]
  constructor(private data: DataService){
  }

  ngOnInit(){
    setInterval(() => {
      this.getCameras()
    }, 500)
  }

  getRandomImg() {
    return this.randomImage[Math.floor(Math.random() * 12)];
  }

  getCameras(): void {
    this.data.getCameras().subscribe(cameras => {
      // console.log(cameras)
      this.cameras = cameras
    })
  }

}
