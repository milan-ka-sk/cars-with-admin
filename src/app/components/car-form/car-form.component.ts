import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarService } from '../../services/car.service';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() isEdit: boolean = false;
  private brands: any[];
  private curModels: string[] = [];


  constructor(
    private brandsService: BrandsService,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.brands = this.brandsService.getBrands();
    
    if(this.isEdit){
      // get car with id
      
      // prefillForm();
    }
  }

  prefillForm(car: Car){
    
  }

  processForm({form, value, valid}) {

    if(valid){
      this.carService.addCar(value)
      .subscribe(
        (v) => {
          console.log("Car added! " + v );
        },
        err => {
          console.log(err);
        }
      )
    } else{
      console.log("Form is not valid");
    }
    //form.reset();

    // this.carService.addCar(car)
    //   .subscribe(
    //     (car) => {
    //       console.log("Car added!");
    //       this.update.emit(true);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   )
  }

  addPage({form, value, valid}){
    
    if(valid){
      value.content = CKEDITOR.instances.content.getData();
      console.log(value);
      this.pageService.postAddPage(value).subscribe(res => {
        if(res == 'pageExists'){
          this.errorMsg = true;
          setTimeout(function(){
            this.errorMsg = false;
          }.bind(this), 2000);
        } else{
          this.successMsg = true;
          setTimeout(function(){
            this.successMsg = false;
          }.bind(this), 2000);

          CKEDITOR.instances.content.setData(''); // i.e. clear the textfield

          this.pageService.getPages().subscribe(pages => {
            this.pageService.pagesBS.next(pages);
          })
        }
      });
    } else{
      console.log("Form is not valid");
    }
    form.reset();
  }

  onBrandChange(e): void {
    //brand index
    
    let i = e.target.selectedIndex;
    if(i != 0){
      console.log(i);
      this.curModels = this.brands[i-1].models;  // because select has 1 more field (--Empty--) than data
    }
  }
}
