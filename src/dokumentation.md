# Landrup Dans - Dokumentation

## Helena Agerbeck Warming - WU11

### Brugte libraries:
- [React Icons](https://react-icons.github.io/react-icons/)
- [Zod](https://www.npmjs.com/package/zod)
- [js-cookie](https://www.npmjs.com/package/js-cookie)

### Redegørelse for teknologi-stack:
Jeg har valgt at bruge Next.js, dels fordi det er det vi har lært i undervisningen, men også fordi jeg føler mig sikker i det. Next.js tilbyder en mere enkel måde at implementere server-side rendering og routing på, hvilket gør det nemt at skabe hurtigere og mere SEO-venlige applikationer. Derudover giver Next.js mulighed for let integration af API-routing direkte i projektet, hvilket er en fordel.

Jeg kunne have valgt Vue.js, men da det ikke er noget, vi har arbejdet med, valgte jeg i stedet Next.js. En anden fordel ved Next.js er, at det har en stor brugerbase, hvilket betyder, at support og dokumentation er let tilgængelig, hvis man støder på udfordringer.

I [footer.js](/src/components/footer.jsx) har jeg brugt [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router) ved 𝐊𝐚𝐥𝐞𝐧𝐝𝐞𝐫/𝐂𝐚𝐥𝐞𝐧𝐝𝐞𝐫 til at navigere udfra om brugeren er logget ind eller ej. Er brugeren ikke logget, ind bliver man sendt hen til en log ind side, hvor man derefter får lov til at se sin kalender (efter succesfuldt log ind). Er man derimod allerede logget ind, får man lov til at se sin kalender med det samme.
