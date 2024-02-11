import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DalleService } from './dalle.service';

@Component({
  selector: 'app-dalle',
  templateUrl: './dalle.component.html',
  styleUrls: ['./dalle.component.scss'],
})
export class DalleComponent implements OnInit {
  constructor(public dalleService: DalleService) {}

  ngOnInit(): void {}

  prompt = new FormControl('');
  imageUrl = null;
  isLoading = false;

  async getImageUrl() {
    this.isLoading = true;
    console.log('prompt: ' + this.prompt.value);
    this.dalleService.generateImage(this.prompt.value).subscribe((data) => {
      this.imageUrl = data.imageUrl;
      this.isLoading = false;
    });
  }

  downloadImg() {
    window.open(this.imageUrl || '');
  }
}
