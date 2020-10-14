import { Component, OnInit, Renderer2 } from '@angular/core';
import { LOGIN } from '../../routes';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {
  toggleTheme = new FormControl(false);

  constructor(
    private _renderer: Renderer2,
    private router: Router,
  ){}

  ngOnInit(){
    this.toggleTheme.valueChanges.subscribe(toggleValue => {
      if (toggleValue === true) {
        this._renderer.addClass(document.body, 'dark-theme');
        this._renderer.removeClass(document.body, 'light-theme');
      } else {
        this._renderer.addClass(document.body, 'light-theme');
        this._renderer.removeClass(document.body, 'dark-theme');
      }
    });
  }

  logout(){
    this.router.navigate([`/${LOGIN}`])
  }
}
