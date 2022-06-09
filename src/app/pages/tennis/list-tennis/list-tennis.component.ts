import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dataTennis, updateSet } from 'src/app/model/tennis';
import { TennisService } from '../tennis.service';

@Component({
  selector: 'app-list-tennis',
  templateUrl: './list-tennis.component.html',
  styleUrls: ['./list-tennis.component.css']
})
export class ListTennisComponent implements OnInit {
  formGroup: FormGroup;
  listTennis : any;
  idData: number
  scoreSementaraA = '0';
  scoreSementaraB = '0';
  set1A = 0;
  set1B = 0;
  set2A = 0;
  set2B = 0;
  set3A = 0;
  set3B = 0;
  set1AGoal = 0;
  set1BGoal = 0;
  set1Done = 0;
  set2Done = 0;
  set3Done = 0;
  valueSet1 : updateSet
  playerA : any
  playerB : any
  ballA : any
  ballB: any
  deuce : any;

  
  
  constructor(
    private _router : Router,
    private _formBuilder: FormBuilder,
    private _service : TennisService,
    private _activatedRoute: ActivatedRoute

  ) {
    this._activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.idData = id;
    });

    this.formGroup = this._formBuilder.group({
      id: this._formBuilder.control(null),
      n_player_a: this._formBuilder.control(null),
      n_player_b: this._formBuilder.control(null),
      skor_player_a: this._formBuilder.control(null),
      skor_player_b: this._formBuilder.control(null),
      scoreSementaraPlayerA: this._formBuilder.control(null),
      scoreSementaraPlayerB: this._formBuilder.control(null),
      set1A: this._formBuilder.control(null),
      set1B: this._formBuilder.control(null),
      set2A: this._formBuilder.control(null),
      set2B: this._formBuilder.control(null),
      set3A: this._formBuilder.control(null),
      set3B: this._formBuilder.control(null),
    });
   }

  ngOnInit(): void {
    this.getDataTennis()
    this.formGroup.controls['skor_player_a'].setValue(0)
    this.formGroup.controls['skor_player_b'].setValue(0)
    this.getBall()
    this.deuce = false
  }

  getBall(){
    this.ballA = Math.round(Math.random())
    if(this.ballA == 1){
      this.ballA = true
      this.ballB = false
    }else{
      this.ballA = false
      this.ballB = true
    }
    console.log(this.ballA)
    console.log(this.ballB)
  }

  getDataTennis(){
    this._service.findById(this.idData).subscribe( 
      data  =>{
        console.log(data)
        this.listTennis = data.body
      }
    )
  }

  set1(){
    var scoreSetA = this.formGroup.get('skor_player_a').value
    var scoreSetB = this.formGroup.get('skor_player_b').value
    if(this.set1AGoal == 1 && this.set1A < 4 && this.set1Done == 0){
      this.set1A += 1
      if(this.set1A == 4 || this.set1B == 4){
        this.set1Done = 1
        console.log("Data S1A = " + this.set1A + " Data S1B = " + this.set1B)
        if(this.set1A == 4){
          this.formGroup.controls['skor_player_a'].setValue(scoreSetA += 1)
        }
        console.log(this.formGroup.get('skor_player_a').value)
        console.log(this.formGroup.get('skor_player_b').value)
        if(this.ballA == true){
          this.ballA = false
          this.ballB = true
        }else{
          this.ballA = true
          this.ballB = false
        }
      }
    }else if(this.set1BGoal == 1 && this.set1B < 4 && this.set1Done == 0){
      this.set1B += 1
      if(this.set1A == 4 || this.set1B == 4){
        this.set1Done = 1
        console.log("Data S1A = " + this.set1A + " Data S1B = " + this.set1B)
        if(this.set1B == 4){
          this.formGroup.controls['skor_player_b'].setValue(scoreSetB += 1)
        }
        console.log(this.formGroup.get('skor_player_a').value)
        console.log(this.formGroup.get('skor_player_b').value)
        if(this.ballA == true){
          this.ballA = false
          this.ballB = true
        }else{
          this.ballA = true
          this.ballB = false
        }
      }
      // SET 2
    }else if(this.set1AGoal == 1 && this.set2A < 4 && this.set1Done == 1 && this.set2Done == 0){
      this.set2A += 1
      if(this.set2A == 4 || this.set2B == 4){
        this.set2Done = 1
        console.log("Data S2A = " + this.set2A + " Data S2B = " + this.set2B)
        if(this.set2A == 4){
          this.formGroup.controls['skor_player_a'].setValue(scoreSetA += 1)
        }
        console.log(this.formGroup.get('skor_player_a').value)
        console.log(this.formGroup.get('skor_player_b').value)
        if(this.ballA == true){
          this.ballA = false
          this.ballB = true
        }else{
          this.ballA = true
          this.ballB = false
        }
      }
    }else if(this.set1BGoal == 1 && this.set2B < 4 && this.set1Done == 1 && this.set2Done == 0){
      this.set2B += 1
      if(this.set2A == 4 || this.set2B == 4){
        this.set2Done = 1
        console.log("Data S2A = " + this.set2A + " Data S2B = " + this.set2B)
        if(this.set2B == 4){
          this.formGroup.controls['skor_player_b'].setValue(scoreSetB += 1)
        }
        console.log(this.formGroup.get('skor_player_a').value)
        console.log(this.formGroup.get('skor_player_b').value)
        if(this.ballA == true){
          this.ballA = false
          this.ballB = true
        }else{
          this.ballA = true
          this.ballB = false
        }
      }
      // SET 3
    }else if(this.set1AGoal == 1 && this.set3A < 4 && this.set1Done == 1 && this.set2Done == 1 ){
      this.set3A += 1
      if(this.set3A == 4 || this.set3B == 4){
        this.set3Done = 1
        console.log("Data S3A = " + this.set3A + " Data S3B = " + this.set3B)
        if(this.set3A == 4){
          this.formGroup.controls['skor_player_a'].setValue(scoreSetA += 1)
        }
        console.log(this.formGroup.get('skor_player_a').value)
        console.log(this.formGroup.get('skor_player_b').value)
        if(this.ballA == true){
          this.ballA = false
          this.ballB = true
        }else{
          this.ballA = true
          this.ballB = false
        }
      }
    }else if(this.set1BGoal == 1 && this.set3B < 4 && this.set1Done == 1 && this.set2Done == 1 ){
      this.set3B += 1
      if(this.set3A == 4 || this.set3B == 4){
        this.set3Done = 1
        console.log("Data S3A = " + this.set3A + " Data S3B = " + this.set3B)
        if(this.set3B == 4){
          this.formGroup.controls['skor_player_b'].setValue(scoreSetB += 1)
        }
        console.log(this.formGroup.get('skor_player_a').value)
        console.log(this.formGroup.get('skor_player_b').value)
        if(this.ballA == true){
          this.ballA = false
          this.ballB = true
        }else{
          this.ballA = true
          this.ballB = false
        }
      }
    }
    if(this.set3Done == 1 || (this.formGroup.get('skor_player_a').value == 2 && this.formGroup.get('skor_player_b').value == 0) || (this.formGroup.get('skor_player_a').value == 0 && this.formGroup.get('skor_player_b').value == 2)){
      const value: dataTennis = this.formGroup.value;
      value.id = this.idData
      var winner : string
      if(this.formGroup.get('skor_player_a').value > this.formGroup.get('skor_player_b').value){
        winner = 'Player A'
      }else{
        winner = 'Player B'
      }
      this._service.updateSkor(value).subscribe(response => {
        if(response.status == 200){
          alert("Game Di Menangkan Oleh " + winner)
          this._router.navigate(['/']);
        }
      }, error => {
        console.error('can\'t save data');
      });
    }
    this.set1AGoal = 0
    this.set1BGoal = 0
  }

  tambahPointA(){
    if(this.scoreSementaraA == '0'){
      this.scoreSementaraA = '15'
    }else if(this.scoreSementaraA == '15'){
      this.scoreSementaraA = '30'
    }else if(this.scoreSementaraA == '30'){
      this.scoreSementaraA = '40'
    }else if(this.scoreSementaraA == '40' && this.scoreSementaraB == '40'){
      this.scoreSementaraA = 'AD'
    }else if(this.scoreSementaraA == '40' && this.scoreSementaraB == 'AD'){
      this.scoreSementaraB = '40'
    }else{
      this.scoreSementaraA = '0'
      this.scoreSementaraB = '0'
      this.set1AGoal = 1
      console.log("Player A Point " + this.set1AGoal)
    }
    this.set1()
  }

  tambahPointB(){
    if(this.scoreSementaraB == '0'){
      this.scoreSementaraB = '15'
    }else if(this.scoreSementaraB == '15'){
      this.scoreSementaraB = '30'
    }else if(this.scoreSementaraB == '30'){
      this.scoreSementaraB = '40'
    }else if(this.scoreSementaraA == '40' && this.scoreSementaraB == '40'){
      this.scoreSementaraB = 'AD'
    }else if(this.scoreSementaraB == '40' && this.scoreSementaraA == 'AD'){
      this.scoreSementaraA = '40'
    }else{
      this.scoreSementaraA = '0'
      this.scoreSementaraB = '0'
      this.set1BGoal = 1
      console.log("Player B Point " + this.set1BGoal)
    }
    this.set1()
  }

  deuceSet(){
    if(this.scoreSementaraA == '40' && this.scoreSementaraB == '40' || (this.scoreSementaraA == 'AD' || this.scoreSementaraB == 'AD')){
      this.deuce = true
    }else{
      this.deuce = false
    }
  }

}
