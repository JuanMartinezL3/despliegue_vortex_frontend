import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../services/colaborador.service';
import { NgForm } from '@angular/forms';
import { Colaborador } from '../../models/colaborador';
import { format } from 'path';

declare var M:any;

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
  providers: [ColaboradorService]
})
export class ColaboradoresComponent  implements OnInit{

  constructor(public colaboradorService:ColaboradorService){}

  ngOnInit(): void {
  }
      agregarColaborador(form?:NgForm){
        this.colaboradorService.postColaborador(form?.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: "Guardado satisfactoriamente"});
          });
      }
      resetForm(form?: NgForm) { 
        if (form) {
          form.reset();
          this.colaboradorService.selectedColaborador = new Colaborador(); 
          }
        }
      
  }


