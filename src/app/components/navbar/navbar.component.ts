import { Component, OnInit, Renderer2 } from '@angular/core';
import * as routes from '../../routes';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from '../../models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {
  toggleTheme = new FormControl(false);
  languages = ['en', 'it'];
  selectedLang = 'en';
  lang = new FormControl('en');


  menuItems: MenuItem[] = [
    {
      label: 'ADMIN',
      icon: 'supervised_user_circle',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Cameras',
      icon: 'camera',
      action: () => this.router.navigate([`/${routes.HOME}`]),
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Reporting',
      icon: 'notes',
      action: () => this.router.navigate([`/${routes.REPORTS}`]),
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Setting',
      icon: 'settings',
      action: () => this.router.navigate([`/${routes.SETTINGS}`]),
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sign Out',
      icon: 'login',
      action: () => this.logout(),
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];

  constructor(
        private translate: TranslateService,
        private _renderer: Renderer2,
        private router: Router,
      ){}

  ngOnInit(): void {
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
    this.translate.use(lang)
  }

  logout(){
    localStorage.clear()
    this.router.navigate([`/${routes.LOGIN}`])
  }

}
