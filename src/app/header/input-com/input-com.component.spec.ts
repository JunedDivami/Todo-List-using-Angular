import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComComponent } from './input-com.component';

describe('InputComComponent', () => {
  let component: InputComComponent;
  let fixture: ComponentFixture<InputComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
