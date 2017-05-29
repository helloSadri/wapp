import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import { FlashMessagesModule } from 'ngx-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { EntRegistercandidateComponent } from './components/ent-registercandidate/ent-registercandidate.component';
import { EntSearchcandidateComponent } from './components/ent-searchcandidate/ent-searchcandidate.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';
import { CandidateItemComponent } from './components/candidate-item/candidate-item.component';

import { SearchPipe } from './components/pipe/search.pipe';
import { CandidateComponent } from './components/candidate/candidate.component';
import { EntCandformComponent } from './components/ent-candform/ent-candform.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'ent-registercandidate', component: EntRegistercandidateComponent },
  { path: 'ent-recherchecandidat', component: EntSearchcandidateComponent },
  { path: 'candidate-details', component: CandidateDetailsComponent },
  { path: 'candidate-item', component: CandidateItemComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'ent-candform', component: EntCandformComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ReactiveFormComponent,
    EntRegistercandidateComponent,
    EntSearchcandidateComponent,
    CandidateDetailsComponent,
    CandidateItemComponent,
    SearchPipe,
    CandidateComponent,
    EntCandformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ReactiveFormsModule
  ],


  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
