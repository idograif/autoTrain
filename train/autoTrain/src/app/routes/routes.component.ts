import { Component, OnInit } from "@angular/core";
import { RouteService } from "./route.service";
import { Route } from "./route";
import { FormSaveService } from "../input-stuff/form-save.service";

@Component({
  selector: "app-routes",
  templateUrl: "./routes.component.html",
  styleUrls: ["./routes.component.scss"],
})
export class RoutesComponent implements OnInit {
  routes: Route[];

  constructor(
    private routeService: RouteService,
    private formSaveService: FormSaveService
  ) {}

  ngOnInit(): void {
    this.routeService.getRoutes().subscribe((routes) => (this.routes = routes));
  }

  order(route: Route) {
    // maybe for now just route to the order page via: https://www.rail.co.il/taarif/pages/ordervaucherallcountry.aspx?TNUM=153&FSID=2800&TSID=3600&DDATE=20201221&Hour=0726&CS=null&TSP=1608410010081
    window.location.href = `https://www.rail.co.il/taarif/pages/ordervaucherallcountry.aspx?TNUM=${
      route.Train[0].Trainno
    }&FSID=${this.formSaveService.form.from}&TSID=${
      this.formSaveService.form.to
    }&DDATE=${
      this.formSaveService.date
    }&Hour=${route.Train[0].DepartureTime.split(" ")[1]
      .replace(":", "")
      .slice(0, -3)}&CS=null&TSP=1608410010081`;

    // pre sms check
    // post request with https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?mobile=0544227215&userId=025022591&method=getToken
    // redirect to token input route

    // maybe nodejs microservice that reads sms and sends it to website via api? or broadcast receiver on android studio
    // for now just have user manually type it

    // after inputting message from sms

    // post request with https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?userId=025022591&token=270188&method=checkToken

    // dad               https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?numSeats=1&smartCard=028454940&mobile=0544227215&userEmail=epicidodude3@gmail.com&method=MakeVoucherSeatsReservation&IsSendEmail=true&source=1&typeId=1
    // post request with https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?numSeats=1&smartCard=025022591&mobile=0544227215&userEmail=epicidodude3@gmail.com&method=MakeVoucherSeatsReservation&IsSendEmail=true&source=1&typeId=1

    // dad       https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?GEneratedref=D2B38EFC-93C8-46E3-AF22-602C8FF52F17-J-40019456445&typeId=1&method=SendSms
    // post with https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?GEneratedref=F040D4DC-9EDE-4391-94E5-2D94322AE095-J-40019454111&typeId=1&method=SendSms

    // dad       https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?GEneratedref=D2B38EFC-93C8-46E3-AF22-602C8FF52F17-J-40019456445&method=CreateVoucher
    // post with https://www.rail.co.il/taarif//_layouts/15/SolBox.Rail.FastSale/ReservedPlaceHandler.ashx?GEneratedref=F040D4DC-9EDE-4391-94E5-2D94322AE095-J-40019454111&method=CreateVoucher
  }
}
