import { Injectable } from '@angular/core';
import { from, fromEventPattern } from 'rxjs';
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value: any) {

    const encriptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encriptedValue
    })
  }

  async get(storageKey: string){
    const res = await Storage.get({key: storageKey});
    if(res.value){
      return JSON.parse(unescape(atob(res.value)))
    } else {
      return false
    }
  }

  async removeItem(storageKey: string){
    await Storage.remove({key: storageKey})
  }

  async clear(){
    await Storage.clear()
  }


}
