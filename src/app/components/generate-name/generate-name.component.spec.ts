import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNameComponent } from './generate-name.component';

describe('GenerateNameComponent', () => {
  let component: GenerateNameComponent;
  let fixture: ComponentFixture<GenerateNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
