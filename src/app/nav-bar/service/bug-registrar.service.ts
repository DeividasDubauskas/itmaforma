import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ContactModel } from 'src/app/contact-information/models/contact.model';
import { BugRegistrar } from '../models/bug-registrar.model';

@Injectable({
  providedIn: 'root'
})
export class BugRegistrarService {
  formValues!: BugRegistrar;
  private bugSubject = new Subject<BugRegistrar>();
  bugSubjectObservable = this.bugSubject.asObservable();
  constructor() { }

  getCurrentForm(){
    return this.formValues;
  }

  setComment(comment: string){
    this.formValues.comment = comment;
  }

  setContactInformation(contacts: ContactModel){
    console.log(contacts);

    this.formValues.contacts.push(contacts);
    this.updateCurrentForm();
  }

  updateCurrentForm(){
    console.log('hit');
    this.bugSubject.next(this.formValues);
  }

}
