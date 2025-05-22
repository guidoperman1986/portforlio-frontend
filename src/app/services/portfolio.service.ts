import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Profile } from "../interfaces/profile.interface";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    http = inject(HttpClient);
    baseUrl = environment.localApiUrl;

    getProfile(): Observable<Profile> {
        return this.http.get<Profile>(this.baseUrl + '/profile');
    }
}
