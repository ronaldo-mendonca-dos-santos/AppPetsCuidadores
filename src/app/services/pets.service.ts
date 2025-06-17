import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Pets {
  id?: string;
  titulo: string;
  nome?: string;
  especie?: string;
  raca?: string;
  idade?: number;
  observacoes?: string;
  cuidadores: { id: string, nome: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private petsCollection = this.firestore.collection<Pets>('pets');

  constructor(private firestore: AngularFirestore) {}

  getPets(): Observable<Pets[]> {
    return this.petsCollection.valueChanges({ idField: 'id' });
  }

  adicionarPets(pets: Pets) {
    return this.petsCollection.add(pets);
  }

  atualizarPets(id: string, pets: Pets) {
    return this.petsCollection.doc(id).update(pets);
  }

  removerPets(id: string) {
    return this.petsCollection.doc(id).delete();
  }
}
