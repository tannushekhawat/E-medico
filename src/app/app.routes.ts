import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
export const routes: Routes = [
    
    {path: 'my-dashboard', component:DashboardComponent},
     {path: 'home', component:HomeComponent},
     {path: 'services', component:ServicesComponent},
     {path: 'contacts', component:ContactsComponent},
    {path: '**', component:PageNotFoundComponent}
    
];
