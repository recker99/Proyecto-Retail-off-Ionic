import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeQrPage } from './barcode-qr.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeQrPageRoutingModule {}
