import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Option } from "../../models";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-menu",
  templateUrl: "./appMenu.component.html",
  styleUrls: ["./appMenu.component.scss"]
})
export class MenuComponent {
  @Input() options: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet) {
    this.themeChange.emit(themeToSet);
  }
}
