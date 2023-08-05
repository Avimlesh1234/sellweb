import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  name = 'Angular 4';
  url = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event:any) => { 
      var img = new Image;
        this.url = event.target.result;
        img.src = event.target.result;
        console.log(img.width);
      }
    }
  }
}
