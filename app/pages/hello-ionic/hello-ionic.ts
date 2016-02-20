import {Page, TranslatePipe} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  pipes: [TranslatePipe]    
})
export class HelloIonicPage {
  constructor() {

  }
}
