import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeciduousEditPage } from './deciduous-edit.page';

describe('DeciduousEditPage', () => {
  let component: DeciduousEditPage;
  let fixture: ComponentFixture<DeciduousEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeciduousEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeciduousEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
