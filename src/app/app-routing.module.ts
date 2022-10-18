import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'job-list',
    loadChildren: () => import('./jobList/jobList.module').then( m => m.JobListPageModule)
  },
  {
    path: 'add-job',
    loadChildren: () => import('./add-job/add-job.module').then( m => m.AddJobPageModule)
  },
  {
    path: 'edit-job/:id',
    loadChildren: () => import('./edit-job/edit-job.module').then( m => m.EditJobPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'application-list',
    loadChildren: () => import('./application-list/application-list.module').then( m => m.ApplicationListPageModule)
  },
  {
    path: 'view-interns',
    loadChildren: () => import('./view-interns/view-interns.module').then( m => m.ViewInternsPageModule)
  },
  {
    path: 'student-profile',
    loadChildren: () => import('./student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
  },
  {
    path: 'apply-intern',
    loadChildren: () => import('./apply-intern/apply-intern.module').then( m => m.ApplyInternPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
