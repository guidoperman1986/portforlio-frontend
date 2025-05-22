import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    http = inject(HttpClient);
    baseUrl = environment.localApiUrl;

    getResume() {
        return this.http.get<{ content: string }>(this.baseUrl + '/resume');
    }
}