import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Option } from "../models";
import { Observable } from "rxjs";
import { StyleManagerService } from "./style-manager.service";

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("assets/options.json");
  }

  setTheme(themeToSet) {
    this.styleManager.setStyle(
      "theme",
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}