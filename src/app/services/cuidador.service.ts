import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Cuidador {
  id?: string;
  nome: string;
  telefone: string;
  experiencia: number;
  especialidades: string;
}

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  private collectionName = 'cuidadores';

  constructor(private firestore: AngularFirestore) {
    
  }

  getCuidadores(): Observable<Cuidador[]> {
    return this.firestore
      .collection<Cuidador>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  addCuidador(cuidador: Cuidador) {
    return this.firestore.collection<Cuidador>(this.collectionName).add(cuidador);
  }

  updateCuidador(id: string, cuidador: Cuidador) {
    return this.firestore.collection(this.collectionName).doc(id).update(cuidador);
  }

  deleteCuidador(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
