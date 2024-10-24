import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeQrPageRoutingModule } from './barcode-qr-routing.module';

import { BarcodeQrPage } from './barcode-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeQrPageRoutingModule
  ],
  declarations: [BarcodeQrPage]
})
export class BarcodeQrPageModule {}
