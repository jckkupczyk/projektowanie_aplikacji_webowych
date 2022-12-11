// Zadanie 4
//
// 1)  Napisz funkcje która przyjmuje jeden parametr który jest liczbą.
//     Funkcja niech wypisuję na konsolę "Liczba nieparzysta" w przypadku gdy przy wywołaniu funkcji została
// podana liczba nieparzysta lub "Liczba parzysta" w przypadku gdy przy wywołaniu funkcji została podana liczba parzysta.
//     Zadanie wykonaj z wykorzystaniem konstrukcji IF

function evenOrOdd(n) {
    if (n % 2) {
        console.log('Liczba nieparzysta')
    }
    else {
        console.log('Liczba parzysta')
    }
}
evenOrOdd(2);
evenOrOdd(3);

//     a = 2;
//     let sum = a;
//     console.log(sum);
//     //* 2 + 2 = 4
// }
// number(2)
//
// if (a%2 == 0) {
//     console.log('Liczba nieparzysta')
// } else {
//     console.log('Liczba parzysta')
// }
