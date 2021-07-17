import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTitleComponent } from './ui-title.component';

describe('UiTitleComponent', () => {
  let component: UiTitleComponent;
  let fixture: ComponentFixture<UiTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title name1', () => {
    let p: HTMLElement;
    component.title = "titulo";
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('.ui-title > .ui-title-name > p')
    expect(p.textContent).toContain(component.title);
  });
});
