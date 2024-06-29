import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, FormsModule,DashboardComponent, HomeComponent,RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tannu';
  note='Thankyou Eveyone For Joining Our Session !'
  username: String="";
  student_name:string='';
  changeMyVariable($event:any){
    this.student_name= $event.target.value;
  }
}
