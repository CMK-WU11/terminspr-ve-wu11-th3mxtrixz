# Landrup Dans - Dokumentation

## Helena Agerbeck Warming - WU11

### Brugte libraries:
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zod](https://www.npmjs.com/package/zod)
- [js-cookie](https://www.npmjs.com/package/js-cookie)

### Kilder:
- [Text-stroke](https://css-tricks.com/adding-stroke-to-web-text/) - Brugt i [Global.css](/src/app/globals.css)

### Redegørelse for teknologi-stack:
Jeg har valgt at bruge Next.js, dels fordi det er det vi har lært i undervisningen, men også fordi jeg føler mig sikker i det. Next.js tilbyder en mere enkel måde at implementere server-side rendering og routing på, hvilket gør det nemt at skabe hurtigere og mere SEO-venlige applikationer. Derudover giver Next.js mulighed for let integration af API-routing direkte i projektet, hvilket er en fordel.

Jeg kunne have valgt Vue.js, men da det ikke er noget, vi har arbejdet med, valgte jeg i stedet Next.js. En anden fordel ved Next.js er, at det har en stor brugerbase, hvilket betyder, at support og dokumentation er let tilgængelig, hvis man støder på udfordringer.

Jeg har valgt at bruge [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) for at sikre mig, at brugeren ikke kan interagere med kalendersiden uden at være logget ind.

Ved min [SignUp button](/src/components/signup-button.jsx) har jeg brugt [js-cookie](https://www.npmjs.com/package/js-cookie) da det er den eneste måde (som vi også har lært) jeg kunne bruge useState sammen med Cookies, da useState er client side, hvor Cookies fra "next/headers" er server side. 

Jeg havde problemer med at tilsende min authorization cookie da jeg prøvede at gøre det på samme måde som i vores "din mægler" opgave, og fik derfor fundet frem til denne løsning via et stack [overflow](https://stackoverflow.com/questions/45535913/setting-authorization-header-in-fetch-api) spørgsmål.
```jsx
const bearer = 'Bearer ' + authToken
```  
