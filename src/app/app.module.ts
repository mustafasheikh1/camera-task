import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent, CameraCardComponent, MenuComponent } from './components'
import { HomeComponent, LoginComponent } from './pages'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from './UI';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { ThemeService }  from './services/theme.service';
import { StyleManagerService }  from './services/style-manager.service';


// import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

// import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

// export function translateFactory(translate: TranslateService) {
//   return async () => {
//     let lang = localStorage.getItem('lang');

//     if(!lang){
//       localStorage.setItem('lang', 'it');
//     }
//     translate.setDefaultLang(lang ? lang : 'it');
//     translate.use(lang ? lang : 'it');
//     return new Promise(resolve => {
//       translate.onLangChange.subscribe(() => {
//         resolve();
//       });
//     });
//   };
// }


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CameraCardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: translateFactory,
    //   deps: [TranslateService],
    //   multi: true
    // }
    StyleManagerService, ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
