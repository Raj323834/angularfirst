import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LelseifComponent } from './lelseif.component';

describe('LelseifComponent', () => {
  let component: LelseifComponent;
  let fixture: ComponentFixture<LelseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LelseifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LelseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
