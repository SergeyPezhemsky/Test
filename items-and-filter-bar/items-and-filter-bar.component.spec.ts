import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAndFilterBarComponent } from './items-and-filter-bar.component';

describe('FilterBarComponent', () => {
  let component: ItemsAndFilterBarComponent;
  let fixture: ComponentFixture<ItemsAndFilterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAndFilterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAndFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
