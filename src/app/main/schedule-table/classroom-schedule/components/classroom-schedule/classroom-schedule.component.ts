import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { MessageService, ConfirmationService } from 'primeng/api';

import { ISchedule, IClass } from '../../interfaces/data';

@Component({
  selector: 'classroom-schedule',
  templateUrl: './classroom-schedule.component.html',
  styleUrls: ['./classroom-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassroomScheduleComponent {

  @Input()
  public schedule: ISchedule[];

  @Input()
  public classes: IClass[];

  public productDialog: boolean;

  public schClass: IClass | {};

  public selectedClasses: IClass[];

  public submitted: boolean;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  public getClassForSchedule(classNumber: number): IClass | undefined {
    return this.classes.find((iterableClass) => iterableClass.number === classNumber);
  }

  public openNew(): void {
    this.schClass = {};
    this.submitted = false;
    this.productDialog = true;
  }

  public deleteSelectedProducts(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.classes = this.classes.filter((val) => !this.selectedClasses.includes(val));
        this.selectedClasses = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      },
    });
  }

  public editProduct(schClass: IClass): void {
    this.schClass = { ...schClass };
    this.productDialog = true;
  }

  public deleteProduct(schClass: IClass): void {
    this.confirmationService.confirm({
      message: 'Are you sure want to clear this cell?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.classes = this.classes.filter((iterableClass) => iterableClass.id !== schClass.id);
        this.schClass = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      },
    });
  }

  public hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  // public saveProduct(): void {
  //   this.submitted = true;

  //   if (this.product.name.trim()) {
  //     if (this.product.id) {
  //       this.products[this.findIndexById(this.product.id)] = this.product;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
  //     } else {
  //       this.product.id = this.createId();
  //       this.product.image = 'product-placeholder.svg';
  //       this.products.push(this.product);
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
  //     }

  //     this.products = [...this.products];
  //     this.productDialog = false;
  //     this.product = {};
  //   }
  // }

}
