import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketPlacePage } from './market-place.page';

describe('MarketPlacePage', () => {
  let component: MarketPlacePage;
  let fixture: ComponentFixture<MarketPlacePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
