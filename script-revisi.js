// seleksi layar kalkulator
const calculatorScreen = document.querySelector(".calculator-screen");

const display = (number) => {
  calculatorScreen.value += number;
};

// seleksi semua number button
const numbers = document.querySelectorAll(".number");

/* 
  buat sebuah event listener untuk setiap number,
  dimana tiap-tiap number akan ditampilkan pada display calculator screen
  ketika setiap tombol number di klik
*/
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    display(e.target.value);
  });
});

// seleksi semua operator
const operators = document.querySelectorAll(".operator");

/* 
  buat sebuah event listener untuk setiap operator,
  dimana tiap-tiap operator akan muncul di display
  ketika tombol di klik
*/
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    display(e.target.value);
  });
});

// seleksi tombol operator modulo
const modulo = document.querySelector(".modulo");

modulo.addEventListener("click", (e) => {
  display(e.target.value);
});

// seleksi operator sama-dengan
const equal = document.querySelector(".equal-sign");

// buat sebuah function agar tombol sama dengan dapat melakukan kalkulasi
equal.addEventListener("click", () => {
  try {
    calculatorScreen.value = eval(calculatorScreen.value);
  } catch (error) {
    calculatorScreen.value = "error";
  }
});

// seleksi tombol hapus (AC)
const clear = document.querySelector(".all-clear");

// buat sebuah function agar calculator-screen terhapus saat tombol AC di tekan
clear.addEventListener("click", () => {
  calculatorScreen.value = "";
});
