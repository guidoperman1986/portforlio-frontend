import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Profile } from "../interfaces/profile.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    http = inject(HttpClient);
    baseUrl = 'http://localhost:3000';

    getProfile(): Observable<Profile> {
        return this.http.get<Profile>('http://localhost:3000/api/v1/profile');
    }
}
