import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTagComponent } from './header-tag.component';

describe('HeaderTagComponent', () => {
  let component: HeaderTagComponent;
  let fixture: ComponentFixture<HeaderTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
