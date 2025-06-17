import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

// Interface completa para Cuidadores
export interface Cuidadores {
  id?: string;
  nome: string;
  telefone?: string;
  experiencia?: number;
  especialidades?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  private cuidadoresCollection = this.firestore.collection<Cuidadores>('cuidadores');

  constructor(private firestore: AngularFirestore) {}

  // Obter lista de cuidadores com ID incluído
  getCuidadores(): Observable<Cuidadores[]> {
    return this.cuidadoresCollection.valueChanges({ idField: 'id' });
  }

  // Adicionar novo cuidador
  adicionarCuidadores(cuidador: Cuidadores) {
    return this.cuidadoresCollection.add(cuidador);
  }

  // Atualizar cuidador existente pelo ID
  atualizarCuidadores(id: string, cuidador: Cuidadores) {
    return this.cuidadoresCollection.doc(id).update(cuidador);
  }

  // Remover cuidador pelo ID
  removerCuidadores(id: string) {
    return this.cuidadoresCollection.doc(id).delete();
  }
}
