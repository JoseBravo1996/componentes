
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';

import { NotificationModel } from './../models/notification.model';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private hubConnection: HubConnection;
  public notifica: EventEmitter<NotificationModel> = new EventEmitter();
  
  constructor(private httpClient: HttpClient) {
    // let builder = new HubConnectionBuilder();
    // this.hubConnection = builder.withUrl("").build();

    // this.hubConnection.on("", (notification) => {
    //   let notifica: NotificationModel = JSON.parse(notification);
    //   this.notifica.emit(notifica);
    // });

    // this.hubConnection.start();
   }

  getNotifications() {
    const url = 'servidor' + '/endpoint'; 

    this.httpClient.get(url).pipe(
      map(
        (response: any) => {
          response.map(
            item => {
              item.data = JSON.parse(item.data);
              return new NotificationModel(item);
            }
          );

          return response;
        }
      )
    );
  }

}
