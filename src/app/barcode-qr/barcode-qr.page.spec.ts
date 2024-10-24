import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarcodeQrPage } from './barcode-qr.page';

describe('BarcodeQrPage', () => {
  let component: BarcodeQrPage;
  let fixture: ComponentFixture<BarcodeQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
