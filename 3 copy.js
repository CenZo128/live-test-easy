/*
=============================
Menerjemahkan angka ke simbol
=============================

Kamu diberikan input yang berisikan angka-angka, tugasmu adalah menerjemahkan angka-angka tersebut ke barisan simbol.

Jumlah baris yang muncul sesuai dengan panjang input dan jumlah simbol yang ditampilkan di tiap baris sesuai dengan angka-angka di dalam input. Simbol yang ditampilkan di baris ganjil adalah '$' dan simbol yang ditampilkan di baris genap adalah '|'.


Contoh 1
--------
let input = '123'

output:
$
||
$$$

penjelasan:
$   -> $ ditampilkan 1 kali
||  -> | ditampilkan 2 kali
$$$ -> $ ditampilkan 3 kali 


Contoh 2
--------
let input = '4212'

output:
$$$$
||
$
||

penjelasan:
$$$$    -> $ ditampilkan 4 kali
||      -> | ditampilkan 2 kali
$       -> $ ditampilkan 1 kali
||      -> | ditampilkan 2 kali


Rule:
- Hanya gunakan built in function yang diperbolehkan (cek readme).

*/
//start: 13:21
//asumsi: input selalu sesuai format yang diekspetasikan dan benar
let input = '4212'

// Tulis code di sini...
for(let n = 1; n<= input.length; n++){ //Looping sebanyak jumlah digit input
	let baris = "" //deklarasi variabel untuk setiap baris yang akan ditampilkan
	
	for(let m = 0; m<Number(input[n-1]); m++)	//Looping sebanyak jumlah digit tiap indeks dimulai dari indeks 0
		if(n%2 === 1)
			baris+="$"	// print $ jika digit urutan ganjil
		else
			baris+="|"	//print | jika digit urutan genap
		
	console.log(baris) //print baris tersebut
}
//done code, checking output, debugging: 13:30