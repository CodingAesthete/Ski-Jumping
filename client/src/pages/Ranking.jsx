import React from 'react';

export default function Ranking() {
  const top50MenSkiJumpers = [
    { name: "Stefan Kraft", country: "Austria", points: 1386 },
    { name: "Ryoyu Kobayashi", country: "Japan", points: 1181 },
    { name: "Andreas Wellinger", country: "Germany", points: 1102 },
    { name: "Jan Hoerl", country: "Austria", points: 741 },
    { name: "Karl Geiger", country: "Germany", points: 573 },
    { name: "Pius Paschke", country: "Germany", points: 572 },
    { name: "Marius Lindvik", country: "Norway", points: 560 },
    { name: "Michael Hayboeck", country: "Austria", points: 554 },
    { name: "Anze Lanisek", country: "Slovenia", points: 550 },
    { name: "Lovro Kos", country: "Slovenia", points: 545 },
    { name: "Manuel Fettner", country: "Austria", points: 508 },
    { name: "Daniel Tschofenig", country: "Austria", points: 450 },
    { name: "Peter Prevc", country: "Slovenia", points: 410 },
    { name: "Johann Forfang", country: "Norway", points: 402 },
    { name: "Gregor Deschwanden", country: "Switzerland", points: 401 },
    { name: "Stephan Leyhe", country: "Germany", points: 349 },
    { name: "Philipp Raimund", country: "Germany", points: 333 },
    { name: "Kristoffer Sundal", country: "Norway", points: 319 },
    { name: "Domen Prevc", country: "Slovenia", points: 296 },
    { name: "Ren Nikaido", country: "Japan", points: 292 },
    { name: "Timi Zajc", country: "Slovenia", points: 273 },
    { name: "Halvor E. Granerud", country: "Norway", points: 244 },
    { name: "Aleks Zniszczol", country: "Poland", points: 224 },
    { name: "Dawid Kubacki", country: "Poland", points: 183 },
    { name: "Piotr Zyla", country: "Poland", points: 177 },
    { name: "Clemens Aigner", country: "Austria", points: 165 },
    { name: "Kamil Stoch", country: "Poland", points: 135 },
    { name: "Alex Insam", country: "Italy", points: 120 },
    { name: "Giovanni Bresadola", country: "Italy", points: 100 },
    { name: "Daniel Huber", country: "Austria", points: 96 },
    { name: "Junshiro Kobayashi", country: "Japan", points: 91 },
    { name: "Roman Koudelka", country: "Czech Republic", points: 90 },
    { name: "Daniel Andre Tande", country: "Norway", points: 88 },
    { name: "Benjamin Oestvold", country: "Norway", points: 85 },
    { name: "Antti Aalto", country: "Finland", points: 79 },
    { name: "Vladimir Zografski", country: "Bulgaria", points: 73 },
    { name: "Niko Kytoesaho", country: "Finland", points: 68 },
    { name: "Killian Peier", country: "Switzerland", points: 68 },
    { name: "Martin Hamann", country: "Germany", points: 59 },
    { name: "Artti Aigro", country: "Estonia", points: 52 },
    { name: "Felix Hoffmann", country: "Germany", points: 45 },
    { name: "Sindre Jorgensen", country: "Norway", points: 42 },
    { name: "Pawel Wasek", country: "Poland", points: 42 },
    { name: "Stephan Embacher", country: "Austria", points: 40 },
    { name: "Remo Imhof", country: "Switzerland", points: 30 },
    { name: "Simon Ammann", country: "Switzerland", points: 27 },
    { name: "Robin Pedersen", country: "Norway", points: 23 },
    { name: "Tate Frantz", country: "USA", points: 22 },
    { name: "Zak Mogel", country: "Slovenia", points: 22 },
    { name: "Erik Belshaw", country: "USA", points: 18 }
  ];

  const top50WomenSkiJumpers = [
    { name: "Nika Prevc", country: "Slovenia", points: 949 },
    { name: "Yuki Ito", country: "Japan", points: 771 },
    { name: "Eva Pinkelnig", country: "Austria", points: 671 },
    { name: "Alexandria Loutitt", country: "Canada", points: 625 },
    { name: "Josephine Pagnier", country: "France", points: 578 },
    { name: "Nika Kriznar", country: "Slovenia", points: 543 },
    { name: "Jacqueline Berger", country: "Austria", points: 513 },
    { name: "Sara Takanashi", country: "Japan", points: 513 },
    { name: "Jenny Rautionaho", country: "Finland", points: 454 },
    { name: "Abigail Strate", country: "Canada", points: 409 },
    { name: "Eirin M. Kvandal", country: "Norway", points: 403 },
    { name: "Katharina Schmid", country: "Germany", points: 391 },
    { name: "Marita Kramer", country: "Austria", points: 365 },
    { name: "Ema Klinec", country: "Slovenia", points: 330 },
    { name: "Silje Opseth", country: "Norway", points: 317 },
    { name: "Lisa Eder", country: "Austria", points: 307 },
    { name: "Thea M. Bjoersesth", country: "Norway", points: 296 },
    { name: "Selina Freitag", country: "Germany", points: 236 },
    { name: "Julia Muehlbacher", country: "Austria", points: 235 },
    { name: "Anna Rupprecht", country: "Germany", points: 189 },
    { name: "Julia Kykkaenen", country: "Finland", points: 166 },
    { name: "Luisa Goerlich", country: "Germany", points: 163 },
    { name: "Chiara Kreuzer", country: "Austria", points: 152 },
    { name: "Katra Komar", country: "Slovenia", points: 147 },
    { name: "Yuka Seto", country: "Japan", points: 133 },
    { name: "Annika Sieff", country: "Italy", points: 131 },
    { name: "Lina Indrackova", country: "Czech Republic", points: 124 },
    { name: "Juliane Seyfarth", country: "Germany", points: 93 },
    { name: "Anna Odine Stroem", country: "Norway", points: 80 },
    { name: "Lara Malsiner", country: "Italy", points: 60 },
    { name: "Nozomi Maruyama", country: "Japan", points: 59 },
    { name: "Ajda Kosnjek", country: "Slovenia", points: 48 },
    { name: "Taja Bodlaj", country: "Slovenia", points: 35 },
    { name: "Agnes Reisch", country: "Germany", points: 34 },
    { name: "Anezka Indrackova", country: "Czech Republic", points: 31 },
    { name: "Nicole Maurer", country: "Canada", points: 28 },
    { name: "Daniela Haralambie", country: "Romania", points: 27 },
    { name: "Annika Belshaw", country: "USA", points: 27 },
    { name: "Tina Erzar", country: "Slovenia", points: 23 },
    { name: "Jessica Malsiner", country: "Italy", points: 21 },
    { name: "Pauline Hessler", country: "Germany", points: 21 },
    { name: "Emma Chervet", country: "France", points: 18 },
    { name: "Haruka Iwasa", country: "Japan", points: 15 },
    { name: "Qi Liu", country: "China", points: 11 },
    { name: "Ingvild Midtskogen", country: "Norway", points: 9 },
    { name: "Paige Jones", country: "USA", points: 9 },
    { name: "Anna Twardosz", country: "Poland", points: 6 },
    { name: "Ringo Miyajima", country: "Japan", points: 5 },
    { name: "Alvine Holz", country: "Germany", points: 4 },
    { name: "Klara Ulrichova", country: "Czech Republic", points: 3 }
  ];

  const top50MenSkiJumpersCont = [
    { name: "Robin Pedersen", country: "Norway", points: 800 },
    { name: "Maximilian Ortner", country: "Austria", points: 762 },
    { name: "Jonas Schuster", country: "Austria", points: 747 },
    { name: "Clemens Leitner", country: "Austria", points: 704 },
    { name: "Maksim Bartolj", country: "Slovenia", points: 601 },
    { name: "Francisco Moerth", country: "Austria", points: 583 },
    { name: "Constantin Schmid", country: "Germany", points: 577 },
    { name: "Felix Hoffmann", country: "Germany", points: 526 },
    { name: "Zak Mogel", country: "Slovenia", points: 491 },
    { name: "Fredrik Villumstad", country: "Norway", points: 458 },
    { name: "Daniel Huber", country: "Austria", points: 455 },
    { name: "Luca Roth", country: "Germany", points: 446 },
    { name: "Sindre Joergensen", country: "Norway", points: 404 },
    { name: "Robert Johansson", country: "Norway", points: 364 },
    { name: "Benjamin Oestvold", country: "Norway", points: 333 },
    { name: "Martin Hamann", country: "Germany", points: 325 },
    { name: "Anders Haare", country: "Norway", points: 316 },
    { name: "Stephan Embacher", country: "Austria", points: 278 },
    { name: "Klemens Muranka", country: "Poland", points: 257 },
    { name: "Clemens Aigner", country: "Austria", points: 252 },
    { name: "Timon Kahofe", country: "Austria", points: 249 },
    { name: "Markus Mueller", country: "Austria", points: 233 },
    { name: "Jakub Wolny", country: "Poland", points: 215 },
    { name: "Maciej Kot", country: "Poland", points: 209 },
    { name: "Aleks Zniszczol", country: "Poland", points: 207 },
    { name: "Paal H. Bjoertomt", country: "Norway", points: 196 },
    { name: "Ziga Jelar", country: "Slovenia", points: 186 },
    { name: "Ulrich Wohlgenannt", country: "Austria", points: 171 },
    { name: "Finn Braun", country: "Germany", points: 165 },
    { name: "Iver Olaussen", country: "Norway", points: 151 },
    { name: "Valentin Foubert", country: "France", points: 133 },
    { name: "Rok Masle", country: "Slovenia", points: 126 },
    { name: "Adrian Tittel", country: "Germany", points: 112 },
    { name: "Andrzej Stekala", country: "Poland", points: 106 },
    { name: "Matija Vidic", country: "Slovenia", points: 95 },
    { name: "Jan Bombek", country: "Slovenia", points: 90 },
    { name: "Adrian Gundersrud", country: "Norway", points: 88 },
    { name: "Sandro Hauswirth", country: "Switzerland", points: 85 },
    { name: "Mark Hafnar", country: "Slovenia", points: 82 },
    { name: "Kacper Juroszek", country: "Poland", points: 70 },
    { name: "Noriaki Kasai", country: "Japan", points: 63 },
    { name: "Johannes Poelz", country: "Austria", points: 62 },
    { name: "Keiichi Sato", country: "Japan", points: 58 },
    { name: "Eric Hoyer", country: "Germany", points: 57 },
    { name: "Stefan Rainer", country: "Austria", points: 49 },
    { name: "Yanick Wasser", country: "Switzerland", points: 47 },
    { name: "Markus Eisenbichler", country: "Germany", points: 46 },
    { name: "Jernej Presecnik", country: "Slovenia", points: 44 },
    { name: "Sakutaro Kobayashi", country: "Japan", points: 43 },
    { name: "Jannik Faisst", country: "Germany", points: 40 },
  ];

  const top50WomenSkiJumpersCont = [
    { name: "Tina Erzar", country: "Slovenia", points: 454 },
    { name: "Kjersti Graesli", country: "Norway", points: 436 },
    { name: "Ingvild Midskogen", country: "Norway", points: 420 },
    { name: "Hannah Wiegele", country: "Austria", points: 412 },
    { name: "Heidi Traaserud", country: "Norway", points: 400 },
    { name: "Katharina Ellmauer", country: "Austria", points: 273 },
    { name: "Anezka Indrackova", country: "Czech Republic", points: 265 },
    { name: "Pia Lilian Kuebler", country: "Germany", points: 236 },
    { name: "Agnes Reisch", country: "Germany", points: 216 },
    { name: "Nicole Konderla", country: "Poland", points: 216 },
    { name: "Martina Ambrosi", country: "Italy", points: 215 },
    { name: "Veronika Jencova", country: "Czech Republic", points: 212 },
    { name: "Klara Ulrichova", country: "Czech Republic", points: 207 },
    { name: "Ursa Vidmar", country: "Slovenia", points: 191 },
    { name: "Mathilde A.Selbekk", country: "Norway", points: 185 },
    { name: "Nora Midtsundstad", country: "Norway", points: 180 },
    { name: "Anna Scharfenberg", country: "Germany", points: 178 },
    { name: "Alvine Holz", country: "Germany", points: 163 },
    { name: "Jerica Jesenko", country: "Slovenia", points: 155 },
    { name: "Lina Indrackova", country: "Czech Republic", points: 116 },
    { name: "Ziva Andric", country: "Slovenia", points: 102 },
    { name: "Juliane Seyfarth", country: "Germany", points: 100 },
    { name: "Wiktoria Przybyla", country: "Poland", points: 98 },
    { name: "Paige Jones", country: "USA", points: 90 },
    { name: "Zhanna Hlukhova", country: "Ukraine", points: 86 },
    { name: "Paulina Cieslar", country: "Poland", points: 81 },
    { name: "Asia Marcato", country: "Italy", points: 78 },
    { name: "Shiyu Zhou", country: "China", points: 76 },
    { name: "Yangning Weng", country: "China", points: 73 },
    { name: "Sina Arnet", country: "Switzerland", points: 68 },
    { name: "Sofia Mattila", country: "Finland", points: 66 },
    { name: "Rea Kindlimann", country: "Switzerland", points: 66 },
    { name: "Lilou Zepchi", country: "France", points: 64 },
    { name: "Jenny Forsberg", country: "Sweden", points: 59 },
    { name: "Tetiana Pylypchuk", country: "Ukraine", points: 58 },
    { name: "Estella Hassrick", country: "USA", points: 50 },
    { name: "Frida Berger", country: "Norway", points: 50 },
    { name: "Ajda Kosnjek", country: "Slovenia", points: 47 },
    { name: "Nika Krasovic", country: "Slovenia", points: 44 },
    { name: "Anna Twardosz", country: "Poland", points: 42 },
    { name: "Kim Amy Duschek", country: "Germany", points: 41 },
    { name: "Martina Zanitzer", country: "Italy", points: 40 },
    { name: "Katarina Pirnovar", country: "Slovenia", points: 35 },
    { name: "Samantha Macuga", country: "USA", points: 35 },
    { name: "Megi Lou Schmidt", country: "Germany", points: 35 },
    { name: "Meghann Wadsak", country: "Austria", points: 31 },
    { name: "Cara Larson", country: "USA", points: 31 },
    { name: "Maike Tyralla", country: "Germany", points: 31 },
    { name: "Sara Tajner", country: "Poland", points: 30 },
    { name: "Tinkara Komar", country: "Slovenia", points: 24 }
  ];


  const countryCodes = {
    Austria: 'at',
    Japan: 'jp',
    Germany: 'de',
    Norway: 'no',
    Slovenia: 'si',
    Switzerland: 'ch',
    Canada: 'ca',
    France: 'fr',
    Finland: 'fi',
    Poland: 'pl',
    Bulgaria: 'bg',
    Italy: 'it',
    USA: 'us',
    China: 'cn',
    Romania: 'ro',
    Estonia: 'ee',
    "Czech Republic": 'cz',
    Ukraine: 'ua',
    Sweden: 'se'
  };

  return (
    <div className='mx-auto my-6 rounded-md w-full'>
      <div className='bg-purple-300 bg-opacity-90 rounded-lg w-5/12 mx-auto mb-6'>
        <h1 className='text-center py-2 my-2 px-2 sm:px-0 text-lg sm:text-2xl 2xl:text-4xl font-bold'>World Cup 2024</h1>
      </div>
      <div className='flex flex-col sm:flex-col gap-4 sm:gap-8 lg:gap-0 lg:flex-row justify-between w-full'>
        <div className='bg-gray-200 bg-opacity-90 p-4 rounded-md sm:w-3/4 lg:w-2/5 sm:mx-auto lg:ml-20'>
          <h2 className='text-center mb-2 text-lg sm:text-xl 2xl:text-3xl font-bold italic'>Men's Ranking</h2>
          <table className='w-full fade-in'>
            <thead className='text-justify'>
              <tr className='text-blue-800 2xl:text-2xl'>
                <th className='text-center pr-1'>Rank</th>
                <th className='text-center'>Name</th>
                <th className='pr-2'>Country</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className='text-justify 2xl:mt-10'>
              {top50MenSkiJumpers.map((athlete, index) => (
                <tr key={index} className=' text-md sm:text-lg 2xl:text-2xl 2xl:leading-9 font-semibold font-mono ' style={{ lineHeight: '1.77' }} >
                  <td className='text-center'>{index + 1}.</td>
                  <td>{athlete.name}</td>
                  <td className='pl-4'><img src={`https://flagcdn.com/24x18/${countryCodes[athlete.country]}.png`} alt={athlete.country} /></td>
                  <td>{athlete.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='bg-gray-200 bg-opacity-90 p-4 rounded-md lg:w-5/12 sm:w-3/4 sm:mx-auto lg:mr-20'>
          <h2 className='text-center mb-2 text-xl font-bold italic 2xl:text-3xl'>Women's Ranking</h2>
          <table className='w-full fade-in'>
            <thead className='text-justify'>
              <tr className='text-blue-800 2xl:text-2xl'>
                <th className='text-center pr-1'>Rank</th>
                <th className='text-center'>Name</th>
                <th className='pr-2'>Country</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className='text-justify'>
              {top50WomenSkiJumpers.map((athlete, index) => (
                <tr key={index} className='text-md sm:text-lg 2xl:text-2xl 2xl:leading-9 font-semibold font-mono ' style={{ lineHeight: '1.77' }} >
                  <td className='text-center'>{index + 1}.</td>
                  <td>{athlete.name}</td>
                  <td className='pl-4'><img src={`https://flagcdn.com/24x18/${countryCodes[athlete.country]}.png`} alt={athlete.country} /></td>
                  <td>{athlete.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='bg-purple-300 bg-opacity-90 rounded-lg w-7/12 sm:w-5/12 mx-auto mb-6'>
        <h1 className='text-center py-2 my-2 text-lg sm:text-2xl font-bold mt-16 2xl:text-4xl'>Continental Cup 2024</h1>
      </div>
      <div className='flex flex-col gap-4 sm:flex-col sm:gap-8 lg:gap-0 lg:flex-row justify-between w-full'>
        <div className='bg-gray-200 bg-opacity-90 p-4 rounded-md sm:w-3/4 lg:w-2/5 sm:mx-auto lg:ml-20'>
          <h2 className='text-center mb-2 text-xl 2xl:text-3xl font-bold italic'>Men's Ranking</h2>
          <table className='w-full fade-in'>
            <thead className='text-justify'>
              <tr className='text-blue-800 2xl:text-2xl'>
                <th className='text-center pr-1'>Rank</th>
                <th className='text-center'>Name</th>
                <th className='pr-2'>Country</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className='text-justify'>
              {top50MenSkiJumpersCont.map((athlete, index) => (
                <tr key={index} className='text-md sm:text-lg 2xl:text-2xl 2xl:leading-9 font-semibold font-mono ' style={{ lineHeight: '1.77' }} >
                  <td className='text-center'>{index + 1}.</td>
                  <td>{athlete.name}</td>
                  <td className='pl-4'><img src={`https://flagcdn.com/24x18/${countryCodes[athlete.country]}.png`} alt={athlete.country} /></td>
                  <td>{athlete.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='bg-gray-200 bg-opacity-90 p-4 rounded-md lg:w-5/12 sm:w-3/4 sm:mx-auto lg:mr-20'>
          <h2 className='text-center mb-2 text-xl font-bold italic 2xl:text-3xl'>Women's Ranking</h2>
          <table className='w-full fade-in'>
            <thead className='text-justify'>
              <tr className='text-blue-800 2xl:text-2xl'>
                <th className='text-center pr-1'>Rank</th>
                <th className='text-center'>Name</th>
                <th className='pr-2'>Country</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className='text-justify'>
              {top50WomenSkiJumpersCont.map((athlete, index) => (
                <tr key={index} className='text-md sm:text-lg 2xl:text-2xl 2xl:leading-9 font-semibold font-mono ' style={{ lineHeight: '1.77' }} >
                  <td className='text-center'>{index + 1}.</td>
                  <td>{athlete.name}</td>
                  <td className='pl-4'><img src={`https://flagcdn.com/24x18/${countryCodes[athlete.country]}.png`} alt={athlete.country} /></td>
                  <td>{athlete.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}