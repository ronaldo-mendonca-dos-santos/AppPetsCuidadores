import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
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
  private cuidadoresCollection = collection(this.firestore, 'cuidadores');

  constructor(private firestore: Firestore) {}

  getCuidadores(): Observable<Cuidador[]> {
    return collectionData(this.cuidadoresCollection, { idField: 'id' }) as Observable<Cuidador[]>;
  }

  addCuidador(cuidador: Cuidador) {
    return addDoc(this.cuidadoresCollection, cuidador);
  }

  updateCuidador(id: string, cuidador: Cuidador) {
    const cuidadorDoc = doc(this.firestore, `cuidadores/${id}`);
    return updateDoc(cuidadorDoc, { ...cuidador });
  }

  deleteCuidador(id: string) {
    const cuidadorDoc = doc(this.firestore, `cuidadores/${id}`);
    return deleteDoc(cuidadorDoc);
  }
}
