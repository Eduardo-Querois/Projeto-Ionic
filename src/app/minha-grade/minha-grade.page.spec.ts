import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhaGradePage } from './minha-grade.page';

describe('MinhaGradePage', () => {
  let component: MinhaGradePage;
  let fixture: ComponentFixture<MinhaGradePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
