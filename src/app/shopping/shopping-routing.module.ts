import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping.component';



const routes: Routes = [
  {
    path:'',
    component: ShoppingComponent,

    children:[{
      path:'',
      component:ShoppingListComponent,
    },
    {
      path:'edit',
      component: ShoppingEditComponent,

    },
    {
      path:'edit/:id',
      component: ShoppingEditComponent
    }
    ]
  }
    
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
