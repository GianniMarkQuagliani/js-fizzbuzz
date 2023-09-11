/* 
Inizio del ciclo:

1) Richiamo il container per gli elementi seleziono il container tramite il suo selettore CSS.
2) Ciclo for per stampare numeri da 1 a 100:
3) Per ogni numero da 1 a 100:
    - Creo di un elemento HTML e aggiunta di una classe
    - Creo un nuovo elemento HTML di tipo "div"
    - Imposto il contenuto dell'elemento con il valore corrente del numero
4) Aggiungo la classe "box" all'elemento
5) Verifico per quali numeri è divisibile e classe relativa:
    - Se il numero è divisibile per 3 e 5: Aggiungo la classe "fizzbuzz" all'elemento.
    - Altrimenti, se il numero è divisibile per 3: Aggiungo la classe "fizz" all'elemento.
    - Altrimenti, se il numero è divisibile per 5: Aggiungo la classe "buzz" all'elemento
    - Altrimenti: Continuo con l'esecuzione senza fare nulla
        
6) Aggiungo l'elemento creato al container nel DOM

Fine del ciclo

*/
// 1) Richiamo il container per gli elementi seleziono il container tramite il suo selettore CSS.
const container = document.querySelector('.container');
// 2) Ciclo for per stampare numeri da 1 a 100:
for (let i = 1; i <= 100; i++) {
    // - Creo un elemento HTML di tipo "div"
    const box = document.createElement('div');
    // 3) Imposto il contenuto dell'elemento con il valore corrente del numero
    box.textContent = i;
    // 4) Aggiungo la classe "box" all'elemento
    box.classList.add('box');
    // 5) Verifico per quali numeri è divisibile e classe relativa:
    if (!(i % 3) && !(i % 5)) {
        box.classList.add('fizzbuzz');
    } else if (!(i % 3)) {
        box.classList.add('fizz');
    } else if (!(i % 5)) {
        box.classList.add('buzz');
    }
    // 6) Aggiungo l'elemento creato al container nel DOM
    container.append(box);
}
