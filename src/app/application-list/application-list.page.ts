import { Component, OnInit } from '@angular/core';
import { application } from '../shared/application';
import { ApplicationService } from '../shared/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.page.html',
  styleUrls: ['./application-list.page.scss'],
})
export class ApplicationListPage implements OnInit {

  apps = [];
  constructor(
    private appsevice: ApplicationService
  ) { }
  ngOnInit() {
    this.fetchJobs();
    let JobsRes = this.appsevice.getJobList();
    JobsRes.snapshotChanges().subscribe(res => {
      this.apps = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.apps.push(a as application);
      })
    })
  }
  fetchJobs() {
    this.appsevice.getJobList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  accept(a, isAccept){
    // let JobsRes = this.appsevice.getJobList();
    // JobsRes.snapshotChanges().subscribe(res => {
    //   this.apps = [];
    //   res.forEach(item => {
    //     let a = item.payload.toJSON();
    //     a['$key'] = item.key;
    console.log(a);
    this.appsevice.acceptApplication(a as application, isAccept)
  // })
// })
 }
}