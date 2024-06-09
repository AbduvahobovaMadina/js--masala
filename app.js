// {
//     // masala 1
//     function perimetr(a){
//         return 4 * a
//     }
//     console.log(perimetr(4));
// }

// {
//     // masala 2
//     function yuza(a){
//         return a * a
//     }
//     console.log(yuza(5));
// }


// {
//     // masala 3
//     let a = +prompt("a sonini kiriting")
//     let b = +prompt("b sonini kiriting")
//     alert("perimetr va yuza consoleda")
//     function perimetr() {
//             function yuza() {   
//                 return a * b
//             }
//             console.log( yuza());
//             return 2 * ( a + b)
//         }
//         console.log(perimetr());
// }

// {
//     // masala 4
//     let d = prompt("d diametr")
//     alert("uzunligi consoleda")
//     function uzunlik(d){
//         return d * 3.14
//     }
//     console.log(uzunlik(2));
// }

// {
//     // masala 5
//     let a = prompt("a soniini kiritng")
//     alert("hajmi va yuzasi consoleda")
//     function hajmi(a){
//         function yuzasi(a){
//             return 6 * a * a
//         }
//         console.log(yuzasi(2));
//         return a * a * a
//     }
//     console.log(hajmi(2));
// }


// {
//     // masala 6
//     let a = +prompt("a ga qiymat kiriting")
//     let b = +prompt("b ga qiymat kiriting")
//     let c = +prompt("c ga qiymat kiriting")
//     alert("hajmi va yuzasi consoleda")
//     function hajmi(a,b,c){
//         function yuzasi(a,b,c){
//             return 2 * (a * b + b * c + c * a)
//         }
//         console.log(yuzasi(2,2,2));
//         return a * b * c
//     }
//     console.log(hajmi(2,2,2));
// }


// {
//     //masala 7
//     function radius(R) {
//         let L = 2 * 3.14 * R
//         let S = 3.14 * R * R
//         return `uzunligi ${L} , yuzasi ${S}`
//     }
//     console.log( radius (4) );
// }

// {
//     // masala 8
//     function arifmetigi( a, b) {
//         return (a + b)/2
//     }
//     console.log(arifmetigi (4, 6) );
// }
// {
//     //masala 9
//     function ildiz(a , b) {
//         return Math.sqrt(a * b)
//     }
//     console.log( ildiz (-6 ,2) );
// }

{
    //masala 10
    function kvadrati( a, b) {
        let yigindi = a + b
        let kopaytma = a * b
        let kvadrat = a * a 
        let kvadrat1 = b * b
        return `${yigindi}, kopaytma ${kopaytma}, a kvadrati ${kvadrat}, b kvadrati ${kvadrat1} `
    }
    console.log(kvadrati ( 4, 7) );

}