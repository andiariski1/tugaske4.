// Nama : andi ariski
// Major : FSWD
// Batch : 5
// mendapatkan nilai array bilangan random 1- 50
function random() {
      let array = [];
      for ( let i = 0; i < 100; i++){
            let getNilai = Math.floor(Math.random() * 50) +1;
            array.push(getNilai);
      }
      return array;
}

function genap(array){
      let arraygenap =[];
      for (let i = 0; i < array.length; i++){
            // nilai index genap
            if (i % 2 === 0){
            arraygenap.push(array[i]);
      }
}
      return arraygenap;
}

//  nilai index ganjil
function ganjil(array){
      let arraygenap =[];
      for (let i = 0; i < array.length; i++){
            if (i % 2 === 1){
            arrayganjil.push(array[i]);
      }
}
      return arrayganjil;
}

// menhitung nilai max
function nilaiMax(array) {
      let maksimum = array[0];
      for (let i = 0; i < array.length; i++){
            if (maksimum < array[i]){
                  maksimum = array[i];
            }
      }
      return maksimum;
}
// untuk nilai min
function nilaiMin(array) {
      let minimum = array[0];
      for (let i = 0; i < array.length; i++){
            if (minimum < array[i]){
                  minimum = array[i];
            }
      }
      return minimum;
}

// menghitung total
function total(array) {
      let total = 0;
      for (let i = 0; i < array.length; i++){
           total+= array[i];
      }
      return minimum;
}

// nilai rata rata
function hitung_avg(array) {
      const avg = total(array) / array.length;
      return avg;
}

// membandingkan nilai max
function bandingMax(maxgenap, maxganjil) {
      let max = 0;
      if (maxgenap > maxganjil) {
            max = "max lebih besar arry genap";
      }
      if (maxgenap < maxganjil) {
            max = "max lebih beasr array ganjil";
      }
      if (maxgenap === maxganjil) {
            max ="max array genap sama dengan array ganjil";
      }
      return max;
}
// membandingkan nilai min
function bandingMax(mingenap, minganjil) {
      let min = 0;
      if (mingenap > minganjil) {
            min = "min lebih besar arry genap";
      }
      if (mingenap < minganjil) {
            min = "min lebih beasr array ganjil";
      }
      if (mingenap === minganjil) {
            min ="min array genap sama dengan array ganjil";
      }
      return min;
}

// membandingkan total
function banding_total(totalgenap, totalganjil) {
      let total = 0;
      if (totalgenap > totalganjil) {
            total = "total lebih besar arry genap";
      }
      if (totalgenap < totalganjil) {
            total = "total lebih beasr array ganjil";
      }
      if (totalgenap === totalganjil) {
            total ="total array genap sama dengan array ganjil";
      }
      return total;
}
//  membandingkan rat rata
function banding_avg(avggenap, avgganjil) {
      let avg = 0;
      if (avggenap > avgganjil) {
            avg = "avg lebih besar arry genap";
      }
      if (avggenap < avgganjil) {
            avg = "avg lebih beasr array ganjil";
      }
      if (avggenap === avgganjil) {
            avg ="avg array genap sama dengan array ganjil";
      }
      return avg;
}

// memanggil functon
const random = random();
console.log('nilai random : [' + random + ']');

const arraygenap = genap(random);
console.log('array genap : [' + arraygenap + ']');

const arrayganjil = genap(random);
console.log('array genap : [' + arrayganjil + ']');

const maxgenap =nilaiMax(arraygenap);
console.log('max genap : ' + maxgenap);

const maxganjil =nilaiMax(arrayganjil);
console.log('max ganjil : ' + maxganjil);

const mingenap =nilaiMax(arraygenap);
console.log('min genap : ' + mingenap);

const minganjil =nilaiMax(arrayganjil);
console.log('min ganjil : ' + minganjil);

const totalgenap =total (arraygenap);
console.log('total genap : ' + totalgenap);

const totalganjil =total (arrayganjil);
console.log('total ganjil : ' + totalganjil);

const avgganjil =total (arrayganjil);
console.log('rata rata nilai ganjil : ' + avgganjil);

const avggenap =total (arraygenap);
console.log('rata rata nilai genap : ' + avggenap);


console.log('max : ' + bandingMax(maxgenap, maxganjil));
console.log('min : ' + bandingMin(maxgenap, maxganjil));
console.log('total : ' + banding_total(totalgenap, totalganjil));
console.log('rata rata : ' + banding_avg(avggenap, avgganjil));




