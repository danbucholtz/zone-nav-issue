import {NgZone} from "angular2/core";
import {Page, Storage, SqlStorage} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {

  private dateString:string;
  private list = [];

  constructor(private ngZone:NgZone) {
    this.ngZone = ngZone;
  }

  onPageDidEnter(){
    var date = new Date();
    this.dateString = date.toString();

    let storageEngine = new Storage(SqlStorage);
    storageEngine.get("test").then(string => {
      var results = JSON.parse(string);
      console.log("results: ", results);
      //this.ngZone.run( () => {
          this.list = results;
      //});
    });
  }
}
