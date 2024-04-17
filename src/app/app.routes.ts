import { Routes } from '@angular/router';
import { SearchBusComponent } from './component/Home/search-bus/search-bus.component';
import { BusListComponent } from './component/Home/bus-list/bus-list.component';
import { BookBusComponent } from './component/Home/book-bus/book-bus.component';
import { TicketComponent } from './component/Home/ticket/ticket.component';
import { ConfirmationComponent } from './component/Home/confirmation/confirmation.component';

export const routes: Routes = [
    {path : 'SearchBus' , component: SearchBusComponent, title: 'searchBus'},
    {path: 'BusList' , component : BusListComponent},
    {path:'bookbus/:id',component:BookBusComponent},
    {path : 'ticket/:id', component: TicketComponent},
    {path:'confirm', component: ConfirmationComponent},
    //write paths here
    {path : '', redirectTo : 'searchBus',pathMatch :'full'},
    {path:'**', component :SearchBusComponent}
];
