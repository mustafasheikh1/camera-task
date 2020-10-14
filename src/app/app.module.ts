import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent, CameraCardComponent } from './components'
import { HomeComponent, LoginComponent, ReportsComponent, SettingsComponent } from './pages'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from './UI';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'

// ngx-tranlations
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './Layout/layout.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function translateFactory(translate: TranslateService) {
  return async () => {
    translate.setDefaultLang('en');
    translate.use('en');
    return new Promise(resolve => {
      translate.onLangChange.subscribe(() => {
        resolve();
      });
    });
  };
}


@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CameraCardComponent,
    SettingsComponent,
    ReportsComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
