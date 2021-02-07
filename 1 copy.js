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
 //Start: 13:31
/* PSEUDOCODE

STORE kecepatan AS NUMBER WITH ANY VALUE
STORE batuKecil AS NUMBER WITH ANY VALUE
STORE batuSedang AS NUMBER WITH ANY VALUE
STORE batuBesar AS NUMBER WITH ANY VALUE

IF batuBesar IS TRUTHY
  DISPLAY "ketemu batu besar, maka bola salju berhenti"

ELSE 
  SET kecepatan WITH kecepatan MINUS batuKecil TIMES 0.5 
	SET kecepatan WITH kecepatan MINUS batuSedang TIMES 1.5
	
	IF kecepatan LESS THAN 0
		SET kecepatan WITH 0
	END IF
	
	DISPLAY "Kecepatan akhir bola salu adalah <kecepatan>m/s"
END IF

*/
//done pseudocode, doublechecking: 13:40
//done double checking tiga tiganya, 13:45, total: +-40 menit