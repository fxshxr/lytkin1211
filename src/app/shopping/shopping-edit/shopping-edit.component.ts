import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Goods } from 'src/app/models/shopping.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  id:number;
  good:Goods;
  goodsForm:FormGroup;

  constructor( private activatedRoute: ActivatedRoute, private shoppingService: ShoppingService, private router : Router) {
    this.activatedRoute.params.subscribe(params=>{
      if(!isNullOrUndefined(params.id)){
        this.id = +params.id;

      }
      else{
        this.id = null;
      }
    })
   }

  ngOnInit(): void {
    
    this.goodsForm = new FormGroup({
      name:new FormControl(null,[Validators.required]),
      amount:new FormControl(null,[Validators.required]),
      status:new FormControl(false),
      

    })
    this.getData();
   
  }
  
  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let good = this.shoppingService.getOneById(this.id);
        this.good = await good;
      } catch (err) {
        console.error(err);
      }
      this.goodsForm.patchValue({
        name: this.good.name,
        amount: this.good.amount,
        status: false
      });
    }
  }
    
  async onDelete(){
    try{
      await this.shoppingService.deleteOneById(this.id);

    }catch(err){
      console.log(err);
    }
    this.router.navigate(['/shop'])
  }
  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.shoppingService.putOneById(this.id, this.goodsForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.shoppingService.postOne(this.goodsForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
