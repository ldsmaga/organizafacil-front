import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ActionsSharedService {

    private messageSource = new BehaviorSubject(null);
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    updateList(objectList:any) {
        this.messageSource.next(objectList)
    }

}
