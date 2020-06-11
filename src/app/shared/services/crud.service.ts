import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

export class CrudService<T> {

    constructor(protected http: HttpClient, private API_URL) { }

    findAll(id): Observable<T[]> {
        return this.http.get<T[]>(`${this.API_URL}/${id}`)
            .pipe(
                take(1)
            );
    }

    findOne(idCliente, idT): Observable<T> {
        return this.http.get<T>(`${this.API_URL}/${idCliente}/${idT}`)
            .pipe(
                take(1)
            )
    }

    save(json) {
        return this.http.post<T>(`${this.API_URL}`, json)
            .pipe(
                catchError(this.handleError),
                take(1)
            )
    }

    upadate(id, json) {
        return this.http.put<T>(`${this.API_URL}/${id}`, json)
            .pipe(
                catchError(this.handleError),
                take(1)
            );
    }

    delete(id) {
        return this.http.delete(`${this.API_URL}/${id}`)
            .pipe(
                catchError(this.handleError),
                take(1)
            )
    }


    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {

            // A client-side or network error occurred. Handle it accordingly.

            console.error('An error occurred:', error.error.message);
        } else {

            // The backend returned an unsuccessful response code.

            // The response body may contain clues as to what went wrong.

            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }

        // return an observable with a user-facing error message

        return throwError('Something bad happened. Please try again later.');
    }
}
