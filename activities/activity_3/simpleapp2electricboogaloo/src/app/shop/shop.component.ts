import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  question: string = "What is your name?";
  answer: string = "unknown";
  appForm = new FormGroup({
    answer: new FormControl(''),
    });
    onSubmit(data: Partial<{answer: string | null}>) {
      this.answer = data.answer!;
      console.log("Your name is " + this.answer);
    }
}
