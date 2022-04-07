import { Component } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'InventoryWeb';
  inventory: boolean = false;
  noInventory: boolean = false;
  public inventoryData: any;
  public requestedKernals: any;
  public inventoryList: any;
   public selectedValue = '1';
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.LoadCompleteInventory();
  }

  LoadCompleteInventory() {
    this.inventoryService.GetPackagesInventory().subscribe((resp) => {
      this.inventoryData = resp;
      this.inventoryList=[];
      console.log(resp);
      for (const iterator of this.inventoryData.inventory) {
        this.inventoryList.push({
          label: iterator.id,
          value: iterator.id,
        })
      }
    });
  }

  CheckRequestedKernals(inputValue: string) {
    if (inputValue) {
      this.inventoryService
        .GetRequestedKernalInfo(parseInt(inputValue), parseInt(this.selectedValue))
        .subscribe((resp) => {  
          if (resp) {
            this.inventory = true;
            this.noInventory = false;

          } else {
            this.noInventory = true;
            this.inventory = false;

          }
        });
    } else {
      alert("enter your request value to check");
    }
  }
}
