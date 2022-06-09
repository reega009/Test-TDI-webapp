import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataTennis, nilaiAwal, updateSet, updateSkor, updateSkorSementara } from 'src/app/model/tennis';

@Injectable({
  providedIn: 'root'
})
export class TennisService {

  constructor(
    private _http : HttpClient
  ) { }

  public findAll(){
    return this._http.get("/url/api/tennis/findAllData")
  }

  public findById(value: number){
    return this._http.get<dataTennis>(`/url/api/tennis/${value}`, {observe: 'response'})
  }

  public nilaiAwal(value: nilaiAwal) {
    return this._http.post<nilaiAwal>("/url/api/tennis/nilaiAwal", value, {observe: 'response'})
  }

  public updateSkorSementara(value: updateSkorSementara){
    return this._http.put<updateSkorSementara>("/url/api/tennis/updateSkorSementara", value, {observe: 'response'})
  }

  public resetSkorSementara(value: updateSkorSementara){
    return this._http.put<updateSkorSementara>("/url/api/tennis/resetSkorSementara", value, {observe: 'response'})
  }
  

  public updateSkorSet1(value: updateSet){
    return this._http.put<updateSet>("/url/api/tennis/updateSkorSet1", value, {observe: 'response'})
  }
  public updateSkorSet2(value: updateSet){
    return this._http.put<updateSet>("/url/api/tennis/updateSkorSet2", value, {observe: 'response'})
  }
  public updateSkorSet3(value: updateSet){
    return this._http.put<updateSet>("/url/api/tennis/updateSkorSet3", value, {observe: 'response'})
 
  }
  public updateSkor(value: updateSkor){
    return this._http.put<updateSkor>("/url/api/tennis/updateSkor", value, {observe: 'response'})
  }


  public delete(tennisId: number){
    return this._http.delete<any>("/url/api/tennis/delete/"+tennisId )
  }
}
