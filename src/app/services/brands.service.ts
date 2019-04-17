import { Injectable } from '@angular/core';

@Injectable()
export class BrandsService {

    private brands: any[] = [
        {
            'brand': 'VW',
            'models': ['Golf', 'Polo', 'Passat']
        },
        {
            'brand': 'Skoda',
            'models': ['Fabia', 'Octavia', 'Roomster']
        },
        {
            'brand': 'Hyundai',
            'models': ['i20', 'i30', 'i40']
        },
            {
            'brand': 'Ford',
            'models': ['Fiesta', 'Focus', 'Mondeo']
        }
    ];


  constructor() {}

  getBrands(): any[]{
    return this.brands;
  }
}
