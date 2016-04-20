import {NavController, Page} from 'ionic-angular';

import {Page2} from "../page2/page2";

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(private navController:NavController) {
    this.navController = navController;
  }

  goToPageTwo(){
    this.navController.push(Page2);
  }
}
