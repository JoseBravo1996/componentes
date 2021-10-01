import { Component, OnInit } from '@angular/core';
import { NotificationModel } from './models/notification.model';

import { NotificationService } from './services/notification.service';

@Component({
  selector: 'aso-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications = new Array<NotificationModel>();

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    // this.notificationService.notifica.subscribe((notificacion) =>{
    //   this.notifications.push(notificacion);
    // });
    this.notifications = [
      { id: 1, titulo: "Actualización de recupero", mensaje: "Tenía los ojos cerrados cuando sonó el despertador, por lo general me despierto antes, pero hoy no, me fue imposible hacerlo, pasada una hora (según yo) volví a abrir los ojos. Me rodé sobre mi espalda para ver por la ventana y darme una idea de que hora pudiera ser, pensé que eran como las 10 de la mañana por lo claro del día pero estaba equivocado, tomé el celular y leí 14:28, pensé en ir a desayunar pero comer me sonó más idóneo considerando la hora, prendí la radio al tiempo que me levantaba de la cama, Virtual Insanity sonaba por las bocinas. Bajé los tres pisos para llegar a la cocina, técnicamente no son tres pisos sino que la casa se encuentra en desnivel, decir que tienes que bajar tres pisos para llegar a la cocina ayuda a hacerles creer a las personas que la casa es más grande de lo que realmente es, síndrome Libertad le digo yo, es como en ese cartón en el que Mafalda conoce el departamento donde vive Libertad con su mamá, en el que una grita y la otra responde susurrando para pretender que están muy lejos una de la otra. Mi situación tiene grandes ventajas, como poder estar en una casa de “tres pisos”, pero también tiene sus desventajas, la más grande, el momento en el que llegan los dueños de la casa y encuentran un extraño en ella, mejor me pondré los ténis por si es que tengo que correr.", usuario: "Jose Bravo", leido: true, fecha: new Date().toString()},
      { id: 2, titulo: "Actualización de recupero", usuario: "Jose Bravo", leido: true, fecha: new Date().toString(), link: "www.google.com" },
      { id: 3, titulo: "Actualización de recupero", usuario: "Jose Bravo", leido: false, fecha: new Date('Sep 15, 2021').toString() },
    ]
    // llamada al servicio
  }

}
