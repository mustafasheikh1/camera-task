import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Camera } from '../models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cameras = [
      {
          "id": 1,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 2,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 3,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 4,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 5,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 6,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 7,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 8,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 9,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 10,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 11,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 12,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 13,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 14,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 15,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 16,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 17,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 18,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 19,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 20,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 21,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 22,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 23,
          "status": true,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 24,
          "status": false,
          "img": "https://picsum.photos/300/300"
      },
      {
          "id": 25,
          "status": false,
          "img": "https://picsum.photos/300/300"
      }
  ];
    return {cameras};
  }

  genId(cameras: Camera[]): number {
    return cameras.length > 0 ? Math.max(...cameras.map(camera => camera.id)) + 1 : 11;
  }
}


