import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeCapslock = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters; 
  }

  onChangeUseCapitalLetters() {
    this.includeCapslock = !this.includeCapslock;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;  
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const capsLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '~!@#$%^&*()_+';

    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }
    
    if(this.includeCapslock) {
      validChars += capsLetters;
    }

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i=0; i<this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
