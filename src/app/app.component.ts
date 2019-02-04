import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, ToastController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
// Providers
import { NetworkProvider } from '../providers/network/network';
import { StorageProvider } from '../providers/storage/storage';
import { UserProvider } from '../providers/user/user'

//Pages
import { LoginPage } from '../pages/login/login';
import { WizardPage } from '../pages/wizard/wizard';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { TimelinePage } from '../pages/timeline/timeline';
import { HistoryPage } from '../pages/history/history';
import { SelfAssessmentPage } from '../pages/self-assessment/self-assessment';
import { ResourcesPage } from '../pages/resources/resources';


// Env Variables
import { ENV } from  '@app/env';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  userToken = window.sessionStorage.getItem('token');

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private _networkProvider: NetworkProvider,
    public events: Events,
    public network: Network,
    public _storage: StorageProvider,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    private _user: UserProvider,

    ) {
      this.initializeApp()      

    console.log("OUR ENV", ENV)
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Wizard', component: WizardPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Self Assessment', component: SelfAssessmentPage },
      { title: 'Timeline', component: TimelinePage },
      { title: 'History', component: HistoryPage }, 
      { title: 'Resources', component: ResourcesPage },
    ];

  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      
      this._networkProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
      // alert('network:offline ==> '+this.network.type); 
      });
      // // Online event
      this.events.subscribe('network:online', () => {
      //    // alert('network:online ==> '+this.network.type);  
        this._storage.completeCachedRequests()
      });

      this.menuCtrl.enable(false);
      this.menuCtrl.swipeEnable(false); 

    });
  }

  openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
  }

  logout() {
    this._user.logoutUser()
      .subscribe( _ => {
      })
      sessionStorage.clear()
      this.nav.setRoot(LoginPage)

  }

}