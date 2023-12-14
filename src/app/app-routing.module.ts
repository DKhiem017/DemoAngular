import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BindingComponent } from './binding/binding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'binding-component', component: BindingComponent },
  { path: 'propertybinding-component', component: PropertybindingComponent },
  { path: 'event-component', component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
