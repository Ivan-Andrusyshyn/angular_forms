import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formData: any = {};

  setFormData(data: any) {
    console.log(data);

    this.formData = { ...this.formData, ...data };
  }

  getFormData() {
    return this.formData;
  }
}
