import 'es6-shim';
import {App, Platform, Storage, SqlStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Page1} from './pages/page1/page1';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = Page1;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      let storageEngine = new Storage(SqlStorage);
      var defaultData = [
        {
          name: "carlos"
        },
        {
          name: "homer"
        },
        {
          name: "juan"
        }
      ];
      var json = JSON.stringify(defaultData);
      storageEngine.set("test", json).then(function(){
        alert("Data set");
      });
    });
  }
}
