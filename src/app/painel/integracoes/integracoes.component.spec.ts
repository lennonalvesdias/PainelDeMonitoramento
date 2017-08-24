import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracoesComponent } from './integracoes.component';

describe('IntegracoesComponent', () => {
  let component: IntegracoesComponent;
  let fixture: ComponentFixture<IntegracoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegracoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
