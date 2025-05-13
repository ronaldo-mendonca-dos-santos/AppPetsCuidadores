import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Pet {
  id?: string;
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  observacoes: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private collectionName = 'pets';

  constructor(private firestore: AngularFirestore) {}

  getPets(): Observable<Pet[]> {
    return this.firestore
      .collection<Pet>(this.collectionName)
      .valueChanges({ idField: 'id' });
  }

  addPet(pet: Pet) {
    return this.firestore.collection<Pet>(this.collectionName).add(pet);
  }

  updatePet(id: string, pet: Pet) {
    return this.firestore.collection(this.collectionName).doc(id).update(pet);
  }

  deletePet(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
