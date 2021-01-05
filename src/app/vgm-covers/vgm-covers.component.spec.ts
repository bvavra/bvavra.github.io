import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgmCoversComponent } from './vgm-covers.component';

describe('VgmCoversComponent', () => {
  let component: VgmCoversComponent;
  let fixture: ComponentFixture<VgmCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgmCoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgmCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
