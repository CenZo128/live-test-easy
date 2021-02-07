/**
 * ==========
 * Pseudocode
 * ==========
 * Buatlah pseudocode untuk situasi berikut:
 * 
 * Ada sebuah bola salju berguling menuruni bukit.
 * Kecepatan bola salju tersebut adalah 3m/s (3 meter per detik)
 * Jika bola salju menabrak batu, maka kecepatannya akan berkurang
 * - menabrak batu kecil, kecepatan berkurang 0.5m/s
 * - menabrak batu sedang, kecepatan berkurang 1.5m/s
 * - menabrak batu besar, bola salju berhenti.
 * 
 * Di bukit tersebut terdapat banyak batu,
 * ada x batu kecil, y batu sedang, dan z batu besar.
 * 
 * Cetaklah kecepatan akhir bola salju tersebut.
 * 
 * Note: kecepatan bola salju tidak bisa minus
 * (sudah jatuh dari atas bukit tidak bisa naik lagi sendiri)
 * 
 * Contoh kasus #1
 * Input => Terdapat 1 buah Batu kecil
 * Output => Kecepatan akhir bola salu adalah 2.5m/s
 * 
 * Contoh kasus #2
 * Input => Terdapat 1 buah batu besar
 * output => ketemu batu besar, maka bola salju berhenti
 * 
 * Contoh kasus #3
 * Input => Terdapat 1 buah batu kecil, 2 buah batu sedang
 * output => Kecepatan akhir bola salu adalah 0m/s
 */

 /**
  * MIND MAPPING
  * BOLA = 3
  * 
  * X = 0.5
  * Y = 1.5
  * Z =  3
  * 
  * INPUT = 1 * X
  * 
  * LAKUKAN PENGULANGAN WHILE
  * KETIKA BOLA BELUM 0
  *     BOLA - INPUT     
  * THEN
  * TAMPILKAN BOLA NOW
  * 
  * 
  * PSEUDOCODE
  * ========================================================
  * STORE bola AS NUMBER WITH 3
  * STORE x AS NUMBER WITH 0.5
  * STORE y AS NUMBER WITH 1.5
  * STORE z AS NUMBER WITH 3
  * 
  * STORE input AS NUMBER WITH ANY NUMBER
  * SET INPUT WITH jumlah TIMES tipeBatu
  * 
  * WHILE bola MORE THAN 0
  *     SET bola WITH bola MINUS input
  * END WHILE
  *     DISPLAY bola
  * 
  */