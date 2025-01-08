import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { SelectorComponent } from './Views/selector/selector.component';
import { InterfaceUserComponent } from './Views/interface-user/interface-user.component';
import { BoxInfoComponent } from './Views/box-info/box-info.component';
import { TemperatureComponent } from './Views/temperature/temperature.component';
import { HumidityComponent } from './Views/humidity/humidity.component';
import { WeightComponent } from './Views/weight/weight.component';
import { CamerasComponent } from './Views/cameras/cameras.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CamerasComponent, WeightComponent, HumidityComponent, TemperatureComponent, LoginComponent, RegisterComponent, SelectorComponent, InterfaceUserComponent, BoxInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
