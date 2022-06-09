export class dataTennis{
     id : number
     n_player_a : String
     n_player_b : String
     skor_player_a : number
     skor_player_b : number
     scoreSementaraPlayerA : number
     scoreSementaraPlayerB : number
     set1A : number 
     set1B : number
     set2A : number
     set2B : number
     set3A : number
     set3B : number
}

export class nilaiAwal{
    id : number
    n_player_a : String
    n_player_b : String
}

export class updateSkorSementara{
    playerA : number
    playerB : number
}

export class updateSet{
    id : number
    playerA : number
    playerB : number
}

export class updateSkor{
    id : number
    skor_player_a : number
    skor_player_b : number
}