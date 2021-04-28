import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './shopping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
    ShoppingComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShoppingModule { }
