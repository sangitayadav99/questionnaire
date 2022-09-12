import { DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { QuestionnarieComponent } from './questionnarie/questionnarie.component';
import { SummaryComponent } from './summary/summary.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        MatRadioModule
      ],
      declarations: [
        AppComponent,
        QuestionnarieComponent,
        SummaryComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  

  it('should contain less than 25 age if first radio button clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let options: DebugElement[] = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
    
    options[0].nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const age = fixture.debugElement.query(By.css('#age'));
    expect(age.nativeElement.textContent).toContain('<25');
  });

  it('should contain age between 25 and 35 if second radio button clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let options: DebugElement[] = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
    
    options[1].nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const age = fixture.debugElement.query(By.css('#age'));
    expect(age.nativeElement.textContent).toContain('>25 and <35');
  });

  it('should contain age greater than 35 if third radio button clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let options: DebugElement[] = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
    
    options[2].nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const age = fixture.debugElement.query(By.css('#age'));
    expect(age.nativeElement.textContent).toContain('>35');
  });
});
