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
    from: "3600",
    to: "3310",
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
      d.getDate().toString();

    this.formSaveService.hour =
      ("0" + d.getHours().toString()).slice(-2) +
      ("0" + d.getMinutes().toString()).slice(-2);
    this.router.navigate(["routes"]);
  }

  switch(): void {
    const temp = this.form.from;
    this.form.from = this.form.to;
    this.form.to = temp;
  }
}
