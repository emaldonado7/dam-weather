import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitude;
  longitude;
  weatherInfo;
  cityName;
  location;
  bgImage;
  city;

  cities = [
    {name: "Chihuahu", latitude: 28.6028598, longitude:-106.1754819},
    {name: "Cuauhtemoc", latitude: 28.3969315, longitude:-106.8988611},
    {name: "Mexico City", latitude: 19.3660656, longitude:-99.182763},
  ];

  constructor(
    public navCtrl: NavController,
    public weatherProvider: WeatherProvider
  ) {}

  onFindWeather(){
    this.weatherProvider.currentWeather(this.longitude, this.latitude).subscribe(res => {
      this.weatherInfo = res;
      this.cityName = this.weatherInfo.name;
      this.location = {
        id: this.weatherInfo.id,
        icon: `http://openweathermap.org/img/w/${this.weatherInfo.weather[0].icon}.png`,
        current: this.weatherInfo,
      }
    });
  }

  ngAfterViewInit(){
    this.latitude = this.cities[0].latitude;
    this.longitude = this.cities[0].longitude;
    this.onFindWeather();
  }



}
