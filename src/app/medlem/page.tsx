import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MemberPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Bli Medlem i Haugesund Karateklubb
      </h1>
      <p className="py-4">
        Velkommen til Haugesund Karateklubb – en <strong>{`"Alle med"`}</strong>
        -klubb! Vi er en inkluderende klubb med treningstilbud for både barn og
        voksne i våre lokaler i Røldalvegen 6, Haugesund. Her har vi to store
        treningsområder på henholdsvis 180 m² og 100 m².
      </p>
      <p className="py-4">
        Klubben tilbyr variert kampsporttrening, inkludert Kali, Dento Ryu
        karate, Goshin Jujutsu (selvforsvar), tradisjonell Shotokan karate og
        sportskarate (WKF-regelverk). Treningene tilpasses alle
        ferdighetsnivåer, og vi tilbyr også nybegynnertreninger på utvalgte
        skoler i distriktet.
      </p>
      <p className="py-4">
        Vi benytter Spond som medlemssystem for fakturering, informasjon og
        oppdateringer om treningsaktiviteter.{" "}
        <Link
          href="https://club.spond.com/landing/signup/haugesundkk/form/7F473E78E278414F9E6931F233F98141"
          className="underline"
        >
          Last ned Spond
        </Link>{" "}
        for å holde oversikt over betalinger og treninger.
      </p>
      <h2 className="text-xl sm:text-2xl font-bold py-4">
        Medlemskap og Avgifter
      </h2>
      <p className="py-4">
        Medlemskontingenten er satt til 100 kr + omkostninger. Treningsavgiften
        er 3360 kr for 12 måneder + omkostninger, og det er mulighet for
        månedlige avdrag. Vi tilbyr 20 % rabatt for hvert ekstra familiemedlem.
        Treningsfri i juli og redusert tilbud i ferier.
      </p>
      <p className="py-4">
        Alle klubbtreninger er inkludert i treningsavgiften, og medlemsavgiften
        dekker innmelding i NIF, Kampsportforbundet, nødvendige forsikringer og
        gir stemmerett ved årsmøter.
      </p>
      <h2 className="text-xl sm:text-2xl font-bold py-4">
        Tilbud om Betalingsfritak
      </h2>
      <p className="py-4">
        Vi er en <strong>{`"Alle med"`}</strong>-klubb, og ingen skal holdes
        tilbake fra å trene hos oss på grunn av økonomiske årsaker. Det er mulig
        å søke om betalingsfritak. Ta kontakt med Hans Erik for mer informasjon.
      </p>
      <p className="py-4">
        Klubben tilbyr gratis utlån av utstyr, inkludert karatedrakter. Draktene
        må returneres ved avslutning av medlemskap. Manglende retur medfører et
        gebyr på 900 kr.
      </p>
      <h2 className="text-2xl font-bold py-4">Kontakt</h2>
      <p className="py-4">
        For spørsmål om medlemskap, ta kontakt med Hans Erik på telefon 920 98
        489 eller send e-post til
        <a
          href="mailto:hanserikhornell@gmail.com"
          className="text-blue-600 underline"
        >
          {" "}
          hanserikhornell@gmail.com
        </a>
        .
      </p>
      <p className="mt-6 text-lg font-bold">SEES PÅ TRENING!</p>
      <div className="flex justify-center py-8">
        <Button className="mt-4">
          <Link href="https://club.spond.com/landing/signup/haugesundkk/form/7F473E78E278414F9E6931F233F98141">
            Meld deg inn nå
          </Link>
        </Button>
      </div>
    </div>
  );
}
