import { Button } from "@/components/ui/button";
import Link from "next/link";
import Classes from "../Classes/Classes";
import Image from "next/image";
import { SpondInfo } from "../Spond/SpondInfo";

export default function HkkContent() {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 container">
          <h2 className="text-4xl font-bold mb-4 text-center py-8">
            Velkommen til Haugesund Karateklubb
          </h2>
          <div className="flex flex-col gap-4 px-8">
            <p className="text-lg text-gray-700">
              Vi er en inkluderende klubb som tilbyr variert kampsporttrening
              for både barn og voksne i våre flotte lokaler på Røldalvegen 6,
              Haugesund.
            </p>
            Her har vi to store treningsområder, perfekte for allsidig trening,
            med plass til alle nivåer. Hos oss kan du trene ulike disipliner som
            Kali, Dento Ryu karate, Goshin Jujutsu (selvforsvar), tradisjonell
            Shotokan karate og sportskarate under WKF-regelverket.
            <p className="text-lg text-gray-700">
              Vi har tilpassede ettermiddagstreninger i vår dojo for alle
              ferdighetsnivåer, og vi arrangerer nybegynnertreninger på skoler i
              distriktet. Vi er stolte av å være en klubb for alle, uavhengig av
              økonomi.
            </p>
            <p className="text-lg text-gray-700">
              Ingen skal holdes tilbake fra å trene hos oss på grunn av
              økonomiske årsaker. Vi tilbyr betalingsfritak ved behov – ta
              kontakt med Hans Erik for mer informasjon. Hos Haugesund
              Karateklubb er fellesskap og inkludering i fokus, og vi har alltid
              plass til flere medlemmer. Vi sees på trening!
            </p>
          </div>
        </section>
        <Classes />
        <SpondInfo />
        <section id="bli-medlem" className="container py-12">
          <h2 className="text-2xl font-bold mb-4">Bli medlem</h2>
          <p className="mb-4">
            Ønsker du å bli en del av vår karateklubb? Det er enkelt å melde seg
            inn:
          </p>

          <Button>
            <Link href="https://club.spond.com/landing/signup/haugesundkk/form/7F473E78E278414F9E6931F233F98141">
              Meld deg inn nå
            </Link>
          </Button>
        </section>
        <section id="sponsorer" className="py-12 container">
          <h2 className="text-2xl font-bold mb-4">Våre sponsorer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="https://www.ragnsells.com/globalassets/ragnsells.com/settings/ragn-sells-logo-web-2020.svg"
              alt="Sponsor 1"
              width={200}
              height={100}
              className="rounded"
            />
            <Image
              src="https://www.haugesund-sparebank.no/wp-content/themes/haugesund-sparebank.no/images/logo_haugesund-sparebank.svg"
              alt="Sponsor 2"
              width={200}
              height={100}
              className="rounded"
            />
          </div>
        </section>
      </main>
    </>
  );
}
