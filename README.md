# Wyszukiwarka obrazków

## Spis:

[O aplikacji](https://github.com/delfakowalska/wyszukiwarkaobrazkow/blob/master/README.md#o-aplikacji)

[Instalacja](https://github.com/delfakowalska/wyszukiwarkaobrazkow/blob/master/README.md#instalacja)

[Budowa Aplikacji](https://github.com/delfakowalska/wyszukiwarkaobrazkow/blob/master/README.md#budowa-aplikacji)





# O aplikacji

Jest to prosta aplikacja, pełniąca funkcję wyszukiwarki.  Służy do wyszukiwania zdjęć i obrazków za pomocą haseł, a także pozwala na pobieranie ich. Została napisana w React JS, wykorzystuje routing, API i bootstramp.

Nie wymaga rejestracji, jest skierowana do każdego, kto chciałby wyszukać jakiś kontekst. 

# Instalacja

Należy włączyć terminal i wpisać <b>npm install</b>. Po zainstalowaniu wszystkich elementów należy wprowadzić komendę <b>npm start</b>, by zobaczyć aplikację w przeglądarce internetowej. 

  
# Budowa aplikacji
### App.js:
Część aplikacji w której jest zawarte API ze strony [PIXABAY](https://pixabay.com/api/docs/).

  ### Router.js :
 Odpowiada za płynne przejścia między podstronami wyszukiwarki. Dzięki temu można bez problemu przejść na stronę z wynikiem, a także wrócić na stronę główną.

 ###  Folder ImageList:
Składa się z dwóch plików, jeden z nich zawiera styl komponentu, drugi zaś zmapowane obiekty wyszukiwań. Odpowiada on za sposób w jaki wyszukane zdjęcia się wyświetlają.

 ### Folder ImageSearch:
Również zawiera plik stylistyczny dla komponentu, którym tym razem jest sama wyszukiwarka zdjęć. Odpowiada on za to, by po wpisaniu frazy pojawiły się wyniki.
 ### Folder ImageView:
Jak wyżej zawiera plik stylistyczny. Drugi plik zawiera działanie podstrony na którą jesteśmy przekierowywani, po wybraniu interesującego nas wyniku wyszukiwań.
