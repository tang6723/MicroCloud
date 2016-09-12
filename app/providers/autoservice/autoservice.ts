import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Autoservice provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/**
 * Auto Item
 */
export class AutoItem{
  id:number;
  title:string;
  price:number;
  image:string;

  constructor(id:number,title:string,price:number,image:string){
    this.id=id;
    this.title=title;
    this.price=price;
    this.image=image;
  }


}



@Injectable()
export class Autoservice {
  //constructor(private http: Http) {}

  list : Array<AutoItem>;

  constructor(){
    this.list = [
      new AutoItem(1, "Egg & Fries", 120, "1.png"),
      new AutoItem(2, "Hot Dog", 300, "2.png"),
      new AutoItem(3, "Sandwich", 220, "3.png"),
      new AutoItem(4, "Soup", 80, "4.png"),
      new AutoItem(5, "Steak", 600, "5.png"),
      new AutoItem(6, "Burger", 350, "6.png"),
      new AutoItem(7, "Pizza", 900, "7.png"),
      new AutoItem(8, "Cake", 550, "8.png"),
    ]
  }

  getAllAutoItems(){
    return this.list;
  }

  getItemById(id: Number){
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i].id == id){
        return this.list[i];
      }
    }
  }

}

