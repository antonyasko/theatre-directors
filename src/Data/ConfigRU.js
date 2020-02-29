const colors = [
  {
    id: 'orange',
    name: 'Акцент Оранжевый',
    hex: '# F54D1C',
  },
  {
    id: 'black',
    name: 'Черный',
    hex: '# 000000',
  },
  {
    id: 'grey',
    name: 'Серый',
    hex: '# F5F2EC',
  },
];

const styleguideNav = {
  colorsTitle: 'Цвета',
  buttonsLinksTitle: 'Кнопки / Ссылки',
  buttonsLinksName: 'Ссылка',
  textStylesTitle: 'Стиль текста',
  size: 'Размер',
  lineHeight: 'Интерлиньяж',
  letterSpacing: 'Межбуквенное расстояние',
};

const worklogNav = {
  time: 'Время',
  feature: 'Особенность',
  problems: 'Проблемы',
};

const tasksData = {
  tasksTitle: 'Максимальное количество очков - 280',
  selfScore: 'Итого - 230',
  problems:['Работа с git в командном проекте.', 'Выбор подходящих анимаций.', 'Проблемы с реализацией галереи.', 'Сложности с загрузкой проекта на хостинг.'],
  tasks: [
    'Главная страница + страница со списком авторов + страница автора - 10',
    'Страница с членами команды + страница с рабочим журналом - 10',
    'Страница со списком авторов содержит виджет поиска - 10',
    'Портал имеет два языка - 20',
    'Портал имеет страницу с руководством по стилю - 20',
    'Мобильная версия в порядке - 10',
    'Версия для Ipad / планшета в порядке - 10',
    'Страница автора содержит временную шкалу - 10',
    'Страница автора содержит оверлей видео - 10',
    'Страница автора содержит фотогалерею - 20',
    'Страница автора содержит карту - 10',
    'Дизайн - 20',
    'Используется Material-ui - 20',
    'Портал имеет третий язык - 10',
    'Анимации - 20',
    'Выдающийся дизайн - 20',
    'Уверенность в презентации проекта - 10',
    'Проект выполнен с использованием gatsbyjs - 10',
    'Contentful / Netlify CMS используется для управления контентом - 10',
    'Использование инструмента React styleguide для страницы со стилями - 20',
  ],
};

const developersFeatures = [
  {
    name: 'Екатерина',
    time: ['10ч','3ч'],
    tasks: ['Создана страница о режиссёре','Реализована временная шкала событий']
  },
  {
    name: 'Владимир',
    time: ['10ч','5ч','4ч'],
    tasks: ['Созданы хедер, навигация, страница со списком режиссёров','Реализован перевод вебсайта на три языка','Реализован поиск режиссёров']
  },
  {
    name: 'Екатерина',
    time: ['2ч','7ч','10ч'],
    tasks: ['Создана базовая структура проекта','Создана главная страница','Реализована карта']
  },
  {
    name: 'Антон',
    time: ['8ч','2ч','9ч'],
    tasks: ['Создана страница с членами команды','Созданы файлы с данными','Реализован видеоблок']
  },
  {
    name: 'Кирилл',
    time: ['23ч','18ч'],
    tasks: ['Создан дизайн проекта','Созданы страницы с рабочим журналом и руководством по стилю']
  },
  {
    name: 'Роман',
    time: ['13ч', '5ч'],
    tasks: ['Реализована фотогалерея', 'Реализована анимация вебсайта']
  },
]

const developers = [
  {
    id: 'D0',
    name: 'Екатерина Руденко',
    github: 'https://github.com/Rekaterina',
    telegram: 'https://t.me/rekaterina',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/rudenko.jpg',
    contribution: [
      '➤Создана страница о режиссёре.',
      '➤Реализована временная шкала событий.'
    ],
  },
  {
    id: 'D1',
    name: 'Владимир Серко',
    github: 'https://github.com/Vir45',
    telegram: 'https://t.me/Vova_Serko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/serko.jpg',
    contribution: [
      '➤Созданы хедер, навигация, страница со списком режиссёров.',
      '➤Реализован перевод вебсайта на три языка.',
      '➤Реализован поиск режиссёров.'
    ],
  },
  {
    id: 'D2',
    name: 'Екатерина Якубовская',
    github: 'https://github.com/Katsiaryna31',
    telegram: 'https://t.me/KatsiarynaYa',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yakubovskaya.jpg',
    contribution: [
      '➤Создана базовая структура проекта.',
      '➤Создана главная страница.',
      '➤Реализована карта.'
    ],
  },
  {
    id: 'D3',
    name: 'Антон Ясько',
    github: 'https://github.com/antonyasko',
    telegram: 'https://t.me/anton_yasko',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/yasko.jpg',
    contribution: [
      '➤Создана страница с членами команды.',
      '➤Созданы файлы с данными.',
      '➤Реализован видеоблок.'
    ],
  },
  {
    id: 'D4',
    name: 'Кирилл Лёгкий',
    github: 'https://github.com/kirillleogky',
    telegram: 'https://t.me/KirillLeogky',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/leogky.jpg',
    contribution: [
      '➤Создан дизайн проекта.',
      '➤Созданы страницы с рабочим журналом и руководством по стилю.'
    ],
  },
  {
    id: 'D5',
    name: 'Роман Гончаров',
    github: 'https://github.com/RomaSRS',
    telegram: 'https://t.me/RomanSRS',
    image: 'https://raw.githubusercontent.com/antonyasko/RSprojects/master/goncharov.jpg',
    contribution: [
      '➤Реализована фото галерея.',
      '➤Реализована анимация вебсайта.'
    ],
  },
];

const directors = [
  {
    id: '0',
    name: 'Евстигней Афиногенович Мирович',
    born: '10 августа 1878',
    deceased: '16 февраля 1952',
    description: 'Белорусский драматург и театральный режиссёр',
		image: 'https://boom.ms/wp-content/uploads/f/foto-babushek-i-dedushek-v-molodosti/6.jpg',
    placeOfBirth: 'Санкт-Петербург',
    shortBiography : 'Русский и белорусский драматург, артист, режиссёр и педагог. Один из создателей белорусского национального советского театра. Об актёре и режиссёре были изданы книги С. А. Петровича «Народный артист БССР Е. А. Мирович» (1963) и «Евстигней Мирович» (1978); педагогической деятельности Е. А. Мировича посвящена глава в книге его ученика А. И. Бутакова «Мои учителя» (2004); о его жизни написаны главы в энциклопедиях, публикуются воспоминания современников в периодических изданиях и сети Интернет. Выпущена почтовая марка к 100-летнему юбилею Е. А. Мировича и почтовая карточка с оригинальной маркой к его 125-летию. О творческой судьбе Е. А. Мировича на киностудии «Беларусьфильм» снят документальный фильм «Через всю жизнь» (1978). На здании Белорусской академии искусств открыта памятная доска в честь выдающегося деятеля театра Евстигнея Афиногеновича Мировича.',
    timeline: [
      {date: '1900', text: 'Начал работать в петербургских театрах актером, затем режиссером.'},
      {date: '1906', text: 'Стал действующим членом Санкт-Петербургского союза драматических и музыкальных писателей.'},
      {date: '1919', text: 'Начал работать в театрах Беларуси'},
      {date: '1921 — 1931', text: 'Работает художественным руководителем в театрах Беларуси.'},
      {date: '1932 — 1935', text: 'Художественный руководитель Гомельского театра рабочей молодежи.'},
      {date: '1937 — 1940', text: 'Художественный руководитель Белорусского театра юного зрителя имени Н. Крупской.'},
      {date: '1941 — 1945', text: 'Работает режиссером Белорусского театра им. Я. Купалы (БГТ-1).'},
    ],
    project: [
      {date: '1923', text: '«Кастусь Калиновский»'},
      {date: '1927', text: '«Мятеж» по Д. Фурманову'},
      {date: '1929', text: '«Мост» Е. Романовича'},
      {date: '1930', text: '«Гута» Кобеца'},
      {date: '1937', text: '«Как закалялась сталь» по Н. Островскому'},
      {date: '1939', text: '«Чудесная дудка» Вольского'},
    ],
    video: 'https://www.youtube.com/embed/Yunms45xnog',
    mapData: {
      center: [53.9226577, 27.6010486],
      place: 'Белорусская государственная академия искусств',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%B0%D0%BA%D1%82%D1%91%D1%80%D0%B0_%D0%95%D0%B2%D1%81%D1%82%D0%B8%D0%B3%D0%BD%D0%B5%D1%8F_%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B0.JPG'
      },
      {
        num: 1,
        src: 'https://img.tyt.by/n/obshchestvo/0b/4/08_mirovich-1952_620.jpg'
      },
      {
        num: 2,
        src: 'https://img.tyt.by/n/obshchestvo/06/0/09_mirovich_doska_620.jpg'
      },
      {
        num: 3,
        src: 'https://img.tyt.by/n/kultura/0c/8/06_mirovich.png'
      },
    ],
  },
  {
    id: '1',
    name: 'Владислав Иосифович Голубок',
    born: '15 мая 1882',
    deceased: '28 сентября 1937',
    description: 'Белорусский драматург, прозаик, режиссер, актер, художник.',
		image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Edward_Pep%C5%82owski.jpg',
    placeOfBirth: 'Ст. Лесная, Новогрудский уезд, Минская губерния',
    shortBiography : 'Белорусский советский актёр, режиссёр, писатель, художник, декоратор, первый народный артист Белорусской ССР (1928), один из основателей белорусского национального театра, художественный руководитель и директор Белорусского государственного театра. По воспоминаниям современников – в БССР не осталось такого района, в котором бы не побывал театр Голубка. В 1920 году он приезжал с выступлением в Слуцк в то время, когда на Случчине действовало объединение «Папараць-кветка». Именно то, целью деятельности которого объявлялось изучение и пропаганда белорусского языка, культуры и искусства, приобщение к культурным ценностям широкого круга населения через создание и поддержку филиалов, стационарных и передвижных библиотек, проведение лекций и концертов.',
    timeline: [
      {date: '1896', text: 'Впервые попал в настоящий театр.'},
      {date: '1906', text: 'На страницах «Нашей Нивы» появились его первые стихи и рассказы.'},
      {date: '1913', text: 'В Петербурге вышла первая книжка «Рассказы».'},
      {date: '1917', text: 'Возрождено «Первое белорусское общество драмы и комедии», ранее запрещено властями Российской Империи. Голубок вступает в общество вместе с женой и детьми и делает первые попытки в драматургии. За одну только осень 1917 г. Голубок пишет три пьесы, которые сразу ставит его трупа.'},
      {date: '1920', text: 'Возглавил Драматическую секцию культурно-просветительской организации «Цветок папоротника» в Слуцке.'},
      {date: '1924', text: 'Издан приказ Наркомата просвещения о превращении трупы Голубка в Белорусский государственный труппу.'},
      {date: '1928', text: 'Присвоено звание народного артиста республики. Голубок стал первым белорусским народным артистом.'},
      {date: '1931', text: 'Театр Голубка реорганизуют, его называют БГТ-3 (Белорусский третий государственный театр) и «прописывают» в Гомеле. Гастроли по округам, тем не менее, продолжались.'},
      {date: '1933', text: 'БГТ-3 ставит пьесу «Белое оружие». Пьеса повествует о вредительской деятельности «врагов народа» на одном из заводов.'},
      {date: '1935', text: 'Широко отмечался 15-летний юбилей театра Владислава Голубка, многие актеры получили почетные звания, Голубок был награжден автомобилем и творческой командировкой в Москву и Ленинград.'},
    ],
    project: [
      {date: '1917', text: '«Последнее свидание»'},
      {date: '1920', text: '«Суд»'},
      {date: '1921', text: '«Белый венок»'},
      {date: '1927', text: '«Краб»'},
      {date: '1933', text: '«Белое оружие»'},
    ],
    video: 'https://www.youtube.com/embed/FQ054q0969g',
    mapData: {
      center: [52.431906, 31.0122417],
      place: 'Белорусский третий государственный театр',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%A3%D0%BB%D0%B0%D0%B4%D1%8B%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA.jpg'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Haluboktheatre4.jpg'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/%D0%A3%D0%BB%D0%B0%D0%B4%D0%B7%D1%96%D1%81%D0%BB%D0%B0%D1%9E_%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA._%D0%A4%D0%BE%D1%82%D0%B0.jpg'
      },
      {
        num: 3,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/10/%D0%A3._%D0%93%D0%B0%D0%BB%D1%83%D0%B1%D0%BE%D0%BA_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B7%D1%8E_%D0%A1%D0%BC%D0%BE%D0%BB%D1%96%D1%87%D1%83.jpg'
      },
    ],
  },
  {
    id: '2',
    name: 'Игнат Терентьевич Буйницкий',
    born: '22 августа 1861',
    deceased: '22 сентября 1917',
    description: 'Белорусский актер, режиссер, театральный деятель, создатель национального профессионального театра, участник литературной жизни.',
    image: 'https://seanmcdonorg.files.wordpress.com/2018/08/2018-06-23_ent_41837548_i1.jpg',
    placeOfBirth: 'усадьба Поливачи Прозорокской волости, ныне Глубокский район Витебской области',
    shortBiography : 'Белорусский актёр, режиссёр, театральный деятель, основатель первого профессионального национального белорусского театра. Его называли отцом белорусского театра. Игнатий Буйницкий впервые вывел "мужицкий" танец на сцену, как исполнитель и постановщик, показав неисчерпаемые возможности и красоту белорусских народных танцев. Как драматический актер выступал преимущественно в характерных ролях, умело выявлял юмор и тонкую иронию. В Прозороках, в здании средней школы создан музей основателя белорусского театра, где представлены афиши спектаклей, фотографии труппы, письма Зоськи Верас и Зигмунта Абрамовича, воспоминания прозорокских старожилов. В сквере расположена могила Игнатия Буйницкого и памятник ему.',
    timeline: [
      {date: '1907', text: 'В своей усадьбе в Паливачах (около Прозороки) основал самодеятельный театр, где сначала принимали участие его родственники.'},
      {date: '1910', text: 'В Вильнюсе 12 февраля театр Буйничского по специальному приглашению редакции «Нашей Нивы» принял участие в представлении, которое вошло в историю под названием «Первая белорусская вечеринка в Вильно».'},
      {date: '1910 — 1913', text: 'Театр гастролировал по Беларуси (Минск, Слуцк, Полоцк, Дисна, Свенцяны, Поставы, Несвиж, Ляховичи), дважды выступал в Петербурге (1911, 1912), а также в Варшаве (1913).'},
      {date: '1913', text: 'Из-за материальных трудностей и давления царских властей деятельность труппы была прекращена.'},
      {date: '1914', text: 'Попытался создать новую труппу, однако 1-я мировая война помешала осуществить этот замысел.'},
      {date: '1917', text: 'Во время Первой мировой войны отправился на Западный фронт, был на военной службе в Молодечно.'},
    ],
    project: [
      {date: '1910', text: '«По ревизии» М. Крапивницкого'},
      {date: '1910', text: '«Пошились в дурни» М. Крапивницкого'},
      {date: '1910', text: '«Хам» Э. Ожешко'},
      {date: '1910', text: '«В зимний вечер» Э. Ожешко'},
      {date: '1910', text: '«Модный шляхтич» К. Каганца'},
    ],
    video: 'https://www.youtube.com/embed/ACDGr4TUkvs',
    mapData: {
      center: [55.2899866, 28.220279],
      place: 'Театр на дому',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buinicki.jpg'
      },
      {
        num: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Bujnicki2.jpg'
      },
      {
        num: 2,
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/20/%D0%9F%D1%80%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%BA%D1%96._%D0%9F%D0%BE%D0%BC%D0%BD%D1%96%D0%BA_%D0%86%D0%B3%D0%BD%D0%B0%D1%82%D1%83_%D0%91%D1%83%D0%B9%D0%BD%D1%96%D1%86%D0%BA%D0%B0%D0%BC%D1%83.jpg'
      },
      {
        num: 3,
        src: 'https://places.by/wp-content/uploads/2017/08/147143910580708-i0.jpeg'
      },
    ],
  },
  {
    id: '3',
    name: 'Николай Николаевич Пинигин',
    born: '6 августа 1957',
    deceased: 'наши дни',
    description: 'Белорусский режиссер, заслуженный деятель искусств Республики Беларусь.',
    image: 'https://s9.stc.all.kpcdn.net/share/i/4/1432456/inx960x1380.jpg',
    placeOfBirth: 'Изюм, Харьковская область, СССР',
    shortBiography : 'Белорусский режиссер, заслуженный деятель искусств Республики Беларусь. Будучи очень востребованным режиссером, Н.Н. Пинигин пробует и неизменно добивается успеха в различных видах театрального искусства, будь то драматический театр, музыкальный театр, театр кукол. Лауреат Государственной премии Республики Беларусь. Признан «Человеком года Беларуси» в номинации «Сцена». Лауреат премии БСТД им. Е.Мировича в номинации «За лучшую режиссуру» . Дипломант международных фестивалей в Кракове (Польша), Москве (Россия), Харькове (Украина), Братиславе (Словакия), Таллинне (Эстония), Вильнюсе (Литва).',
    timeline: [
      {date: '1979', text: 'Окончил режиссерском факультет Белорусский театрально-художественный институт.'},
      {date: '1980 — 1982', text: 'Работал в Русском драматическом театре им. М. Горького (Минск).'},
      {date: '1985', text: 'Режиссер Национального академического театра имени Янки Купалы.'},
      {date: '1985 — 1987', text: 'Преподаватель кафедры «Мастерство актера и режиссуры» в Белорусском академии искусств.'},
      {date: '1998', text: 'Режиссер Большого драматического театра им. Г. А. Товстоногова (Санкт-Петербург)'},
      {date: '2008', text: 'Назначен главным режиссером Национального академического театра имени Янки Купалы.'},
    ],
    project: [
      {date: '1979', text: '«Ночной дилижанс»'},
      {date: '1984', text: '«Женщина с моря»'},
      {date: '1990', text: '«Здешние» Я. Купалы'},
      {date: '1997', text: '«Прихоти Марианны» А. Мюссе'},
      {date: '1999', text: '«Калифорнийская сюита» Нил Саймон'},
      {date: '2000', text: '«Ложь на длинных ногах» Э. де Филиппо'},
      {date: '2001', text: '«Таланты и поклонники» А. Н. Островского'},
    ],
    video: 'https://www.youtube.com/embed/lexVZsR-GF0',
    mapData: {
      center: [59.927614, 30.330527],
      place: 'Большой драматический театр им. Г. Товстоногова',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://minsknews.by/wp-content/uploads/2018/07/DSC_0237-copy-696x464.jpg'
      },
      {
        num: 1,
        src: 'https://cdn12.img.sputnik.by/images/102328/96/1023289681.jpg'
      },
      {
        num: 2,
        src: 'https://s13.stc.all.kpcdn.net/share/i/12/11199960/inx960x640.jpg'
      },
      {
        num: 3,
        src: 'https://www.nv-online.info/images/cms-image-000152301.jpg'
      },
    ],
  },
  {
    id: '4',
    name: 'Лариса Помпеевна Александровская',
    born: '15 февраля 1904',
    deceased: '23 мая 1980',
    description: 'Белорусская оперная певица (сопрано), театральный режиссер, режиссер и общественный деятель',
		image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/%C5%81arysa_Aleksandro%C5%ADskaja._%D0%9B%D0%B0%D1%80%D1%8B%D1%81%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D1%9E%D1%81%D0%BA%D0%B0%D1%8F_%281937%29.jpg',
    placeOfBirth: 'Минск',
    shortBiography : 'Белорусская оперная певица (сопрано), театральный режиссер, режиссер и общественный деятель. Необыкновенной красоты голос, внутренний напор и энергетика. Ей первой из белорусских артистов в 1940 году было присуждено звание народной артистки Советского Союза. Через год присуждена Сталинская премия. Александровская обладала всем, чтобы считаться звездой первой величины в государстве. И действительно, безраздельно правила белорусским оперным театром несколько десятилетий, потому что была не просто частью белорусской музыкальной культуры, а одним из ее основоположников. На Александровскую ориентировались все ведущие белорусские композиторы, создавая свои оперы в середине 1930-х и послевоенные годы. В это время Александровская стала символом белорусского искусства и Беларуси вообще.',
    timeline: [
      {date: '1919 — 1924', text: 'Участница организованной ею самодеятельного труппы при политотделе Западного фронта.'},
      {date: '1927', text: 'Исполняет белорусские народные песни на Международной музыкальной выставке во Франкфурте-на-Майне.'},
      {date: '1933', text: 'Артистка Белорусского театра оперы и балета.'},
      {date: '1946', text: 'Назначена председателем Белорусского театрального объединения.'},
      {date: '1951 — 1960', text: 'Главный режиссер Белорусского театра оперы и балета.'},
      {date: '1976', text: 'Назначена почетным председателем Белорусского театрального объединения.'},
    ],
    project: [
      {date: '1951', text: '«Запорожец за Дунаем» С. Гулак-Артемовского'},
      {date: '1952', text: '«Страшный двор» С. Монюшко'},
      {date: '1953', text: '«Аида» Джузеппе Верди'},
      {date: '1954', text: '«Борис Годунов» М. Мусоргского'},
      {date: '1957', text: '«Михась Подгорный» Е. Тикоцкого'},
      {date: '1960', text: '«Пиковая дама» П. Чайковского'},
    ],
    video: 'https://www.youtube.com/embed/eDYuC8m5wsw',
    mapData: {
      center: [53.9103046, 27.5615253],
      place: 'Национальный академический Большой театр оперы и балета',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0_%D0%BF%D0%B5%D0%B2%D0%B8%D1%86%D1%8B_%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D1%8B_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B9.JPG'
      },
      {
        num: 1,
        src: 'https://minsknews.by/wp-content/uploads/2018/03/4-9.jpg'
      },
      {
        num: 2,
        src: 'https://www.sb.by/upload/medialibrary/377/3775af02273a590150a1e89012960225.jpg'
      },
      {
        num: 3,
        src: 'https://hb.bizmrg.com/ex-press/images/content/original/alex-1-cd4966e62fedf6ed9f7203ea9133fdd044fe2785.jpg'
      },
    ],
  },
  {
    id: '5',
    name: 'Борис Иванович Луценко',
    born: '16 сентября 1937',
    deceased: '5 февраля 2020',
    description: 'Белорусский театральный режиссер, народный артист Беларуси.',
    image: 'https://www.rustheatre.by/images/stories/administration/lutsenko_black.jpg',
    placeOfBirth: 'Майкоп, Адыгейск автономная область, СССР',
    shortBiography : 'Белорусский режиссёр-постановщик театра и кино. Народный артист Республики Беларусь. Заслуженный деятель искусств Белорусской ССР. Творчеству Б.Луценко свойственно стремление к сценической метафоричности, психологической достоверности в характеристиках персонажей, поиск выразительных пластических решений. Имеет собственное видение мира и роли человека в нем, верит, что волшебная рампа если не исцелит, то хотя бы утешит и чуть-чуть поможет, пусть не всем, но хотя бы немногим. Является одним из ведущих и известных режиссеров Беларуси. На сценах страны и за рубежом поставил более ста спектаклей.',
    timeline: [
      {date: '1962 — 1967', text: 'Учился в Белорусском театрально-художественном институте.'},
      {date: '1967', text: 'Принят в Белорусский театр имени Я. Купалы.'},
      {date: '1970', text: 'Начал преподавать в Белорусском академии искусств.'},
      {date: '1973 — 1981', text: 'Главный режиссер Государственного русского драматического театра имени М. Горького.'},
      {date: '1981 — 1982', text: 'Режиссер Купаловского театра.'},
      {date: '1982 — 1991', text: 'Главный режиссер Театра-студии киноактера.'},
      {date: '1991 — 2007', text: 'Художественный руководитель Национального академического драматического театра имени М. Горького.'},
    ],
    project: [
      {date: '1970', text: '«Память сердца» Александра Корнейчук'},
      {date: '1976', text: '«Трехгрошовая опера» Бертольда Брехта'},
      {date: '1979', text: '«Трагедия человека» Имре Мадача'},
      {date: '1985', text: '"Не боюсь Вирджинии Вульф» Эдварда Олби'},
      {date: '1990', text: '«Генералы в юбках» Жана Ануя'},
    ],
    video: 'https://www.youtube.com/embed/C3TMCDZA2rY',
    mapData: {
      center: [53.898314, 27.5507955],
      place: 'Театр имени М. Горького',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG/1643px-Alexey_Kuzmich_Portrait_of_national_actor_Boris_Lutsenko_2001.JPG',
        text: 'Портрет Бориса Луценко кисти белорусского художника Алексея Кузьмича, 2001 год.'
      },
      {
        num: 1,
        src: 'http://images.aif.by/007/667/03b8ec457923e6c67efae3f6275f67cd.JPG'
      },
      {
        num: 2,
        src: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-02/TASS_18992976%20copy.jpg?itok=LmXoBDLI'
      },
      {
        num: 3,
        src: 'https://i1.wp.com/www.mlyn.by/wp-content/uploads/2020/02/206005-12-copy.jpg?w=900&ssl=1'
      },
    ],
  },
  {
    id: '6',
    name: 'Евгений Анатольевич Крыжановский',
    born: '6 июня 1955',
    deceased: 'наши дни',
    description: 'Белорусский актер и главный режиссер Минского театра сатиры и юмора "Христофор", заслуженный артист Республики Беларусь.',
		image: 'http://st.oede.by/st/files/new%20year%202014/zvezda/zvezda_6.jpg',
    placeOfBirth: 'Николаев, Николаевская область, УССР, СССР',
    shortBiography : 'Белорусский юморист, актёр и главный режиссёр Минского театра сатиры и юмора «Христофор». Художественный руководитель телевизионного проекта «Юморинка». Художественный руководитель "Киноцентра Евгения Крыжановского". Заслуженный артист Республики Беларусь.',
    timeline: [
      {date: '1972', text: 'Окончил школу в Козельске (РСФСР).'},
      {date: '1973', text: 'Поступил в Белорусский театрально-художественный институт на актерское отделение.'},
      {date: '1977', text: 'Принят в труппу Академического театра имени Янки Купалы.'},
      {date: '1986', text: 'Создал театр сатиры и юмора «Христофор». Сыграл более 30 больших и главных ролей.'},
    ],
    project: [
      {date: '1987', text: '«Кто кого?»'},
      {date: '1987', text: '«Спокойной ночи, малыши»'},
      {date: '1992', text: '«Хорошо сидим!»'},
      {date: '1996', text: '«Вчера, сегодня, завтра»'},
      {date: '2000', text: '«Хоть стой, хоть падай»'},
    ],
    video: 'https://www.youtube.com/embed/2q_HkfBF3AY',
    mapData: {
      center: [53.9008774, 27.5626722],
      place: 'Национальный академический театр имени Янки Купалы',
      zoom: 12,
    },
    photos: [
      {
        num: 0,
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Jaugen_Kryzhanouski_and_his_daughter_-_on_an_International_book_exhibition_in_Minsk_city_-_14_February_2015_AD_-_1.JPG'
      },
      {
        num: 1,
        src: 'https://www.intex-press.by/images/cms-image-000035009.JPG'
      },
      {
        num: 2,
        src: 'http://zviazda.by/sites/default/files/field/image/14-6_kopiya_4.jpg'
      },
      {
        num: 3,
        src: 'http://mediapsart.ru/sites/default/files/imagecache/actor_gallery_full/actor_gallery/3-41.jpg'
      },
    ],
  },
];

const mainText = 'Профессия театрального режиссера в том виде, в каком мы привыкли ее видеть, сложилась во второй половине XIX века. Но концепция режиссуры появилась гораздо раньше - в 1742 году. Режиссер театра определяет общую идею, которая будет раскрыта во время спектакля. Этот творческий работник объединяет усилия всех остальных - декораторов и актеров, композиторов и визажистов. Именно он должен объединить всех театральных деятелей, наполнить их смыслом, поместить их душу в производство. Для этого режиссер должен быть хорошим психологом, уметь контролировать себя. Режиссер театра - сложная профессия. Чтобы стать одним, нужно обладать настойчивостью, серьезностью, грамотностью, умом и оригинальностью. Этот человек интерпретирует пьесы - конечно, согласно его видению, чтобы они звучали по-новому, интересовали зрителей.';
const addText = 'С середины XVIII века в Беларуси стали распространяться крепостные театры - Радзивиллы, Сапеги, Огинские и другие магнаты соревновались друг с другом, в том числе в области искусства. Поэтому они не пожалели денег на подготовку крепостных художников и пригласили самых квалифицированных европейских хореографов: австрийцев, французов, итальянцев, чехов. Ближе к 19 веку балет из «случайного» танца постепенно превращается в высокое искусство с гармоничными хореографическими композициями и особой музыкой. В это время прославились белорусские балетные школы Поставы, Слонима, Шклова, Витебска. Профессионализм белорусов неоднократно отмечался театральными критиками того времени, утверждая, что другие спектакли по своему великолепию превосходили даже московский балет. Белорусская театральная школа развивалась параллельно с европейским театром. Белорусские школы и крепостные театры, народные баталии были известны. Началом белорусского профессионального театра можно считать постановку спектакля «Солянка» на либретто В. Дунина-Мартенкевича и музыки С. Манюшко. Это произошло почти 155 лет назад - 9 февраля 1852 года. Сегодня в Беларуси действуют 29 профессиональных государственных театров. Среди них больше всего театров драматургии (19). В республике также есть 7 театров кукол (в каждом регионе и столице) и 3 музыкальных театра. В этом разнообразии театров многие режиссеры посвятили себя работе в этих учреждениях. И в этом проекте мы хотим поговорить о самых известных театральных режиссерах в Беларуси.';

const firstQuote = {
  author: 'Жарко Петан',
  text: "\"В театре режиссер - Бог, а актеры, увы, атеисты.\"",
}

const secondQuote = {
  author: 'Джордж Бернард Шоу',
  text: "\"Работа режиссера несовместима с актерской игрой: актер потерпит неудачу, если критически взглянет на своих партнеров.\"",
}

const directorOfTheDay = 'Режиссёр дня';

const directorPageTitles = {
  timeline: 'Хроника',
  work: 'Работа',
  dateOfCreation: 'Дата создания',
  map: 'Карта',
  gallery: 'Галерея'
}

export default {
  developersFeatures,
  worklogNav,
  tasksData,
  styleguideNav,
  colors,
  developers,
  directors,
  directorsLink: 'Режиссёры',
  developersLink: 'Разработчики',
  homePageLink: 'Главная',
  worklogLink: 'Рабочий журнал',
  styleguideLink: 'Гид по стилю',
  close: 'Закрыть',
  otherInfo: {
    title: 'Театральные режиссёры Беларуси'
  },
  mainText,
  addText,
  firstQuote,
  secondQuote,
  directorOfTheDay,
  directorPageTitles
}
