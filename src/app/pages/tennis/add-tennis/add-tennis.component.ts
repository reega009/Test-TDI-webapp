import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataTennis } from 'src/app/model/tennis';
import { TennisService } from '../tennis.service';

@Component({
  selector: 'app-add-tennis',
  templateUrl: './add-tennis.component.html',
  styleUrls: ['./add-tennis.component.css']
})
export class AddTennisComponent implements OnInit {

  formData: FormGroup;
  titlePage = 'Tambah Data Tennis';
  status = "Tambah Data Success";
  desc = "Simpan";
  tennis = new dataTennis()
  listTennis : any;



  constructor(
    private _formBuilder : FormBuilder,
    private _service : TennisService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    
    this.formData = this._formBuilder.group({
      id : this._formBuilder.control(""),
      n_player_a : this._formBuilder.control("", [Validators.required]),
      n_player_b : this._formBuilder.control("", [Validators.required]),
    })
    this.getDataTennis()
  }

  save(){
    const value = this.formData.value
    this._service.nilaiAwal(value).subscribe(
      resp => {
        console.log(resp.body.id)
        // this._toastr.success('Berhasil', 'Data Berhasil Di Simpan');
        alert("Player Berhasil Didaftarkan")
        this._router.navigate(['/','tennis',resp.body.id]);
      }, error =>{
        console.log(error)
        alert("Player Gagal Didaftarkan")
        // this._toastr.error('Gagal', 'Data Gagal Di Simpan');
      })
  }

  getDataTennis(){
    this._service.findAll().subscribe( 
      data  =>{
        console.log(data)
        this.listTennis = data
      }
    )
  }

}
