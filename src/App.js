import './App.css';
import Header from './components/Header';
import CardPlace from './components/CardPlace';
import { useState, useMemo } from 'react';
import CardModal from './components/CardModal';
import LoginModal from './components/LoginModal'


function App() {
  const places = [
  {
    id: 1,
    country: "Помпеи, Римская империя",
    shortDesc: "Наверное, один из самых известных городов-призраков. И один из самых старейших.Город был стерт с лица земли проснувшимся Везувием — это случилось еще в 79 году н.э...",
    fullDesc: " Наверное, один из самых известных городов-призраков. И один из самых старейших.Город был стерт с лица земли проснувшимся Везувием — это случилось еще в 79 году н.э. Сила вулканического извержения была настолько мощной, что пепел Везувия достиг также Сирии и Египта, а вместе с Помпеями погибли Стабия и Геркуланум, соседние города.На момент извержения вулкана в Помпеях жило 13 тысяч человек (по некоторым данным, 20 тысяч). Около двух тысяч остались навсегда лежать под слоем вулканического пепла. При этом вулканическая лава «законсервировала» город, его архитектуру, сделав ценнейшим архитектурным памятником. С середины XVIII века здесь активно ведутся раскопки — ученым удалось отреставрировать храмы, термы, здания муниципалитета, форум, пекарни, жилые дома. ",
    imageUrl: "./photo1.jpg",
  },
  {
    id: 2,
    country: "Порт-Ройал, колония Ямайка",
    shortDesc: "История этого заброшенного города также весьма интересна — и тот период, когда город еще существовал, и сюжет его гибели...",
    fullDesc: " История этого заброшенного города также весьма интересна — и тот период, когда город еще существовал, и сюжет его гибели. Католическая церковь называла Порт-Ройал «самым злым городом христианского мира» — город был столицей Ямайки и развивался, благодаря незаконной торговле и пиратству. Причем развивался город довольно быстро: каменные дома, водопровод, большое количество борделей, игорных заведений, баров. Землетрясение, которое в итоге стерло Порт-Ройал с лица земли, сначала не вызвало паники. Небольшие сейсмические активности здесь случались регулярно. Однако в 1962 году 7 июня к землетрясению присоединилось цунами — большую часть города вместе с домами просто смыло в море, остальное погибло под гигантской волной. Жертв было огромное количество — более 5 000 человек. Интересно, что было несколько попыток снова отстроить город, но он каждый раз погибал. Сначала из-за сильного пожара, потом из-за урагана, и наконец, снова из-за огня. Три века городские руины покоились на большой глубине под толстым слоем ила, и только в середине XX века ими заинтересовались археологи, которые стали тщательно исследовать местность, находить разнообразные артефакты.й",
    imageUrl: "./photo2.jpg",
  },
  {
    id: 3,
    country: "Сентрейлия, США",
    shortDesc: "Одно из мистических мест с невероятной историей. Маленький городок в Пенсильвании стал прообразом места действия «Сайлент Хилл», фильма ужасов...",
    fullDesc: " Одно из мистических мест с невероятной историей. Маленький городок в Пенсильвании стал прообразом места действия «Сайлент Хилл», фильма ужасов. Опустошенные улицы города до сих пор скрываются под дымом, который сигнализирует: подземный пожар, начавшийся здесь в 1962 году, до сих пор не утих. История возникновения пожара очень прозаична, а потому весьма печальна. В одной из заброшенных угольных шахт сформировалась мусорная свалка. Городские власти решили ликвидировать свалку и привлекли к этому пожарных. Пожарные не стали заморачиваться, а решили просто поджечь мусор и потом потушить огонь, но кто-то что-то где-то не рассчитал, и огонь перекинулся на соседние шахты. Почти 15 лет город продолжал жить, несмотря на непогашенное под землей пламя. Но в какой-то момент стало очевидно — город не спасти. Температура резервуаров с топливом для городских бензоколонок достигла 80 °С и риск взрыва сильно вырос. Одной из последних капель стало развержение земли прямо под ногами у 12-летнего подростка — мальчика удалось спасти только чудом. А по всему городу стал трескаться асфальт, появляться провалы, пышущие жаром. Жителей города переселили, у многих были выявлены серьезные проблемы со здоровьем.",
    imageUrl: "./photo3.jpg",
  },
  {
    id: 4,
    country: "Вилья-Эпекуэн, Аргентина",
    shortDesc: "Курортный поселок был построен на берегу Эпекуэн, соленого озера. Концентрация соли на озере была максимально близка к характеристикам Мертвого моря...",
    fullDesc: " Курортный поселок был построен на берегу Эпекуэн, соленого озера. Концентрация соли на озере была максимально близка к характеристикам Мертвого моря, поэтому здесь была сформирована туристическая инфраструктура, построены санаторий, гостиничные комплексы, музеи, магазины, рестораны. В пик сезона деревня принимала до 25 тысяч отдыхающих. 1985 год стал роковым для поселка: из-за затяжных дождей уровень воды в озере поднялся намного выше нормы, под напором воды дамба разрушилась, и всего за два дня город ушел под воду. Интересно, что подобный исход не был неожиданностью: раньше здесь регулярно случались обильные осадки, приводившие к наводнению, и если бы местные власти предприняли вовремя меры, катастрофы получилось бы избежать. Зато обошлось без человеческих жертв. Соленая вода отступила, обнаружив руины поселка, только четверть столетия спустя. Выглядят руины жутко, но на их фоне получаются эффектные фотографии. Один из бывших жителей поселка, Пабло Новак, решил поселиться здесь — много лет он водил экскурсии по городу, показывал исторические руины, снимался в репортажах и документальных фильмах. В 2024 году Новак скончался, ему было 93 года. ",
    imageUrl: "./photo4.jpg",
  },
  {
    id: 5,
    country: "Фамагуста, Кипр",
    shortDesc: "Древний город Фамагуста в 70-х годах прошлого века был весьма привлекателен для туристов со всего света. На отдых в элитный квартал Вароша съезжались обеспеченные люди...",
    fullDesc: " Давайте поговорим не только про заброшенные города, но и про заброшенные курорты. Такие тоже есть. Например, древний город Фамагуста в 70-х годах прошлого века был весьма привлекателен для туристов со всего света. На отдых в элитный квартал Вароша съезжались обеспеченные люди, включая знаменитостей — здесь отдыхали в свое время Элизабет Тейлор, Бриджит Бардо. Варошу прозвали Новой Фамагустой: современная инфраструктура, дорогие виллы, ночные и клубы и бары были буквально магнитом для сильных мира сего. Однако жизнь курорта была недолгой. Уже в 1974 году турецкие войска вторглись на Кипр, остров был поделен на Южную и Северную территории. Фамагуста отошла Турецкой Республике, соответственно, киприотам пришлось покинуть свои дома. Курорт Вароша превратился в буферную зону ООН — фактически, заселиться сюда могут только прежние жители, однако сделать они этого не могут из-за оккупации. Сейчас курорт выглядит весьма апокалиптично: роскошные здания заросли растениями, территория огорожена колючей проволокой, на улицах ржавеют люксовые автомобили.",
    imageUrl: "./photo5.jpg",
  },
  {
    id: 6,
    country: "Остров Хасима, Япония",
    shortDesc: "Этот город сложно назвать крупнейшим заброшенным городом мира — остров очень маленький, его длина всего 480 м, ширина — 150 м. Но история его весьма удивительна и интересна...",
    fullDesc: " Этот город сложно назвать крупнейшим заброшенным городом мира — остров очень маленький, его длина всего 480 м, ширина — 150 м. Но история его весьма удивительна и интересна. Город был основан в 1887 году, когда японская компания Mitsubishi начала добывать тут уголь. В 1959 году шахтерский город Хасима достиг пика своего развития, став самым густонаселенным местом на планете. Территория острова была маленькой, однако здесь нашлось место для собственной школы, больницы, для нескольких магазинов, также здесь были построены храм и кладбище. Через 15 лет добыча угля на острове прекратилась, так как оставаться здесь было небезопасно — остров постоянно затапливало сильными волнами. Под действием морской воды и сильных ветров город-призрак разрушался. В 2009 году Хасиму открыли для посетителей, в 2015 году внесли в Список наследия Юнеско. Сейчас к осмотру доступна только часть города, на остальной территории дома находятся в аварийном состоянии и находиться там небезопасно. ",
    imageUrl: "./photo6.jpg",
  },
  {
    id: 7,
    country: "Припять, Украина",
    shortDesc: "Это одно из самых известных названий заброшенных городов мира — о Припяти и трагедии, которая привела к умиранию города, знают не только в России и странах СНГ, но по всему миру...",
    fullDesc: " Это одно из самых известных названий заброшенных городов мира — о Припяти и трагедии, которая привела к умиранию города, знают не только в России и странах СНГ, но по всему миру. Основана Припять была в 1970 году для работников Чернобыльской атомной станции. На 1985 год в Припяти проживало около 47,5 тысяч человек — фактически, это один из самых больших заброшенных городов в мире. Авария на Чернобыльской АЭС положила конец жизни города: все жители были эвакуированы. Сам город остался постепенно умирать — до сих пор здесь стоят дома, спортзалы, школы, магазины, привлекая смелых туристов, которые любят адреналин, новые впечатления и не боятся радиоактивного заражения. ",
    imageUrl: "./photo7.jpg",
  },
  {
    id: 8,
    country: "Молога, СССР",
    shortDesc: "Стоит поговорить и про заброшенные города России, точнее (в те времена), СССР. Сейчас Молога скрыт под водами Рыбинского водохранилища, что в Ярославской области. Был основан в 1149 году...",
    fullDesc: "Стоит поговорить и про заброшенные города России, точнее (в те времена), СССР. Сейчас Молога скрыт под водами Рыбинского водохранилища, что в Ярославской области. Был основан в 1149 году, и к началу XX века превратился в зажиточный и развитый город — здесь работало одиннадцать заводов, школы, библиотеки, больницы, благотворительные заведения, была торговая площадь, набережная, также было множество монастырей и храмов. Сегодня Мологу называют русской Атлантидой. История города завершилась в 1946 году, но события, которые привели к печальному концу, начались значительно раньше — в 1935 году, когда было принято решение построить Угличский и Рыбинский гидроузлы. В соответствии с проектом город нужно было затопить и жителям не удалось отстоять свои дома. В течение нескольких лет жителей переселяли. Многие высокие постройки были взорваны и снесены. Часть мостовых и зданий сохранились, и когда в водохранилище остается мало воды, их даже можно увидеть. ",
    imageUrl: "./photo8.jpg",
  },
  {
    id: 9,
    country: "Хальмер-Ю, Россия",
    shortDesc: "Еще один российский город, который просуществовал очень недолго, чуть больше 50 лет.Во времена ВОВ здесь были обнаружены залежи угля — открыли шахту, вокруг которой стремительно вырос населенный пункт, где даже сформировалась неплохая инфраструктура...",
    fullDesc: " Еще один российский город, который просуществовал очень недолго, чуть больше 50 лет. Во времена ВОВ здесь были обнаружены залежи угля — открыли шахту, вокруг которой стремительно вырос населенный пункт, где даже сформировалась неплохая инфраструктура: были построены детский садик, школа, магазины, дом культуры, профилакторий. Однако добыча угля была организована не лучшим образом — процесс шел по краю пласта, из-за чего шахта не смогла выйти на проектную мощность. После развала СССР предприятие пришло в упадок, город был официально закрыт, жителей начали переселять — причем, настолько быстро, что многие были вынуждены оставлять в своих квартирах не только мебель, но утварь, книги, личные вещи. Сегодня руины города Хальмер-Ю привлекают любителей сталкинг-туризма: оставшиеся стены зданий, заводские трубы выглядят как в постапокалиптическом фильме. Но нужно учитывать, что туристы допускаются на территорию поселка не всегда — военные здесь периодически испытывают крылатые ракеты: график испытаний публикуют заранее. ",
    imageUrl: "./photo9.jpg",
  },
];

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const handleLoginSuccess = (userData) => {
    console.log('Пользователь вошел:', userData);
    setUser({
      name: userData.username,
      isAuthenticated: true
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    console.log('Пользователь вышел');
  };

  const filteredAndSortedPlaces = useMemo(() => {
    let filtered = places.filter(place =>
      place.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortOption) {
      case 'name-asc':
        return filtered.sort((a, b) => a.country.localeCompare(b.country));
      case 'name-desc':
        return filtered.sort((a, b) => b.country.localeCompare(a.country));
      case 'id-asc':
        return filtered.sort((a, b) => a.id - b.id);
      case 'id-desc':
        return filtered.sort((a, b) => b.id - a.id);
      default:
        return filtered;
    }
  }, [places, searchQuery, sortOption]);

  return (
    <div className="app">
      <Header 
        onClick={() => setIsLoginModalOpen(true)} 
        user={user}
        onLogout={handleLogout} 
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <main className="main-content">
        <div className="controls" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Поиск по стране..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '8px', fontSize: '16px', width: '60%' }}
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{ padding: '8px', fontSize: '16px' }}
          >
            <option value="default">Без сортировки</option>
            <option value="name-asc">По алфавиту (А-Я)</option>
            <option value="name-desc">По алфавиту (Я-А)</option>
            <option value="id-asc">По ID (возрастание)</option>
            <option value="id-desc">По ID (убывание)</option>
          </select>
        </div>

        <div className="places-grid">
          {filteredAndSortedPlaces.map(place => (
            <CardPlace
              key={place.id} 
              place={place} 
              onClick={() => setSelectedPlace(place)}
            />
          ))}
        </div>
      </main>

      {selectedPlace && (
        <CardModal
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}
    </div>
  );
}

export default App;