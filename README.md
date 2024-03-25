# JS-BIGLIETTO-TRENO


> ### Esercizio
> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
> Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
>>  il prezzo del biglietto è definito in base ai km (0.21 € al km)
>>  va applicato uno sconto del 20% per i minorenni
>>  va applicato uno sconto del 40% per gli over 65.

### Svolgimento

1. Input
    - [x] Chiediamo all'utente il numero di chilometri che vuole percorrere (variabile: userKm)
    - [x] Chiediamo all'utente la sua età (variabile: userAge)
    - [ ] Dichiaro variabile sconto (variabile: discount)

2. Esecuzione logica
    - [ ] Dichiaro variabile prezzo, facendo userKm * 0.21 (variabile: price)

    - [ ] Imposto la condizione: se l'età è minore di 18, lo sconto sarà uguale al 20% (price * 0.20), altrimenti se l'età è maggiore di 65, lo sconto sarà uguale al 40% (price * 0.40).

    - [ ] Calcolo il prezzo totale facendo prezzo - sconto (variabile: totalPrice)

3. Output
    - [ ] Stampo il prezzo finale

