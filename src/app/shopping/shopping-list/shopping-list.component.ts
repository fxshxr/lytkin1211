import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Goods } from 'src/app/models/shopping.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  id:number;
  goods: Goods[];
  status:boolean;
  goodsForm:FormGroup;
  name ='';
  


  constructor(private ShoppingService: ShoppingService, private router:Router) { }

  ngOnInit(): void {

    this.getData();
    
  }
  async getData(){
    try {
      let goods = this.ShoppingService.getAll();
      this.goods = isNullOrUndefined(await goods) ? []: await goods;
    } catch (err){
      console.log(err);
    }
  }

  onAddGood(){
    this.router.navigate([this.router.url,'edit']);
  }
  onEditGood(id:number){
    this.router.navigate([this.router.url, 'edit', id]);
  }
 
  
}
  



  


