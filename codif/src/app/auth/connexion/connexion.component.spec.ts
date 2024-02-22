import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionComponent } from './connexion.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ConnexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnexionComponent, HttpClientModule]
    });
    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // Ce test vérifie que le composant ConnexionComponent est créé avec succès
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Ce test vérifie que la fonction validateEmail fonctionne correctement.
  it('should validate email', () => {
    const validEmail = 'test@example.com';
    const invalidEmail = 'invalid-email';
    expect(component.validateEmail(validEmail)).toBe(true);
    expect(component.validateEmail(invalidEmail)).toBe(false);
  });

  // Ce test vérifie que le champ email est affiché et que la validation fonctionne correctement.
  it('should display email input', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="email"]')).toBeTruthy();
  });

  // Ce test vérifie que le champ mot de passe est affiché.
  it('should display password input', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="password"]')).toBeTruthy();
  });

  it('should submit the form successfully', async () => {
    // Remplir les champs du formulaire
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]'));
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]'));

    emailInput.nativeElement.value = 'valid@email.com';
    passwordInput.nativeElement.value = 'strongPassword';

    // Simuler la soumission du formulaire
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Vérifier la navigation
    await fixture.whenStable();
    expect(location.href).toBe('/success');
  });

});
