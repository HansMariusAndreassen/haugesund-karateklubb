export const SpondInfo = () => {
  return (
    <div className="mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">
        Vi bruker Spond som medlemssystem
      </h2>
      <p className="mb-4">
        Haugesund Karateklubb benytter <strong>Spond</strong> som medlemssystem
        for å gjøre det enklere å administrere medlemskap, fakturering og
        treningsoppdateringer. Gjennom Spond får du oversikt over betalinger,
        informasjon om treningstider, og oppdateringer direkte på mobilen.
      </p>
      <p className="mb-4">
        Det er enkelt å komme i gang med Spond! Du kan laste ned appen her:
      </p>
      <a
        href="https://spond.com/welcome"
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Last ned Spond
      </a>
    </div>
  );
};
