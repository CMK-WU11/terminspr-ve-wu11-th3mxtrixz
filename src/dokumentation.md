# Landrup Dans - Dokumentation

## Helena Agerbeck Warming - WU11

### Brugte libraries:
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zod](https://www.npmjs.com/package/zod)
- [js-cookie](https://www.npmjs.com/package/js-cookie)

### Predefined Users

| id | username | password | age | role |
| --- | --- | --- | --- | --- |
| 1 | instructor1 | 1234 | 24 | instructor |
| 2 | instructor2 | 1234 | 32 | instructor |
| 3 | instructor3 | 1234 | 27 | instructor |
| 4 | instructor4 | 1234 | 31 | instructor |
| 5 | user1 | 1234 | 14 | default |
| 6 | user2 | 1234 | 17 | default |
| 7 | user3 | 1234 | 21 | default |
| 8 | user4 | 1234 | 24 | default |
| 9 | user5 | 1234 | 52 | default |
| 10 | user6 | 1234 | 51 | default |

### Kilder:
- [Text-stroke](https://css-tricks.com/adding-stroke-to-web-text/) - Brugt i [Global.css](/src/app/globals.css)

### Redegørelse for teknologi-stack:
Jeg har valgt at bruge Next.js, dels fordi det er det vi har lært i undervisningen, men også fordi jeg føler mig sikker i det. Next.js tilbyder en mere enkel måde at implementere server-side rendering og routing på, hvilket gør det nemt at skabe hurtigere og mere SEO-venlige applikationer. Derudover giver Next.js mulighed for let integration af API-routing direkte i projektet, hvilket er en fordel.

- [TawilindCSS](https://tailwindcss.com)
Jeg har valgt at bruge TailwindCSS i denne opgave da jeg arbejder hurtigere hvis det ligger i samem fil.

- Jeg har også brugt almindelig CSS i [global.css](/src/app/globals.css) da jeg havde behov for at kunne customize nogle ting. Jeg kunne havde gjort det i tailwind.config filen, men opsætningen i en almindelig CSS fil er mere genkendeligt for mig, derved gør det mig mere effektiv.  

Jeg kunne have valgt Vue.js, men da det ikke er noget, vi har arbejdet med, valgte jeg i stedet Next.js. En anden fordel ved Next.js er, at det har en stor brugerbase, hvilket betyder, at support og dokumentation er let tilgængelig, hvis man støder på udfordringer.

Jeg har valgt at bruge [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) for at sikre mig, at brugeren ikke kan interagere med kalendersiden uden at være logget ind.
  
