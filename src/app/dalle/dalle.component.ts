import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DalleService } from './dalle.service';

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styleUrls: ['./dalle.component.scss'],
})
export class DalleComponent implements OnInit {
  constructor(private dalleService: DalleService) {}

  ngOnInit(): void {}

  prompt = new FormControl('');
  imageUrl = '';
  isLoading = false;

  async getImageUrl() {
    this.isLoading = true;
    this.dalleService.generateImage(this.prompt.value).subscribe({
      next: (response) => {
        const data = response;
        this.imageUrl = data.imageURL;
      },
      error: (error) => {
        console.error('Error generating image:', error);
      },
    });
  }

  downloadImg() {
    window.open(this.imageUrl);
  }
}
