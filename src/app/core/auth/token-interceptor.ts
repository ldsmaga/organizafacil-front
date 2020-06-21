import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpHeaderResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public tokenService: TokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | HttpHeaderResponse
        | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        
        let headerUrl = environment.API;

        if (this.tokenService.hasToken() && request.url.includes(headerUrl)) {
            const token = this.tokenService.getToken();
          
                request = request.clone({
                    setHeaders: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    }
                })
        }
        return next.handle(request);
    }
}