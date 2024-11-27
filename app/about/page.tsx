const About = () => {
 return (
  <div className="flex items-center justify-center h-full p-4 min-h-screen">
   <div className="rounded-lg h-full text-blue-950 p-4 pt-16 text-xl">
    <h1 className="text-5xl font-bold mb-6 text-center">
     O Projekcie
    </h1>
    <p className="mb-4 text-2xl">
     Strona powstała w ramach projektu realizowanego przez studentów
     Zarządzania AHE w Łodzi. Główne cele projektu:
    </p>
    <ol className="list-decimal pl-5 space-y-4">
     <li>
      <strong>Świadomość problemów:</strong> Zidentyfikowanie i
      uświadomienie menadżerom najczęstszych problemów związanych z
      społeczeństwem informacyjnym poprzez przeprowadzenie ankiety.
      Celem jest zrozumienie głębokości i skali tych wyzwań.
     </li>
     <li>
      <strong>Propozycje rozwiązań:</strong> Opracowanie i
      udostępnienie na stronie internetowej konkretnych, praktycznych
      rozwiązań dla problemów menadżerów, mających na celu ułatwienie
      im radzenia sobie z tymi wyzwaniami.
     </li>
     <li>
      <strong>Implementacja:</strong> Wdrożenie rozwiązań oraz
      publikacja pracy teoretycznej na stronie internetowej w formie
      e-booka w celu umożliwienia menadżerom dostępu do informacji i
      narzędzi pomocnych w zarządzaniu w społeczeństwie informacyjnym.
     </li>
    </ol>
   </div>
  </div>
 );
};

export default About;
