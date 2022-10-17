import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualHeaderExampleComponent } from './contextual-header-example.component';

describe('ContextualHeaderExampleComponent', () => {
  let component: ContextualHeaderExampleComponent;
  let fixture: ComponentFixture<ContextualHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextualHeaderExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextualHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
