var playerSkor = 0
var komputerSkor = 0
var playerSkor_span = document.getElementById("playerskor")
var komputerSkor_span = document.getElementById("komputerskor")
var papanSkor_div = document.querySelector(".papanskor")
var result_p = document.querySelector(".result > p")
var gajah_div = document.getElementById("g")
var manusia_div = document.getElementById("m")
var semut_div = document.getElementById("s")

function tentukanPilihanKomputer (){
    var pilihan = ["g", "m", "s"]
    var random = Math.floor(Math.random() * 3)
    return pilihan[random]
}

function konversiKata (kata){
    if (kata == "g"){
        return "Gajah"
    } else if (kata == "m"){
        return "Manusia"
    } else {
        return "Semut"
    }
}

function menang (pilihanPlayer, pilihanKomputer){
    playerSkor++
    playerSkor_span.innerHTML = playerSkor
    komputerSkor_span.innerHTML = komputerSkor
    var kataKecilPlayer = "player".fontsize(3).sup()
    var kataKecilKomputer = "komputer".fontsize(3).sup()
    result_p.innerHTML = `${konversiKata(pilihanPlayer)}${kataKecilPlayer} mengalahkan ${konversiKata(pilihanKomputer)}${kataKecilKomputer}. Kamu menang :D`
}

function kalah (pilihanPlayer, pilihanKomputer){
    komputerSkor++
    playerSkor_span.innerHTML = playerSkor
    komputerSkor_span.innerHTML = komputerSkor
    var kataKecilPlayer = "player".fontsize(3).sup()
    var kataKecilKomputer = "komputer".fontsize(3).sup()
    result_p.innerHTML = `${konversiKata(pilihanPlayer)}${kataKecilPlayer} kalah dari ${konversiKata(pilihanKomputer)}${kataKecilKomputer}. Kamu kalah :(`
}

function seri (pilihanPlayer, pilihanKomputer){
    var kataKecilPlayer = "player".fontsize(3).sup()
    var kataKecilKomputer = "komputer".fontsize(3).sup()
    result_p.innerHTML = `${konversiKata(pilihanPlayer)}${kataKecilPlayer} & ${konversiKata(pilihanKomputer)}${kataKecilKomputer}. Hasilnya seri :|`
}

function game(pilihanPlayer) {
    var pilihanKomputer = tentukanPilihanKomputer()
    switch (pilihanPlayer + pilihanKomputer){
        case "gm":
        case "ms":
        case "sg":
            menang(pilihanPlayer, pilihanKomputer)
            break
        case "mg":
        case "sm":
        case "gs":
            kalah(pilihanPlayer, pilihanKomputer)
            break
        case "gg":
        case "mm":
        case "ss":
            seri(pilihanPlayer, pilihanKomputer)
            break        
    }
}

function main() {
    gajah_div.addEventListener("click", function () {
        game("g")
    })

    manusia_div.addEventListener("click", function () {
        game("m")
    })

    semut_div.addEventListener("click", function () {
        game("s")
    })
}

main()