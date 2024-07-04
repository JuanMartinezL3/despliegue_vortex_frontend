export class Colaborador {
    constructor(_id = "", nombre = "", rol = "", especialidad = "", nivel_habilidad = "", experiencia = 0) {

        this._id = _id;
        
        this.nombre = nombre;
        
        this.rol = rol;
        
        this.especialidad = especialidad;

        this.nivel_habilidad = nivel_habilidad;
        
        this.experiencia = experiencia;
}
_id: string; 

nombre: string;

rol: string;

especialidad: string;

nivel_habilidad: string;

experiencia: number;

}
