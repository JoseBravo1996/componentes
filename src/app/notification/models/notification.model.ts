export class NotificationModel {
    id: number;
    titulo: string;
    mensaje?: string;
    usuario: string;
    leido: boolean;
    fecha: string;
    link?: string;
    

    constructor(data?: any){
        this.id = null;
        this.titulo = null;
        this.mensaje = null;
        this.usuario = null; 
        this.leido = null;
        this.fecha = null;      
        this.link = null;

        if (typeof data !== 'undefined') {
            for (const i in data) {
                if (this.hasOwnProperty(i)) {
                    this[i] = data[i];
                }
            }
        }
    }
}