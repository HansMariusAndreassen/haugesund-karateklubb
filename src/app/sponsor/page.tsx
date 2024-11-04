export default function SponsorPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Sponsorpakker hos Haugesund Karateklubb
      </h1>
      <p className="py-4">
        Vi i Haugesund Karateklubb er stolte av å tilby en unik mulighet til å
        støtte lokalsamfunnet gjennom vårt inkluderende sponsorprogram. Som
        sponsor vil du være med på å fremme helse, disiplin og fellesskap blant
        våre medlemmer i alle aldre. Vi er en klubb for alle, der samhold,
        trivsel og inkludering står i sentrum.
      </p>
      <p className="py-4">
        Vårt mål er å gjøre karate tilgjengelig for alle, uavhengig av bakgrunn
        eller økonomi. Derfor låner vi ut drakter og utstyr til våre medlemmer,
        slik at ingen skal føle seg utenfor. I tillegg arrangerer vi
        lavterskelstevner som gir alle, uavhengig av erfaring, muligheten til å
        delta og oppleve gleden ved å konkurrere i et trygt og støttende miljø.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold py-4">Våre Sponsorpakker</h2>

      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold">Ippon-pakken</h3>
        <p className="p-2">Kr 30 000 eller tilsvarende</p>
        <ul className="list-disc pl-6">
          <li>Logo på fasadeskilt til dojo</li>
          <li>Reklamebanner i dojo</li>
          <li>Logo på nettside med link</li>
          <li>Logo på sosiale medier</li>
          <li>Hovedsponsor tittel</li>
        </ul>
      </div>

      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold">Waza-ari-pakken</h3>
        <p className="p-2">Kr 10 000 eller tilsvarende</p>
        <ul className="list-disc pl-6">
          <li>Reklamebanner i dojo (mindre banner)</li>
          <li>Logo på nettside med link</li>
          <li>Nevnelse i sosiale medier</li>
        </ul>
      </div>

      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold">Yuko-pakken</h3>
        <p className="p-2">Kr 5 000 eller tilsvarende</p>
        <ul className="list-disc pl-6">
          <li>Reklamebanner i dojo</li>
          <li>Logo på nettside med link</li>
        </ul>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold py-4">
        Tilpasset Sponsoravtale
      </h2>
      <p className="py-4">
        Vi forstår at ulike bedrifter har ulike behov og ønsker, og vi er derfor
        åpne for å skreddersy en sponsorpakke som passer best for deg. Dette kan
        inkludere andre former for synlighet eller spesifikke ønsker for
        samarbeid.
      </p>

      <p className="py-4">
        Ved å støtte Haugesund Karateklubb er du med på å skape en trygg,
        inkluderende og positiv arena for barn, unge og voksne i lokalsamfunnet.
        Din støtte vil være avgjørende for at vi kan fortsette vårt arbeid med å
        gjøre karate tilgjengelig for alle, og sørge for at våre medlemmer
        opplever glede, fellesskap og mestring uavhengig av nivå eller bakgrunn.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold py-4">Kontakt oss</h2>
      <p className="py-4">
        For mer informasjon eller for å diskutere en tilpasset sponsoravtale,
        kontakt oss på e-post
        <a
          href="mailto:hanserikhornell@gmail.com"
          className="text-blue-600 underline"
        >
          {" "}
          hanserikhornell@gmail.com
        </a>
        .
      </p>

      <p className="mt-6 text-lg font-bold">Takk for din støtte!</p>
      <div className="flex justify-center py-8">
        <a
          href="/hkk_sponsorpakker.pdf"
          download
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Last ned sponsoravtale (PDF)
        </a>
      </div>
    </div>
  );
}
