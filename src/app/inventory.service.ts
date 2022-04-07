import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private httpClient: HttpClient) { }

  public GetPackagesInventory(): Observable<any> {
    return this.httpClient
      .get<any>(environment.apiUrl + 'inventory/getInventoryData')
      .pipe();
  }

  public GetRequestedKernalInfo(value: number,selectedvalue : number): Observable<any> {
    return this.httpClient
      .get<any>(
        environment.apiUrl +
        'inventory/validateKenrals/' +
        selectedvalue +'/'+ value
      )
      .pipe();
  }
  public GetRequestedInventory(requestedInventory: number): Observable<any>
   {
    return this.httpClient.get<any>(environment.apiUrl + '/home/getRequestedInventory/' + requestedInventory).pipe();
  }
}
