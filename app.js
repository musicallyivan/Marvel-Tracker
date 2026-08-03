const poster = (path) => path.startsWith('http') ? path : `https://image.tmdb.org/t/p/w500${path.startsWith('/') ? path : '/' + path}`;
const defaultTrailer = '399Ez7WHK5s';

// MCU Database URL Endpoint
const MCU_DATABASE_API_URL = 'https://raw.githubusercontent.com/musicallyivan/mcu-database/main/mcu-dataset.json';
const MCU_USER_PROFILES_BASE_URL = 'https://raw.githubusercontent.com/musicallyivan/mcu-database/main/users/';

// Default Fallback Entries Dataset
let entries = [
  {
    chronoIndex: 1,
    title: 'Capitán América: El primer vengador',
    kind: 'Película',
    type: 'movie',
    year: '1943–1945',
    releaseDate: '2011-07-22',
    phase: 'Fase 1',
    saga: 'infinito',
    provider: 'disney',
    tags: ['guerra', 'vengadores', 'doomsday'],
    poster: '/82ucHZ4ioVGiweT1XMl1mUZaodq.jpg',
    trailer: 'JerVrbLldw8',
    durationMinutes: 124,
    synopsis: 'Tras ser rechazado por el ejército, Steve Rogers se somete a un experimento con el suero del supersoldado que lo transforma en el Primer Vengador.'
  },
  {
    chronoIndex: 2,
    title: 'Agent Carter · T1–T2',
    kind: 'Serie',
    type: 'series',
    year: '1946–1947',
    releaseDate: '2015-01-06',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero', 'espionaje'],
    poster: '/scZsg0rfAyH8ADphzrdhgo5jAXd.jpg',
    trailer: 'V1my61wJ8fU',
    durationMinutes: 480,
    synopsis: 'Peggy Carter equilibra su trabajo en la Reserva Científica Estratégica con misiones encubiertas para limpiar el nombre de Howard Stark.'
  },
  {
    chronoIndex: 3,
    title: 'Capitana Marvel',
    kind: 'Película',
    type: 'movie',
    year: '1995',
    releaseDate: '2019-03-08',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    trailer: 'Z1BCujX3pw8',
    durationMinutes: 124,
    synopsis: 'Carol Danvers se convierte en una de las heroínas más poderosas del universo mientras la Tierra se ve inmersa en un conflicto intergaláctico.'
  },
  {
    chronoIndex: 4,
    title: 'Iron Man',
    kind: 'Película',
    type: 'movie',
    year: '2010',
    releaseDate: '2008-05-02',
    phase: 'Fase 1',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero', 'vengadores'],
    poster: '/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
    trailer: '8ugaeA-nMTc',
    durationMinutes: 126,
    synopsis: 'El magnate industrial y genio Tony Stark construye una armadura blindada tras ser capturado por terroristas, dando origen a Iron Man.'
  },
  {
    chronoIndex: 5,
    title: 'Iron Man 2',
    kind: 'Película',
    type: 'movie',
    year: '2011',
    releaseDate: '2010-05-07',
    phase: 'Fase 1',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg',
    trailer: 'BoohRoVA9WQ',
    durationMinutes: 124,
    synopsis: 'Con el mundo consciente de su identidad, Tony Stark enfrenta presiones políticas y a un vengativo científico ruso.'
  },
  {
    chronoIndex: 6,
    title: 'El increíble Hulk',
    kind: 'Película',
    type: 'movie',
    year: '2011',
    releaseDate: '2008-06-13',
    phase: 'Fase 1',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg',
    trailer: 'xbqNb2PFKKA',
    durationMinutes: 112,
    synopsis: 'Bruce Banner busca desesperadamente un antídoto contra la radiación gamma que desata a la criatura dentro de él.'
  },
  {
    chronoIndex: 7,
    title: 'Thor',
    kind: 'Película',
    type: 'movie',
    year: '2011',
    releaseDate: '2011-05-06',
    phase: 'Fase 1',
    saga: 'infinito',
    provider: 'disney',
    tags: ['cosmico', 'mistico', 'loki'],
    poster: '/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
    trailer: 'JOddp-nlNvQ',
    durationMinutes: 115,
    synopsis: 'El impulsivo Dios del Trueno es despojado de sus poderes y desterrado a la Tierra por su padre Odín.'
  },
  {
    chronoIndex: 8,
    title: 'Los Vengadores',
    kind: 'Película',
    type: 'movie',
    year: '2012',
    releaseDate: '2012-05-04',
    phase: 'Fase 1',
    saga: 'infinito',
    provider: 'disney',
    tags: ['vengadores', 'loki', 'doomsday'],
    poster: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    trailer: 'eOrNdBpGMv8',
    durationMinutes: 143,
    synopsis: 'Nick Fury reúne a Iron Man, Capitán América, Thor, Hulk, Viuda Negra y Ojo de Halcón para combatir a Loki.'
  },
  {
    chronoIndex: 9,
    title: 'Iron Man 3',
    kind: 'Película',
    type: 'movie',
    year: '2012',
    releaseDate: '2013-05-03',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
    trailer: 'YLorLVa95Xo',
    durationMinutes: 130,
    synopsis: 'Afectado por los eventos de Nueva York, Tony Stark se enfrenta a un temible enemigo conocido como El Mandarín.'
  },
  {
    chronoIndex: 10,
    title: 'Thor: El mundo oscuro',
    kind: 'Película',
    type: 'movie',
    year: '2013',
    releaseDate: '2013-11-08',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['cosmico', 'loki'],
    poster: '/gPAmH41VpK5UPaNhAiNJePzrL8z.jpg',
    trailer: 'npvJ9FTgZbM',
    durationMinutes: 112,
    synopsis: 'Thor lucha por proteger los Nueve Reinos frente a Malekith y los Elfos Oscuros que buscan apoderarse del Éter.'
  },
  {
    chronoIndex: 11,
    title: 'Agents of S.H.I.E.L.D. · T1',
    kind: 'Serie',
    type: 'series',
    year: '2013–2014',
    releaseDate: '2013-09-24',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/gHUCCMy1vvj58tzE3dZqeC9W6ul.jpg',
    trailer: 'y2ZSpB0p2nI',
    durationMinutes: 945,
    synopsis: 'El agente Phil Coulson encabeza un equipo especial de analistas y agentes para investigar amenazas sobrehumanas.'
  },
  {
    chronoIndex: 12,
    title: 'Capitán América: El soldado de invierno',
    kind: 'Película',
    type: 'movie',
    year: '2014',
    releaseDate: '2014-04-04',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    trailer: '7SlILk2WMTI',
    durationMinutes: 136,
    synopsis: 'Steve Rogers y Natasha Romanoff destapan una conspiración dentro de S.H.I.E.L.D. y se cruzan con el Soldado de Invierno.'
  },
  {
    chronoIndex: 13,
    title: 'Guardianes de la Galaxia',
    kind: 'Película',
    type: 'movie',
    year: '2014',
    releaseDate: '2014-08-01',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg',
    trailer: 'd96cjJhvlMA',
    durationMinutes: 121,
    synopsis: 'Un extravagante grupo de renegados espaciales se alía para evitar que un poderoso orbe caiga en manos de Ronan.'
  },
  {
    chronoIndex: 14,
    title: 'Guardianes de la Galaxia Vol. 2',
    kind: 'Película',
    type: 'movie',
    year: '2014',
    releaseDate: '2017-05-05',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
    trailer: 'dW1BIid8Osg',
    durationMinutes: 136,
    synopsis: 'Los Guardianes recorren el cosmos mientras ayudan a Peter Quill a descubrir los secretos del origen de su verdadero padre.'
  },
  {
    chronoIndex: 15,
    title: 'Yo soy Groot · T1',
    kind: 'Serie',
    type: 'series',
    year: '2014',
    releaseDate: '2022-08-10',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/s63fF1F35aNqSgR3r4A1p21s11F.jpg',
    trailer: '1GncYjXA9z4',
    durationMinutes: 20,
    synopsis: 'Aventuras cortas y divertidas de Baby Groot explorando el universo y causando caos entre las estrellas.'
  },
  {
    chronoIndex: 16,
    title: 'Daredevil · T1',
    kind: 'Serie',
    type: 'series',
    year: '2015',
    releaseDate: '2015-04-10',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/qPgsW0TYO27wIWUO8Z4H7EMC5hG.jpg',
    trailer: 'jAy6NJ_D5vU',
    durationMinutes: 700,
    synopsis: 'El abogado ciego Matt Murdock utiliza sus sentidos aumentados para luchar contra el crimen en Hell\'s Kitchen como Daredevil.'
  },
  {
    chronoIndex: 17,
    title: 'Vengadores: La era de Ultrón',
    kind: 'Película',
    type: 'movie',
    year: '2015',
    releaseDate: '2015-05-01',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['vengadores'],
    poster: '/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg',
    trailer: 'tmeOjFno6Do',
    durationMinutes: 141,
    synopsis: 'Los Vengadores deben reunirse para detener a Ultrón, una inteligencia artificial obsesionada con la extinción humana.'
  },
  {
    chronoIndex: 18,
    title: 'Ant-Man',
    kind: 'Película',
    type: 'movie',
    year: '2015',
    releaseDate: '2015-07-17',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/zwuE28gSXlLFLgueqMe9b7xKy1f.jpg',
    trailer: 'pWdKf3MneyI',
    durationMinutes: 117,
    synopsis: 'Dotado con un traje que le permite reducir su tamaño y multiplicar su fuerza, Scott Lang debe llevar a cabo un audaz atraco.'
  },
  {
    chronoIndex: 19,
    title: 'Jessica Jones · T1',
    kind: 'Serie',
    type: 'series',
    year: '2015',
    releaseDate: '2015-11-20',
    phase: 'Fase 2',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/l7hY8Uef0vZn3p1m3MZVGiR40sV.jpg',
    trailer: 'nWHUJUqY4iA',
    durationMinutes: 650,
    synopsis: 'Jessica Jones intenta reconstruir su vida personal como detective privado tras el trauma causado por Kilgrave.'
  },
  {
    chronoIndex: 20,
    title: 'Capitán América: Civil War',
    kind: 'Película',
    type: 'movie',
    year: '2016',
    releaseDate: '2016-05-06',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['vengadores', 'callejero', 'spidey', 'doomsday'],
    poster: '/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg',
    trailer: 'uVdV-lxRPFo',
    durationMinutes: 147,
    synopsis: 'La supervisión gubernamental de los Vengadores provoca una brecha ideológica irreconciliable entre el Capitán América y Iron Man.'
  },
  {
    chronoIndex: 21,
    title: 'Viuda Negra',
    kind: 'Película',
    type: 'movie',
    year: '2016',
    releaseDate: '2021-07-09',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/uR3ex7LZrX3lbIMNb87WBXzCWM.jpg',
    trailer: 'ybji16u608U',
    durationMinutes: 134,
    synopsis: 'Natasha Romanoff lidia con las conspiraciones ligadas a su pasado en la Habitación Roja inmediatamente después de Civil War.'
  },
  {
    chronoIndex: 22,
    title: 'Black Panther',
    kind: 'Película',
    type: 'movie',
    year: '2016',
    releaseDate: '2018-02-16',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    trailer: 'xjDjIWPwcPU',
    durationMinutes: 134,
    synopsis: 'T\'Challa regresa a Wakanda para reclamar su lugar como rey, pero descubre que su soberanía es desafiada por Killmonger.'
  },
  {
    chronoIndex: 23,
    title: 'Spider-Man: Homecoming',
    kind: 'Película',
    type: 'movie',
    year: '2016',
    releaseDate: '2017-07-07',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero', 'spidey'],
    poster: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    trailer: 'n9DwoQ7HWvI',
    durationMinutes: 133,
    synopsis: 'Peter Parker regresa a su rutina bajo la tutela de Tony Stark mientras se enfrenta a la amenaza del Buitre.'
  },
  {
    chronoIndex: 24,
    title: 'Doctor Strange',
    kind: 'Película',
    type: 'movie',
    year: '2016-2017',
    releaseDate: '2016-11-04',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['mistico', 'doomsday'],
    poster: '/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg',
    trailer: 'Lt-U_t2pUHI',
    durationMinutes: 115,
    synopsis: 'Un accidente acaba con la carrera del neurocirujano Stephen Strange, quien descubre el místico mundo de Kamar-Taj.'
  },
  {
    chronoIndex: 25,
    title: 'Thor: Ragnarok',
    kind: 'Película',
    type: 'movie',
    year: '2017',
    releaseDate: '2017-11-03',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['cosmico', 'loki'],
    poster: '/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    trailer: 'ue80QwXMRHg',
    durationMinutes: 130,
    synopsis: 'Atrapado en el planeta Sakaar sin su martillo, Thor debe competir en la arena para frenar la profecía del Ragnarok.'
  },
  {
    chronoIndex: 26,
    title: 'Ant-Man y la Avispa',
    kind: 'Película',
    type: 'movie',
    year: '2018',
    releaseDate: '2018-07-06',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/bvYI6i9lQ3bsup9PgnMF3YYr8ZR.jpg',
    trailer: '8_rTIAOohas',
    durationMinutes: 118,
    synopsis: 'Scott Lang intenta equilibrar su vida familiar y sus responsabilidades cuando Hank Pym y Hope le encomiendan una nueva misión.'
  },
  {
    chronoIndex: 27,
    title: 'Vengadores: Infinity War',
    kind: 'Película',
    type: 'movie',
    year: '2018',
    releaseDate: '2018-04-27',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['vengadores', 'cosmico', 'loki', 'spidey', 'doomsday'],
    poster: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    trailer: '6ZfuNTqbHE8',
    durationMinutes: 149,
    synopsis: 'Thanos inicia la recolección de las seis Gemas del Infinito para borrar a la mitad de la vida en el universo.'
  },
  {
    chronoIndex: 28,
    title: 'Vengadores: Endgame',
    kind: 'Película',
    type: 'movie',
    year: '2018–2023',
    releaseDate: '2019-04-26',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['vengadores', 'cosmico', 'loki', 'spidey', 'doomsday'],
    poster: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    trailer: 'TcMBFSGVi1c',
    durationMinutes: 181,
    synopsis: 'Cinco años después del chasquido, los héroes restantes organizan un atraco temporal a través del espacio y el tiempo.'
  },
  {
    chronoIndex: 29,
    title: 'Loki · T1',
    kind: 'Serie',
    type: 'series',
    year: '2023 / fuera del tiempo',
    releaseDate: '2021-06-09',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso', 'mistico', 'loki', 'doomsday'],
    poster: '/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    trailer: 'nW948Va-l10',
    durationMinutes: 300,
    synopsis: 'Loki es capturado por la Autoridad de Variación Temporal tras alterar la Sagrada Línea Temporal en 2012.'
  },
  {
    chronoIndex: 30,
    title: 'What If...? · T1',
    kind: 'Serie',
    type: 'series',
    year: 'multiverso',
    releaseDate: '2021-08-11',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso'],
    poster: '/zaq4LwJjZ6iLLLZPj0aVvF5fDrY.jpg',
    trailer: 'x9D0uUKJ5KI',
    durationMinutes: 270,
    synopsis: 'El Vigilante observa realidades alternativas donde decisiones clave cambiaron por completo el destino del MCU.'
  },
  {
    chronoIndex: 31,
    title: 'WandaVision',
    kind: 'Serie',
    type: 'series',
    year: '2023',
    releaseDate: '2021-01-15',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['mistico', 'doomsday'],
    poster: '/frobUz2X5Pc8OiVZU8Oo5K3NKMM.jpg',
    trailer: 'sj9J2ecsSpo',
    durationMinutes: 350,
    synopsis: 'Wanda Maximoff atrapa a un pueblo entero en una ilusión de sitcoms clásicas para revivir a Visión.'
  },
  {
    chronoIndex: 32,
    title: 'Falcon y el Soldado de Invierno',
    kind: 'Serie',
    type: 'series',
    year: '2024',
    releaseDate: '2021-03-19',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    trailer: 'IWBsDaFWyTE',
    durationMinutes: 300,
    synopsis: 'Sam Wilson se resiste a empuñar el escudo del Capitán América mientras colabora con Bucky contra los Sin Banderas.'
  },
  {
    chronoIndex: 33,
    title: 'Shang-Chi y la leyenda de los Diez Anillos',
    kind: 'Película',
    type: 'movie',
    year: '2024',
    releaseDate: '2021-09-03',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['mistico', 'callejero'],
    poster: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
    trailer: '8YjFbMbfXaQ',
    durationMinutes: 132,
    synopsis: 'Shang-Chi se enfrenta al imperio místico de su padre Wenwu y a la orden milenaria de los Diez Anillos.'
  },
  {
    chronoIndex: 34,
    title: 'Eternals',
    kind: 'Película',
    type: 'movie',
    year: '2024',
    releaseDate: '2021-11-05',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg',
    trailer: 'x_me3xsvDgk',
    durationMinutes: 156,
    synopsis: 'Diez seres inmortales enviados a la Tierra por los Celestiales despiertan tras milenios para detener a los Desviantes.'
  },
  {
    chronoIndex: 35,
    title: 'Spider-Man: Lejos de casa',
    kind: 'Película',
    type: 'movie',
    year: '2024',
    releaseDate: '2019-07-02',
    phase: 'Fase 3',
    saga: 'infinito',
    provider: 'disney',
    tags: ['callejero', 'spidey'],
    poster: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    trailer: 'Nt9L1jCKGnE',
    durationMinutes: 129,
    synopsis: 'Durante su viaje por Europa, Peter Parker es reclutado por Nick Fury para luchar junto a Mysterio contra los Elementales.'
  },
  {
    chronoIndex: 36,
    title: 'Spider-Man: No Way Home',
    kind: 'Película',
    type: 'movie',
    year: '2024',
    releaseDate: '2021-12-17',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso', 'callejero', 'spidey', 'doomsday'],
    poster: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    trailer: 'JfVOs4VSpmA',
    durationMinutes: 148,
    synopsis: 'Un hechizo fallido del Doctor Strange rompe las fronteras multiversales, trayendo a villanos y héroes de otras realidades.'
  },
  {
    chronoIndex: 37,
    title: 'Ojo de Halcón',
    kind: 'Serie',
    type: 'series',
    year: 'Navidad de 2024',
    releaseDate: '2021-11-24',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg',
    trailer: '5VYb3B1ETlk',
    durationMinutes: 290,
    synopsis: 'El ex Vengador Clint Barton tiene una misión aparentemente simple: regresar con su familia para Navidad, pero se cruza con Kate Bishop.'
  },
  {
    chronoIndex: 38,
    title: 'Moon Knight',
    kind: 'Serie',
    type: 'series',
    year: '2025',
    releaseDate: '2022-03-30',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['mistico'],
    poster: '/YksR65as1ppF2N48TJAh2PLamX.jpg',
    trailer: 'x7Krla_UxRg',
    durationMinutes: 280,
    synopsis: 'Steven Grant descubre que padece trastorno de identidad disociativo y comparte cuerpo con el avatar del dios egipcio Khonshu.'
  },
  {
    chronoIndex: 39,
    title: 'Doctor Strange en el multiverso de la locura',
    kind: 'Película',
    type: 'movie',
    year: '2025',
    releaseDate: '2022-05-06',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso', 'mistico', 'doomsday'],
    poster: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
    trailer: 'aWzlQ2N6qqg',
    durationMinutes: 126,
    synopsis: 'Strange protege a América Chávez a través del Multiverso ante la implacable persecución de la Bruja Escarlata.'
  },
  {
    chronoIndex: 40,
    title: 'Ms. Marvel',
    kind: 'Serie',
    type: 'series',
    year: '2025',
    releaseDate: '2022-06-08',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero', 'cosmico'],
    poster: '/4s19Qz9aT1Y71661T5pMv5V0F5z.jpg',
    trailer: 'm9EX0f6V11S',
    durationMinutes: 270,
    synopsis: 'Kamala Khan desbloquea misteriosos brazaletes familiares que le otorgan la capacidad de canalizar la luz cósmica.'
  },
  {
    chronoIndex: 41,
    title: 'Thor: Love and Thunder',
    kind: 'Película',
    type: 'movie',
    year: '2025',
    releaseDate: '2022-07-08',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
    trailer: 'Go8nTmfrQd8',
    durationMinutes: 119,
    synopsis: 'Thor busca tranquilidad, pero termina uniendo fuerzas con Jane Foster (Mighty Thor) para detener a Gorr el Carnicero de Dioses.'
  },
  {
    chronoIndex: 42,
    title: 'She-Hulk: Abogada Hulka',
    kind: 'Serie',
    type: 'series',
    year: '2025',
    releaseDate: '2022-08-18',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/7jzX4ZKwDxHZP8uSXrDAkVTdvKe.jpg',
    trailer: 'u7JsKhI2An0',
    durationMinutes: 270,
    synopsis: 'Jennifer Walters lidia con su trabajo legal de alto perfil y su nueva condición sobrehumana como She-Hulk.'
  },
  {
    chronoIndex: 43,
    title: 'Black Panther: Wakanda Forever',
    kind: 'Película',
    type: 'movie',
    year: '2025',
    releaseDate: '2022-11-11',
    phase: 'Fase 4',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    trailer: 'RlOB3UALvrQ',
    durationMinutes: 161,
    synopsis: 'Wakanda llora la muerte del rey T\'Challa mientras la reina Ramonda y Shuri defienden su nación del reino submarino de Namor.'
  },
  {
    chronoIndex: 44,
    title: 'Ant-Man y la Avispa: Quantumanía',
    kind: 'Película',
    type: 'movie',
    year: '2026',
    releaseDate: '2023-02-17',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso', 'doomsday'],
    poster: '/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg',
    trailer: 'ZlNFpri-Y40',
    durationMinutes: 125,
    synopsis: 'La familia Pym y Lang son succionados al Reino Cuántico, donde descubren un vasto imperio liderado por Kang el Conquistador.'
  },
  {
    chronoIndex: 45,
    title: 'Guardianes de la Galaxia Vol. 3',
    kind: 'Película',
    type: 'movie',
    year: '2026',
    releaseDate: '2023-05-05',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    trailer: 'u3V5KDHRQvk',
    durationMinutes: 150,
    synopsis: 'Los Guardianes emprenden una arriesgada misión espacial para rescatar a Rocket de las garras del Alto Evolucionador.'
  },
  {
    chronoIndex: 46,
    title: 'Invasión secreta',
    kind: 'Serie',
    type: 'series',
    year: '2026',
    releaseDate: '2023-06-21',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero', 'espionaje'],
    poster: '/jXLhr96JH5DG6TBM8rx8subMpnE.jpg',
    trailer: 'Tp_YZNqNBhw',
    durationMinutes: 260,
    synopsis: 'Nick Fury descubre una red de infiltrados Skrulls en las sombras de los gobiernos del mundo.'
  },
  {
    chronoIndex: 47,
    title: 'The Marvels',
    kind: 'Película',
    type: 'movie',
    year: '2026',
    releaseDate: '2023-11-10',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['cosmico'],
    poster: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
    trailer: 'wS_qbDztgVY',
    durationMinutes: 105,
    synopsis: 'Carol Danvers, Monica Rambeau y Kamala Khan entrelazan sus poderes cósmicos cada vez que usan sus habilidades.'
  },
  {
    chronoIndex: 48,
    title: 'Loki · T2',
    kind: 'Serie',
    type: 'series',
    year: 'fuera del tiempo',
    releaseDate: '2023-10-05',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso', 'loki', 'doomsday'],
    poster: '/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    trailer: 'dug56u8NN7g',
    durationMinutes: 290,
    synopsis: 'Loki intenta estabilizar el Telar del Tiempo junto a Mobius para salvar la existencia de las infinitas ramas multiversales.'
  },
  {
    chronoIndex: 49,
    title: 'Echo',
    kind: 'Serie',
    type: 'series',
    year: '2026',
    releaseDate: '2024-01-09',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/nbkbguUUNWQZygVJKjODyELBQk9.jpg',
    trailer: 'AFE-_rn89fU',
    durationMinutes: 290,
    synopsis: 'Maya Lopez huye del imperio criminal de Kingpin y regresa a Oklahoma para reencontrarse con su legado familiar.'
  },
  {
    chronoIndex: 50,
    title: 'Deadpool y Lobezno',
    kind: 'Película',
    type: 'movie',
    year: 'multiverso',
    releaseDate: '2024-07-26',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['multiverso', 'callejero', 'doomsday'],
    poster: '/9TFSqghEHrlBMRR63yTx80Orxva.jpg',
    trailer: '73_1biulkYk',
    durationMinutes: 128,
    synopsis: 'Wade Wilson recluta a una variante melancólica de Wolverine para librar una batalla desternillante que salvará su universo.'
  },
  {
    chronoIndex: 51,
    title: 'Agatha, ¿quién si no?',
    kind: 'Serie',
    type: 'series',
    year: '2026',
    releaseDate: '2024-09-18',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['mistico'],
    poster: '/oudLzoZ9vqcH7BQAOAeHeC7bcjT.jpg',
    trailer: 'ARulRbzM7Jw',
    durationMinutes: 320,
    synopsis: 'Agatha Harkness recluta a un aquelarre de brujas para recorrer el legendario y mortal Sendero de las Brujas.'
  },
  {
    chronoIndex: 52,
    title: 'Capitán América: Brave New World',
    kind: 'Película',
    type: 'movie',
    year: '2025',
    releaseDate: '2025-02-14',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'cines',
    tags: ['callejero', 'doomsday'],
    poster: '/pVMSRyAiye7gZ8NtuCt1qgbspY9.jpg',
    trailer: '1pHDWnXmK7Y',
    durationMinutes: 125,
    synopsis: 'Sam Wilson se enfrenta al nuevo presidente Thaddeus Ross mientras investiga una amenaza global sin precedentes.'
  },
  {
    chronoIndex: 53,
    title: 'Daredevil: Born Again · T1',
    kind: 'Serie',
    type: 'series',
    year: '2025',
    releaseDate: '2025-03-04',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'disney',
    tags: ['callejero'],
    poster: '/scZsg0rfAyH8ADphzrdhgo5jAXd.jpg',
    trailer: '7iQne5zoPrw',
    durationMinutes: 450,
    synopsis: 'El choque épico entre el abogado Matt Murdock y el alcalde de Nueva York Wilson Fisk.'
  },
  {
    chronoIndex: 54,
    title: 'Thunderbolts*',
    kind: 'Película',
    type: 'movie',
    year: '2025',
    releaseDate: '2025-05-02',
    phase: 'Fase 5',
    saga: 'multiverso',
    provider: 'cines',
    tags: ['callejero', 'doomsday'],
    poster: '/6vrO8wFlwJFI7hgN0rDt3WnZVrW.jpg',
    trailer: 'hUUszE29wsg',
    durationMinutes: 130,
    synopsis: 'Yelena Belova, Bucky Barnes y un grupo de super-soldados caídos en desgracia son enviados a una trampa mortal.'
  },
  {
    chronoIndex: 55,
    title: 'Los Cuatro Fantásticos: Primeros pasos',
    kind: 'Película',
    type: 'movie',
    year: 'Tierra-828',
    releaseDate: '2025-07-25',
    phase: 'Fase 6',
    saga: 'multiverso',
    provider: 'cines',
    tags: ['cosmico', 'multiverso', 'doomsday'],
    poster: '/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg',
    trailer: '18QQWa5MEcs',
    durationMinutes: 135,
    synopsis: 'Reed Richards, Sue Storm, Johnny Storm y Ben Grimm se enfrentan a Galactus en un mundo retrofuturista de los años 60.'
  },
  {
    chronoIndex: 56,
    title: 'Spider-Man: Brand New Day',
    kind: 'Película',
    type: 'movie',
    year: '2026',
    releaseDate: '2026-07-31',
    phase: 'Fase 6',
    saga: 'multiverso',
    provider: 'cines',
    tags: ['callejero', 'spidey'],
    poster: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    trailer: 'Vj7xK4k4A5M',
    durationMinutes: 135,
    synopsis: 'Peter Parker inicia una nueva etapa sin recuerdos de su pasado por parte de sus seres queridos.'
  },
  {
    chronoIndex: 57,
    title: 'Vengadores: Doomsday',
    kind: 'Película',
    type: 'movie',
    year: '2026',
    releaseDate: '2026-12-18',
    phase: 'Fase 6',
    saga: 'multiverso',
    provider: 'cines',
    tags: ['vengadores', 'multiverso', 'doomsday'],
    poster: '/rQKabpeIewLLNStFr3anEXI0xqu.jpg',
    trailer: '399Ez7WHK5s',
    durationMinutes: 160,
    synopsis: 'Robert Downey Jr. interpreta a Victor von Doom en la gran colisión multiversal que cambiará el destino del MCU.'
  },
  {
    chronoIndex: 58,
    title: 'Vengadores: Secret Wars',
    kind: 'Película',
    type: 'movie',
    year: '2027',
    releaseDate: '2027-05-07',
    phase: 'Fase 6',
    saga: 'multiverso',
    provider: 'cines',
    tags: ['vengadores', 'multiverso', 'doomsday'],
    poster: '/rQKabpeIewLLNStFr3anEXI0xqu.jpg',
    trailer: 'TcMBFSGVi1c',
    durationMinutes: 175,
    synopsis: 'La colisión total de los universos Marvel en Battleworld para el desenlace definitivo de la Saga del Multiverso.'
  }
].map((item) => ({
  ...item,
  posterUrl: poster(item.poster),
  trailerId: item.trailer || defaultTrailer
}));

// LocalStorage State
const watched = new Set(JSON.parse(localStorage.getItem('marvel-watched') || '[]'));
let currentSort = 'chrono';
let filter = 'all';
let activeRoute = 'all';
let query = '';
let activeCountdownTarget = null;
let currentModalItem = null;
let soundEnabled = localStorage.getItem('marvel-sound') !== 'false';

// --- DYNAMIC DATABASE FETCH FROM GITHUB REPO ---
async function fetchMCUDataFromGitHub() {
  try {
    const res = await fetch(MCU_DATABASE_API_URL);
    if (!res.ok) throw new Error('Repo mcu-database aún no disponible.');
    const remoteData = await res.json();
    if (Array.isArray(remoteData) && remoteData.length > 0) {
      entries = remoteData.map(item => ({
        ...item,
        posterUrl: poster(item.poster),
        trailerId: item.trailer || defaultTrailer
      }));
      console.log('✅ Base de datos cargada desde mcu-database repo.');
      render();
      initCountdownSystem();
    }
  } catch (e) {
    console.log('ℹ️ Usando dataset integrado local.');
  }
}

// --- WEB AUDIO API SYNTHESIZER ---
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
}

function playSuccessSound() {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(523.25, now);
    osc1.frequency.setValueAtTime(659.25, now + 0.1);
    osc1.frequency.setValueAtTime(783.99, now + 0.2);

    osc2.frequency.setValueAtTime(261.63, now);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.5);
    osc2.stop(now + 0.5);
  } catch (e) {}
}

function playClickSound() {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {}
}

// Sound toggle button setup
const soundBtn = document.querySelector('#btn-toggle-sound');
const soundLabel = soundBtn ? soundBtn.querySelector('.sound-status') : null;

function updateSoundUI() {
  if (soundLabel) soundLabel.textContent = soundEnabled ? 'ON' : 'OFF';
  if (soundBtn) soundBtn.classList.toggle('active', soundEnabled);
}

if (soundBtn) {
  soundBtn.onclick = () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('marvel-sound', soundEnabled);
    updateSoundUI();
    if (soundEnabled) playSuccessSound();
  };
  updateSoundUI();
}

// Cinema Mode
const cinemaBtn = document.querySelector('#btn-toggle-cinema');
const cinemaOverlay = document.querySelector('#cinema-overlay');

if (cinemaBtn && cinemaOverlay) {
  cinemaBtn.onclick = () => {
    playClickSound();
    cinemaOverlay.classList.toggle('active');
    cinemaBtn.classList.toggle('active');
  };
  cinemaOverlay.onclick = () => {
    cinemaOverlay.classList.remove('active');
    if (cinemaBtn) cinemaBtn.classList.remove('active');
  };
}

// GitHub Button Sound
const githubBtn = document.querySelector('#btn-github-repo');
if (githubBtn) {
  githubBtn.onclick = () => {
    playClickSound();
  };
}

// DOM Elements
const timeline = document.querySelector('#timeline');
const template = document.querySelector('#card-template');
const modal = document.querySelector('#trailer-modal');
const rouletteModal = document.querySelector('#roulette-modal');
const fanCardModal = document.querySelector('#fan-card-modal');
const versusModal = document.querySelector('#versus-modal');

// Formatters
const formatDate = (isoStr) => {
  const d = new Date(isoStr + 'T00:00:00');
  if (isNaN(d.getTime())) return isoStr;
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();
};

const getItemRating = (chronoIndex) => parseInt(localStorage.getItem(`marvel-rating-${chronoIndex}`) || '0', 10);
const getItemNote = (chronoIndex) => localStorage.getItem(`marvel-note-${chronoIndex}`) || '';

// Sorted list helper
function getSortedEntries() {
  const list = [...entries];
  if (currentSort === 'release') {
    list.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
  } else if (currentSort === 'rating') {
    list.sort((a, b) => getItemRating(b.chronoIndex) - getItemRating(a.chronoIndex));
  } else {
    list.sort((a, b) => a.chronoIndex - b.chronoIndex);
  }
  return list;
}

// Render cards grid
function render() {
  const sorted = getSortedEntries();
  const visible = sorted.filter(x => {
    const r = getItemRating(x.chronoIndex);

    const matchesRoute = (
      activeRoute === 'all' ||
      (activeRoute === 'doomsday' && x.tags.includes('doomsday')) ||
      (activeRoute === 'loki' && x.tags.includes('loki')) ||
      (activeRoute === 'spidey' && x.tags.includes('spidey')) ||
      (activeRoute === 'movies-only' && x.type === 'movie')
    );

    const matchesFilter = (
      filter === 'all' ||
      (filter === 'pending' && !watched.has(x.chronoIndex)) ||
      (filter === 'watched' && watched.has(x.chronoIndex)) ||
      (filter === 'favorites' && r === 5) ||
      (filter === 'movie' && x.type === 'movie') ||
      (filter === 'series' && x.type === 'series') ||
      (filter === 'disney' && x.provider === 'disney') ||
      (filter === 'cines' && x.provider === 'cines') ||
      (filter === 'saga-infinito' && x.saga === 'infinito') ||
      (filter === 'saga-multiverso' && x.saga === 'multiverso') ||
      (filter === 'tag-callejero' && x.tags.includes('callejero')) ||
      (filter === 'tag-cosmico' && x.tags.includes('cosmico')) ||
      (filter === 'tag-mistico' && x.tags.includes('mistico')) ||
      (filter.startsWith('Fase') && x.phase === filter)
    );

    const matchesSearch = x.title.toLowerCase().includes(query) || x.year.toLowerCase().includes(query);
    return matchesRoute && matchesFilter && matchesSearch;
  });

  timeline.replaceChildren(...visible.map(item => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.title-card');
    card.dataset.id = item.chronoIndex;

    const img = node.querySelector('img');
    node.querySelector('.chrono-badge').textContent = currentSort === 'chrono' ? `#${item.chronoIndex}` : `#${entries.findIndex(e => e.chronoIndex === item.chronoIndex) + 1}`;
    node.querySelector('.card-phase-badge').textContent = item.phase;
    
    img.src = item.posterUrl;
    img.alt = `Póster oficial de ${item.title}`;
    img.onerror = () => card.querySelector('.poster-button').classList.add('error');
    
    node.querySelector('.poster-fallback').textContent = item.title;
    node.querySelector('.card-meta').textContent = `${item.kind.toUpperCase()} · ${item.year}`;
    node.querySelector('h3').textContent = item.title;

    const userRating = getItemRating(item.chronoIndex);
    const starsContainer = node.querySelector('.card-user-stars');
    if (userRating > 0) {
      starsContainer.textContent = '★'.repeat(userRating) + '☆'.repeat(5 - userRating);
      starsContainer.classList.add('active');
    } else {
      starsContainer.textContent = '';
      starsContainer.classList.remove('active');
    }

    node.querySelector('.poster-button').onclick = () => openTrailer(item);
    
    card.classList.toggle('seen', watched.has(item.chronoIndex));
    node.querySelector('.seen-toggle').onclick = (e) => {
      e.stopPropagation();
      toggleSeen(item);
    };

    node.querySelector('.edit-link').onclick = (e) => {
      e.stopPropagation();
      saveLink(item);
    };

    return node;
  }));

  updateDashboard();
  renderAchievements();
  updateMarathonCalculator();
}

// Open Trailer Modal
function openTrailer(item) {
  playClickSound();
  currentModalItem = item;
  document.querySelector('#modal-title').textContent = item.title;
  document.querySelector('#modal-meta').textContent = `${item.kind.toUpperCase()} · ${formatDate(item.releaseDate)}`;
  document.querySelector('#modal-phase').textContent = item.phase;
  document.querySelector('#modal-synopsis').textContent = item.synopsis || '';

  const origin = location.protocol.startsWith('http') ? `&origin=${encodeURIComponent(location.origin)}` : '';
  document.querySelector('#trailer-frame').src = `https://www.youtube.com/embed/${item.trailerId}?autoplay=1&rel=0&playsinline=1${origin}`;

  const link = document.querySelector('#watch-link');
  const customLink = localStorage.getItem(`marvel-link-${item.chronoIndex}`);
  link.href = customLink || `https://www.youtube.com/watch?v=${item.trailerId}`;
  link.textContent = customLink ? 'VER MI ENLACE ↗' : 'VER TRÁILER EN YOUTUBE ↗';

  const r = getItemRating(item.chronoIndex);
  updateModalStarsUI(r);
  document.querySelector('#modal-user-note').value = getItemNote(item.chronoIndex);

  modal.showModal();
}

function updateModalStarsUI(val) {
  const stars = document.querySelectorAll('#star-rating-controls .star');
  const textLabel = document.querySelector('#rating-text-value');
  stars.forEach(s => {
    const ratingVal = parseInt(s.dataset.value, 10);
    s.classList.toggle('active', ratingVal <= val);
  });
  textLabel.textContent = val > 0 ? `${val} / 5 Estrellas` : 'Sin valorar';
}

document.querySelectorAll('#star-rating-controls .star').forEach(star => {
  star.onclick = () => {
    if (!currentModalItem) return;
    playClickSound();
    const val = parseInt(star.dataset.value, 10);
    const existing = getItemRating(currentModalItem.chronoIndex);
    const newRating = existing === val ? 0 : val;
    if (newRating > 0) {
      localStorage.setItem(`marvel-rating-${currentModalItem.chronoIndex}`, newRating);
    } else {
      localStorage.removeItem(`marvel-rating-${currentModalItem.chronoIndex}`);
    }
    updateModalStarsUI(newRating);
    render();
  };
});

document.querySelector('#btn-save-note').onclick = () => {
  if (!currentModalItem) return;
  playClickSound();
  const note = document.querySelector('#modal-user-note').value.trim();
  if (note) {
    localStorage.setItem(`marvel-note-${currentModalItem.chronoIndex}`, note);
    alert('¡Reseña personal guardada correctamente!');
  } else {
    localStorage.removeItem(`marvel-note-${currentModalItem.chronoIndex}`);
    alert('Reseña eliminada.');
  }
  render();
};

function saveLink(item) {
  playClickSound();
  const current = localStorage.getItem(`marvel-link-${item.chronoIndex}`) || '';
  const url = prompt(`Introduce tu enlace personal de reproducción para "${item.title}":`, current);
  if (url === null) return;
  if (url.trim()) {
    localStorage.setItem(`marvel-link-${item.chronoIndex}`, url.trim());
  } else {
    localStorage.removeItem(`marvel-link-${item.chronoIndex}`);
  }
}

function toggleSeen(item) {
  if (watched.has(item.chronoIndex)) {
    watched.delete(item.chronoIndex);
    playClickSound();
  } else {
    watched.add(item.chronoIndex);
    playSuccessSound();
  }
  localStorage.setItem('marvel-watched', JSON.stringify([...watched]));
  render();
}

function updateDashboard() {
  const total = entries.length;
  const watchedCount = watched.size;
  const percentage = Math.round((watchedCount / total) * 100);

  const movies = entries.filter(e => e.type === 'movie');
  const watchedMovies = movies.filter(e => watched.has(e.chronoIndex)).length;

  const series = entries.filter(e => e.type === 'series');
  const watchedSeries = series.filter(e => watched.has(e.chronoIndex)).length;

  const totalMinutesWatched = entries
    .filter(e => watched.has(e.chronoIndex))
    .reduce((sum, e) => sum + (e.durationMinutes || 120), 0);
  const hoursWatched = Math.round(totalMinutesWatched / 60);

  const favCount = entries.filter(e => getItemRating(e.chronoIndex) === 5).length;

  document.querySelector('#dashboard-percentage').textContent = `${percentage}% COMPLETADO`;
  document.querySelector('#large-progress-fill').style.width = `${percentage}%`;
  document.querySelector('#progress-text-detail').textContent = `${watchedCount} de ${total} títulos vistos del Universo Marvel`;

  document.querySelector('#stat-total-badge').innerHTML = `🍿 <b>${watchedCount} / ${total}</b> vistos`;
  document.querySelector('#stat-movies-badge').innerHTML = `🎬 <b>${watchedMovies} / ${movies.length}</b> Películas`;
  document.querySelector('#stat-series-badge').innerHTML = `📺 <b>${watchedSeries} / ${series.length}</b> Series`;
  document.querySelector('#stat-hours-badge').innerHTML = `⏱️ <b>~${hoursWatched}h</b> vistas`;

  document.querySelector('#all-count').textContent = total;
  document.querySelector('#pending-count').textContent = total - watchedCount;
  document.querySelector('#watched-count').textContent = watchedCount;
  document.querySelector('#fav-count').textContent = favCount;
}

// Rutas Guiadas
document.querySelectorAll('.route-btn').forEach(btn => {
  btn.onclick = () => {
    playClickSound();
    activeRoute = btn.dataset.route;
    document.querySelectorAll('.route-btn').forEach(r => r.classList.remove('active'));
    btn.classList.add('active');
    render();
  };
});

// Achievements System
const achievementsDef = [
  {
    id: 'fase1',
    title: 'Iniciativa Vengadores',
    desc: 'Completa todos los títulos de la Fase 1',
    icon: '🛡️',
    check: () => entries.filter(e => e.phase === 'Fase 1').every(e => watched.has(e.chronoIndex)),
    progress: () => {
      const list = entries.filter(e => e.phase === 'Fase 1');
      return { curr: list.filter(e => watched.has(e.chronoIndex)).length, max: list.length };
    }
  },
  {
    id: 'infinito',
    title: 'Saga del Infinito',
    desc: 'Completa todas las películas y series de la Saga del Infinito (Fases 1, 2 y 3)',
    icon: '💎',
    check: () => entries.filter(e => e.saga === 'infinito').every(e => watched.has(e.chronoIndex)),
    progress: () => {
      const list = entries.filter(e => e.saga === 'infinito');
      return { curr: list.filter(e => watched.has(e.chronoIndex)).length, max: list.length };
    }
  },
  {
    id: 'cosmico',
    title: 'Guardián Cósmico',
    desc: 'Mira todas las aventuras espaciales y galácticas del MCU',
    icon: '🌌',
    check: () => entries.filter(e => e.tags.includes('cosmico')).every(e => watched.has(e.chronoIndex)),
    progress: () => {
      const list = entries.filter(e => e.tags.includes('cosmico'));
      return { curr: list.filter(e => watched.has(e.chronoIndex)).length, max: list.length };
    }
  },
  {
    id: 'mistico',
    title: 'Maestro Místico',
    desc: 'Domina las artes oscuras y el multiverso mágico',
    icon: '⛩️',
    check: () => entries.filter(e => e.tags.includes('mistico')).every(e => watched.has(e.chronoIndex)),
    progress: () => {
      const list = entries.filter(e => e.tags.includes('mistico'));
      return { curr: list.filter(e => watched.has(e.chronoIndex)).length, max: list.length };
    }
  },
  {
    id: 'callejero',
    title: 'Héroe de Hell\'s Kitchen',
    desc: 'Mira toda la saga callejera (Daredevil, Spider-Man, Hawkeye, etc.)',
    icon: '🥊',
    check: () => entries.filter(e => e.tags.includes('callejero')).every(e => watched.has(e.chronoIndex)),
    progress: () => {
      const list = entries.filter(e => e.tags.includes('callejero'));
      return { curr: list.filter(e => watched.has(e.chronoIndex)).length, max: list.length };
    }
  },
  {
    id: 'master',
    title: 'Leyenda del Multiverso',
    desc: '¡Completa el 100% de todo el Universo Cinematográfico de Marvel!',
    icon: '👑',
    check: () => watched.size === entries.length,
    progress: () => ({ curr: watched.size, max: entries.length })
  }
];

function renderAchievements() {
  const container = document.querySelector('#achievements-grid');
  if (!container) return;

  container.innerHTML = achievementsDef.map(ach => {
    const isUnlocked = ach.check();
    const { curr, max } = ach.progress();
    const pct = Math.round((curr / max) * 100);

    return `
      <div class="achievement-card ${isUnlocked ? 'unlocked' : ''}">
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-info">
          <h4>${ach.title} ${isUnlocked ? '✓' : ''}</h4>
          <p>${ach.desc}</p>
          <div class="ach-progress-bar">
            <div class="ach-fill" style="width: ${pct}%;"></div>
          </div>
          <span class="ach-count">${curr} / ${max} (${pct}%)</span>
        </div>
      </div>
    `;
  }).join('');
}

// Marathon Calculator
function updateMarathonCalculator() {
  const paceSelect = document.querySelector('#marathon-pace-select');
  const targetSelect = document.querySelector('#marathon-target-select');
  const resultBox = document.querySelector('#marathon-result-box');
  if (!paceSelect || !targetSelect || !resultBox) return;

  if (targetSelect.options.length === 0) {
    const upcoming = getUpcomingReleases();
    const list = upcoming.length > 0 ? upcoming : [entries.at(-1)];
    targetSelect.innerHTML = list.map(item => `
      <option value="${item.releaseDate}">${item.title} (${formatDate(item.releaseDate)})</option>
    `).join('');
  }

  const itemsPerDay = parseFloat(paceSelect.value);
  const targetDateStr = targetSelect.value;
  const targetDate = new Date(targetDateStr + 'T00:00:00');

  const unwatchedItems = entries.filter(e => !watched.has(e.chronoIndex));
  const count = unwatchedItems.length;

  if (count === 0) {
    resultBox.className = 'marathon-result-box success';
    resultBox.innerHTML = `🎉 <b>¡Felicidades!</b> Has completado todo el MCU. Estás listo para el estreno de <b>${targetSelect.options[targetSelect.selectedIndex].text}</b>.`;
    return;
  }

  const daysNeeded = Math.ceil(count / itemsPerDay);
  const now = new Date();
  const estimatedFinish = new Date(now.getTime() + daysNeeded * 24 * 60 * 60 * 1000);

  const diffMs = targetDate.getTime() - estimatedFinish.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  const finishFormatted = estimatedFinish.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

  if (diffDays >= 0) {
    resultBox.className = 'marathon-result-box success';
    resultBox.innerHTML = `
      ✅ <b>¡LLEGARÁS A TIEMPO!</b><br>
      Te quedan <b>${count} títulos</b> pendientes. Al ritmo elegido terminarás el <b>${finishFormatted}</b> (${diffDays} días antes del estreno).
    `;
  } else {
    resultBox.className = 'marathon-result-box warning';
    resultBox.innerHTML = `
      ⚠️ <b>¡DEBES ACELERAR EL RITMO!</b><br>
      Te quedan <b>${count} títulos</b>. Terminarías el <b>${finishFormatted}</b> (${Math.abs(diffDays)} días después del estreno). Prueba a aumentar tu ritmo diario.
    `;
  }
}

document.querySelector('#marathon-pace-select').onchange = updateMarathonCalculator;
document.querySelector('#marathon-target-select').onchange = updateMarathonCalculator;

// Recommendations & Roulette
document.querySelector('#btn-next-recommended').onclick = () => {
  playClickSound();
  const unwatched = entries.filter(e => !watched.has(e.chronoIndex));
  if (unwatched.length === 0) {
    alert('¡Ya has visto todo el contenido del Universo Marvel!');
    return;
  }
  const nextItem = unwatched[0];
  filter = 'all';
  activeRoute = 'all';
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
  document.querySelector('.filter[data-filter="all"]').classList.add('active');
  document.querySelectorAll('.route-btn').forEach(r => r.classList.remove('active'));
  document.querySelector('.route-btn[data-route="all"]').classList.add('active');
  render();

  setTimeout(() => {
    const cardEl = document.querySelector(`.title-card[data-id="${nextItem.chronoIndex}"]`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardEl.classList.add('highlight-pulse');
      setTimeout(() => cardEl.classList.remove('highlight-pulse'), 3000);
    }
  }, 150);
};

let rouletteTarget = null;
const btnRandomPicker = document.querySelector('#btn-random-picker');
const btnSpinAgain = document.querySelector('#btn-spin-again');
const btnOpenRouletteItem = document.querySelector('#btn-open-roulette-item');
const closeRouletteModal = document.querySelector('#close-roulette-modal');

function spinRoulette() {
  const unwatched = entries.filter(e => !watched.has(e.chronoIndex));
  const pool = unwatched.length > 0 ? unwatched : entries;

  const posterImg = document.querySelector('#roulette-poster');
  const titleH4 = document.querySelector('#roulette-title');

  let counter = 0;
  const totalTicks = 20;
  const interval = setInterval(() => {
    const randomPick = pool[Math.floor(Math.random() * pool.length)];
    posterImg.src = randomPick.posterUrl;
    titleH4.textContent = randomPick.title;
    counter++;

    if (counter >= totalTicks) {
      clearInterval(interval);
      rouletteTarget = pool[Math.floor(Math.random() * pool.length)];
      posterImg.src = rouletteTarget.posterUrl;
      titleH4.textContent = `🎯 ¡RECOMENDADO: ${rouletteTarget.title}!`;
      playSuccessSound();
    }
  }, 90);
}

btnRandomPicker.onclick = () => {
  playClickSound();
  rouletteModal.showModal();
  spinRoulette();
};

btnSpinAgain.onclick = () => {
  playClickSound();
  spinRoulette();
};

btnOpenRouletteItem.onclick = () => {
  if (rouletteTarget) {
    rouletteModal.close();
    openTrailer(rouletteTarget);
  }
};

closeRouletteModal.onclick = () => rouletteModal.close();

// --- 🖼️ CANVAS FAN CARD GENERATOR ENGINE ---
function generateFanCardCanvas() {
  const canvas = document.querySelector('#fan-card-canvas');
  const ctx = canvas.getContext('2d');

  const cols = 6;
  const totalItems = entries.length;
  const rows = Math.ceil(totalItems / cols);

  const paddingX = 40;
  const headerHeight = 220;
  const footerHeight = 70;

  const cardW = 160;
  const cardH = 240;
  const gapX = 20;
  const gapY = 24;

  const canvasW = paddingX * 2 + cols * cardW + (cols - 1) * gapX;
  const canvasH = headerHeight + rows * (cardH + gapY) + footerHeight;

  canvas.width = canvasW;
  canvas.height = canvasH;

  const bgGradient = ctx.createLinearGradient(0, 0, canvasW, canvasH);
  bgGradient.addColorStop(0, '#07070b');
  bgGradient.addColorStop(0.5, '#0e0e17');
  bgGradient.addColorStop(1, '#050508');
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvasW, canvasH);

  const glow = ctx.createRadialGradient(canvasW * 0.8, 100, 10, canvasW * 0.8, 100, 400);
  glow.addColorStop(0, 'rgba(237, 29, 36, 0.25)');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvasW, canvasH);

  ctx.fillStyle = '#ed1d24';
  ctx.fillRect(paddingX, 40, 95, 32);
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 16px Outfit, sans-serif';
  ctx.fillText('MARVEL', paddingX + 12, 62);

  ctx.font = '400 36px "Bebas Neue", sans-serif';
  ctx.fillText('TRACKER', paddingX + 105, 66);

  const watchedCount = watched.size;
  const pct = Math.round((watchedCount / totalItems) * 100);

  ctx.fillStyle = '#f5c518';
  ctx.font = '700 13px Outfit, sans-serif';
  ctx.fillText('FICHA OFICIAL DE FAN DEL MCU', paddingX, 105);

  ctx.fillStyle = '#ffffff';
  ctx.font = '400 48px "Bebas Neue", sans-serif';
  ctx.fillText(`${pct}% COMPLETADO`, paddingX, 150);

  ctx.fillStyle = '#a0a0aa';
  ctx.font = '600 15px Outfit, sans-serif';
  ctx.fillText(`🍿 ${watchedCount} de ${totalItems} títulos vistos`, paddingX + 320, 145);

  const barX = paddingX;
  const barY = 168;
  const barW = canvasW - paddingX * 2;
  const barH = 18;

  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.roundRect(barX, barY, barW, barH, 999);
  ctx.fill();

  if (pct > 0) {
    const fillW = (barW * pct) / 100;
    const barGrad = ctx.createLinearGradient(barX, 0, barX + fillW, 0);
    barGrad.addColorStop(0, '#b70d19');
    barGrad.addColorStop(0.5, '#ed1d24');
    barGrad.addColorStop(1, '#ff5252');
    ctx.fillStyle = barGrad;
    ctx.beginPath();
    ctx.roundRect(barX, barY, fillW, barH, 999);
    ctx.fill();
  }

  entries.forEach((item, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);

    const x = paddingX + col * (cardW + gapX);
    const y = headerHeight + row * (cardH + gapY);

    const isSeen = watched.has(item.chronoIndex);

    ctx.save();
    ctx.fillStyle = '#14141a';
    ctx.beginPath();
    ctx.roundRect(x, y, cardW, cardH, 10);
    ctx.fill();

    const posterGrad = ctx.createLinearGradient(x, y, x + cardW, y + cardH);
    if (isSeen) {
      posterGrad.addColorStop(0, '#1c3022');
      posterGrad.addColorStop(1, '#0b140e');
    } else {
      posterGrad.addColorStop(0, '#221517');
      posterGrad.addColorStop(1, '#0c0a0c');
    }
    ctx.fillStyle = posterGrad;
    ctx.beginPath();
    ctx.roundRect(x, y, cardW, cardH, 10);
    ctx.fill();

    ctx.fillStyle = isSeen ? '#ffffff' : '#888892';
    ctx.font = '700 11px Outfit, sans-serif';
    ctx.fillText(`#${item.chronoIndex} · ${item.kind.toUpperCase()}`, x + 10, y + 24);

    ctx.font = '400 18px "Bebas Neue", sans-serif';
    ctx.fillStyle = isSeen ? '#ffffff' : '#666670';
    
    const titleText = item.title.length > 20 ? item.title.slice(0, 18) + '...' : item.title;
    ctx.fillText(titleText, x + 10, y + 48);

    ctx.font = '500 11px Outfit, sans-serif';
    ctx.fillStyle = isSeen ? '#36bc70' : '#555560';
    ctx.fillText(item.year, x + 10, y + 66);

    if (!isSeen) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.beginPath();
      ctx.roundRect(x, y, cardW, cardH, 10);
      ctx.fill();

      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.beginPath();
      ctx.arc(x + cardW / 2, y + cardH / 2 + 10, 24, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#888890';
      ctx.font = '20px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🔒', x + cardW / 2, y + cardH / 2 + 17);
      ctx.textAlign = 'left';

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x, y, cardW, cardH, 10);
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#36bc70';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.roundRect(x, y, cardW, cardH, 10);
      ctx.stroke();

      const badgeX = x + cardW - 20;
      const badgeY = y + 20;

      ctx.fillStyle = '#36bc70';
      ctx.beginPath();
      ctx.arc(badgeX, badgeY, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#07150c';
      ctx.font = '900 14px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✓', badgeX, badgeY + 5);
      ctx.textAlign = 'left';
    }

    ctx.restore();
  });

  const footerY = canvasH - 30;
  ctx.fillStyle = '#555560';
  ctx.font = '600 13px Outfit, sans-serif';
  ctx.fillText('⚡ MARVEL TRACKER — Tu Universo Cinematográfico en Orden Perfecto', paddingX, footerY);

  ctx.fillStyle = '#ed1d24';
  ctx.fillText('marvel-tracker.app', canvasW - paddingX - 130, footerY);
}

document.querySelector('#btn-share-stats').onclick = () => {
  playClickSound();
  fanCardModal.showModal();
  generateFanCardCanvas();
};

document.querySelector('#close-fan-card-modal').onclick = () => fanCardModal.close();

document.querySelector('#btn-download-fan-card').onclick = () => {
  playClickSound();
  const canvas = document.querySelector('#fan-card-canvas');
  const imageURI = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = imageURI;
  a.download = `MCU-Ficha-De-Fan-${new Date().toISOString().slice(0, 10)}.png`;
  a.click();
};

document.querySelector('#btn-copy-fan-card-text').onclick = () => {
  playClickSound();
  const total = entries.length;
  const count = watched.size;
  const pct = Math.round((count / total) * 100);
  const unlockedAch = achievementsDef.filter(a => a.check()).length;

  const shareText = `🍿 ¡He completado el ${pct}% (${count}/${total}) del Universo Cinematográfico de Marvel en MARVEL TRACKER!\n🏆 Insignias Desbloqueadas: ${unlockedAch}/${achievementsDef.length}\n⚡ Sigue el MCU en orden perfecto.`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText);
    alert('¡Texto de Ficha de Fan copiado al portapapeles!');
  } else {
    prompt('Copia tu texto de Ficha de Fan:', shareText);
  }
};

// Calendar Export
document.querySelector('#btn-export-calendar-ics').onclick = () => {
  playClickSound();
  const upcoming = getUpcomingReleases();
  if (upcoming.length === 0) {
    alert('No hay estrenos futuros disponibles.');
    return;
  }

  let icsContent = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Marvel Tracker//MCU Calendar//ES\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\n";

  upcoming.forEach(item => {
    const dStr = item.releaseDate.replace(/-/g, '');
    icsContent += "BEGIN:VEVENT\r\n";
    icsContent += `SUMMARY:🎬 Estreno: ${item.title}\r\n`;
    icsContent += `DESCRIPTION:Estreno oficial en cines de ${item.title} (${item.phase}). Sigue tu progreso en Marvel Tracker.\r\n`;
    icsContent += `DTSTART;VALUE=DATE:${dStr}\r\n`;
    icsContent += `DTEND;VALUE=DATE:${dStr}\r\n`;
    icsContent += `UID:mcu-${item.chronoIndex}-${dStr}@marveltracker.app\r\n`;
    icsContent += "STATUS:CONFIRMED\r\n";
    icsContent += "END:VEVENT\r\n";
  });

  icsContent += "END:VCALENDAR\r\n";

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Estrenos-Marvel-MCU-${new Date().getFullYear()}.ics`;
  a.click();
};

// --- 👥 VERSUS COMPARATOR BY USERNAME ---
const versusModalBtn = document.querySelector('#btn-open-versus');
const closeVersusModal = document.querySelector('#close-versus-modal');
const versusSearchUsername = document.querySelector('#versus-search-username');
const btnSearchVersusUser = document.querySelector('#btn-search-versus-user');
const versusResultsContainer = document.querySelector('#versus-results-container');
const btnExportUserProfileFile = document.querySelector('#btn-export-user-profile-file');

if (versusModalBtn) {
  versusModalBtn.onclick = () => {
    playClickSound();
    versusModal.showModal();
  };
}

if (closeVersusModal) {
  closeVersusModal.onclick = () => versusModal.close();
}

async function fetchAndProcessFriendProfile(username) {
  const cleanUser = username.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
  if (!cleanUser) {
    alert('Introduce un nombre de usuario válido.');
    return;
  }

  versusResultsContainer.innerHTML = `<p style="text-align:center; color: var(--gold);">🔍 Buscando usuario <b>"${cleanUser}"</b> en mcu-database...</p>`;

  try {
    const res = await fetch(`${MCU_USER_PROFILES_BASE_URL}${cleanUser}.json`);
    if (!res.ok) {
      throw new Error(`El usuario "${cleanUser}" aún no se ha registrado en el repositorio mcu-database.`);
    }
    const friendData = await res.json();
    processVersusData(friendData, cleanUser);
    playSuccessSound();
  } catch (err) {
    versusResultsContainer.innerHTML = `
      <div class="versus-result-box warning" style="grid-column: 1 / -1; padding: 20px;">
        ⚠️ <b>Usuario "${cleanUser}" no encontrado en el repositorio remoto.</b><br>
        Dile a tu amigo que descargue su archivo de perfil en este modal y lo suba a la carpeta <code>users/${cleanUser}.json</code> de tu repositorio <b>mcu-database</b>.
      </div>
    `;
  }
}

function processVersusData(friendData, friendName = 'Amigo') {
  if (!friendData || !Array.isArray(friendData.watched)) {
    versusResultsContainer.innerHTML = '<p class="error-text">❌ Datos de usuario no válidos.</p>';
    return;
  }

  const friendWatched = new Set(friendData.watched);
  const myWatched = watched;

  const total = entries.length;
  const myPct = Math.round((myWatched.size / total) * 100);
  const friendPct = Math.round((friendWatched.size / total) * 100);

  const myOnly = entries.filter(e => myWatched.has(e.chronoIndex) && !friendWatched.has(e.chronoIndex));
  const friendOnly = entries.filter(e => !myWatched.has(e.chronoIndex) && friendWatched.has(e.chronoIndex));

  versusResultsContainer.innerHTML = `
    <div class="versus-card glass-panel">
      <h4>Tú</h4>
      <div class="versus-score">${myPct}%</div>
      <p>${myWatched.size} de ${total} vistos</p>
    </div>

    <div class="versus-card glass-panel">
      <h4>${friendName.toUpperCase()}</h4>
      <div class="versus-score text-gold">${friendPct}%</div>
      <p>${friendWatched.size} de ${total} vistos</p>
    </div>

    <div class="versus-diff-box glass-panel">
      <h5>🟢 Títulos que tú has visto y ${friendName} NO (${myOnly.length}):</h5>
      <ul>${myOnly.length > 0 ? myOnly.map(e => `<li>✓ ${e.title}</li>`).join('') : '<li>Ninguno (estáis al mismo nivel)</li>'}</ul>
    </div>

    <div class="versus-diff-box glass-panel">
      <h5>🔒 Títulos que ${friendName} ha visto y tú NO (${friendOnly.length}):</h5>
      <ul>${friendOnly.length > 0 ? friendOnly.map(e => `<li>✓ ${e.title}</li>`).join('') : '<li>Ninguno</li>'}</ul>
    </div>
  `;
}

if (btnSearchVersusUser && versusSearchUsername) {
  btnSearchVersusUser.onclick = () => {
    playClickSound();
    fetchAndProcessFriendProfile(versusSearchUsername.value);
  };
  versusSearchUsername.onkeypress = (e) => {
    if (e.key === 'Enter') {
      playClickSound();
      fetchAndProcessFriendProfile(versusSearchUsername.value);
    }
  };
}

if (btnExportUserProfileFile) {
  btnExportUserProfileFile.onclick = () => {
    playClickSound();
    const uname = prompt('Introduce tu nombre de usuario para generar tu archivo de perfil (ejemplo: ivan):', 'usuario');
    if (!uname) return;

    const cleanName = uname.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    const userProfileData = {
      username: cleanName,
      watched: [...watched],
      updatedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(userProfileData, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${cleanName}.json`;
    a.click();
    alert(`¡Archivo ${cleanName}.json generado! Súbelo a la carpeta users/ en mcu-database para que tus amigos puedan buscarte.`);
  };
}

// Export & Import JSON
document.querySelector('#btn-export-json').onclick = () => {
  playClickSound();
  const exportData = {
    watched: [...watched],
    ratings: {},
    links: {},
    notes: {},
    exportedAt: new Date().toISOString()
  };

  entries.forEach(e => {
    const r = getItemRating(e.chronoIndex);
    const l = localStorage.getItem(`marvel-link-${e.chronoIndex}`);
    const n = getItemNote(e.chronoIndex);
    if (r > 0) exportData.ratings[e.chronoIndex] = r;
    if (l) exportData.links[e.chronoIndex] = l;
    if (n) exportData.notes[e.chronoIndex] = n;
  });

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `marvel-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
};

document.querySelector('#btn-import-json').onclick = () => {
  playClickSound();
  document.querySelector('#import-file-input').click();
};

document.querySelector('#import-file-input').onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (Array.isArray(data.watched)) {
        watched.clear();
        data.watched.forEach(id => watched.add(id));
        localStorage.setItem('marvel-watched', JSON.stringify([...watched]));
      }
      if (data.ratings) {
        Object.entries(data.ratings).forEach(([id, val]) => localStorage.setItem(`marvel-rating-${id}`, val));
      }
      if (data.links) {
        Object.entries(data.links).forEach(([id, val]) => localStorage.setItem(`marvel-link-${id}`, val));
      }
      if (data.notes) {
        Object.entries(data.notes).forEach(([id, val]) => localStorage.setItem(`marvel-note-${id}`, val));
      }
      alert('¡Progreso importado con éxito!');
      render();
    } catch (err) {
      alert('Error al leer el archivo JSON de copia de seguridad.');
    }
  };
  reader.readAsText(file);
};

// Batch Actions
document.querySelector('#btn-mark-all').onclick = () => {
  playClickSound();
  if (confirm('¿Quieres marcar TODO el contenido del MCU como visto?')) {
    entries.forEach(e => watched.add(e.chronoIndex));
    localStorage.setItem('marvel-watched', JSON.stringify([...watched]));
    playSuccessSound();
    render();
  }
};

document.querySelector('#btn-reset-all').onclick = () => {
  playClickSound();
  if (confirm('¿Seguro que deseas reiniciar tu progreso de visionado?')) {
    watched.clear();
    localStorage.setItem('marvel-watched', JSON.stringify([]));
    render();
  }
};

// Sort Switches
const btnSortChrono = document.querySelector('#sort-chrono');
const btnSortRelease = document.querySelector('#sort-release');
const btnSortRating = document.querySelector('#sort-rating');

btnSortChrono.onclick = () => {
  playClickSound();
  currentSort = 'chrono';
  btnSortChrono.classList.add('active');
  btnSortRelease.classList.remove('active');
  btnSortRating.classList.remove('active');
  render();
};

btnSortRelease.onclick = () => {
  playClickSound();
  currentSort = 'release';
  btnSortRelease.classList.add('active');
  btnSortChrono.classList.remove('active');
  btnSortRating.classList.remove('active');
  render();
};

btnSortRating.onclick = () => {
  playClickSound();
  currentSort = 'rating';
  btnSortRating.classList.add('active');
  btnSortChrono.classList.remove('active');
  btnSortRelease.classList.remove('active');
  render();
};

// Filters
document.querySelectorAll('.filter').forEach(btn => {
  btn.onclick = () => {
    playClickSound();
    filter = btn.dataset.filter;
    document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    render();
  };
});

// Search input
document.querySelector('#search').oninput = e => {
  query = e.target.value.toLowerCase().trim();
  render();
};

// Modal Close
document.querySelector('#close-modal').onclick = () => modal.close();
modal.addEventListener('close', () => {
  document.querySelector('#trailer-frame').src = '';
});

// Featured Section Trailer Button
document.querySelector('#featured-trailer-btn').onclick = () => {
  const doomsday = entries.find(e => e.title.includes('Doomsday')) || entries.at(-1);
  openTrailer(doomsday);
};

// Dynamic Countdown System
function getUpcomingReleases() {
  const now = new Date();
  return entries
    .filter(e => new Date(e.releaseDate + 'T23:59:59') >= now)
    .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
}

function initCountdownSystem() {
  const upcoming = getUpcomingReleases();
  const select = document.querySelector('#countdown-movie-select');
  select.innerHTML = '';

  const futureList = upcoming.length > 0 ? upcoming : [entries.at(-1)];

  futureList.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.chronoIndex;
    opt.textContent = `${item.title} (${formatDate(item.releaseDate)})`;
    select.appendChild(opt);
  });

  activeCountdownTarget = futureList[0];
  select.value = activeCountdownTarget.chronoIndex;

  select.onchange = (e) => {
    playClickSound();
    const selectedId = parseInt(e.target.value, 10);
    activeCountdownTarget = entries.find(x => x.chronoIndex === selectedId) || futureList[0];
    updateCountdownUI();
  };

  updateCountdownUI();
}

function updateCountdownUI() {
  if (!activeCountdownTarget) return;

  document.querySelector('#header-countdown-title').textContent = activeCountdownTarget.title;
  document.querySelector('#main-countdown-title').textContent = activeCountdownTarget.title;
  document.querySelector('#main-countdown-date').textContent = `Estreno oficial: ${formatDate(activeCountdownTarget.releaseDate)}`;
  document.querySelector('#countdown-phase-tag').textContent = activeCountdownTarget.phase;
}

function tickCountdown() {
  if (!activeCountdownTarget) return;

  const targetTime = new Date(activeCountdownTarget.releaseDate + 'T00:00:00').getTime();
  const now = Date.now();
  const distance = targetTime - now;

  if (distance <= 0) {
    const upcoming = getUpcomingReleases();
    if (upcoming.length > 0 && upcoming[0].chronoIndex !== activeCountdownTarget.chronoIndex) {
      initCountdownSystem();
      return;
    }
  }

  const d = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const h = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const m = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const s = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

  document.querySelector('#countdown-numbers').innerHTML = `
    <div class="time">${String(d).padStart(2, '0')}<small>D</small></div>
    <div class="time">${String(h).padStart(2, '0')}<small>H</small></div>
    <div class="time">${String(m).padStart(2, '0')}<small>M</small></div>
    <div class="time">${String(s).padStart(2, '0')}<small>S</small></div>
  `;

  document.querySelector('#timer-days').textContent = String(d).padStart(3, '0');
  document.querySelector('#timer-hours').textContent = String(h).padStart(2, '0');
  document.querySelector('#timer-mins').textContent = String(m).padStart(2, '0');
  document.querySelector('#timer-secs').textContent = String(s).padStart(2, '0');
}

// Boot
fetchMCUDataFromGitHub();
initCountdownSystem();
tickCountdown();
setInterval(tickCountdown, 1000);
render();
