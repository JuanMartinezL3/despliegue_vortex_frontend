import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colaborador } from '../models/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  selectedColaborador: Colaborador;
  colaboradores: Colaborador[];
  readonly URL_API='https://despliegue-vortex-backend.vercel.app/api/colaboradores';


  constructor(private http:HttpClient) {
    this.selectedColaborador = new Colaborador();
    this.colaboradores=[];
   }
   getColaboradores(){
    return this.http.get(this.URL_API);
   }
   postColaborador(Colaborador: Colaborador){
    return this.http.post(this.URL_API, Colaborador);
   }
   putColaborador(Colaborador: Colaborador){
    return this.http.put(this.URL_API + `/${Colaborador._id}`, Colaborador);
   }
   deleteColaborador(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
   }
}
