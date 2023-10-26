import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number) : Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string) :Foods[] {
    if(tag == 'All')
    return this.getAll();
    else 
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return[
      {name : 'All', count: 10},
      {name : 'Fast Food', count: 4},
      {name : 'Meal', count: 1},
      {name : 'Snacks', count: 3},
      {name : 'Starter', count: 1},
      {name : 'Sizzler', count: 1}
    ];
  }
  getAll() : Foods[]{
    return[
      {
        id: 1,
        price: 8,
        name: 'Mexican Burger',
        favorite: true,
        star: 4,
        tags: ['Fast Food', 'Burger'],
        cookTime: '10-15',
        origins: ['mexico', 'italy'],
        imageUrl : '/assets/food-1.jfif'
      },
      {
        id: 2,
        price: 5,
        name: 'Taco Bell',
        favorite: false,
        star: 3.5,
        tags: ['Fast Food', 'TacoBell'],
        cookTime: '5-10',
        origins: ['germany', 'france'],
        imageUrl : '/assets/food-2.jfif'
      },
      {
        id: 3,
        price: 12,
        name: 'Arabian Chicken Biryani',
        favorite: true,
        star: 4.5,
        tags: ['Meal', 'Chicken Biryani'],
        cookTime: '25-30',
        origins: ['persia'],
        imageUrl : '/assets/food-3.jfif'
      },
      {
        id: 4,
        price: 10,
        name: 'Italian Burger',
        favorite: true,
        star: 4,
        tags: ['Fast Food', 'Burger'],
        cookTime: '5-10',
        origins: ['italy', 'germany', 'belgium'],
        imageUrl : '/assets/food-4.jfif'
      },
      {
        id: 5,
        price: 14,
        name: 'Cheese Tomato Pizza',
        favorite: true,
        star: 5,
        tags: ['Snacks', 'Pizza'],
        cookTime: '25-30',
        origins: ['america'],
        imageUrl : '/assets/food-5.jfif'
      },
      {
        id: 6,
        price: 15,
        name: 'Mozarella Pizza',
        favorite: false,
        star: 4,
        tags: ['Snacks', 'Pizza'],
        cookTime: '25-30',
        origins: ['america'],
        imageUrl : '/assets/food-6.jfif'
      },
      {
        id: 7,
        price: 10,
        name: 'Chocolate Donut',
        favorite: false,
        star: 3.5,
        tags: ['Snacks', 'Donut'],
        cookTime: '15-20',
        origins: ['america', 'france'],
        imageUrl : '/assets/food-7.jfif'
      },
      {
        id: 8,
        price: 8,
        name: 'Paneer Tikka',
        favorite: true,
        star: 5,
        tags: ['Starter', 'Paneer'],
        cookTime: '15-20',
        origins: ['india'],
        imageUrl : '/assets/food-8.jfif'
      },
      {
        id: 9,
        price: 20,
        name: 'Dragon Chicken Sizzler',
        favorite: false,
        star: 3,
        tags: ['Sizzler', 'Chicken'],
        cookTime: '20-25',
        origins: ['norway', 'mexico'],
        imageUrl : '/assets/food-9.jpg'
      },
      {
        id: 10,
        price: 6,
        name: 'Chicken momos',
        favorite: true,
        star: 4,
        tags: ['Fast Food', 'Momos'],
        cookTime: '5-10',
        origins: ['korea', 'china'],
        imageUrl : '/assets/food-10.jfif'
      }
    ];
  }
}
