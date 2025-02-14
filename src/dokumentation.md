# Landrup Dans - Dokumentation

## Helena Agerbeck Warming - WU11

### Brugte libraries:
- [React Icons](https://react-icons.github.io/react-icons/)  
Dog i footeren til "Kalender" siden har jeg brugt et Icon fra figma'en da det præcise ikon ikke var tilgængeligt ved brug af [React Icons](https://react-icons.github.io/react-icons/).
- [Zod](https://www.npmjs.com/package/zod)

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

Jeg kunne desuden have valgt at arbejde i Vue.js, men da det ikke er noget, vi har arbejdet med, valgte jeg i stedet Next.js. En anden fordel ved Next.js er, at det har en stor brugerbase, hvilket betyder, at support og dokumentation er let tilgængelig, hvis man støder på udfordringer.

- [TawilindCSS](https://tailwindcss.com)
Jeg har valgt at bruge TailwindCSS i denne opgave da jeg arbejder hurtigere hvis det ligger i samme fil.

- Jeg har også brugt almindelig CSS i [global.css](/src/app/globals.css) da jeg havde behov for at kunne customize nogle ting. Jeg kunne havde gjort det i tailwind.config filen, men opsætningen i en almindelig CSS fil er mere genkendeligt for mig, derved gør det mig mere effektiv.  


Jeg har valgt at bruge [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) for at sikre mig, at brugeren ikke kan interagere med kalendersiden uden at være logget ind.

## Fremhævelse af [search-function.jsx](/src/components/search-function.jsx)
- Koden er forkortet i min dokumentation, for at gøre det mere læsbart.

I koden nedenfor laver jeg en simpel Søge funktion, ved brug af den angivede API.
Jeg laver også et reset på searchData når searchValue er tomt da jeg oplevede at efter man slettede den tekst man havde søgt med, stod den der stadig- samt alle aktiviteterne. 
```jsx
export default function SearchFunction({data}) {
    const [searchValue, setSearchValue] = useState("")
    const [searchData, setSearchData] = useState([])
        
    function getSearch(event) {
        setSearchValue(event.target.value)
    }
        
    useEffect(() => { 
        if (searchValue === "") {
            setSearchData([]) // Reseter searchData når searchValue er tomt
            } else {
                setSearchData(data.filter(element => 
                element.name.toLowerCase().includes(searchValue.toLowerCase())))
            }
        }, [searchValue, data])
    return (
        <div>
            <input type="text" onChange={getSearch} />
                {searchData.map((data, index) => (
                <Card data={data} key={index}/>
            ))}
        </div>
    )
}
```
Da jeg både har brug for at fetche min information (som er server side), og bruge client side til mine hooks, var jeg nødt til at dele det op. Neden under kan det ses hvordan jeg hurtigt får fetchet alle aktiviteterne, og returneret det overstående brugte komponent. 

```jsx
    export default async function Search() {

    const activities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await activities.json()
    console.log("activities", data)

    
    return (
        <>
            <SearchFunction data={data}/>
            <Footer/>
        </>
    )
}
```
