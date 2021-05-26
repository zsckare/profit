import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditprogresoPage } from './editprogreso.page';

describe('EditprogresoPage', () => {
  let component: EditprogresoPage;
  let fixture: ComponentFixture<EditprogresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprogresoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditprogresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
