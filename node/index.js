const express = require('express')
const app = express()
const path = require('path')

// POBIERZ FILE SYSTEM
const fs = require('fs')

// KONFIGURACJA STATYCZNEGO FOLDERU
app.use( express.static( path.join(__dirname, '/src/static')))

// POBIERANIE INFORMACJI OD KLIENTA (Z FORMULARZA)
app.get('/sendForm', (req, res) => {
  // CZYTAMY PLIK DATA.JSON I ZAPISUJEMY JAKO OLDCONTENT
  // OLDCONTENT JEST STRIGIEM
  const oldContent = fs.readFileSync('data.json',{encoding:'utf-8'});

  // ZMIENIAMY STRINGA NA TABLICĘ OBIEKTÓW
  const proceedData = JSON.parse(oldContent);

  // DO POBRANEJ TABLICY DODAJEMY NOWE DANE
  proceedData.push(req.query)

  // ZMIENIAMY TABLICĘ NA STRINGA
  const newData = JSON.stringify(proceedData, null , 2)

  // ZAPISUJEMY NOWĄ TABLICĘ JAKO STRINGA
  fs.writeFileSync('data.json', newData)
  res.send('ok')
})

// WYSYŁANIE KOMENTARZY Z SERWERA DO KLIENTA
app.get('/getComments', (req, res) => {
  // PRZECZYTAJ DATA.JSON
  const readJSON =  fs.readFileSync('data.json',{encoding:'utf-8'});
  
  // ZMIEN STRINGA NA TABLICĘ
  const proceedData = JSON.parse(readJSON);

  // WYŚWIETL W PRZEGLĄDARCE
  res.json( proceedData )
})

app.listen(80)