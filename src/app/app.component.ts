import { Component } from "@angular/core";
import { ColonyService } from "./colony.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private colony: ColonyService) {}

  onNewProject() {
    console.debug("New project project requested.");
    this.colony.newProject().then(domainRes => console.log(domainRes));
  }
}
