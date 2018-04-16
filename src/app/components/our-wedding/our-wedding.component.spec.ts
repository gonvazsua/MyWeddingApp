import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWeddingComponent } from './our-wedding.component';

describe('OurWeddingComponent', () => {
  let component: OurWeddingComponent;
  let fixture: ComponentFixture<OurWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
