import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { BackendService } from '../backend/backend.service';

const LSX_SERVER_HOSTNAME = window?.__env?.lsxServerHostname != null ? `${window.__env.lsxServerHostname}` : window.location.hostname;
const LSX_SERVER_PORT = window?.__env?.lsxServerPort != null ? window.__env.lsxServerPort : window.location.port;

@Injectable()
export class AuthService {

    public role: string = "";
    private token: string = "";

    constructor(
        private readonly backend: BackendService,
        private readonly http: HttpClient
    ) {}

    public async login(username: string, password: string): Promise<void> {
        const token = await this.requestJwt(username, password);
        const payload = jwtDecode(token) as any;

        this.token = token;
        this.role = payload.role;

        await this.backend.connect(token);
        setInterval(() => { this.refreshJwt(token);}, 5000);
    }

    public async refreshJwt(token: string): Promise<void> {
        const route = `${window.location.protocol}//${LSX_SERVER_HOSTNAME}:${LSX_SERVER_PORT}/api/auth/refresh`;
        const headers = { Authorization: `Bearer ${token}` };
        return new Promise<void>((resolve, reject) => {
            this.http.post<{ access_token: string }>(route, {access_token: token}, {headers: headers}).subscribe({
                next: (res) => {
                    this.token = res.access_token;
                    this.backend.refresh(res.access_token);
                    resolve();
                },
                error: (err) => {
                    console.error(err);
                    reject(err);
                }
             });
        });
    }

    public async requestJwt(username: string, password: string): Promise<string> {
        const data = { username: username, password: password };
        const route = `${window.location.protocol}//${LSX_SERVER_HOSTNAME}:${LSX_SERVER_PORT}/api/auth/login`;

        return new Promise<string>((resolve, reject) => {
            this.http.post<{ access_token: string }>(route, data).subscribe({
                next: (res) => {
                    resolve(res.access_token);
                },
                error: (err) => {
                    reject(err);
                }
            })
        });
    }

    public isAuthenticated(): boolean {
        return this.token != '';
    }
}
