import SchoolSchedule from "./schoolSchedule";

export default function SchoolSchedulePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Skole- og distriktskarate
        </h1>
        <div className="text-gray-600 max-w-3xl">
          <p className="pb-4">
            Vi tilbyr skolekarate med egne treningstider som en viktig del av
            vårt arbeid med barn og unge.
          </p>
          <p>
            Gjennom samarbeid med lokale skoler når vi ut til flere og kan tilby
            et variert og tilgjengelig treningstilbud i deres nærmiljø. Dette
            bidrar til at flere kan oppleve gleden og mestringen karate gir.
            Under finner du en oversikt over alle deltakende skoler og deres
            treningstider.
          </p>
        </div>
      </div>
      <SchoolSchedule />
    </div>
  );
}
