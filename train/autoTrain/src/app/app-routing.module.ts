import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InputStuffComponent } from "./input-stuff/input-stuff.component";
import { RoutesComponent } from "../app/routes/routes.component";

const routes: Routes = [
  { path: "", component: InputStuffComponent },
  { path: "routes", component: RoutesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
