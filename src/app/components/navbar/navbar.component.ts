import { Component, OnInit, Renderer2 } from '@angular/core';
import { LOGIN } from '../../routes';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {
  toggleTheme = new FormControl(false);
  languages = ['en', 'it']
  lang = new FormControl(localStorage.getItem('lang') ? localStorage.getItem('lang'): 'it');

  constructor(
    private translate: TranslateService,
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

  switchLang(lang: any){
    localStorage.setItem('lang', lang)
    this.translate.use(localStorage.getItem('lang'))
  }

  logout(){
    this.router.navigate([`/${LOGIN}`])
  }
}
