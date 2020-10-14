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
  constructor(private data: DataService){
  }

  ngOnInit(){
    setInterval(() => {
      // this.cameras = []
      this.getCameras()
    }, 500)
  }

  getCameras(): void {
    this.data.getCameras().subscribe(cameras => {
      console.log(cameras)
      this.cameras = cameras
    })
  }

}
