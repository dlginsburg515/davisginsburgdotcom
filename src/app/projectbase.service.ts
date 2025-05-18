import { Injectable, inject, signal } from '@angular/core';
import {collection, collectionData, doc, Firestore, setDoc, updateDoc, deleteDoc} from "@angular/fire/firestore";
import { Observable } from 'rxjs';

export interface Project{
title: string,
id: string,
purpose: string,
description: string,
video: string,
priority: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectbaseService {
  private firestore = inject(Firestore);
  private projectCollection = collection(this.firestore, 'projects');

  searchTerm = signal<string>('');

  getInventory(): Observable<Project[]>{
    return collectionData(this.projectCollection, ({idField: 'id'})) as Observable<Project[]>
  }
  addProject(newItem: Project){
    const userRef = doc(this.projectCollection);
    const newId = userRef.id;
    newItem.id = newId;
    setDoc(userRef, newItem);
  }
  constructor() { }
}
