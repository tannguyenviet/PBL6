let role = `(1, 'admin'),
(2, 'manager'),
(3, 'member');`;

let account = `(1, 'manager_2', '$2b$10$Hn4/7AVbWhzLQJvW83v8SuALOoBKty2lTWTSnIBuYjIB5JJ.fR7Le', 'tuandeptrai', 'sdsds', 'tuanak691@gmail.com', NULL, NULL, NULL, NULL, 1, 2),
(2, 'admin_1', '$2b$10$DPH6Mzm9rMwvxM78x6KSfuL.S8hYBFvuhLLbn6QCZduMeRX2xvOYq', 'duydeptrai', 'sdsds', 'duysinheng75@gmail.com', NULL, NULL, NULL, NULL, 1, 1),
(5, 'member_1', '$2b$10$S0VBT5SXpR/QgZjp.wtEpumRZ2tYA/fyQojB27ZuJo7JPgEca2ZIm', 'tudeptrai', 'sdsds', 'tuakb881@gmail.com', NULL, NULL, NULL, NULL, 1, 3);`;

let film = `(1, 'Ri¢hie Ri¢h', '1994-12-19 00:00:00', 'United States of America', 'Davis Entertainment, Silver Pictures, Warner Bros. Pictures', 95, 'C16', 'Macaulay Culkin, John Larroquette, Edward Herrmann, Christine Ebersole, Jonathan Hyde, Michael Maccarone, Joel Robinson, Jonathan Hilario, Rory Culkin, Michael McShane', 'Billionaire heir Richie Rich has it all, including Reggie Jackson as a batting coach and Claudia Schiffer as a personal trainer -- but no playmates. What\'s more, scoundrel Laurence Van Dough is scheming to take over the family empire. Uh-oh! Enter faithful butler Cadbury to save the day.', 'Comedy, Family', 5.8, 'https://image.tmdb.org/t/p/w500/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', 'https://www.youtube.com/embed/c7nNTdnPC3U', 11011),
(2, '劇場版 NARUTO -ナルト- 疾風伝', '2007-08-04 00:00:00', 'Japan', 'Pierrot', 94, 'C16', 'Junko Takeuchi, Chie Nakamura, Yōichi Masukawa, Kōichi Tōchika, Ayumi Fujimura, Yoshinori Fujita, Daisuke Kishio, Fumiko Orikasa, Miyuki Sawashiro, Katsuyuki Konishi', 'Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto\'s mission is to guard Shion, but she predicts Naruto\'s death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this \"prediction of death.\"', 'Animation, Action, Fantasy', 7.2, 'https://image.tmdb.org/t/p/w500/vDkct38sSFSWJIATlfJw0l3QOIR.jpg', 'Updating', 20982),
(3, 'Into the Storm', '2014-08-06 00:00:00', 'United States of America', 'RatPac Entertainment, New Line Cinema, Village Roadshow Pictures, Broken Road Productions, Warner Bros. Entertainment', 89, 'C16', 'Richard Armitage, Sarah Wayne Callies, Alycia Debnam-Carey, Matt Walsh, Nathan Kress, Jeremy Sumpter, Vincent McCurdy-Clark, Kyle Davis, Arlen Escarpeta, Brandon Ruiter', 'As a new day begins in the town of Silverton, its residents have little reason to believe it will be anything other than ordinary. Mother Nature, however has other plans. In the span of just a few hours, an unprecedented onslaught of powerful tornadoes ravages Silverton. Storm trackers predict that the worst is still to come, as terrified residents seek shelter, and professional storm-chasers run toward the danger, hoping to study the phenomenon close up and get a once-in-a-lifetime shot.', 'Action, Thriller', 6, 'https://image.tmdb.org/t/p/w500/kX4tEjFnXLKaa7hP8H9SuRsXxEt.jpg', 'https://www.youtube.com/embed/eierBlblwec', 216282),
(4, 'Aquaman', '2018-07-06 00:00:00', 'Australia, United States of America', 'DC Comics, DC Entertainment, Warner Bros. Pictures, The Safran Company, Rodeo FX, Panoramic Pictures, DC Films, Cruel & Unusual Films', 143, 'C16', 'Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson, Nicole Kidman, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, Ludi Lin, Michael Beach', 'Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm\'s half-human, half-Atlantean brother and true heir to the throne.', 'Action, Adventure, Fantasy', 6.9, 'https://image.tmdb.org/t/p/w500/xLPffWMhMj1l50ND3KchMjYoKmE.jpg', 'https://www.youtube.com/embed/2wcj6SrX4zw', 297802),
(5, 'The Last: Naruto the Movie', '2014-12-06 00:00:00', 'Japan', 'Aniplex', 114, 'C16', 'Junko Takeuchi, Nana Mizuki, Jun Fukuyama, Chie Nakamura, Showtaro Morikubo, Kazuhiko Inoue, Akira Ishida, Hideaki Tezuka, Yurika Hino, Tomomichi Nishimura', 'Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.', 'Action, Romance, Animation', 7.9, 'https://image.tmdb.org/t/p/w500/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg', 'https://www.youtube.com/embed/mksl3tYdyK4', 317442),
(6, 'Cruella', '2021-05-26 00:00:00', 'United Kingdom, United States of America', 'Walt Disney Pictures', 134, 'C16', 'Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser, Mark Strong, Tipper Seifert-Cleveland, Kirby Howell-Baptiste, Emily Beecham, John McCrea, Kayvan Novak', 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.', 'Comedy, Crime', 8.2, 'https://image.tmdb.org/t/p/w500/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg', 'https://www.youtube.com/embed/jpZrVxvG3mk', 337404),
(7, 'BORUTO -NARUTO THE MOVIE-', '2015-08-07 00:00:00', 'Japan', 'Pierrot, Studio Lagurus, Aniplex, Bandai Namco Entertainment, Bandai, DENTSU, Shueisha, TV Tokyo, Toho Co.', 95, 'C16', 'Yuko Sanpei, Kokoro Kikuchi, Junko Takeuchi, Noriaki Sugiyama, Daisuke Namikawa, Akira Ishida, Chie Nakamura, Nana Mizuki, Kazuhiko Inoue, Tesshou Genda', 'The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy with his Hokage duties, puts a damper on Boruto\'s fire. He ends up meeting his father\'s friend Sasuke, and requests to become... his apprentice!? The curtain on the story of the new generation rises!', 'Animation, Action, Comedy', 7.7, 'https://image.tmdb.org/t/p/w500/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg', 'https://www.youtube.com/embed/Qyonn5Vbg7s', 347201),
(8, 'No Time to Die', '2021-09-29 00:00:00', 'United Kingdom, United States of America', 'Eon Productions, Metro-Goldwyn-Mayer, United Artists, Universal Pictures', 163, 'C16', 'Daniel Craig, Rami Malek, Léa Seydoux, Ralph Fiennes, Ben Whishaw, Lashana Lynch, Naomie Harris, Jeffrey Wright, Christoph Waltz, Billy Magnussen', 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.', 'Adventure, Action, Thriller', 7.6, 'https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg', 'https://www.youtube.com/embed/N_gD9-Oa0fg', 370172),
(9, 'Space Jam: A New Legacy', '2021-07-08 00:00:00', 'United States of America', 'Warner Animation Group, SpringHill Entertainment, Proximity Media', 115, 'C16', 'LeBron James, Don Cheadle, Cedric Joe, Jeff Bergman, Gabriel Iglesias, Zendaya, Eric Bauza, Candi Milo, Bob Bergen, Fred Tatasciore', 'When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.\'s digitized champions on the court. It\'s Tunes versus Goons in the highest-stakes challenge of his life.', 'Animation, Family, Comedy, Science Fiction', 7.2, 'https://image.tmdb.org/t/p/w500/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg', 'https://www.youtube.com/embed/foNoodDwXS8', 379686),
(10, 'F9', '2021-05-19 00:00:00', 'United States of America', 'Original Film, One Race, Perfect Storm Entertainment, ZXY MOVIES', 143, 'C16', 'Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Michael Rooker, Helen Mirren', 'Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they\'ve ever encountered: his forsaken brother.', 'Action, Crime, Thriller', 7.4, 'https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg', 'https://www.youtube.com/embed/5eblKqTZ-0Q', 385128);`;

let price_type = `(1, 'Vé 2D - Ngày thường', 45000),
(2, 'Vé 2D - Ngày cuối tuần', 60000),
(3, 'Vé 2D - Ngày lễ', 65000),
(4, 'Vé 3D - Ngày thường', 65000),
(5, 'Vé 3D - Ngày cuối tuần', 80000),
(6, 'Vé 3D - Ngày lễ', 85000);`;

let theather = `(1, 'Rạp Metiz 1', 'Đường 2/9', 'Đà Nẵng',NULL),
(2, 'Rạp Metiz 2', 'Đường LTT', 'Đà Nẵng',NULL),
(3, 'Rạp Metiz 3', 'Đường PCT', 'Đà Nẵng',NULL),
(4, 'Rạp Metiz 1', 'Cầu Giấy', 'Hà Nội',NULL),
(5, 'Rạp Metiz 2', 'Cầu Giấy2', 'Hà Nội',NULL);`;

let room_film = `(1, 'Me1_num1', 8, 8, 1),
(2, 'Me1_num2', 8, 8, 1),
(3, 'Me1_num3', 8, 8, 1),
(4, 'Me2_num1', 8, 8, 2),
(5, 'Me2_num2', 8, 8, 2);`;

let show_time = `(1, '2021-11-19 19:00:00', '2021-11-19 21:00:00', 1, 2, 1),
(2, '2021-11-19 21:00:00', '2021-11-19 23:00:00', 1, 2, 4),
(3, '2021-11-19 21:00:00', '2021-11-19 23:00:00', 2, 2, 2),
(4, '2021-11-19 21:00:00', '2021-11-19 23:00:00', 1, 2, 2),
(5, '2021-11-19 21:00:00', '2021-11-19 23:00:00', 9, 2, 5);`;

function convertObject(arrLabel, str) {
  str = str.replace(/\(/g, "");
  str = str.replace(/\)/g, "");
  str = str.replace(/\)/g, "");
  str = str.replace(/\)/g, "");
  str = str.replace(/\, /g, ",");

  str = str.replace(/\;/g, "");
  str = str.replace(/NULL/g, "null");
  const arr = str.split("\n").map((row) => {
    let cleanRow = row;
    if (row[row.length - 1] === ",") {
      cleanRow = row.slice(0, -1);
    }
    const values = cleanRow.split(",");
    let obj = {};

    for (let i = 0; i < values.length; i++) {
      if (values[i] === "null") {
        obj[arrLabel[i]] = null;
      } else {
        if (values[i].indexOf("'") === -1) {
          obj[arrLabel[i]] = +values[i];
        } else {
          obj[arrLabel[i]] = values[i].replace(/\'/g, "");
        }
      }
    }
    return obj;
  });

  return arr;
}

const roleKey = [`id`, `name`];
const accountKey = [
  `id`,
  `username`,
  `password`,
  `name`,
  `phone`,
  `email`,
  `address`,
  `birthday`,
  `gender`,
  `emailToken`,
  `isVerified`,
  `role_id`,
];
const filmKey = [
  `id`,
  `name`,
  `time_release`,
  `country`,
  `director`,
  `duration`,
  `labor`,
  `stars`,
  `description`,
  `hashtag`,
  `rating`,
  `image`,
  `trailer`,
  `idFilmsOnWeb`,
];
const priceTypeKey = [`id`, `description`, `price`];
const theatherKey = [`id`, `name`, `address`, `city`, `account_id`];
const roomFilmKey = [`id`, `name`, `column`, `row`, `theater_id`];
const showTimeKey = [
  `id`,
  `time_start`,
  `time_end`,
  `film_id`,
  `price_type_id`,
  `room_film_id`,
];

const roles = convertObject(roleKey, role);

const accounts = convertObject(accountKey, account);

const priceTypes = convertObject(priceTypeKey, price_type);

const theathers = convertObject(theatherKey, theather);

const roomFilms = convertObject(roomFilmKey, room_film);

const showTimes = convertObject(showTimeKey, show_time);

const films = [
  {
    idFilmsOnWeb: 370172,
    name: "No Time to Die",
    time_release: "2021-09-29",
    country: "United Kingdom, United States of America",
    director:
      "Eon Productions, Metro-Goldwyn-Mayer, United Artists, Universal Pictures",
    duration: 163,
    labor: "C16",
    stars:
      "Daniel Craig, Rami Malek, Léa Seydoux, Ralph Fiennes, Ben Whishaw, Lashana Lynch, Naomie Harris, Jeffrey Wright, Christoph Waltz, Billy Magnussen",
    description:
      "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    hashtag: "Adventure, Action, Thriller",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    trailer: "https://www.youtube.com/embed/N_gD9-Oa0fg",
  },
  {
    idFilmsOnWeb: 399178,
    name: "Benediction",
    time_release: "2021-12-23",
    country: "United Kingdom",
    director:
      "Bankside Films, BBC Films, British Film Institute (BFI) Production Board, Creative England, EMU Films, M.Y.R.A. Entertainment, M.Y.R.A. Entertainment Europe",
    duration: 137,
    labor: "C16",
    stars:
      "Jack Lowden, Peter Capaldi, Simon Russell Beale, Jeremy Irvine, Kate Phillips, Gemma Jones, Ben Daniels, Edmund Kingsley, Harry Lawtey, Calam Lynch",
    description:
      "The story of soldier and poet Siegfried Sassoon (1886–1967), who was decorated for bravery on the Western Front, and is best remembered for his angry and compassionate poems about the First World War, which brought him public and critical acclaim. Avoiding the sentimentality and jingoism of many war poets, Sassoon wrote of the horror and brutality of trench warfare and contemptuously satirised generals, politicians, and churchmen for their incompetence and blind support of the war.",
    hashtag: "Drama, History, War",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/zyWvvtVvVDNuyCl2eNcYYnI4oIO.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 400090,
    name: "The Nightingale",
    time_release: "2018-09-23",
    country: "Australia",
    director:
      "Bron Studios, Causeway Films, Made Up Stories, FilmNation Entertainment, Adelaide Film Festival Investment Fund, Screen Australia, Screen Tasmania, South Australian Film Corporation, Creative Wealth Media Finance",
    duration: 136,
    labor: "C16",
    stars:
      "Aisling Franciosi, Sam Claflin, Baykali Ganambarr, Damon Herriman, Harry Greenwood, Ewen Leslie, Charlie Shotwell, Michael Sheasby, Matthew Sunderland, Magnolia Maymuru",
    description:
      "In 1825, Clare, a 21-year-old Irish convict, chases a British soldier through the rugged Tasmanian wilderness, bent on revenge for a terrible act of violence he committed against her family. She enlists the services of an Aboriginal tracker who is also marked by trauma from his own violence-filled past.",
    hashtag: "Drama, Thriller",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/hWA8QwSM1kJYMoTANEPoqrqBapg.jpg",
    trailer: "https://www.youtube.com/embed/nfPxmnMAyZw",
  },
  {
    idFilmsOnWeb: 412656,
    name: "Chaos Walking",
    time_release: "2021-02-24",
    country: "Canada, Hong Kong, Luxembourg, United States of America",
    director:
      "Quadrant Pictures, Lionsgate, Bron Studios, 3 Arts Entertainment, TIK Films, Hercules Film Fund, Allison Shearmur Productions, Creative Wealth Media Finance",
    duration: 109,
    labor: "C16",
    stars:
      "Tom Holland, Daisy Ridley, Mads Mikkelsen, Demián Bichir, David Oyelowo, Kurt Sutter, Cynthia Erivo, Bethany Anne Lind, Nick Jonas, Ray McKinnon",
    description:
      "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
    hashtag: "Science Fiction",
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",
    trailer: "https://www.youtube.com/embed/nRf4ZgzHoVw",
  },
  {
    idFilmsOnWeb: 424277,
    name: "Annette",
    time_release: "2021-07-06",
    country:
      "Belgium, Canada, France, Germany, Greece, Japan, Mexico, Switzerland",
    director:
      "Eurospace, Detailfilm, ARTE France Cinéma, CG Cinéma, Garidi Films, Théo Films, Tribus P Films, UGC, SCOPE Pictures, Wrong Men",
    duration: 140,
    labor: "C16",
    stars:
      "Adam Driver, Marion Cotillard, Simon Helberg, Devyn McDowell, Ron Mael, Russell Mael, Christiane Tchouhan, Franziska Grohmann, Cindy Almouzni, Sinay Bavurhe",
    description:
      "The story of Henry, a stand-up comedian with a fierce sense of humour and Ann, a singer of international renown. In the spotlight, they are the perfect couple, healthy, happy, and glamourous. The birth of their first child, Annette, a mysterious girl with an exceptional destiny, will change their lives.",
    hashtag: "Drama, Romance, Music",
    rating: 7.1,
    image: "https://image.tmdb.org/t/p/w500/4FTnypxpGltJdIARrfFsP31pGTp.jpg",
    trailer: "https://www.youtube.com/embed/aUM0NOHdJS0",
  },
  {
    idFilmsOnWeb: 425909,
    name: "Ghostbusters: Afterlife",
    time_release: "2021-11-11",
    country: "Canada, United States of America",
    director:
      "Columbia Pictures, Bron Studios, The Montecito Picture Company, Ghost Corps",
    duration: 124,
    labor: "C16",
    stars:
      "Carrie Coon, Paul Rudd, Finn Wolfhard, Mckenna Grace, Logan Kim, Celeste O'Connor, Bill Murray, Dan Aykroyd, Ernie Hudson, Annie Potts",
    description:
      "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
    hashtag: "Comedy, Fantasy, Adventure, Science Fiction",
    rating: 7.3,
    image: "https://image.tmdb.org/t/p/w500/kHNWm8YDl1Pf6tyzluLagbtkU94.jpg",
    trailer: "https://www.youtube.com/embed/lnKmAVLC3jU",
  },
  {
    idFilmsOnWeb: 430155,
    name: "Кома",
    time_release: "2019-11-19",
    country: "Russia",
    director:
      "Fresh Film, Cinema Fund, Mars Media Entertainment, Big Cinema House, Fond kino, Argunov Studio, Central Partnership",
    duration: 111,
    labor: "C16",
    stars:
      "Rinal Mukhametov, Anton Pampushnyy, Lyubov Aksyonova, Miloš Biković, Konstantin Lavronenko, Polina Kuzminskaya, Rostislav Gulbis, Vilen Babichev, Igor Sigaev, Evgeniya Karatygina",
    description:
      "A young and talented architect comes to his senses after a horrific accident only to find himself in the odd dystopian world. A world that is filled with the memories of all current coma patients. Just like a human memory this world is fragmental, chaotic and unstable. This is COMA: icecaps, rivers and cities can all exist in a space of a single room and laws of physics are no longer laws as they can be bent.",
    hashtag: "Science Fiction",
    rating: 6.3,
    image: "https://image.tmdb.org/t/p/w500/ijJm0RSeKIr67qkHLtSmtigS6ra.jpg",
    trailer: "https://www.youtube.com/embed/5WohqZM2m8U",
  },
  {
    idFilmsOnWeb: 438631,
    name: "Dune",
    time_release: "2021-09-15",
    country: "United States of America",
    director: "Legendary Pictures",
    duration: 155,
    labor: "C16",
    stars:
      "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, Sharon Duncan-Brewster, Stephen McKinley Henderson, Zendaya, Chang Chen",
    description:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    hashtag: "Science Fiction, Adventure",
    rating: 7.9,
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    trailer: "https://www.youtube.com/embed/w0HgHet0sxg",
  },
  {
    idFilmsOnWeb: 438695,
    name: "Sing 2",
    time_release: "2021-12-01",
    country: "United States of America",
    director: "Illumination Entertainment, Universal Pictures",
    duration: 110,
    labor: "C16",
    stars:
      "Matthew McConaughey, Reese Witherspoon, Scarlett Johansson, Taron Egerton, Bobby Cannavale, Tori Kelly, Nick Kroll, Halsey, Pharrell Williams, Nick Offerman",
    description:
      "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
    hashtag: "Animation, Comedy, Family, Music",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    trailer: "https://www.youtube.com/embed/EPZu5MA2uqI",
  },
  {
    idFilmsOnWeb: 449406,
    name: "Vivo",
    time_release: "2021-07-30",
    country: "United States of America",
    director:
      "Sony Pictures Animation, Columbia Pictures, Laurence Mark Productions",
    duration: 99,
    labor: "C16",
    stars:
      "Lin-Manuel Miranda, Ynairaly Simo, Zoe Saldana, Juan de Marcos González, Brian Tyree Henry, Gloria Estefan, Michael Rooker, Nicole Byer, Katie Lowes, Olivia Trujillo",
    description:
      "A music-loving kinkajou named Vivo embarks on the journey of a lifetime to fulfill his destiny and deliver a love song for an old friend.",
    hashtag: "Animation, Family, Comedy",
    rating: 7.7,
    image: "https://image.tmdb.org/t/p/w500/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg",
    trailer: "https://www.youtube.com/embed/BOe8L69JpVI",
  },
  {
    idFilmsOnWeb: 454527,
    name: "Benedetta",
    time_release: "2021-07-09",
    country: "France, Italy, Netherlands",
    director:
      "SBS Productions, Topkapi Films, Pathé, Canal+, Ciné+, Belga Films Fund, France 2 Cinéma, France 3 Cinéma, Belga Productions, CNC",
    duration: 131,
    labor: "C16",
    stars:
      "Virginie Efira, Charlotte Rampling, Daphne Patakia, Lambert Wilson, Olivier Rabourdin, Louise Chevillotte, Hervé Pierre, Clotilde Courau, David Clavel, Guilaine Londez",
    description:
      "In the late 17th century, with plague ravaging the land, Benedetta Carlini joins the convent in Pescia, Tuscany, as a novice. Capable from an early age of performing miracles, Benedetta’s impact on life in the community is immediate and momentous.",
    hashtag: "Drama, History, Romance",
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/3N39KDnL3d6eP6sGvERPRKyQ8PJ.jpg",
    trailer: "https://www.youtube.com/embed/DW5wOtLSfPs",
  },
  {
    idFilmsOnWeb: 459151,
    name: "The Boss Baby: Family Business",
    time_release: "2021-07-01",
    country: "United States of America",
    director: "DreamWorks Animation, Universal Pictures",
    duration: 107,
    labor: "C16",
    stars:
      "Alec Baldwin, James Marsden, Amy Sedaris, Jeff Goldblum, Eva Longoria, Lisa Kudrow, Jimmy Kimmel, Ariana Greenblatt, James McGrath, Raphael Alejandro",
    description:
      "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
    hashtag: "Animation, Comedy, Adventure, Family",
    rating: 7.7,
    image: "https://image.tmdb.org/t/p/w500/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
    trailer: "https://www.youtube.com/embed/-rF2j6K5FoM",
  },
  {
    idFilmsOnWeb: 460458,
    name: "Resident Evil: Welcome to Raccoon City",
    time_release: "2021-11-24",
    country: "France, Germany, United Kingdom, United States of America",
    director:
      "Constantin Film, Tea Shop & Film Company, Davis Films, The Fyzz, Screen Gems",
    duration: 107,
    labor: "C16",
    stars:
      "Kaya Scodelario, Robbie Amell, Hannah John-Kamen, Tom Hopper, Avan Jogia, Donal Logue, Neal McDonough, Lily Gao, Chad Rook, Marina Mazepa",
    description:
      "Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
    hashtag: "Horror, Action, Science Fiction",
    rating: 6.4,
    image: "https://image.tmdb.org/t/p/w500/3eVpNCMoi3C8lA0F0n2retnwvCK.jpg",
    trailer: "https://www.youtube.com/embed/IQqqAWMIIAQ",
  },
  {
    idFilmsOnWeb: 476669,
    name: "The King's Man",
    time_release: "2021-12-21",
    country: "United Kingdom",
    director: "Marv Films, Cloudy Productions",
    duration: 131,
    labor: "C16",
    stars:
      "Ralph Fiennes, Gemma Arterton, Rhys Ifans, Matthew Goode, Tom Hollander, Harris Dickinson, Daniel Brühl, Djimon Hounsou, Charles Dance, Aaron Taylor-Johnson",
    description:
      "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    hashtag: "Action, Adventure, Thriller",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/nj5HmHRZsrYQEYYXyAusFv35erP.jpg",
    trailer: "https://www.youtube.com/embed/_0vKejp3rvA",
  },
  {
    idFilmsOnWeb: 482373,
    name: "Don't Breathe 2",
    time_release: "2021-08-12",
    country: "United States of America",
    director:
      "Ghost House Pictures, Stage 6 Films, Good Universe, Bad Hombre Films, Screen Gems",
    duration: 98,
    labor: "C16",
    stars:
      "Stephen Lang, Brendan Sexton III, Madelyn Grace, Stephanie Arcila, Rocci Williams, Bobby Schofield, Adam Young, Fiona O'Shaughnessy, Steffan Rhodri, Diaana Babnicova",
    description:
      "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.",
    hashtag: "Thriller, Horror",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/r7HEBkkRN93d3eFBZgPJfRaob5p.jpg",
    trailer: "https://www.youtube.com/embed/dCDLPlZAoeY",
  },
  {
    idFilmsOnWeb: 4935,
    name: "ハウルの動く城",
    time_release: "2004-11-19",
    country: "Japan",
    director:
      "Studio Ghibli, Buena Vista Home Entertainment, DENTSU Music And Entertainment, Mitsubishi, Nippon Television Network Corporation, Tohokushinsha Film Corporation, Tokuma Shoten, d-rights",
    duration: 119,
    labor: "C16",
    stars:
      "Chieko Baisho, Takuya Kimura, Akihiro Miwa, Tatsuya Gashūin, Ryunosuke Kamiki, Haruko Kato, Yayoi Kazuki, Mayuno Yasokawa, Yo Oizumi, Rio Kanno",
    description:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    hashtag: "Fantasy, Animation, Adventure",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/TkTPELv4kC3u1lkloush8skOjE.jpg",
    trailer: "https://www.youtube.com/embed/iwROgK94zcM",
  },
  {
    idFilmsOnWeb: 501841,
    name: "A Journal for Jordan",
    time_release: "2021-12-22",
    country: "Canada, United States of America",
    director:
      "Outlier Society Productions, Escape Artists, Sony Pictures, Bron Studios, Columbia Pictures, Creative Wealth Media Finance, Mundy Lane Entertainment",
    duration: 131,
    labor: "C16",
    stars:
      "Michael B. Jordan, Chanté Adams, Jalon Christian, Gregory Sanon, Cleveland Berto, Johnny M. Wu, Nicholas G. Sims, Vanessa Aspillaga, Joseph Brooks, Spencer Squire",
    description:
      "Based on the true story of First Sergeant Charles Monroe King, a soldier deployed to Iraq begins to keep a journal of love and advice for his infant son. Back at home, senior New York Times editor Dana Canedy revisits the story of her unlikely, life-altering relationship with King and his enduring devotion to her and their child.",
    hashtag: "Drama, Romance",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/2kYYbeFhEfbZKTaivO8zwQMdipp.jpg",
    trailer: "https://www.youtube.com/embed/FOzrXqf5pvE",
  },
  {
    idFilmsOnWeb: 511809,
    name: "West Side Story",
    time_release: "2021-12-08",
    country: "United States of America",
    director: "Amblin Entertainment, 20th Century Studios, TSG Entertainment",
    duration: 156,
    labor: "C16",
    stars:
      "Ansel Elgort, Rachel Zegler, Rita Moreno, Ariana DeBose, David Alvarez, Corey Stoll, Brian d'Arcy James, Josh Andrés Rivera, Mike Faist, Ana Isabelle",
    description:
      "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
    hashtag: "Romance, Drama, Crime, Music",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/zeAZTPxV5xZRNEX3rZotnsp7IVo.jpg",
    trailer: "https://www.youtube.com/embed/A5GJLwWiYSg",
  },
  {
    idFilmsOnWeb: 512195,
    name: "Red Notice",
    time_release: "2021-11-04",
    country: "United States of America",
    director:
      "Flynn Picture Company, Seven Bucks Productions, Legendary Pictures, Bad Version, Inc.",
    duration: 117,
    labor: "C16",
    stars:
      "Dwayne Johnson, Ryan Reynolds, Gal Gadot, Ritu Arya, Chris Diamantopoulos, Ivan Mbakop, Vincenzo Amato, Rafael Petardi, Seth Michaels, Sebastien Large",
    description:
      "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    hashtag: "Action, Comedy, Crime, Thriller",
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    trailer: "https://www.youtube.com/embed/Pj0wz7zu3Ms",
  },
  {
    idFilmsOnWeb: 516329,
    name: "Antlers",
    time_release: "2021-10-28",
    country: "Canada, Mexico, United States of America",
    director:
      "Searchlight Pictures, Phantom Four, Double Dare You Productions, Mirada Studio, TSG Entertainment",
    duration: 99,
    labor: "C16",
    stars:
      "Keri Russell, Jesse Plemons, Jeremy Thomas, Graham Greene, Scott Haze, Sawyer Jones, Rory Cochrane, Amy Madigan, Cody Davis, Glynis Davies",
    description:
      "A small-town Oregon teacher and her brother, the local sheriff, discover a young student is harbouring a dangerous secret that could have frightening consequences.",
    hashtag: "Drama, Horror, Mystery",
    rating: 6.5,
    image: "https://image.tmdb.org/t/p/w500/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
    trailer: "https://www.youtube.com/embed/2aiYxwVuZ1o",
  },
  {
    idFilmsOnWeb: 524369,
    name: "The Many Saints of Newark",
    time_release: "2021-09-22",
    country: "United States of America",
    director: "Warner Bros. Pictures, HBO Films, New Line Cinema, Chase Films",
    duration: 120,
    labor: "C16",
    stars:
      "Alessandro Nivola, Leslie Odom Jr., Michael Gandolfini, Ray Liotta, Michela De Rossi, Vera Farmiga, Corey Stoll, Jon Bernthal, Billy Magnussen, John Magaro",
    description:
      "Young Anthony Soprano is growing up in one of the most tumultuous eras in Newark, N.J., history, becoming a man just as rival gangsters start to rise up and challenge the all-powerful DiMeo crime family. Caught up in the changing times is the uncle he idolizes, Dickie Moltisanti, whose influence over his nephew will help shape the impressionable teenager into the all-powerful mob boss, Tony Soprano.",
    hashtag: "Crime, Drama",
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/dVoQSUomKuv12BUpuWTjaPThmyO.jpg",
    trailer: "https://www.youtube.com/embed/d9Em4ckh878",
  },
  {
    idFilmsOnWeb: 524434,
    name: "Eternals",
    time_release: "2021-11-03",
    country: "United States of America",
    director: "Marvel Studios",
    duration: 157,
    labor: "C16",
    stars:
      "Gemma Chan, Richard Madden, Angelina Jolie, Kumail Nanjiani, Barry Keoghan, Lauren Ridloff, Lia McHugh, Brian Tyree Henry, Ma Dong-seok, Salma Hayek",
    description:
      "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
    hashtag: "Action, Adventure, Fantasy, Science Fiction",
    rating: 7.1,
    image: "https://image.tmdb.org/t/p/w500/4DiJQ1mBp4ztoznZADIrPg69v46.jpg",
    trailer: "https://www.youtube.com/embed/x_me3xsvDgk",
  },
  {
    idFilmsOnWeb: 537116,
    name: "tick, tick… BOOM!",
    time_release: "2021-11-11",
    country: "United States of America",
    director: "Imagine Entertainment, 5000 Broadway Productions",
    duration: 121,
    labor: "C16",
    stars:
      "Andrew Garfield, Alexandra Shipp, Robin de Jesús, Vanessa Hudgens, Joshua Henry, Jonathan Marc Sherman, MJ Rodriguez, Ben Levi Ross, Judith Light, Bradley Whitford",
    description:
      "On the cusp of his 30th birthday, Jonathon Larson, a promising young theater composer, navigates love, friendship, and the pressures of life as an artist in New York City.",
    hashtag: "Drama",
    rating: 8,
    image: "https://image.tmdb.org/t/p/w500/DPmfcuR8fh8ROYXgdjrAjSGA0o.jpg",
    trailer: "https://www.youtube.com/embed/YJserno8tyU",
  },
  {
    idFilmsOnWeb: 542178,
    name: "The French Dispatch",
    time_release: "2021-10-21",
    country: "Germany, United States of America",
    director:
      "American Empirical Pictures, Indian Paintbrush, Searchlight Pictures, Studio Babelsberg",
    duration: 108,
    labor: "C16",
    stars:
      "Benicio del Toro, Adrien Brody, Tilda Swinton, Léa Seydoux, Frances McDormand, Timothée Chalamet, Lyna Khoudri, Jeffrey Wright, Mathieu Amalric, Steve Park",
    description:
      "The quirky staff of an American magazine based in 1970s France puts out its last issue, with stories featuring an artist sentenced to life imprisonment, student riots, and a kidnapping resolved by a chef.",
    hashtag: "Drama, Comedy, Romance",
    rating: 7.4,
    image: "https://image.tmdb.org/t/p/w500/6JXR3KJH5roiBCjWFt09xfgxHZc.jpg",
    trailer: "https://www.youtube.com/embed/TcPk2p0Zaw4",
  },
  {
    idFilmsOnWeb: 546121,
    name: "Run",
    time_release: "2020-11-20",
    country: "United States of America",
    director: "Search Party",
    duration: 90,
    labor: "C16",
    stars:
      "Sarah Paulson, Kiera Allen, Pat Healy, Sara Sohn, Erik Athavale, B. J. Harrison, Sharon Bajer, Onalee Ames, Joanne Rodriguez, Ernie Foort",
    description:
      "Chloe, a teenager who is confined to a wheelchair, is homeschooled by her mother, Diane. Chloe soon becomes suspicious of her mother and begins to suspect that she may be harboring a dark secret.",
    hashtag: "Thriller, Horror, Drama",
    rating: 7.4,
    image: "https://image.tmdb.org/t/p/w500/ilHG4EayOVoYeKqslspY3pR4wzC.jpg",
    trailer: "https://www.youtube.com/embed/0Dhh7q9Us5c",
  },
  {
    idFilmsOnWeb: 567690,
    name: "Dear Evan Hansen",
    time_release: "2021-09-24",
    country: "China, United States of America",
    director:
      "Universal Pictures, Marc Platt Productions, Perfect World Pictures",
    duration: 137,
    labor: "C16",
    stars:
      "Ben Platt, Kaitlyn Dever, Amy Adams, Danny Pino, Julianne Moore, Amandla Stenberg, Nik Dodani, Colton Ryan, DeMarius R. Copes, Liz Kate",
    description:
      "Evan Hansen, a high schooler with social anxiety, unintentionally gets caught up in a lie after the family of a classmate who committed suicide mistakes one of Hansen’s letters for their son’s suicide note.",
    hashtag: "Drama",
    rating: 6.6,
    image: "https://image.tmdb.org/t/p/w500/83pobg0tx4r4JeLenCAemanpnS2.jpg",
    trailer: "https://www.youtube.com/embed/g_c_Jd-hP-s",
  },
  {
    idFilmsOnWeb: 568124,
    name: "Encanto",
    time_release: "2021-11-24",
    country: "United States of America",
    director: "Walt Disney Animation Studios, Walt Disney Pictures",
    duration: 102,
    labor: "C16",
    stars:
      "Stephanie Beatriz, María Cecilia Botero, John Leguizamo, Mauro Castillo, Jessica Darrow, Angie Cepeda, Carolina Gaitán, Diane Guerrero, Wilmer Valderrama, Rhenzy Feliz",
    description:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    hashtag: "Animation, Comedy, Family, Fantasy",
    rating: 7.3,
    image: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    trailer: "https://www.youtube.com/embed/CaimKeDcudo",
  },
  {
    idFilmsOnWeb: 574060,
    name: "Gunpowder Milkshake",
    time_release: "2021-07-14",
    country: "France, Germany, United States of America",
    director:
      "StudioCanal, STX Films, Studio Babelsberg, Canal+, Ciné+, The Picture Company",
    duration: 114,
    labor: "C16",
    stars:
      "Karen Gillan, Lena Headey, Chloe Coleman, Carla Gugino, Michelle Yeoh, Angela Bassett, Paul Giamatti, Ralph Ineson, Adam Nagaitis, Michael Smiley",
    description:
      "In her turbulent life as a professional assassin, Sam has no choice but to go rogue to save the life of an innocent 8-year-old girl in the middle of the gang war she has unleashed.",
    hashtag: "Action, Thriller, Crime",
    rating: 6.4,
    image: "https://image.tmdb.org/t/p/w500/56ofGPMOZCwlTjTao5fB7vnGOoj.jpg",
    trailer: "https://www.youtube.com/embed/YLMT5uXjFLY",
  },
  {
    idFilmsOnWeb: 575088,
    name: "Яга. Кошмар тёмного леса",
    time_release: "2020-02-27",
    country: "Russia",
    director: "QS Films, Non-Stop Productions",
    duration: 96,
    labor: "C16",
    stars:
      "Oleg Chugunov, Glafira Golubeva, Artem Zhigulin, Igor Khripunov, Svetlana Ustinova, Aleksey Rozin, Maryana Spivak, Marta Timofeeva, Daniil Filippov, Evgeniya Evstigneeva",
    description:
      "The young family who moved to a new apartment on the outskirts of the city. The nanny hired by them for the newborn daughter quickly gained confidence. However, the older boy, Egor, talks about the frightening behavior of a woman, but his parents do not believe him. The surveillance cameras installed by the father for comfort only confirm everything is in order. Then one day, Egor, returning home, finds no trace of either the nanny or the little sister, and the parents are in a strange trance and do not even remember that they had a daughter. Then Egor, together with his friends, goes in search, during which it turns out that the nanny is an ancient Slavic demon, popularly known as Baba Yaga.",
    hashtag: "Horror",
    rating: 6,
    image: "https://image.tmdb.org/t/p/w500/8m5HTXzwewlfXhtZtLlLts53YTW.jpg",
    trailer: "https://www.youtube.com/embed/oy62FFqLlno",
  },
  {
    idFilmsOnWeb: 576352,
    name: "她房間裏的雲",
    time_release: "2021-12-22",
    country: "China, Hong Kong",
    director: "Blackfin (Beijing) Culture & Media Co., Rediance",
    duration: 98,
    labor: "C16",
    stars: "Jin Jing, Liu Dan, Zhou Chen, Ye Hongming, Dong Kangning",
    description:
      "Muzi's parents' old apartment is still there. A bed, an abandoned chair, a window falling off its hinges – the remnants of a relationship that has moved on. Her father has started a new family, her mother has friends abroad; it seems like only Muzi cares about this place. In The Cloud in Her Room, she wanders several times through this static past.",
    hashtag: "Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/lrORLi4BFj1EA6L8EFVcvEqJg7u.jpg",
    trailer: "https://www.youtube.com/embed/xdMX0XJqXZw",
  },
  {
    idFilmsOnWeb: 576845,
    name: "Last Night in Soho",
    time_release: "2021-10-21",
    country: "United Kingdom",
    director:
      "Focus Features, Film4 Productions, Working Title Films, Big Talk Productions, Complete Fiction, Perfect World Pictures",
    duration: 117,
    labor: "C16",
    stars:
      "Thomasin McKenzie, Anya Taylor-Joy, Matt Smith, Rita Tushingham, Michael Ajao, Synnøve Karlsen, Pauline McLynn, Terence Stamp, Diana Rigg, Aimée Cassettari",
    description:
      "A young girl, passionate about fashion design, is mysteriously able to enter the 1960s where she encounters her idol, a dazzling wannabe singer. But 1960s London is not what it seems, and time seems to be falling apart with shady consequences.",
    hashtag: "Horror, Mystery, Thriller",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/ahbwIJl7T0D34m3sPKlBaCqs2xH.jpg",
    trailer: "https://www.youtube.com/embed/XgNrL4Kf7yU",
  },
  {
    idFilmsOnWeb: 580489,
    name: "Venom: Let There Be Carnage",
    time_release: "2021-09-30",
    country: "United States of America",
    director:
      "Marvel Entertainment, Columbia Pictures, Pascal Pictures, Matt Tolmach Productions, Avi Arad Productions",
    duration: 97,
    labor: "C16",
    stars:
      "Tom Hardy, Woody Harrelson, Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, Peggy Lu, Sian Webber, Michelle Greenidge, Rob Bowen",
    description:
      "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    hashtag: "Science Fiction, Action, Adventure",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    trailer: "https://www.youtube.com/embed/GVwq2HlKYpE",
  },
  {
    idFilmsOnWeb: 585245,
    name: "Clifford the Big Red Dog",
    time_release: "2021-11-10",
    country: "Canada, United Kingdom, United States of America",
    director:
      "Paramount, Entertainment One, Kerner Entertainment Company, Scholastic Entertainment, New Republic Pictures, Walden Media",
    duration: 97,
    labor: "C16",
    stars:
      "Darby Camp, Jack Whitehall, Izaac Wang, John Cleese, Tony Hale, David Alan Grier, Paul Rodríguez, Horatio Sanz, Sienna Guillory, Rosie Perez",
    description:
      "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
    hashtag: "Animation, Comedy, Family",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg",
    trailer: "https://www.youtube.com/embed/PsE3aHTkQYk",
  },
  {
    idFilmsOnWeb: 588921,
    name: "Ainbo: Spirit of the Amazon",
    time_release: "2021-02-09",
    country: "Peru",
    director: "Tunche Films",
    duration: 84,
    labor: "C16",
    stars:
      "Thom Hoffman, Bernardo de Paula, Dino Andrade, Alejandra Gollas, Lola Raie, Yeni Alvarez, Rene Mujica, Susana Ballesteros, Naomi Serrano, Gerardo Prat",
    description:
      "An epic journey of a young hero and her Spirit Guides, 'Dillo' a cute and humorous armadillo and \"Vaca\" a goofy oversized tapir, who embark on a quest to save their home in the spectacular Amazon Rainforest.",
    hashtag: "Adventure, Animation, Family, Fantasy",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/l8HyObVj8fPrzacAPtGWWLDhcfh.jpg",
    trailer: "https://www.youtube.com/embed/fMbV1BDlmqQ",
  },
  {
    idFilmsOnWeb: 592508,
    name: "Sooryavanshi",
    time_release: "2021-11-05",
    country: "India",
    director:
      "Reliance Entertainment, Rohit Shetty Productions, Dharma Productions",
    duration: 145,
    labor: "C16",
    stars:
      "Akshay Kumar, Katrina Kaif, Ajay Devgn, Ranveer Singh, Jackie Shroff, Javed Jaffrey, Kumud Mishra, Abhimanyu Singh, Nikitin Dheer, Gulshan Grover",
    description:
      "A fearless, faithful albeit slightly forgetful Mumbai cop, Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India pulls out all the stops and stunts to thwart a major conspiracy to attack his city.",
    hashtag: "Action, Drama, Crime",
    rating: 6.2,
    image: "https://image.tmdb.org/t/p/w500/1vuix8r1CJ2M6IldR27Z95hWm7e.jpg",
    trailer: "https://www.youtube.com/embed/u5r77-OQwa8",
  },
  {
    idFilmsOnWeb: 597208,
    name: "Nightmare Alley",
    time_release: "2021-12-02",
    country: "United States of America",
    director:
      "Searchlight Pictures, TSG Entertainment, Double Dare You Productions",
    duration: 139,
    labor: "C16",
    stars:
      "Bradley Cooper, Cate Blanchett, Toni Collette, Willem Dafoe, Richard Jenkins, Rooney Mara, Ron Perlman, Mary Steenburgen, David Strathairn, Holt McCallany",
    description:
      "An ambitious young carny with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
    hashtag: "Drama, Crime, Mystery, Thriller",
    rating: 8,
    image: "https://image.tmdb.org/t/p/w500/gsL1K72pjWwllofWbkGbLAqkD40.jpg",
    trailer: "https://www.youtube.com/embed/Q81Yf46Oj3s",
  },
  {
    idFilmsOnWeb: 597890,
    name: "Voyagers",
    time_release: "2021-04-08",
    country: "United States of America",
    director: "Nota Bene Film Group, Thunder Road",
    duration: 108,
    labor: "C16",
    stars:
      "Tye Sheridan, Lily-Rose Depp, Fionn Whitehead, Colin Farrell, Chanté Adams, Viveik Kalra, Archie Madekwe, Quintessa Swindell, Isaac Hempstead-Wright, Madison Hu",
    description:
      "With the future of the human race at stake, a group of young men and women -- bred for intelligence and obedience -- embark on an expedition to colonize a distant planet. When they uncover disturbing secrets about the mission, they defy their training and begin to explore their most primitive natures. As life on the ship descends into chaos, they soon become consumed by fear, lust and an insatiable hunger for power.",
    hashtag: "Science Fiction, Thriller",
    rating: 6.2,
    image: "https://image.tmdb.org/t/p/w500/gn2vCmWO7jQBBto9SYuBHYZARaU.jpg",
    trailer: "https://www.youtube.com/embed/EwJkexUBSeg",
  },
  {
    idFilmsOnWeb: 598014,
    name: "Последний богатырь: Посланник тьмы",
    time_release: "2021-12-23",
    country: "Russia",
    director: "Cinema Fund, Yellow, Black & White, The Walt Disney Company CIS",
    duration: 0,
    labor: "C16",
    stars:
      "Viktor Horinyak, Mila Syvatska, Ekaterina Vilkova, Elena Yakovleva, Konstantin Lavronenko, Evgeniy Dyatlov, Timofey Tribuntsev, Alesya Lukyanova, Garik Kharlamov, Sergey Burunov",
    description:
      "Now that Ivan is about to turn 21, he is now grown up and finally old enough to marry the beautiful Vasilisa. But when Vasilisa is kidnapped and trapped in modern Moscow, Ivan and his friends must travel to the present day to rescue her.",
    hashtag: "Fantasy, Adventure",
    rating: 10,
    image: "https://image.tmdb.org/t/p/w500/xKAjvSfk7PSxOx78gesVOIYmmMn.jpg",
    trailer: "https://www.youtube.com/embed/xp_fNfcIP9Q",
  },
  {
    idFilmsOnWeb: 600583,
    name: "The Power of the Dog",
    time_release: "2021-09-13",
    country: "Australia, Canada, New Zealand, United Kingdom",
    director:
      "BBC Films, See-Saw Films, Cross City Films, New Zealand Film Commission, Bad Girl Creek, Max Films",
    duration: 127,
    labor: "C16",
    stars:
      "Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, Kodi Smit-McPhee, Thomasin McKenzie, Frances Conroy, Keith Carradine, Genevieve Lemon, Adam Beach, Peter Carroll",
    description:
      "A domineering but charismatic rancher wages a war  of intimidation on his brother's new wife and her teen son, until long-hidden secrets come to light.",
    hashtag: "Drama, Western",
    rating: 6.6,
    image: "https://image.tmdb.org/t/p/w500/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg",
    trailer: "https://www.youtube.com/embed/LRDPo0CHrko",
  },
  {
    idFilmsOnWeb: 602223,
    name: "The Forever Purge",
    time_release: "2021-06-30",
    country: "United States of America",
    director:
      "Blumhouse Productions, Platinum Dunes, Universal Pictures, Perfect World Pictures, Man in A Tree",
    duration: 103,
    labor: "C16",
    stars:
      "Ana de la Reguera, Tenoch Huerta, Josh Lucas, Leven Rambin, Cassidy Freeman, Alejandro Edda, Will Patton, Susie Abromeit, Anthony Molinari, Will Brittain",
    description:
      "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.",
    hashtag: "Horror, Action, Thriller",
    rating: 7.3,
    image: "https://image.tmdb.org/t/p/w500/lB068qa6bQ0QKYKyC2xnYGvYjl7.jpg",
    trailer: "https://www.youtube.com/embed/xOrXpK-rUaI",
  },
  {
    idFilmsOnWeb: 603,
    name: "The Matrix",
    time_release: "1999-03-30",
    country: "Australia, United States of America",
    director:
      "Village Roadshow Pictures, Groucho II Film Partnership, Silver Pictures, Warner Bros. Pictures",
    duration: 136,
    labor: "C16",
    stars:
      "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, Joe Pantoliano, Gloria Foster, Marcus Chong, Paul Goddard, Robert Taylor, Julian Arahanga",
    description:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    hashtag: "Action, Science Fiction",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    trailer: "https://www.youtube.com/embed/L0fw0WzFaBM",
  },
  {
    idFilmsOnWeb: 603661,
    name: "The Hating Game",
    time_release: "2021-12-09",
    country: "United States of America",
    director:
      "BCDF Pictures, Convergent Media, Big Indie Pictures, Federal Films, Mister Smith Entertainment, Vertical Entertainment",
    duration: 98,
    labor: "C16",
    stars:
      "Lucy Hale, Austin Stowell, Yasha Jackson, Sakina Jaffrey, Corbin Bernsen, Kathryn Boswell",
    description:
      "Resolving to achieve professional success without compromising her ethics, Lucy embarks on a ruthless game of one-upmanship against cold and efficient nemesis Joshua, a rivalry that is complicated by her growing attraction to him.",
    hashtag: "Comedy, Romance",
    rating: 7.1,
    image: "https://image.tmdb.org/t/p/w500/prbZxJxGcy07y60eq8lCGMciTYz.jpg",
    trailer: "https://www.youtube.com/embed/j3qBGOD4b4A",
  },
  {
    idFilmsOnWeb: 612491,
    name: "Supereroi",
    time_release: "2021-12-23",
    country: "Italy",
    director: "Medusa Film, Lotus Production",
    duration: 100,
    labor: "C16",
    stars:
      "Alessandro Borghi, Jasmine Trinca, Greta Scarano, Vinicio Marchioni, Linda Caridi, Gwendolyn Gourvenec, Beppe Severgnini, Flavio Parenti, Angelica Leo, Giacomo Mattia",
    description:
      "The story of a young couple who falls in love and struggles to keep its relationship alive going through tenderness and fights, lies and emotions, secrets and cheatings. A sentimental dramedy about couples and the effect of time passing on their relationships, posing a simple but profound question: what superpowers you need to have, to love each other your whole life?",
    hashtag: "Comedy, Romance",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/rzxFBzBCINTabO9eH31GYrTIfHE.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 613583,
    name: "Chacun chez soi",
    time_release: "2021-06-02",
    country: "France",
    director: "Alter Films, StudioCanal, France 2 Cinéma",
    duration: 83,
    labor: "C16",
    stars:
      "Michèle Laroque, Stéphane De Groodt, Alice de Lencquesaing, Olivier Rosemberg, Virginia Anderson, Olga Mouak, Oriane Deschamps, Galice Gracci, Valéria Nikov, BANGA",
    description:
      "Catherine and Yann, happily married for many years, should have spent the year travelling abroad. But since he sold his business, Yann has been too busy with his bonsai trees and keeps postponing the big trip. Things go from bad to worse when their 27-year-old broke daughter and her boyfriend lose their apartment and come knocking on the door to stay. With Yann’s mid-life crisis spinning out of control, their couch surfing daughter and partner getting increasingly invasive and their stay becoming indefinite, Catherine will try everything to kick them out of the parental home and get her life back on track!",
    hashtag: "Comedy",
    rating: 5.4,
    image: "https://image.tmdb.org/t/p/w500/4BQ8N6pq7oW2l4A1nbIptIgVb3m.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 614917,
    name: "King Richard",
    time_release: "2021-11-18",
    country: "United States of America",
    director:
      "Star Thrower Entertainment, Westbrook Studios, Warner Bros. Pictures, Overbrook Entertainment",
    duration: 145,
    labor: "C16",
    stars:
      "Will Smith, Demi Singleton, Saniyya Sidney, Aunjanue Ellis, Jon Bernthal, Tony Goldwyn, Susie Abromeit, Dylan McDermott, Judith Chapman, Katrina Begin",
    description:
      "The story of how Richard Williams served as a coach to his daughters Venus and Serena, who will soon become two of the most legendary tennis players in history.",
    hashtag: "Drama, History",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/qQl0QS5P15vVzUcaP8rAqxbQ6Wp.jpg",
    trailer: "https://www.youtube.com/embed/_6bsugyNpDU",
  },
  {
    idFilmsOnWeb: 615666,
    name: "A Boy Called Christmas",
    time_release: "2021-11-25",
    country: "United Kingdom",
    director: "StudioCanal, Blueprint Pictures",
    duration: 104,
    labor: "C16",
    stars:
      "Henry Lawfull, Kristen Wiig, Michiel Huisman, Maggie Smith, Sally Hawkins, Jim Broadbent, Toby Jones, Rune Temte, Zoe Colletti, Indica Watson",
    description:
      "An ordinary young boy called Nikolas sets out on an extraordinary adventure into the snowy north in search of his father who is on a quest to discover the fabled village of the elves, Elfhelm. Taking with him a headstrong reindeer called Blitzen and a loyal pet mouse, Nikolas soon meets his destiny in this magical and endearing story that proves nothing is impossible…",
    hashtag: "Family, Adventure, Fantasy",
    rating: 7.8,
    image: "https://image.tmdb.org/t/p/w500/1sRejtiHOZGggZd9RcmdqbapLM5.jpg",
    trailer: "https://www.youtube.com/embed/aFI_aiidke0",
  },
  {
    idFilmsOnWeb: 617209,
    name: "Si Juki the Movie: Hantu Pulau Monyet",
    time_release: "2021-12-23",
    country: "Indonesia",
    director: "Falcon Pictures",
    duration: 0,
    labor: "C16",
    stars:
      "Indro, Megan Domani, Bryan Domani, Jaja Mihardja, Mandra YS, Maya Wulan, Andovi da Lopez, Coki Pardede, Tretan Muslim, Rigen Rakelna",
    description: "Plot unknown.",
    hashtag: "Animation",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/1kFA6E23mjScoCevHYp1XFbEa6E.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 617502,
    name: "Jolt",
    time_release: "2021-07-15",
    country: "Bulgaria, United States of America",
    director:
      "Millennium Films, Amazon Studios, Campbell Grobman Films, Busted Shark Productions, Electric Films, Nu Boyana Film Studios",
    duration: 91,
    labor: "C16",
    stars:
      "Kate Beckinsale, Stanley Tucci, Bobby Cannavale, Jai Courtney, Laverne Cox, David Bradley, Susan Sarandon, Ori Pfeffer, James Grogan, Lili Rich",
    description:
      "Lindy is an acid-tongued woman with rage issues who controls her temper by shocking herself with an electrode vest. One day she makes a connection with Justin, who gives her a glimmer of hope for a shock-free future, but when he’s murdered she launches herself on a revenge-fueled rampage in pursuit of his killer.",
    hashtag: "Action, Comedy",
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/gYZAHan5CHPFXORpQMvOjCTug4E.jpg",
    trailer: "https://www.youtube.com/embed/3BSSoD73TSk",
  },
  {
    idFilmsOnWeb: 617653,
    name: "The Last Duel",
    time_release: "2021-10-13",
    country: "United Kingdom, United States of America",
    director:
      "20th Century Studios, Scott Free Productions, Pearl Street Films, TSG Entertainment",
    duration: 152,
    labor: "C16",
    stars:
      "Matt Damon, Adam Driver, Jodie Comer, Harriet Walter, Ben Affleck, Alex Lawther, Marton Csokas, Nathaniel Parker, Tallulah Haddon, Adam Nagaitis",
    description:
      "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
    hashtag: "Action, Drama, History",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
    trailer: "https://www.youtube.com/embed/mgygUwPJvYk",
  },
  {
    idFilmsOnWeb: 619778,
    name: "Malignant",
    time_release: "2021-09-01",
    country: "United States of America",
    director:
      "Warner Bros. Pictures, New Line Cinema, Starlight International Media, Midas Innovation, Atomic Monster, BOOM! Studios",
    duration: 111,
    labor: "C16",
    stars:
      "Annabelle Wallis, Maddie Hasson, George Young, Michole Briana White, Mckenna Grace, Jacqueline McKenzie, Jake Abel, Ray Chase, Jean Louisa Kelly, Susanna Thompson",
    description:
      "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities with a mysterious tie to her past.",
    hashtag: "Thriller, Horror, Mystery",
    rating: 7,
    image: "https://image.tmdb.org/t/p/w500/dGv2BWjzwAz6LB8a8JeRIZL8hSz.jpg",
    trailer: "https://www.youtube.com/embed/uRrlAk9kChA",
  },
  {
    idFilmsOnWeb: 624860,
    name: "The Matrix Resurrections",
    time_release: "2021-12-16",
    country: "Germany, United States of America",
    director:
      "Warner Bros. Pictures, Village Roadshow Pictures, Venus Castina Productions",
    duration: 148,
    labor: "C16",
    stars:
      "Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II, Jonathan Groff, Jessica Henwick, Neil Patrick Harris, Jada Pinkett Smith, Priyanka Chopra, Christina Ricci, Lambert Wilson",
    description:
      "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    hashtag: "Science Fiction, Action, Adventure, Thriller",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/gjpM7NNfI5memp40mwqF1zxlLfz.jpg",
    trailer: "https://www.youtube.com/embed/nNpvWBuTfrc",
  },
  {
    idFilmsOnWeb: 630240,
    name: "Titane",
    time_release: "2021-07-14",
    country: "Belgium, France",
    director:
      "Kazak Productions, ARTE France Cinéma, Frakas Productions, Canal+, Ciné+, VOO, BeTV, Wild Bunch, Eurimages, Centre du Cinéma et de l'Audiovisuel de la Fédération Wallonie-Bruxelles",
    duration: 108,
    labor: "C16",
    stars:
      "Vincent Lindon, Agathe Rousselle, Garance Marillier, Laïs Salameh, Mara Cissé, Marin Judas, Diong-Kéba Tacu, Myriem Akeddiou, Bertrand Bonello, Céline Carrère",
    description:
      "A woman with a metal plate in her head from a childhood car accident embarks on a bizarre journey, bringing her into contact with a firefighter who's reunited with his missing son after 10 years.",
    hashtag: "Drama, Thriller, Horror",
    rating: 6.6,
    image: "https://image.tmdb.org/t/p/w500/AeQC4gFwkIvjAwnSd2RPAlgs1VE.jpg",
    trailer: "https://www.youtube.com/embed/T975nUk_uNA",
  },
  {
    idFilmsOnWeb: 631947,
    name: "La Llorona",
    time_release: "2020-01-01",
    country: "Mexico",
    director: "",
    duration: 98,
    labor: "C16",
    stars:
      "Autumn Reeser, Antonio Cupo, Danny Trejo, Zamia Fandiño, Josh Zaharia",
    description:
      "While vacationing in Mexico, a couple discovers their son's disappearance is tied to a supernatural curse.",
    hashtag: "Horror, Thriller",
    rating: 7,
    image: "https://image.tmdb.org/t/p/w500/wtgEJKEOLnyQkWemEdFa5W8Q29L.jpg",
    trailer: "https://www.youtube.com/embed/cvW9sPW2j3k",
  },
  {
    idFilmsOnWeb: 634649,
    name: "Spider-Man: No Way Home",
    time_release: "2021-12-15",
    country: "United States of America",
    director: "Marvel Studios, Pascal Pictures, Columbia Pictures",
    duration: 148,
    labor: "C16",
    stars:
      "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori",
    description:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    hashtag: "Action, Adventure, Science Fiction",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    trailer: "https://www.youtube.com/embed/pBvH8hvnJPk",
  },
  {
    idFilmsOnWeb: 636901,
    name: "ராக்கி",
    time_release: "2021-12-23",
    country: "India",
    director: "RA Productions",
    duration: 152,
    labor: "C16",
    stars: "Vasanth Ravi, Bharathiraja, Raveena Ravi, Rohini, Ravi Venkatraman",
    description: "",
    hashtag: "Crime, Action, Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/z7vukWWpy22YJinryimDYf2lok5.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 639721,
    name: "The Addams Family 2",
    time_release: "2021-10-01",
    country: "Canada, United States of America",
    director:
      "Metro-Goldwyn-Mayer, Bron Studios, BermanBraun, Cinesite Animation, Nitrogen Studios Canada",
    duration: 93,
    labor: "C16",
    stars:
      "Oscar Isaac, Charlize Theron, Chloë Grace Moretz, Javon 'Wanna' Walton, Nick Kroll, Snoop Dogg, Bette Midler, Bill Hader, Wallace Shawn, Conrad Vernon",
    description:
      "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.",
    hashtag: "Animation, Adventure, Comedy, Family",
    rating: 7.3,
    image: "https://image.tmdb.org/t/p/w500/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
    trailer: "https://www.youtube.com/embed/946LiJiMQrQ",
  },
  {
    idFilmsOnWeb: 643532,
    name: "The Card Counter",
    time_release: "2021-09-03",
    country: "China, United Kingdom, United States of America",
    director:
      "Focus Features, LB Entertainment, Astrakan Films AB, Bona Film Group, Convergent Media, Enriched Media Group, HanWay Films, One Two Twenty Entertainment, Redline Entertainment",
    duration: 111,
    labor: "C16",
    stars:
      "Oscar Isaac, Tiffany Haddish, Tye Sheridan, Willem Dafoe, Alexander Babara, Bobby C. King, Ekaterina Baker, Dylan Flashner, Adrienne Lau, Joel Michaely",
    description:
      "William Tell just wants to play cards. His spartan existence on the casino trail is shattered when he is approached by Cirk, a vulnerable and angry young man seeking help to execute his plan for revenge on a military colonel. Tell sees a chance at redemption through his relationship with Cirk. But keeping Cirk on the straight-and-narrow proves impossible, dragging Tell back into the darkness of his past.",
    hashtag: "Drama, Crime, Thriller",
    rating: 6.4,
    image: "https://image.tmdb.org/t/p/w500/y5DNLVg0gPiGSkuK4yFc4fjQ42Q.jpg",
    trailer: "https://www.youtube.com/embed/7RvVT1cDiNc",
  },
  {
    idFilmsOnWeb: 644089,
    name: "Blue Bayou",
    time_release: "2021-09-10",
    country: "Canada, United States of America",
    director: "Entertainment One, MACRO, Focus Features",
    duration: 117,
    labor: "C16",
    stars:
      "Justin Chon, Alicia Vikander, Mark O'Brien, Linh Đan Phạm, Sydney Kowalske, Vondie Curtis-Hall, Emory Cohen, Geraldine Singer, Toby Vitrano, Altonio Jackson",
    description:
      "As a Korean-American man raised in the Louisiana bayou works hard to make a life for his family, he must confront the ghosts of his past as he discovers that he could be deported from the only country he has ever called home.",
    hashtag: "Drama",
    rating: 7.8,
    image: "https://image.tmdb.org/t/p/w500/a4xykTie8BOSW0y6K5u1AcmW4HW.jpg",
    trailer: "https://www.youtube.com/embed/Jh59H_d19Kg",
  },
  {
    idFilmsOnWeb: 644495,
    name: "House of Gucci",
    time_release: "2021-11-24",
    country: "Canada, United Kingdom, United States of America",
    director: "Scott Free Productions, Metro-Goldwyn-Mayer, Bron Studios",
    duration: 158,
    labor: "C16",
    stars:
      "Lady Gaga, Adam Driver, Jared Leto, Jeremy Irons, Al Pacino, Salma Hayek, Camille Cottin, Jack Huston, Reeve Carney, Mădălina Diana Ghenea",
    description:
      "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately…murder.",
    hashtag: "Drama, Crime, Thriller",
    rating: 6.7,
    image: "https://image.tmdb.org/t/p/w500/cy6fvTf9YqehVhReYnm5cc3GqhZ.jpg",
    trailer: "https://www.youtube.com/embed/eGNnpVKxV6s",
  },
  {
    idFilmsOnWeb: 644583,
    name: "The Mauritanian",
    time_release: "2021-02-10",
    country: "United Kingdom, United States of America",
    director: "30WEST, Topic Studios, STX Entertainment, SunnyMarch, BBC Films",
    duration: 129,
    labor: "C16",
    stars:
      "Tahar Rahim, Jodie Foster, Benedict Cumberbatch, Shailene Woodley, Zachary Levi, Langley Kirkwood, Sammer Usmani, Corey Johnson, Matthew Marsh, David Fynn",
    description:
      "A detainee at the U.S military's Guantanamo Bay detention center is held without charges for over a decade and seeks help from a defense attorney for his release.",
    hashtag: "Drama, Thriller",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/lIADEa6oH74uUapjsPbNRzxus8M.jpg",
    trailer: "https://www.youtube.com/embed/N00DwEsSSYU",
  },
  {
    idFilmsOnWeb: 645788,
    name: "The Protégé",
    time_release: "2021-08-19",
    country: "United States of America",
    director:
      "Millennium Films, Arthur Sarkissian Productions, Campbell Grobman Films, Lionsgate",
    duration: 109,
    labor: "C16",
    stars:
      "Michael Keaton, Maggie Q, Samuel L. Jackson, Robert Patrick, Patrick Malahide, Ekaterina Baker, Madalina Anea, Ori Pfeffer, Jack Derges, Lili Rich",
    description:
      "Rescued as a child by the legendary assassin Moody and trained in the family business, Anna is the world’s most skilled contract killer. When Moody, the man who was like a father to her and taught her everything she needs to know about trust and survival, is brutally killed, Anna vows revenge. As she becomes entangled with an enigmatic killer whose attraction to her goes way beyond cat and mouse, their confrontation turns deadly and the loose ends of a life spent killing will weave themselves ever tighter.",
    hashtag: "Action, Crime, Thriller",
    rating: 6.7,
    image: "https://image.tmdb.org/t/p/w500/o9FY8N5c8CXf22q8s4CmRRjAQJx.jpg",
    trailer: "https://www.youtube.com/embed/fSqa0a3mGk8",
  },
  {
    idFilmsOnWeb: 645886,
    name: "The Unforgivable",
    time_release: "2021-11-24",
    country: "United Kingdom, United States of America",
    director:
      "GK Films, Fortis Films, Construction Film, Red Production Company",
    duration: 112,
    labor: "C16",
    stars:
      "Sandra Bullock, Viola Davis, Vincent D'Onofrio, Jon Bernthal, Richard Thomas, Linda Emond, Aisling Franciosi, Emma Nelson, Will Pullen, Tom Guiry",
    description:
      "A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past.",
    hashtag: "Drama, Thriller",
    rating: 7.7,
    image: "https://image.tmdb.org/t/p/w500/gPQM1zqqsm6Lw1tHF41BwbmOkya.jpg",
    trailer: "https://www.youtube.com/embed/JNUjx7LZoiU",
  },
  {
    idFilmsOnWeb: 646207,
    name: "The Ice Road",
    time_release: "2021-06-24",
    country: "United States of America",
    director:
      "ShivHans Pictures, Code Entertainment, Envision Media Arts, The Solution",
    duration: 108,
    labor: "C16",
    stars:
      "Liam Neeson, Marcus Thomas, Laurence Fishburne, Amber Midthunder, Holt McCallany, Matt McCoy, Martin Sensmeier, Matt Salinger, BJ Verot, Bradley Sawatzky",
    description:
      "After a remote diamond mine collapses in far northern Canada, an ice road driver must lead an impossible rescue mission over a frozen ocean to save the trapped miners.",
    hashtag: "Action, Adventure, Drama, Thriller",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/pj6UQPrtmC0snzPeU1HUhGWTgz6.jpg",
    trailer: "https://www.youtube.com/embed/_XfS6kjoM24",
  },
  {
    idFilmsOnWeb: 646380,
    name: "Don't Look Up",
    time_release: "2021-12-07",
    country: "United States of America",
    director: "Hyperobject Industries",
    duration: 138,
    labor: "C16",
    stars:
      "Jennifer Lawrence, Leonardo DiCaprio, Meryl Streep, Cate Blanchett, Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ron Perlman",
    description:
      "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh.",
    hashtag: "Drama, Comedy, Science Fiction",
    rating: 7.9,
    image: "https://image.tmdb.org/t/p/w500/5SkzM3TPpt72FoO46NSjipNXkNG.jpg",
    trailer: "https://www.youtube.com/embed/RbIxYm3mKzI",
  },
  {
    idFilmsOnWeb: 646385,
    name: "Scream",
    time_release: "2022-01-12",
    country: "United States of America",
    director:
      "Paramount, Spyglass Entertainment, Radio Silence, Project X Entertainment, Outerbanks Entertainment",
    duration: 114,
    labor: "C16",
    stars:
      "Neve Campbell, Courteney Cox, David Arquette, Melissa Barrera, Jenna Ortega, Jack Quaid, Mikey Madison, Dylan Minnette, Jasmin Savoy Brown, Mason Gooding",
    description:
      "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
    hashtag: "Horror, Mystery, Thriller",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/qvASAp0ZKkza023gjK1Tf2iiEos.jpg",
    trailer: "https://www.youtube.com/embed/beToTslH17s",
  },
  {
    idFilmsOnWeb: 655168,
    name: "Mica",
    time_release: "2021-12-22",
    country: "France, Morocco",
    director: "La Prod, Elzévir Films",
    duration: 103,
    labor: "C16",
    stars:
      "Sabrina Ouazani, Zakaria Inan, Azelarab Khagat, Mohammed Azelrab Kaghat, Nabil Elboukhari, Rachid Fekkak, Laila Haddadi, Moumen Mekouar, Ali Missoum, Mustapha Rachidi",
    description:
      "Mica, 10, lives with his mother and sick father in a slum in the suburbs of Meknes, which is destined for destruction. A friend of his parents’, a handyman in a tennis club in Casablanca, takes him as his apprentice. Mica finds himself propelled into a whole new world where a new life awaits him. Mr. Slimani, a rich and cultured man and owner of the club, dreams of making his son Omar a tennis champion. To this end, he hires Sophia, a former French champion, as a private trainer. But Omar has very little talent and no passion for the sport. On the other hand, Sophia will eventually notice Mica and take him under her wing….",
    hashtag: "Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/enDEU3xyGroWL1lC56iuavvHjfA.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 656991,
    name: "Wild Indian",
    time_release: "2021-09-03",
    country: "United States of America",
    director:
      "Cinereach, Grey Hour Production Services, Pureplay Entertainment",
    duration: 90,
    labor: "C16",
    stars:
      "Michael Greyeyes, Chaske Spencer, Kate Bosworth, Phoenix Wilson, Julian Gopal, Lisa Cromarty, Jesse Eisenberg, Elisha Pratt, Scott Haze, Tres Garcia",
    description:
      "Decades after covering up his classmate’s murder, Michael has moved on from his reservation and fractured past. When a man who shares his violent secret seeks vengeance, Michael goes to great lengths to protect his new life with his wife and boss from the demons of his past.",
    hashtag: "Crime, Drama, Thriller",
    rating: 6.2,
    image: "https://image.tmdb.org/t/p/w500/yhOpkNvgW1ZzmEpR4iqxKwKKShL.jpg",
    trailer: "https://www.youtube.com/embed/ou6hNBf8FKI",
  },
  {
    idFilmsOnWeb: 659988,
    name: "Madeleine Collins",
    time_release: "2021-12-22",
    country: "France",
    director:
      "Les films du Bélier, Frakas Productions, Close Up Films, Voo-Be TV, RTBF",
    duration: 102,
    labor: "C16",
    stars:
      "Virginie Efira, Bruno Salomone, Quim Gutiérrez, Jacqueline Bisset, Nadav Lapid, Valérie Donzelli, Thomas Gioria, François Rostain, Nathalie Boutefeu, Mona Walravens",
    description:
      "Judith leads a double life between Switzerland and France. On the one hand Abdel, with whom she is raising a little girl, on the other Melvil with whom she has two older boys. Little by little, this fragile balance, made up of lies, secrets and back and forth, cracks dangerously. Trapped, Judith chooses to head forward, at the risk of losing everything.",
    hashtag: "Drama",
    rating: 8,
    image: "https://image.tmdb.org/t/p/w500/ytfeA3ldjmafyPkhnRxrV275vRy.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 660120,
    name: "Verdens verste menneske",
    time_release: "2021-10-13",
    country: "Denmark, France, Norway, Sweden",
    director:
      "Oslo Pictures, Snowglobe, MK2 Films, Film i Väst, B-Reel Films, ARTE France Cinéma, Neon",
    duration: 129,
    labor: "C16",
    stars:
      "Renate Reinsve, Anders Danielsen Lie, Herbert Nordrum, Maria Grazia Di Meo, Hans Olav Brenner, Marianne Krogh, Helene Bjørnebye, Vidar Sandem, Anna Dworak, Thea Stabell",
    description:
      "Chronicles four years in the life of Julie, a young woman who navigates the troubled waters of her love life and struggles to find her career path, leading her to take a realistic look at who she really is.",
    hashtag: "Comedy, Drama, Romance",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/4dF5NT1dxw4CItns4ckXq4309bg.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 662707,
    name: "Starbright",
    time_release: "2021-12-25",
    country: "",
    director: "",
    duration: 0,
    labor: "C16",
    stars:
      "John Rhys-Davies, Ted Levine, Elisabeth Röhm, Christine Ebersole, Diego Boneta, Gbenga Akinnagbe, Alexandra Dowling, Becky Ann Baker, Gary Grubbs, Sandra Ellis Lafferty",
    description:
      "A young orphan escapes the realities of her life by fantasizing about, and then entering, a fairy tale world.",
    hashtag: "Adventure, Fantasy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500null",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 663260,
    name: "Boîte noire",
    time_release: "2021-09-08",
    country: "France",
    director: "24 25 Films, WY Productions",
    duration: 129,
    labor: "C16",
    stars:
      "Pierre Niney, Lou de Laâge, André Dussollier, Sébastien Pouderoux, Olivier Rabourdin, Guillaume Marquet, Mehdi Djaadi, Aurélien Recoing, André Marcon, Anne Azoulay",
    description:
      "Matthieu is a young and talented black box analyst on a mission to solve the reason behind the deadly crash of a brand new aircraft. Yet, when the case is closed by authorities, Matthieu cannot help but sense there is something wrong with the evidence. As he listens to the tracks again, he starts detecting some seriously disturbing details. Could the tape have been modified? Going against his boss' orders, Matthieu begins his own rogue investigation - an obsessional and dangerous quest for truth that will quickly threatan far more than his career...",
    hashtag: "Drama, Thriller",
    rating: 7.7,
    image: "https://image.tmdb.org/t/p/w500/jIfFFC4YwiI8TVaGtbl1eT9BRaI.jpg",
    trailer: "https://www.youtube.com/embed/PXuDemvLFjc",
  },
  {
    idFilmsOnWeb: 664236,
    name: "Extinct",
    time_release: "2021-02-11",
    country: "Canada, China, United States of America",
    director:
      "China Lion Entertainment Production, Cinesite Animation, HB Wink Animation, Huayi Tencent Entertainment Company, Timeless Films, Tolerable Entertainment, Huayi Brothers Pictures, SND",
    duration: 85,
    labor: "C16",
    stars:
      "Adam DeVine, Rachel Bloom, Zazie Beetz, Ken Jeong, Jim Jefferies, Catherine O'Hara, Reggie Watts, Henry Winkler, Alex Borstein, Benedict Wong",
    description:
      "Op and Ed, two adorable donut-shaped animals - flummels - accidentally time-travel from 1835 to modern-day Shanghai.  There they discover traffic, trans fats, and worst of all, that flummels are now extinct. It's up to this bumbling pair to save themselves and their species...and, just maybe, change the course of history.",
    hashtag: "Animation, Comedy, Family, Adventure",
    rating: 6.4,
    image: "https://image.tmdb.org/t/p/w500/tRnPT88iD5zgeUPjHqaZznrxk5m.jpg",
    trailer: "https://www.youtube.com/embed/4ulFkSR75po",
  },
  {
    idFilmsOnWeb: 664574,
    name: "Silent Night",
    time_release: "2021-12-03",
    country: "United Kingdom, United States of America",
    director: "Marv Films, Maven Pictures, Endeavor Content",
    duration: 92,
    labor: "C16",
    stars:
      "Keira Knightley, Matthew Goode, Roman Griffin Davis, Annabelle Wallis, Lily-Rose Depp, Kirby Howell-Baptiste, Davida McKenzie, Rufus Jones, Sope Dirisu, Lucy Punch",
    description:
      "Nell, Simon, and their boy Art are ready to welcome friends and family for what promises to be a perfect Christmas gathering. Perfect except for one thing: everyone is going to die.",
    hashtag: "Horror, Comedy, Drama",
    rating: 6.5,
    image: "https://image.tmdb.org/t/p/w500/bfUO1SBTfgcK77em3lOuRFY2uLc.jpg",
    trailer: "https://www.youtube.com/embed/u1dOECVgqIQ",
  },
  {
    idFilmsOnWeb: 669659,
    name: "Best Sellers",
    time_release: "2021-09-17",
    country: "Canada, United States of America",
    director:
      "Item 7, Wishing Tree Productions, Téléfilm Canada, Crave, CBC Films, SODEC, Screen Media Films",
    duration: 100,
    labor: "C16",
    stars:
      "Michael Caine, Aubrey Plaza, Ellen Wong, Scott Speedman, Cary Elwes, Luc Morissette, Veronica Ferres, Frank Schorpion, Elana Dunkelman, Alexandra Petrachuk",
    description:
      "A cranky, retired author reluctantly embarks on a final book tour to help out a young publisher.",
    hashtag: "Drama, Comedy",
    rating: 6.3,
    image: "https://image.tmdb.org/t/p/w500/ltGLKabCfw3ncCGsQ1aQEvWFCcf.jpg",
    trailer: "https://www.youtube.com/embed/13ixGoK_MgY",
  },
  {
    idFilmsOnWeb: 670940,
    name: "El Chapo and the Curse of the Pirate Zombies",
    time_release: "2021-12-31",
    country: "Mexico, United States of America",
    director: "",
    duration: 0,
    labor: "C16",
    stars: "Tara Reid, Nikki Sixx, Ángel Salazar",
    description:
      "A sexy soap opera actress, a Hollywood movie star /wannabe journalist and a Mexican drug lord fight zombie pirates.",
    hashtag: "",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/2eMfBOxibBcDQBbtwrLg7rGV0wD.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 671043,
    name: "Pourris gâtés",
    time_release: "2021-09-15",
    country: "France",
    director: "Borsalino Productions, TF1 Studio, Apollo Films",
    duration: 100,
    labor: "C16",
    stars:
      "Gérard Jugnot, Camille Lou, Artus, Louka Meliava, François Morel, Tom Leeb, Ichem Bougheraba, Jean-Baptiste Sagory, Joffrey Verbruggen, Colette Kraffe",
    description:
      "The billionaire is tired of the whims of his own children and decides to teach them a lesson. He announces to them that he has become bankrupt. Now spoiled teenagers will have to do what they have never done: go to work, learn to love and value life.",
    hashtag: "Comedy",
    rating: 6.3,
    image: "https://image.tmdb.org/t/p/w500/nW5LHayHlbavYD6XRM9SjKi55uu.jpg",
    trailer: "https://www.youtube.com/embed/Pi9fYbM8A0w",
  },
  {
    idFilmsOnWeb: 671269,
    name: "El Diario de Karem",
    time_release: "2021-12-31",
    country: "Mexico",
    director: "",
    duration: 0,
    labor: "C16",
    stars: "",
    description:
      "A possessed young girl from an atheist family refuses to let her new powers go and becomes more than a threat to everyone besides her.",
    hashtag: "",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/k6sUmC7p53lVqUpYHRZY3nkN5d0.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 672582,
    name: "The Deep House",
    time_release: "2021-06-30",
    country: "Belgium, France",
    director:
      "Radar Films, Logical Pictures, Apollo Films, uMedia, Forecast Pictures, Screen Flanders, OCS, Wallimage, Tax Shelter du Gouvernement Fédéral Belge, Investisseurs Tax Shelter",
    duration: 85,
    labor: "C16",
    stars:
      "James Jagger, Camille Rowe, Eric Savin, Carolina Massey, Alexis Servaes, Anne Claessens, Marie Caffier, Marie Bernard",
    description:
      "While diving in a remote French lake, a couple of YouTubers who specialize in underwater exploration videos discover a house submerged in the deep waters. What was initially a unique finding soon turns into a nightmare when they discover that the house was the scene of atrocious crimes. Trapped, with their oxygen reserves falling dangerously, they realize the worst is yet to come: they are not alone in the house.",
    hashtag: "Horror",
    rating: 6.5,
    image: "https://image.tmdb.org/t/p/w500/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg",
    trailer: "https://www.youtube.com/embed/wYh-iMHgcNA",
  },
  {
    idFilmsOnWeb: 673309,
    name: "American Underdog",
    time_release: "2021-12-25",
    country: "United States of America",
    director: "Lionsgate, City on a Hill Productions, Kingdom Story Company",
    duration: 112,
    labor: "C16",
    stars:
      "Zachary Levi, Anna Paquin, Dennis Quaid, Bryce Bruckbauer, Beau Hart, Jason Allen Wear, Aaron J. Brooks, Garrett O'Brien",
    description:
      "The true story of Kurt Warner, who went from a stockboy at a grocery store to a two-time NFL MVP, Super Bowl champion, and Hall of Fame quarterback.",
    hashtag: "Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/ilCDHLXMGrpGorVVjkZdWf82Q71.jpg",
    trailer: "https://www.youtube.com/embed/_6rn-6lKBJ8",
  },
  {
    idFilmsOnWeb: 674164,
    name: "Return of Chucky",
    time_release: "2021-12-31",
    country: "Mexico",
    director: "",
    duration: 60,
    labor: "C16",
    stars: "",
    description:
      "The fan movie follows the story of Andrew, a kid who finds a terrifying deteriorated Good Guy doll at the forest. Soon, a chain of blood is unleashed after several murders, which leaves the trail that the doll, named Chucky, is possessed, and will kill anyone who crosses in his way to complete his terrifying and dirty plan.",
    hashtag: "",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/oHBhzKR2QViBakHdVpQq7E0cyfa.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 675019,
    name: "La Bruja y el Demonio",
    time_release: "2021-12-31",
    country: "Mexico",
    director: "",
    duration: 0,
    labor: "C16",
    stars: "",
    description: "Mexican feature film",
    hashtag: "",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/gacxzrtC7991e57RwYQArFravuC.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 675024,
    name: "El Exorcismo de Carmen Farías",
    time_release: "2021-05-05",
    country: "Mexico",
    director: "Invicta Films, STG Capital",
    duration: 93,
    labor: "C16",
    stars:
      "Camila Sodi, Lucy Paez, Juan Pablo Castaneda, Juan Carlos Colombo, Ana Silvia Garza",
    description:
      "Carmen, a brave journalist, discovers soon after her mother's death that she has inherited her grandma's house. She decides to move there without knowing it hides dark secrets.",
    hashtag: "Horror",
    rating: 6.3,
    image: "https://image.tmdb.org/t/p/w500/uoTPjx07dxTrC1g3dYeaS2WNVGL.jpg",
    trailer: "https://www.youtube.com/embed/5JnWw_SvCvI",
  },
  {
    idFilmsOnWeb: 683127,
    name: "アーヤと魔女",
    time_release: "2021-01-27",
    country: "Japan",
    director: "Studio Ghibli, NHK, NHK Enterprises",
    duration: 82,
    labor: "C16",
    stars:
      "Kokoro Hirasawa, Shinobu Terajima, Gaku Hamada, Sherina Munaf, Etsushi Toyokawa",
    description:
      "A headstrong orphan discovers a world of spells and potions while living with a selfish witch.",
    hashtag: "Animation, Fantasy, Family",
    rating: 6.2,
    image: "https://image.tmdb.org/t/p/w500/86jyzdxtAX8p956rVQDKwGbrYh2.jpg",
    trailer: "https://www.youtube.com/embed/_PfhotgXEeQ",
  },
  {
    idFilmsOnWeb: 683641,
    name: "Je suis Karl",
    time_release: "2021-09-16",
    country: "Czech Republic, Germany",
    director: "Negativ, Pandora Films",
    duration: 126,
    labor: "C16",
    stars:
      "Luna Wedler, Jannis Niewöhner, Milan Peschel, Edin Hasanović, Anna Fialová, Marlon Boess, Victor Boccard, Fleur Geffrier, Aziz Dyab, Mélanie Fouché",
    description:
      "After most of her family is murdered in a terrorist bombing, a young woman is unknowingly lured into joining the very group that killed them.",
    hashtag: "Drama",
    rating: 5,
    image: "https://image.tmdb.org/t/p/w500/b25r8oFFSVagLyXmHK5MbHgI9Nh.jpg",
    trailer: "https://www.youtube.com/embed/Pzg_nWktMAs",
  },
  {
    idFilmsOnWeb: 691091,
    name: "Bamse och Vulkanön",
    time_release: "2021-12-22",
    country: "Sweden",
    director: "Nordisk Film, Film i Väst, SVT, Slugger Film",
    duration: 0,
    labor: "C16",
    stars:
      "Johan Glans, Rolf Lassgård, Johan Ulvesson, Sissela Kyle, Rachel Molin, Carina Bergfeldt",
    description: "",
    hashtag: "Animation, Family, Comedy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/vXlNz0HHwMP6XyG3rpcPGuw1gTH.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 714968,
    name: "Plan A",
    time_release: "2021-08-16",
    country: "Germany, Israel",
    director: "Getaway Pictures, Phiphen Pictures, SE Film Production",
    duration: 109,
    labor: "C16",
    stars:
      "August Diehl, Sylvia Hoeks, Michael Aloni, Nikolai Kinski, Oz Zehavi, Barbara Bauer, Yoel Rozenkier, Ishai Golan",
    description:
      "Germany 1945, Max, a Jewish Holocaust survivor, meets a radical group of Jewish resistance fighters, who, like him, lost all hope for their future after they were robbed of their existence and their entire families were killed by the Nazis. They dream of retaliation on an epic scale for the Jewish people. An eye for an eye, a tooth for a tooth. Max starts identifying with the group's monstrous plans...",
    hashtag: "Thriller",
    rating: 6.1,
    image: "https://image.tmdb.org/t/p/w500/dfYOmisdbiVTXdcQji35pKywPFI.jpg",
    trailer: "https://www.youtube.com/embed/EFaJFKNnOZw",
  },
  {
    idFilmsOnWeb: 716612,
    name: "Spencer",
    time_release: "2021-11-04",
    country: "Chile, Germany, United Kingdom, United States of America",
    director:
      "FilmNation Entertainment, Komplizen Film, Shoebox Films, Fabula, Neon",
    duration: 116,
    labor: "C16",
    stars:
      "Kristen Stewart, Jack Farthing, Sally Hawkins, Timothy Spall, Sean Harris, Thomas Douglas, Olga Hellsing, Matthias Wolkowski, Oriana Gordon, Ryan Wichert",
    description:
      "During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana decides to leave her marriage to Prince Charles.",
    hashtag: "Drama",
    rating: 7.4,
    image: "https://image.tmdb.org/t/p/w500/7GcqdBKaMM9BWXWN07BirBMkcBF.jpg",
    trailer: "https://www.youtube.com/embed/zF4gmEND2HI",
  },
  {
    idFilmsOnWeb: 718032,
    name: "Licorice Pizza",
    time_release: "2021-11-26",
    country: "Canada, United States of America",
    director: "Ghoulardi Film Company, Metro-Goldwyn-Mayer, Bron Studios",
    duration: 133,
    labor: "C16",
    stars:
      "Alana Haim, Cooper Hoffman, Sean Penn, Tom Waits, Bradley Cooper, Benny Safdie, Skyler Gisondo, Mary Elizabeth Ellis, John Michael Higgins, John C. Reilly",
    description:
      "The story of Alana Kane and Gary Valentine growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.",
    hashtag: "Drama, Comedy",
    rating: 7.3,
    image: "https://image.tmdb.org/t/p/w500/jD98aUKHQZNAmrk0wQQ9wmNQPnP.jpg",
    trailer: "https://www.youtube.com/embed/ofnXPwUPENo",
  },
  {
    idFilmsOnWeb: 718633,
    name: "Bruised",
    time_release: "2021-11-17",
    country: "United Kingdom, United States of America",
    director:
      "Romulus Entertainment, Entertainment 360, Rhea Films, Thunder Road, Aloe Entertainment, Bohemia Media, Head Gear Films, Metrol Technology, Hercules Film Fund",
    duration: 129,
    labor: "C16",
    stars:
      "Halle Berry, Adan Canto, Sheila Atim, Danny Boyd Jr., Adriane Lenox, Shamier Anderson, Stephen McKinley Henderson, Valentina Shevchenko, Lela Loren, Nikolai Nikolaeff",
    description:
      "Jackie Justice is a mixed martial arts fighter who leaves the sport in disgrace. Down on her luck and simmering with rage and regret years after the fight, she's coaxed into a brutal underground fight by her manager and boyfriend Desi and grabs the attention of a fight league promoter who promises Jackie a life back in the Octagon. But the road to redemption becomes unexpectedly personal when Manny - the son she gave up as an infant - shows up at her doorstep. A triumphant story of a fighter who reclaims her power, in and out of the ring, when everyone has counted her out",
    hashtag: "Drama",
    rating: 6.9,
    image: "https://image.tmdb.org/t/p/w500/axibOQF9QnThrr8M37ufAYurP4R.jpg",
    trailer: "https://www.youtube.com/embed/EMu8K0l8ggA",
  },
  {
    idFilmsOnWeb: 722778,
    name: "È stata la mano di Dio",
    time_release: "2021-11-24",
    country: "Italy",
    director: "The Apartment",
    duration: 130,
    labor: "C16",
    stars:
      "Filippo Scotti, Toni Servillo, Teresa Saponangelo, Luisa Ranieri, Marlon Joubert, Massimiliano Gallo, Betti Pedrazzi, Renato Carpentieri, Enzo De Caro, Sofya Gershevich",
    description:
      "In 1980s Naples, young Fabietto pursues his love for football as family tragedy strikes, shaping his uncertain but promising future as a filmmaker.",
    hashtag: "Drama",
    rating: 7.9,
    image: "https://image.tmdb.org/t/p/w500/kreVxr5moB7K52IGGV1BGAn6nq1.jpg",
    trailer: "https://www.youtube.com/embed/i_1VW_0i6vo",
  },
  {
    idFilmsOnWeb: 723072,
    name: "Host",
    time_release: "2020-12-04",
    country: "United Kingdom",
    director: "Shadowhouse Films",
    duration: 57,
    labor: "C16",
    stars:
      "Haley Bishop, Jemma Moore, Emma Louise Webb, Radina Drandova, Caroline Ward, Edward Linard, Seylan Baxter, Alan Emrys, Jinny Lofthouse, James Swanton",
    description:
      "Six friends hire a medium to hold a séance via Zoom during lockdown — but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realize they might not survive the night.",
    hashtag: "Horror, Thriller, Mystery",
    rating: 6.6,
    image: "https://image.tmdb.org/t/p/w500/h7dZpJDORYs5c56dydbrLFkEXpE.jpg",
    trailer: "https://www.youtube.com/embed/SNlKbqHqGcY",
  },
  {
    idFilmsOnWeb: 726282,
    name: "Ranah 3 Warna",
    time_release: "2021-12-23",
    country: "Indonesia",
    director: "MNC Pictures",
    duration: 0,
    labor: "C16",
    stars:
      "Arbani Yasiz, Amanda Rawles, Teuku Rassya, David Chalik, Maudy Koesnaedi, Lukman Sardi, Donny Alamsyah, Tanta Ginting, Raim Laode, Sadana Agung",
    description: "Based on a best-selling novel by A. Fuadi.",
    hashtag: "Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/rIFkUTBbd0OmQeTIZUsDZ4WBD5a.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 728526,
    name: "Encounter",
    time_release: "2021-12-03",
    country: "United Kingdom, United States of America",
    director:
      "Amazon Studios, RAW, Film4 Productions, Automatik Entertainment, Big Indie Pictures",
    duration: 108,
    labor: "C16",
    stars:
      "Riz Ahmed, Octavia Spencer, Lucian-River Mirage Chauhan, Rory Cochrane, Aditya Geddada, Janina Gavankar, Misha Collins, Keith Szarabajka, Shane McRae, Antonio Jaramillo",
    description:
      "A decorated Marine goes on a rescue mission to save his two young sons from an unhuman threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.",
    hashtag: "Science Fiction, Thriller, Adventure",
    rating: 6.3,
    image: "https://image.tmdb.org/t/p/w500/tUkY0WxffPZ9PoyC62PIyyUMGnt.jpg",
    trailer: "https://www.youtube.com/embed/SB44bZVe-c4",
  },
  {
    idFilmsOnWeb: 730047,
    name: "Cyrano",
    time_release: "2021-12-24",
    country: "United Kingdom, United States of America",
    director: "Metro-Goldwyn-Mayer, Working Title Films",
    duration: 124,
    labor: "C16",
    stars:
      "Peter Dinklage, Haley Bennett, Kelvin Harrison Jr., Ben Mendelsohn, Bashir Salahuddin, Monica Dolan, Glen Hansard, Sam Amidon, Ray Strachan",
    description:
      "A man ahead of his time, Cyrano de Bergerac dazzles whether with ferocious wordplay at a verbal joust or with brilliant swordplay in a duel. But, convinced that his appearance renders him unworthy of the love of a devoted friend, the luminous Roxanne, Cyrano has yet to declare his feelings for her—and Roxanne has fallen in love, at first sight, with Christian.",
    hashtag: "Drama, Romance",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/e4koV8iC2cCM57bqUnEnIL2a2zH.jpg",
    trailer: "https://www.youtube.com/embed/5e8apSFDXsQ",
  },
  {
    idFilmsOnWeb: 736848,
    name: "C'est toi que j'attendais",
    time_release: "2021-12-22",
    country: "",
    director: "",
    duration: 87,
    labor: "C16",
    stars: "Inès KALFSBEEK, Stéphane Munka, Fabrice Brault",
    description:
      "Documentary on the event of having or getting children focuses on 2 couples already engaged in adoption ,a mother who gave birth anonymously and seeks her son 30 years later, and a teacher trying to find his own anonymous mother.",
    hashtag: "Documentary",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/nG81nmlUCwyTpUhuv1jDDaX7AZJ.jpg",
    trailer: "https://www.youtube.com/embed/gD8hURNl9Nc",
  },
  {
    idFilmsOnWeb: 737676,
    name: "The ExorSIS",
    time_release: "2021-12-25",
    country: "",
    director: "TinCan Productions",
    duration: 0,
    labor: "C16",
    stars: "Toni Gonzaga, Alex Gonzaga",
    description: "Coming Soon.",
    hashtag: "Comedy, Horror",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/mwBXuQKuFdf8miqOU7ULsvDO3ns.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 743439,
    name: "PAW Patrol: Jet To The Rescue",
    time_release: "2020-09-10",
    country: "Canada, United States of America",
    director: "",
    duration: 56,
    labor: "C16",
    stars: "Anya Cooke, Caoimhe Judd, Ashton Leon Frank, Caoimhe Judd",
    description:
      "A royal relative steals a gem with the power to make things fly, the Paw Patrol takes to the skies to stop him and save Barkingburg.",
    hashtag: "Family, Animation",
    rating: 7,
    image: "https://image.tmdb.org/t/p/w500/qHcn3PbjVHxBweDZxWpYH3JfugS.jpg",
    trailer: "https://www.youtube.com/embed/169jD2LiH1A",
  },
  {
    idFilmsOnWeb: 754934,
    name: "Son",
    time_release: "2021-08-06",
    country: "Ireland, United Kingdom, United States of America",
    director: "Belladonna Productions, Park Films",
    duration: 98,
    labor: "C16",
    stars:
      "Andi Matichak, Emile Hirsch, Luke David Blumm, Cranston Johnson, Blaine Maye, J. Robert Spencer, Rocco Sisto, Kristine Nielsen, Erin Bradley Dangar, Adam Stephenson",
    description:
      "When a young boy contracts a mysterious illness, his mother must decide how far she will go to protect him from terrifying forces in her past.",
    hashtag: "Horror, Thriller",
    rating: 6.4,
    image: "https://image.tmdb.org/t/p/w500/4fl6EdtMp6p0RKJgESdFti1J3dC.jpg",
    trailer: "https://www.youtube.com/embed/OxwA_E0ywUs",
  },
  {
    idFilmsOnWeb: 755437,
    name: "Mamá o papá",
    time_release: "2021-12-17",
    country: "Spain",
    director:
      "El Álamo Producciones Cinematográficas S.L., Grupo Secuoya, Atresmedia, Warner Bros. Pictures España",
    duration: 103,
    labor: "C16",
    stars:
      "Paco León, Miren Ibarguren, Ester Expósito, Miquel Fernández, Pedro Casablanc, Eva Ugarte, Berto Romero, Sofía Oria",
    description:
      "Flora and Victor are fun, modern, caring parents. That is, until they decide to get a divorce, and the perfect job opportunity turns up for them. They now have one problem: custody.",
    hashtag: "Comedy, Family",
    rating: 6.5,
    image: "https://image.tmdb.org/t/p/w500/yo4aBPuyWh8uB2VHPwK1O7R6WwO.jpg",
    trailer: "https://www.youtube.com/embed/j6l3u0at97o",
  },
  {
    idFilmsOnWeb: 756594,
    name: "Mince alors 2 !",
    time_release: "2021-12-22",
    country: "France",
    director: "M6 Films, Mon Voisin Productions, Thelma Films",
    duration: 0,
    labor: "C16",
    stars:
      "Charlotte de Turckheim, Catherine Hosmalin, Lola Dewaere, Charlotte Gaccio, Marc Riso, Patrick de Valette, Johanna Piaton de Turckheim, Barbara Bolotner",
    description: "",
    hashtag: "Comedy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/xrzD3KJKRBGBbpHJTszu9R8X1hM.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 758866,
    name: "ドライブ・マイ・カー",
    time_release: "2021-08-18",
    country: "Japan",
    director:
      "Bitters End, C&I entertainment, Culture Entertainment, Agency for Cultural Affairs, J-LOD, nekojarashi, Quaras, Nippon Shuppan Hanbai, Bungeishunju, L'ESPACE VISION CO.,LTD",
    duration: 179,
    labor: "C16",
    stars:
      "Hidetoshi Nishijima, Toko Miura, Reika Kirishima, Masaki Okada, Park Yurim, Jin Daeyeon, Sonia Yuan, Ahn Hwitae, Perry Dizon, Satoko Abe",
    description:
      "Yusuke Kafuku, a stage actor and director, still unable, after two years, to cope with the loss of his beloved wife, accepts to direct Uncle Vanja at a theater festival in Hiroshima. There he meets Misaki, an introverted young woman, appointed to drive his car. In between rides, secrets from the past and heartfelt confessions will be unveiled.",
    hashtag: "Drama",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/3ywSXx2KITujZaO9Eb8MHHFCZPA.jpg",
    trailer: "https://www.youtube.com/embed/pnkZFq4Y_sA",
  },
  {
    idFilmsOnWeb: 760926,
    name: "Gold",
    time_release: "2021-12-23",
    country: "Australia, United States of America",
    director:
      "Deeper Water, Rogue Star Productions, Screen Australia, Stan Australia",
    duration: 0,
    labor: "C16",
    stars: "Zac Efron, Anthony Hayes, Susie Porter",
    description:
      "When two men discover the biggest gold nugget ever found they must find a way to excavate it.",
    hashtag: "Thriller",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/nDF3Ryi3W8PIR1b5eXDWBMRzgTS.jpg",
    trailer: "https://www.youtube.com/embed/tc8KayMzHZc",
  },
  {
    idFilmsOnWeb: 761898,
    name: "劇場版 ソードアート・オンライン プログレッシブ 星なき夜のアリア",
    time_release: "2021-10-30",
    country: "Japan",
    director:
      "A-1 Pictures, Sonilude, EGG FIRM, Straight Edge, Aniplex, SAO-P Project",
    duration: 97,
    labor: "C16",
    stars:
      "Yoshitsugu Matsuoka, Haruka Tomatsu, Inori Minase, Koichi Yamadera, Hiroki Yasumoto, Nobuyuki Hiyama, Rina Hidaka",
    description:
      "One month after Kayaba Akihiko's game of death began, the death toll continues to rise, two thousand players having already lost their lives to the ultra-difficult VRMMO world of Sword Art Online. On the day of the strategy meeting to plan out the first-floor boss battle, Kirito, a solo player who vows to fight alone to get stronger, runs into a rare, high-level female player. She gracefully dispatches powerful monsters with a single rapier that flashes like a shooting star in the night...",
    hashtag: "Animation, Action, Fantasy, Science Fiction",
    rating: 9,
    image: "https://image.tmdb.org/t/p/w500/ndTpuCStuEcCNNznnTwyGXJRvBn.jpg",
    trailer: "https://www.youtube.com/embed/j8M5DaTWZ5k",
  },
  {
    idFilmsOnWeb: 762006,
    name: "The Lost Girls",
    time_release: "2021-12-25",
    country: "",
    director: "Ingenious Media, Lipsync Productions",
    duration: 100,
    labor: "C16",
    stars:
      "Louis Partridge, Joely Richardson, Vanessa Redgrave, Iain Glen, Julian Ovenden, Emily Carey, Ella-Rae Smith, Parker Sawyers, Siobhan Hewlett, Livia De Paolis",
    description:
      "Like her grandmother and her mother Jane before her, Wendy must escape Pan's hold on her and the promise he wants her to keep. As her daughter Berry comes into Pan's orbit, Wendy must fight to save her relationship with her daughter while reconciling her legacy.",
    hashtag: "Drama, Fantasy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/ceNnoRbBcumsbqyVrrlf8u3odn.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 762433,
    name: "Zeros and Ones",
    time_release: "2021-11-18",
    country: "Germany, Italy, United Kingdom, United States of America",
    director:
      "Hammerstone Studios, Maze Pictures, Rimsky Productions, Macaia Film, Almost Never Films",
    duration: 85,
    labor: "C16",
    stars:
      "Ethan Hawke, Cristina Chiriac, Phil Neilson, Valerio Mastandrea, Valeria Correale, Dounia Sichov, Babak Karimi, Korlan Rachmetova, Stephen Gurewitz, Mahmut Sifa Erkaya",
    description:
      "Called to Rome to stop an imminent terrorist bombing, a soldier desperately seeks news of his imprisoned brother — a rebel with knowledge that could thwart the attack. Navigating the capital's darkened streets, he races to a series of ominous encounters to keep the Vatican from being blown to bits.",
    hashtag: "Thriller, War",
    rating: 5.5,
    image: "https://image.tmdb.org/t/p/w500/sopFsYj2yaKXVsBRVAPcNlqTLY5.jpg",
    trailer: "https://www.youtube.com/embed/RHje2IaqZGg",
  },
  {
    idFilmsOnWeb: 763164,
    name: "Apex",
    time_release: "2021-11-12",
    country: "Canada, United States of America",
    director: "308 Enterprises, BondIt Media Capital, Buffalo 8 Productions",
    duration: 108,
    labor: "C16",
    stars:
      "Neal McDonough, Bruce Willis, Corey Large, Alexia Fast, Nels Lennarson, Megan Peta Hill, Trevor Gretzky, Adam Huel Potter, Joe Munroe, Lochlyn Munro",
    description:
      "Ex-cop Thomas Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.",
    hashtag: "Action, Thriller, Science Fiction",
    rating: 5.5,
    image: "https://image.tmdb.org/t/p/w500/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg",
    trailer: "https://www.youtube.com/embed/Pompk1znaIw",
  },
  {
    idFilmsOnWeb: 765245,
    name: "Swan Song",
    time_release: "2021-12-17",
    country: "United States of America",
    director: "Apple, Anonymous Content, Concordia Studio",
    duration: 116,
    labor: "C16",
    stars:
      "Mahershala Ali, Naomie Harris, Awkwafina, Glenn Close, Adam Beach, Lee Shorten, Dax Rey, Nyasha Hatendi, JayR Tinaco, Luke Camilleri",
    description:
      "In the near future, Cameron Turner is diagnosed with a terminal illness. Presented with an experimental solution to shield his wife and son from grief, he grapples with altering their fate.",
    hashtag: "Drama, Science Fiction",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/y0WW5vX58oMEg9aRRTB5QtG1Vyn.jpg",
    trailer: "https://www.youtube.com/embed/LxftqrrlSqc",
  },
  {
    idFilmsOnWeb: 766105,
    name: "Smagen af sult",
    time_release: "2021-06-24",
    country: "Denmark, Sweden",
    director: "Zentropa Entertainments",
    duration: 104,
    labor: "C16",
    stars:
      "Nikolaj Coster-Waldau, Charlie Gustafsson, Katrine Greis-Rosenthal, Dag Malmberg, Nicolas Bro, Flora Augusta, August Christian Høyer-Kruse-Vinkel, Maj-Britt Mathiesen, Rasmus Hammerich, Sarah-Sofie Boussnina",
    description:
      "Maggie and Carsten love each other, they have two wonderful children and run their own gourmet restaurant; Malus. They want it all. And they have it all. Almost. They are missing the coveted Michelin Star. It has been their dream, on which they gambled everything to win. One day Carsten receives a letter saying that his wife loves somebody else. But who sent the letter and why? In their continuous passion and pursuit for the ultimate recognition, they forget that the meals of life are best enjoyed together.",
    hashtag: "Romance, Drama",
    rating: 5.8,
    image: "https://image.tmdb.org/t/p/w500/nk26r1JoKEXpptobBRBFRdq22lV.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 766798,
    name: "Madres paralelas",
    time_release: "2021-10-08",
    country: "Spain",
    director: "El Deseo, TVE",
    duration: 123,
    labor: "C16",
    stars:
      "Penélope Cruz, Milena Smit, Israel Elejalde, Aitana Sánchez-Gijón, Rossy de Palma, Julieta Serrano, Arantxa Aranguren, Adelfa Calvo, José Javier Domínguez, Carmen Flores",
    description:
      "Two unmarried women who have become pregnant by accident and are about to give birth meet in a hospital room: Janis, middle-aged, unrepentant and happy; Ana, a teenager, remorseful and frightened.",
    hashtag: "Drama",
    rating: 6.8,
    image: "https://image.tmdb.org/t/p/w500/gDaxYkYNbHuM2VlUazbcpnFZB6d.jpg",
    trailer: "https://www.youtube.com/embed/8JLrrLaf4Xo",
  },
  {
    idFilmsOnWeb: 768744,
    name: "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
    time_release: "2021-08-06",
    country: "Japan",
    director: "BONES, Toho, TOHO Animation",
    duration: 101,
    labor: "C16",
    stars:
      "Daiki Yamashita, Nobuhiko Okamoto, Yuki Kaji, Ryo Yoshizawa, Kazuya Nakai, Megumi Hayashibara, Tetsu Inada, Yuichi Nakamura, Ayane Sakura, Aoi Yuki",
    description:
      "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
    hashtag: "Animation, Action, Comedy, Fantasy, Adventure",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
    trailer: "https://www.youtube.com/embed/0r4OB67me6I",
  },
  {
    idFilmsOnWeb: 770254,
    name: "Back to the Outback",
    time_release: "2021-12-03",
    country: "United States of America",
    director: "Weed Road Pictures, Reel FX Animation Studios",
    duration: 92,
    labor: "C16",
    stars:
      "Isla Fisher, Tim Minchin, Eric Bana, Guy Pearce, Miranda Tapsell, Angus Imrie, Keith Urban, Aislinn Derbez, Diesel La Torraca, Jack Charles",
    description:
      "Tired of being locked in a reptile house where humans gawk at them like they are monsters, a ragtag group of Australia’s deadliest creatures plot an escape from their zoo to the Outback, a place where they’ll fit in without being judged.",
    hashtag: "Animation, Adventure, Comedy, Family",
    rating: 7.9,
    image: "https://image.tmdb.org/t/p/w500/zNXNRLH5wJprUG6B1olaBTNZOjy.jpg",
    trailer: "https://www.youtube.com/embed/dDNhtB7L8Lk",
  },
  {
    idFilmsOnWeb: 774021,
    name: "Demonic",
    time_release: "2021-07-29",
    country: "Canada, United States of America",
    director: "AGC Studios, Oats Studios, Stabiliti Studios, IFC Midnight",
    duration: 104,
    labor: "C16",
    stars:
      "Carly Pope, Nathalie Boltt, Chris William Martin, Michael J Rogers, Kandyse McClure, Terry Chen, Jason Tremblay, Quinton Boisclair, Andrea Agur, Mavourneen Varcoe-Ryan",
    description:
      "A young woman unleashes terrifying demons when supernatural forces at the root of a decades-old rift between mother and daughter are ruthlessly revealed.",
    hashtag: "Horror, Thriller",
    rating: 4.7,
    image: "https://image.tmdb.org/t/p/w500/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg",
    trailer: "https://www.youtube.com/embed/pIJwtqGFl6o",
  },
  {
    idFilmsOnWeb: 776305,
    name: "竜とそばかすの姫",
    time_release: "2021-07-16",
    country: "Japan",
    director:
      "Studio Chizu, Nippon Television Network Corporation, DENTSU, Toho, Cartoon Saloon, Kadokawa, Hakuhodo DY Media Partners, Yomiuri Telecasting Corporation, BookWalker",
    duration: 121,
    labor: "C16",
    stars:
      "Kaho Nakamura, Takeru Satoh, Tina Tamashiro, Shota Sometani, Ikura, Ryo Narita, Toshiyuki Morikawa, Kenjiro Tsuda, Mami Koyama, Mamoru Miyano",
    description:
      'Suzu is a 17-year-old high school student living in a rural town with her father. Wounded by the loss of her mother at a young age, Suzu one day discovers the massive online world "U" and dives into this alternate reality as her avatar, Belle. Before long, all of U\'s eyes are fixed on Belle, when, suddenly, a mysterious dragon-like figure appears before her.',
    hashtag: "Animation, Drama, Science Fiction",
    rating: 8,
    image: "https://image.tmdb.org/t/p/w500/e143CxHsD7oVxqrxk29I5SJrjrl.jpg",
    trailer: "https://www.youtube.com/embed/sz0nYdtUB20",
  },
  {
    idFilmsOnWeb: 780382,
    name: "Le loup et le lion",
    time_release: "2021-10-13",
    country: "France",
    director: "Galatée Films, Mai Juin Productions, StudioCanal",
    duration: 99,
    labor: "C16",
    stars:
      "Molly Kunz, Graham Greene, Charlie Carrick, Derek Johns, Rebecca Croll",
    description:
      "After her grandfather's death, 20-year-old Alma decides to go back to her childhood home - a little island in the heart of the majestic Canadian forest. Whilst there, she rescues two helpless cubs: a wolf and a lion. They forge an inseparable bond, but their world soon collapses as the forest ranger discovers the animals and takes them away. The two cub brothers must now embark on a treacherous journey across Canada to be reunited with one another and Alma once more.",
    hashtag: "Adventure, Family",
    rating: 6.3,
    image: "https://image.tmdb.org/t/p/w500/oIBdL9Jlj9HYqwPo2UP4KRSALlK.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 785533,
    name: "The Princess Switch 3: Romancing the Star",
    time_release: "2021-11-18",
    country: "United States of America",
    director: "Motion Picture Corporation of America, Brad Krevoy Television",
    duration: 106,
    labor: "C16",
    stars:
      "Vanessa Hudgens, Sam Palladio, Nick Sagar, Will Kemp, Amanda Donohue, Florence Hall, Ricky Norwood, Suanne Braun, Mark Fleischmann, Mia Lloyd",
    description:
      "When a priceless relic is stolen, Queen Margaret and Princess Stacy enlist the help of Margaret’s audacious look-alike cousin Fiona again who teams with a dashing, mysterious man from her past to retrieve it, rekindling the sparks of a tantalizing Christmas romance and resulting in a very unexpected switch.",
    hashtag: "Romance, Comedy",
    rating: 7.1,
    image: "https://image.tmdb.org/t/p/w500/i4r6PuRqRdy46chzEMftrgrQQ7D.jpg",
    trailer: "https://www.youtube.com/embed/CfXzd8fgy6Q",
  },
  {
    idFilmsOnWeb: 785538,
    name: "7 Prisioneiros",
    time_release: "2021-10-22",
    country: "Brazil",
    director: "O2 Filmes, Noruz Films (I)",
    duration: 93,
    labor: "C16",
    stars:
      "Christian Malheiros, Rodrigo Santoro, Bruno Rocha, Lucas Oranmian, Cecília Homem de Mello",
    description:
      "An impoverished teen seeking to escape the clutches of a human trafficker must weigh living up to his moral code against his struggle to survive.",
    hashtag: "Drama, Crime",
    rating: 7.1,
    image: "https://image.tmdb.org/t/p/w500/5svMKCGnR6Yvj8wxldvDvgUi0Jk.jpg",
    trailer: "https://www.youtube.com/embed/vupNkHJGBQ8",
  },
  {
    idFilmsOnWeb: 785545,
    name: "Shaun the Sheep: The Flight Before Christmas",
    time_release: "2021-12-03",
    country: "United Kingdom",
    director: "Aardman Animations",
    duration: 30,
    labor: "C16",
    stars:
      "Kate Harbour, Justin Fletcher, John Sparkes, Laura Aikman, Marcus Brigstocke, Anna Leong Brophy, Simon Greenall, Andy Nyman, Emma Tate, Richard Webber",
    description:
      "Shaun's seasonal excitement turns to dismay when a farmhouse raid to get bigger stockings for the flock inadvertently leads to Timmy going missing. Can Shaun get Timmy back before he becomes someone else’s present?",
    hashtag: "Animation, Comedy, Family",
    rating: 6.9,
    image: "https://image.tmdb.org/t/p/w500/1eh6Yv6bAU2ghHxP1zgUlMfaOR3.jpg",
    trailer: "https://www.youtube.com/embed/QtVCreYpNZY",
  },
  {
    idFilmsOnWeb: 788929,
    name: "Dýrið",
    time_release: "2021-08-12",
    country: "Iceland, Poland, Sweden",
    director:
      "Black Spark Film & TV, Film i Väst, Go to Sheep, Madants, Rabbit Hole Productions, Chimney Group, Chimney, New Europe Film Sales",
    duration: 106,
    labor: "C16",
    stars:
      "Noomi Rapace, Hilmir Snær Guðnason, Björn Hlynur Haraldsson, Ingvar E. Sigurðsson, Ester Bibi, Sigurður Elvar Viðarson, Theodór Ingi Ólafsson, Arnþruður Dögg Sigurðardóttir",
    description:
      "An Icelandic couple live with their herd of sheep on a beautiful but remote farm. When they discover a mysterious newborn on their land, they decide to keep it and raise it as their own. This unexpected development and the prospects of a new family brings them much joy before ultimately destroying them.",
    hashtag: "Drama, Mystery, Horror",
    rating: 6.6,
    image: "https://image.tmdb.org/t/p/w500/gP9yviboTGWGolqUZKIB1UkF1C2.jpg",
    trailer: "https://www.youtube.com/embed/hnEwJKVWjFM",
  },
  {
    idFilmsOnWeb: 796157,
    name: "ប៊ូឌីញ ស",
    time_release: "2021-12-22",
    country: "Cambodia, China, France, Qatar",
    director: "Anti-Archive, Apsara Films, Xstream Pictures, Kongchak Pictures",
    duration: 90,
    labor: "C16",
    stars:
      "Piseth Chhun, Sithan Hout, Sokha Uk, Chinnaro Soem, Sovann Tho, Jany Min, Chandalin Y",
    description:
      "SAMNANG, 20, faces the demolition of his lifelong home in Phnom Penh and the pressures from family, friends, and neighbors which arise and intersect in this moment of sudden change.",
    hashtag: "Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/vJbB8auUGf0yGKzGS63pJ2yVW8N.jpg",
    trailer: "https://www.youtube.com/embed/jtAUltfvadI",
  },
  {
    idFilmsOnWeb: 802217,
    name: "8-Bit Christmas",
    time_release: "2021-11-25",
    country: "United States of America",
    director:
      "Star Thrower Entertainment, Warner Bros. Pictures, New Line Cinema",
    duration: 98,
    labor: "C16",
    stars:
      "Neil Patrick Harris, Winslow Fegley, Sophia Reid-Gantzert, Bellaluna Resnick, June Diane Raphael, Steve Zahn, Jacob Laval, Santino Barnard, Jackson Reid, Chandler Dean",
    description:
      "In suburban Chicago during the late 1980s, ten-year-old Jake Doyle embarks on a herculean quest to get the latest and greatest video game system for Christmas.",
    hashtag: "Family, Comedy",
    rating: 6.5,
    image: "https://image.tmdb.org/t/p/w500/5YwaISdOwp8Zu6O7kwBeUn8a7Pu.jpg",
    trailer: "https://www.youtube.com/embed/CI-YWRK0VPo",
  },
  {
    idFilmsOnWeb: 805051,
    name: "Smelliville",
    time_release: "2021-01-01",
    country: "Belgium, Germany",
    director: "WunderWerk, Grid Animation, Verlag Friedrich Oetinger",
    duration: 85,
    labor: "C16",
    stars:
      "Sema'j Alexander Cunningham, Kya Stein, Ben Young, Lily Held, Tony Clark, Susan Tackenberg, Geraldine Blecker, Tom Zahner, Andrea Dewell, Annemarie Carpendale",
    description:
      "The Oggly family arrive at the municipal rubbish dump of Smelliville and must look for a new home, but they never feel really welcome anywhere. They stink and are for most humans just a tad too oggly. When Firebottom, the family dragon, crash-lands on the run-down rubbish tip of the small town of Smelliville, the Ogglies at once feel at home. And it's here they want to stay.",
    hashtag: "Animation, Drama, Adventure, Family",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/w7PJ7fBEYOuaAMKfYa4zmw45v3N.jpg",
    trailer: "https://www.youtube.com/embed/aXXLpR8fS28",
  },
  {
    idFilmsOnWeb: 810693,
    name: "劇場版 呪術廻戦 0",
    time_release: "2021-12-24",
    country: "Japan",
    director:
      "MAPPA, Shueisha, Sumzap, MBS, Toho, TOHO Animation, Jujutsu Kaisen 0: The Movie Production Committee",
    duration: 105,
    labor: "C16",
    stars:
      "Megumi Ogata, Kana Hanazawa, Mikako Komatsu, Koki Uchiyama, Tomokazu Seki, Yuichi Nakamura, Takahiro Sakurai, Mitsuo Iwata, Takaya Kuroda, Koichi Yamadera",
    description:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
    hashtag: "Animation, Action, Adventure, Mystery",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/eiSlgyx7G61Ey69K9MmCw9OaHMA.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 811741,
    name: "Teka-Teki Tika",
    time_release: "2021-12-23",
    country: "Indonesia",
    director: "Starvision Plus",
    duration: 83,
    labor: "C16",
    stars:
      "Sheila Dara Aisha, Dion Wiyoko, Eriska Rein, Ferry Salim, Jenny Zhang, Morgan Oey, Tansri Kemala, Ayu Laksmi, Whani Darmawan, Kiki Narendra",
    description:
      "A happy family whose lives complement each other. While celebrating his wedding anniversary with his family, a rich businessman was suddenly surprised by the appearance of a mysterious woman who claimed to be his biological child, Tika. Until finally the division in the family was inevitable. Behind all that, there is a big secret about Tika's identity.",
    hashtag: "Comedy, Crime, Drama, Mystery, Thriller",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/rp0GTDscf4mqR8mvH5r5XMPwseb.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 812204,
    name: "Rock Dog 2: Rock Around the Park",
    time_release: "2021-06-24",
    country: "China, United States of America",
    director:
      "Splash Entertainment, Huayi Brothers Pictures, HB Wink Animation",
    duration: 90,
    labor: "C16",
    stars:
      "Andrew Francis, Ashleigh Ball, Brian Dobson, Brian Drummond, Cathy Weseluck, Donny Lucas, Graham Hamilton, Jason Simpson, James Higuchi, Kathleen Barr",
    description:
      "When Bodi and his band 'True Blue' leave Snow Mountain, to tour with pop sensation, Lil' Foxy, they learn that fame comes at a price.",
    hashtag: "Animation, Comedy, Music, Family",
    rating: 7.2,
    image: "https://image.tmdb.org/t/p/w500/kETYRGA15L0wkVPugSl8lKmSgFn.jpg",
    trailer: "https://www.youtube.com/embed/UoYB1Zn6lR4",
  },
  {
    idFilmsOnWeb: 818192,
    name: "Ida Red",
    time_release: "2021-11-05",
    country: "United States of America",
    director: "Roxwell Films, BondIt, Saban Films, Highland Film Group",
    duration: 111,
    labor: "C16",
    stars:
      "Josh Hartnett, Frank Grillo, Melissa Leo, Sofia Hublitz, Deborah Ann Woll, Slaine, Beau Knapp, William Forsythe, Mark Boone Junior, Nicholas Cirillo",
    description:
      "Ida Red may not survive her 20-year prison sentence for armed robbery. She turns to her son, Wyatt, for one last job and a chance to regain her freedom.",
    hashtag: "Crime, Thriller, Drama, Action",
    rating: 5.1,
    image: "https://image.tmdb.org/t/p/w500/etMxKseW67499tUJonLNHXTF538.jpg",
    trailer: "https://www.youtube.com/embed/ProGvt36CBE",
  },
  {
    idFilmsOnWeb: 818427,
    name: "Мой папа не подарок",
    time_release: "2021-12-23",
    country: "Russia",
    director: "KIT Film Studio",
    duration: 105,
    labor: "C16",
    stars:
      "Nikita Tabunshchik, Polina Gukhman, Timofey Tribuntsev, Olga Medynich, Aleksei Kravchenko, Maksim Lagashkin, Dmitry Vyushkin, Anastasia Kalashnikova, Ekaterina Stulova, Viktor Vasilyev",
    description:
      "Max had never looked forward to the New Year like that in his life. Cosplay festival for gamers! Best Player Prize! But suddenly a daring girl Venus and her stern police mother appear on his way. However, Max cannot be stopped. He will do everything to be on the Cosplay. Win the Super Drone Race. Disarms a mysterious villain. Will turn a robbery and save his father from bankruptcy. And none of this would have happened if not for the invention of his dad - a fantastic and fantastically smart drone with the habits of a cute animal.",
    hashtag: "Comedy, Family",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/gZTOrIp07CuYZY9hDh4amWFyfqF.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 823609,
    name: "Monster Family 2",
    time_release: "2021-01-13",
    country: "Germany, United Kingdom",
    director: "Ambient Entertainment, Rothkirch Cartoon Film, Timeless Films",
    duration: 103,
    labor: "C16",
    stars:
      "Emily Watson, Nick Frost, Jessica Brown Findlay, Catherine Tate, Emily Carey, Ethan Rouse, Jason Isaacs, Emma Tate, Daniel Ben Zenou, Ewan Bailey",
    description:
      "To free Baba Yaga and Renfield from the clutches of Monster Hunter Mila Starr, the Wishbone Family once more transforms into a Vampire, Frankenstein's Monster, a Mummy and a Werewolf. Aided and abetted by their three pet bats, our Monster Family zooms around the world again to save their friends, make new monstrous acquaintances and finally come to the realization that ‘Nobody’s Perfect’ – even those with flaws can find happiness.",
    hashtag: "Animation, Family",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/em2NLSbVj49NjpdqmaKYuqKYZET.jpg",
    trailer: "https://www.youtube.com/embed/46stXhjVF8Y",
  },
  {
    idFilmsOnWeb: 826749,
    name: "Fortress",
    time_release: "2021-12-17",
    country: "United States of America",
    director: "EFO Films, Grindstone Entertainment Group, Verdi Productions",
    duration: 100,
    labor: "C16",
    stars:
      "Jesse Metcalfe, Bruce Willis, Chad Michael Murray, Kelly Greyson, Shannen Doherty, Ser'Darius Blain, Sean Kanan, James Cullen Bressack, Natalie Burn, Trae Ireland",
    description:
      "The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.",
    hashtag: "Crime, Action, Thriller",
    rating: 6.6,
    image: "https://image.tmdb.org/t/p/w500/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg",
    trailer: "https://www.youtube.com/embed/GNGXauix9Mo",
  },
  {
    idFilmsOnWeb: 843729,
    name: "അജഗജാന്തരം",
    time_release: "2021-12-23",
    country: "India",
    director: "Silver Bay Studios",
    duration: 122,
    labor: "C16",
    stars:
      "Antony Varghese, Arjun Ashokan, Chemban Vinod Jose, Sabumon Abdusamad, Sudhi Koppa, Jaffer Idukki, V. T. Vijilesh, Lukman Avaran, Vineeth Vishwam, Kichu Tellus",
    description:
      "Aranjali is all set to celebrate the annual temple festival. Some unforeseen chain of events involving an elephant, a few young men, a notorious criminal, a drama troop and some trouble-loving villagers brings complete mayhem to the place",
    hashtag: "Action",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/v1c8RLA64RN2PwTDcxho7yBYtKJ.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 871567,
    name: "Turbo Cola",
    time_release: "2021-12-22",
    country: "",
    director: "Covert Films, New Year's Eve at the Stop 'n Go",
    duration: 0,
    labor: "C16",
    stars:
      "James Andrew O'Connor, Anthony Notarile, Jordyn denning, Brooke Maroon, Isaac J. Conner, Nicholas Stoesser, Brandon Keeton, Liz Bishop, Michael Zuccola, Landon Taverniér",
    description:
      "With all of his friends headed to a party on the last night of 1999, Austin takes an extra shift at the Quality Mart gas station and is forced to look down the barrel of what it means to graduate high school and face a future stuck in his middle of nowhere hometown. He's got one night to make his dreams come true, legal or not, and he's taking it.",
    hashtag: "Drama",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/fhwWg3rcDkp6EzFEefrTvaLqmUS.jpg",
    trailer: "https://www.youtube.com/embed/GngsA6jbw9E",
  },
  {
    idFilmsOnWeb: 877669,
    name: "Un mundo para Julius",
    time_release: "2021-10-14",
    country: "Peru",
    director: "Machaco Films, Tombuktú Films, VisionaTV, TVE",
    duration: 104,
    labor: "C16",
    stars:
      "Augusto Linares, Pamela Saco, Mayella Lloclla, Nacho Fresneda, Antonieta Pari, Matías Raygada, Américo Zúñiga, Javier Sardà, Fernando Bacilio, Camila MacLennan",
    description:
      "Julius is an upper-class boy in Lima in the 1940s. He lives in a palace with his aristocratic family and extensive servants. As the years go by, Julius will gradually lose his innocence, discovering and never understanding an adult world full of inequalities and injustices.",
    hashtag: "Drama, TV Movie",
    rating: 7,
    image: "https://image.tmdb.org/t/p/w500/oajGi3ZZW8R6iWn6ag7DwsdKqx4.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 877841,
    name: "West of Calico",
    time_release: "2021-12-21",
    country: "",
    director: "",
    duration: 10,
    labor: "C16",
    stars: "Ryan Emilio Molina, Raz Fritz",
    description:
      "In 1849, two brothers travel to California in hopes of finding gold. After an arduous search they're now lost, low on food and the tension between them is starting to rise.",
    hashtag: "Drama, Western",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/w3MgUpJBvk3CEYMypmCXUht55ZR.jpg",
    trailer: "https://www.youtube.com/embed/24Lk1RoiLiM",
  },
  {
    idFilmsOnWeb: 879292,
    name: "Sepeda Presiden",
    time_release: "2021-12-23",
    country: "Indonesia",
    director: "Radepa Studio",
    duration: 0,
    labor: "C16",
    stars:
      "Ariel Tatum, Arnol Aner Asmuruf, Elias Fortunatus Padwa, Anthonio Ramandei, Ian William, Sita Nursanti, Joanita Chatarine, Mawar Eva De Jongh, Raihaanun",
    description:
      "After the incident the president gave bicycles to school children, some Papuan children also wanted to experience getting bicycles from the president too",
    hashtag: "Drama, Music, Comedy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/khsW8OpNoFFufKEVLD84kJghRV4.jpg",
    trailer: "https://www.youtube.com/embed/RRq2ZE8C7KQ",
  },
  {
    idFilmsOnWeb: 881211,
    name: "Snoopy Presents: For Auld Lang Syne",
    time_release: "2021-12-09",
    country: "Canada",
    director: "WildBrain Studios",
    duration: 40,
    labor: "C16",
    stars:
      "Etienne Kellici, Isabella Leo, Wyatt White, Terry McGurrin, Rob Tinkler, Lexi Perri, Hattie Kragten, Holly Gorski, Caleb Bellavance, Natasha Nathan",
    description:
      "After finding out her grandmother won't be visiting for Christmas, Lucy decides to cheer herself up by throwing the ultimate New Year's Eve party. Meanwhile, Charlie Brown tries to fulfill one of his resolutions before the clock strikes midnight.",
    hashtag: "Animation, Family",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/p0ONYt2cw0vPEnZIoOHq1Ki7Ifm.jpg",
    trailer: "https://www.youtube.com/embed/feu3E6aSBvE",
  },
  {
    idFilmsOnWeb: 881768,
    name: "De openbaring",
    time_release: "2021-12-23",
    country: "",
    director: "",
    duration: 0,
    labor: "C16",
    stars: "Victor Löw, Monic Hendrickx, Leny Breederveld, Peter Bolhuis",
    description:
      "Unemployed Jacob moves in with his elderly mother at the start of the corona lockdown. He falls under the influence of an internet conspiracy-theorist and goes slowly insane.",
    hashtag: "Thriller",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500null",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 887767,
    name: "Last Shoot Out",
    time_release: "2021-12-03",
    country: "United States of America",
    director: "Feifer Worldwide, Grindstone Entertainment Group, Lionsgate",
    duration: 0,
    labor: "C16",
    stars:
      "Jay Pickett, Michael Welch, Skylar Witte, Cam Gigandet, Bruce Dern, Brock Harris, Peter Sherayko, David DeLuise, Caia Coley, Brock Burnett",
    description:
      "Soon after a newlywed learns that her husband had her father shot down, she flees from the Callahan ranch in fear. She's rescued by a gunman who safeguards her at a remote outpost as he staves off her husband's attempts to reclaim his bride.",
    hashtag: "Western, Action, Thriller",
    rating: 6.7,
    image: "https://image.tmdb.org/t/p/w500/pvEtPxotI3POlVPvNxgrHJuDXfe.jpg",
    trailer: "https://www.youtube.com/embed/PqqYBoz2Y4c",
  },
  {
    idFilmsOnWeb: 889071,
    name: "Baby Blues",
    time_release: "2021-12-23",
    country: "Indonesia",
    director: "MVP Pictures",
    duration: 100,
    labor: "C16",
    stars:
      "Vino G. Bastian, Aurélie Moeremans, Ratna Riantiarno, Mathias Muchus, Rigen Rakelna, Abdurrahman Arif, Ence Bagus, Aida Nurmala, Vitta Mariana Barrazza",
    description:
      "Dinda decides to stop working to take care of her newborn baby, while Dika is working hard to support her family. It turns out that having children is not what they both imagined. The intervention of the mother-in-law, Dance Mother, adds to the stress level. The accumulation of all this makes Dinda experience Baby Blues syndrome which slowly hurts Dinda and Dika's relationship. In the climax, Dinda's unintentional request was granted: they swap bodies. They must learn to understand and understand each other.",
    hashtag: "Drama, Romance",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/v0hASMPoTlwqw4gD0CZLI6SbVuY.jpg",
    trailer: "https://www.youtube.com/embed/olXfjgN1WWo",
  },
  {
    idFilmsOnWeb: 896605,
    name: "Slay Ride",
    time_release: "2021-12-23",
    country: "United States of America",
    director: "McLean & Cipullo Productions",
    duration: 45,
    labor: "C16",
    stars: "Collin McLean, Dominic Cipullo",
    description:
      "Every year, the Oysterlips invite their family up to their isolated New Hampshire cabin for Christmas Eve dinner. Everything seems to be going well until the family starts getting picked off one by one by the insane Santa Claus Killer! Embroilment between the eccentric family members, a relentless blizzard and shocking violence lead to absolute mayhem!",
    hashtag: "Comedy, Horror, Mystery",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500null",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 899298,
    name: "Undying",
    time_release: "2021-12-24",
    country: "",
    director: "",
    duration: 0,
    labor: "C16",
    stars:
      "James Russo, Teri Reeves, Elena Sanchez, Tom Proctor, Dennis Keiffer, Dwight Henry, Gail Cronauer, Ed Corbin, Major Dodge, Amber McNutt",
    description:
      "A tragic car accident puts a woman in a two year coma. She wakes up to find her fiance' is dead and her friends have abandoned her. So she calls on an evil spirit to raise her fiance' from the dead and exact revenge. But revenge always comes with a price.",
    hashtag: "",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/AslujCpCEPVWp5bZEJS98r0EICf.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 899382,
    name: "Christmas is Cancelled",
    time_release: "2021-12-16",
    country: "",
    director: "",
    duration: 95,
    labor: "C16",
    stars:
      "Dermot Mulroney, Hayley Orrantia, Janel Parrish, Mirelly Taylor, Emilie Modaff, Michael Naizu",
    description:
      "Emma's father and her high school frenemy start dating so she embarks on a mission to break up the happy couple.",
    hashtag: "Comedy",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/2Vivy2G7Kx8duhN35eUG74B8JXK.jpg",
    trailer: "https://www.youtube.com/embed/Lq_9-ZbVb5s",
  },
  {
    idFilmsOnWeb: 899946,
    name: "Caveman - Der Kinofilm",
    time_release: "2021-12-23",
    country: "",
    director: "",
    duration: 101,
    labor: "C16",
    stars:
      "Moritz Bleibtreu, Wotan Wilke Möhring, Jürgen Vogel, Laura Tonke, Martina Hill",
    description: "",
    hashtag: "Comedy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/sVeYRc34He0gxuC7RQflgMVlDMU.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 906228,
    name: "L'Odyssée antarctique",
    time_release: "2021-12-22",
    country: "",
    director: "",
    duration: 0,
    labor: "C16",
    stars: "",
    description: "",
    hashtag: "Documentary",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/1CvYh0lZqlazxI16GYkic6u21eN.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 911071,
    name: "Tú eres mi problema",
    time_release: "2021-12-16",
    country: "",
    director: "Mandarina Cine",
    duration: 0,
    labor: "C16",
    stars:
      "Bárbara Mori, Santiago Barajas Hamue, Loreto Peralta, Juan Carlos Colombo, Mauro Mauad",
    description: "",
    hashtag: "Family, Drama",
    rating: 8,
    image: "https://image.tmdb.org/t/p/w500/tRccV0ehDI6xHq4aGCjDnblCd0M.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 911271,
    name: "No Country For Young Men",
    time_release: "2021-12-21",
    country: "",
    director: "",
    duration: 20,
    labor: "C16",
    stars: "Luciano Scarpari, Andrea Scarpari, Bruna Lonati",
    description:
      "A retired bricklayer wants his grandson, who lives hundreds of miles away, to stay with him. Will he convince the young man despite the lack of opportunities in the country?",
    hashtag: "Documentary",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/ss8OehQRvJ5W2x1G4O4xRbn9Xv2.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 912150,
    name: "مربع برمودة",
    time_release: "2021-12-22",
    country: "Egypt",
    director: "The Gate Media Group",
    duration: 0,
    labor: "C16",
    stars:
      "Mostafa Khater, Amr Abdul Gelil, Rogena Amin, Hana Sheiha, Mohamed Tharwat, Mohamed Gomaa, Aaidah Riyadh, Dina, Racha Ben Maaouia, Mohamed Al Ammrosi",
    description:
      "A certain psychological phenomenon occurs to the two protagonists, one of whom is a visual artist.",
    hashtag: "Comedy",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/jdN6M2jSFonSpegL4UJejGKM480.jpg",
    trailer: "Updating",
  },
  {
    idFilmsOnWeb: 914129,
    name: "Distance",
    time_release: "2021-12-21",
    country: "Turkey",
    director: "",
    duration: 6,
    labor: "C16",
    stars: "",
    description:
      "The film offers us a short journey to be in harmony with the uncertain rhythm of life and the world. What we have seen on this journey we took presents us with acquisitions of where we are in this rhythm and how we might react against this manipulation that time imposes on us. It confronts us with the question of whether all the states of time are congruent or does time gain a relative rhythm according to places.",
    hashtag: "",
    rating: 0,
    image: "https://image.tmdb.org/t/p/w500/zcgDJd6Cfq0rDwwzL079WWYoD6w.jpg",
    trailer: "Updating",
  },
];

module.exports = {
  roles,
  accounts,
  films,
  priceTypes,
  theathers,
  roomFilms,
  showTimes,
};
