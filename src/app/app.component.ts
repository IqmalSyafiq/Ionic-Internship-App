import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  activePageTitle = 'main';
  public appPages = [

    {
      title: 'Add Job',
      url: '/add-job',
      icon: 'add'
    },
    {
      title: 'Job List',
      url: '/job-list',
      icon: 'albums'
    },
    {
      title: 'Application List',
      url: '/application-list',
      icon: 'people',
    },
    {
    title: 'Admin',
    url: '/admin',
    icon: 'home'
    },
    {
      title: 'Interns',
      url: '/view-interns',
      icon: 'albums'
    },
    {
      title: 'Student',
      url: '/student-profile',
      icon: 'people'
    },
    {
      title: 'Apply Internship',
      url: '/apply-intern',
      icon: 'create'
    },
    {
      title: 'Log out',
      url: '/login',
      icon: 'log-out'
    },

  ];

  
  public appTitle = [
    
    {
      title: 'Unimy Intern',
    },
  ]
  
    constructor(
      private platform: Platform,
      private statusBar: StatusBar,
      private splashScreen: SplashScreen,
    ) {
      this.initializeApp();
    }
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  }


