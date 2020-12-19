import { Component, OnInit } from "@angular/core";
import { TrainService } from "./train.service";
import { Station } from "../station";
import { FormThing } from "./form";
import { FormSaveService } from "./form-save.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-input-stuff",
  templateUrl: "./input-stuff.component.html",
  styleUrls: ["./input-stuff.component.scss"],
})
export class InputStuffComponent implements OnInit {
  constructor(
    private trainService: TrainService,
    private formSaveService: FormSaveService,
    private router: Router
  ) {}

  form: FormThing = {
    id: "",
    email: "",
    phoneNumber: "",
    from: "",
    to: "",
  };

  stations: Station[];

  ngOnInit(): void {
    this.trainService
      .getStations()
      .subscribe((stations) => (this.stations = stations));
  }

  onSubmit(): void {
    this.formSaveService.form = this.form;
    let d = new Date();
    this.formSaveService.date =
      d.getFullYear().toString() +
      (d.getMonth() + 1).toString() +
      (d.getDate() + 1).toString();

    this.formSaveService.hour =
      ("0" + (d.getHours() - 10).toString()).slice(-2) +
      ("0" + d.getMinutes().toString()).slice(-2);
    this.router.navigate(["routes"]);
  }
}
