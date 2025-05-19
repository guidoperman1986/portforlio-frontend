import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    http = inject(HttpClient);

    getResume() {
        return this.http.get<{ content: string }>('http://localhost:3000/api/v1/resume');
    }
}