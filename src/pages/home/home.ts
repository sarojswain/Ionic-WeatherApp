import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather:any;
  icon_url:string = 'https://cdn1.vectorstock.com/i/1000x1000/71/80/weather-icon-with-sun-and-clouds-vector-11107180.jpg'

  constructor(public navCtrl: NavController, 
              private weatherProvider:WeatherProvider,
              private sharing: SocialSharing
              ) {

  }

  ionViewWillEnter(){
    this.weatherProvider.getWeather()
        .subscribe(weather => this.weather = weather)
  }

  onClickWhatsapp(){
    this.sharing.shareViaWhatsApp('test', 'test', 'null')
                .then(()=> console.log('shared with Whatsapp...'))
                .catch((error)=> console.log('not shared with Whatsapp..'));
  }

  onClickFb(){
    this.sharing.shareViaFacebook('test', 'test', 'null')
                .then(()=>console.log('shared with FB..'))
                .catch((error)=>console.log('not shared with FB'));
  }

  onClickTwitter(){
    this.sharing.shareViaTwitter('test', 'test', 'null')
                .then(()=>console.log('shared with Twitter..'))
                .catch((error)=>console.log('not shared with Twitter'));
  }

  onClickInsta(){
    this.sharing.shareViaInstagram('test','null')
                .then(()=>console.log('shared with Instagram..'))
                .catch((error)=>console.log('not shared with Instagram'));
  }
  
  }



  

