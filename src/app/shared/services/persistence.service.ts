import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
    public set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to local storage ', e);
        }
    }

    public get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            console.error('Error getting data from the local storage ', e);
            return null;
        }
    }
}
