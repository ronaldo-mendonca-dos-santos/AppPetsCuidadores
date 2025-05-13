import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
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
  private petsCollection;

  constructor(private firestore: Firestore) {
    this.petsCollection = collection(this.firestore, 'pets');
  }

  getPets(): Observable<Pet[]> {
    return collectionData(this.petsCollection, { idField: 'id' }) as Observable<Pet[]>;
  }

  addPet(pet: Pet) {
    return addDoc(this.petsCollection, pet);
  }

  updatePet(id: string, pet: Pet) {
    const petDocRef = doc(this.firestore, `pets/${id}`);
    return updateDoc(petDocRef, { ...pet });
  }

  deletePet(id: string) {
    const petDocRef = doc(this.firestore, `pets/${id}`);
    return deleteDoc(petDocRef);
  }
}
