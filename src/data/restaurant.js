/* ============================================================================
   RESTAURANT DATA — the single source of truth every component reads from.
   ----------------------------------------------------------------------------
   Facts here come from two places only:
   1. The restaurant's own Google Business Profile / delivery listings
      (mirrored in the JSON-LD in index.html): address, phone, hours, geo.
   2. Public reporting — a Baldwin Park News article covering the restaurant's
      December 21, 2023 soft opening and February 23, 2024 ribbon-cutting.

   Menu prices below were cross-checked against the restaurant's current
   DoorDash/Uber Eats listings. Where a price could not be independently
   re-confirmed (platforms block automated access to their full menus), the
   `price` field is omitted rather than guessed — the item still appears,
   just without a number. Fill those in once confirmed by phone or in person.
   ========================================================================== */

const restaurant = {
  name: 'Tacos Madres',
  showDemoNotice: true,

  primaryOrder: 'uberEats',

  phone: {
    display: '(626) 472-0303',
    href: 'tel:+16264720303',
  },

  address: {
    line: '14200 Ramona Blvd',
    city: 'Baldwin Park',
    state: 'CA',
    zip: '91706',
    full: '14200 Ramona Blvd, Baldwin Park, CA 91706',
  },

  hours: {
    summary: 'Open daily · 8am – 10pm',
    note: 'Every day',
    days: [
      { day: 'Monday', open: '8:00 AM', close: '10:00 PM' },
      { day: 'Tuesday', open: '8:00 AM', close: '10:00 PM' },
      { day: 'Wednesday', open: '8:00 AM', close: '10:00 PM' },
      { day: 'Thursday', open: '8:00 AM', close: '10:00 PM' },
      { day: 'Friday', open: '8:00 AM', close: '10:00 PM' },
      { day: 'Saturday', open: '8:00 AM', close: '10:00 PM' },
      { day: 'Sunday', open: '8:00 AM', close: '10:00 PM' },
    ],
  },

  links: {
    uberEats: 'https://www.ubereats.com/store/tacos-madres/r6Ejf7H3X6qUPpf7NQiy8Q',
    doorDash: 'https://www.doordash.com/store/tacos-madres-baldwin-park-32929635/',
    grubhub:
      'https://www.grubhub.com/restaurant/tacos-madres-14200-ramona-blvd-suite-120-baldwin-park/7536240',
    instagram: 'https://www.instagram.com/_tacosmadres/',
    yelp: 'https://www.yelp.com/biz/tacos-madres-baldwin-park',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=14200+Ramona+Blvd,+Baldwin+Park,+CA+91706',
    mapLarger:
      'https://www.openstreetmap.org/?mlat=34.0849248&mlon=-117.9642602#map=17/34.0849248/-117.9642602',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=-117.9692602%2C34.0819248%2C-117.9592602%2C34.0879248&layer=mapnik&marker=34.0849248%2C-117.9642602',
  },

  hero: {
    eyebrow: 'Baldwin Park, CA · Est. 2023',
    headlineTop: 'Real Mexican food,',
    headlineMid: 'made from scratch,',
    headlineAccent: 'every day.',
    lede: 'Family-owned taquería on Ramona Blvd — tortillas pressed by hand in the kitchen, tacos, burritos, tortas and breakfast served every day, 8am to 10pm.',
  },

  /* Order must stay [chilaquiles, asadaFries, tacos, madresBurrito, torta] —
     it drives the grid slots in FeaturedFood and matches the five keys
     images.js reserves for the featured section. */
  featured: [
    {
      id: 'chilaquiles',
      name: 'Chilaquiles',
      price: '$18',
      badge: 'Most Ordered',
      image: 'chilaquiles',
      description:
        'Crisp tortilla chips simmered in red or green salsa, finished with melted cheese and crema.',
    },
    {
      id: 'asada-fries',
      name: 'Asada Fries',
      price: '$13',
      badge: 'Most Ordered',
      image: 'asadaFries',
      description:
        'Seasoned fries, your choice of meat, nacho cheese, pico, crema, guacamole and beans.',
    },
    {
      id: 'tacos',
      name: 'Tacos',
      price: '$3 each',
      image: 'tacos',
      description:
        'Your choice of meat or guisado on a corn tortilla with onion and cilantro — sold by the taco.',
    },
    {
      id: 'madres-burrito',
      name: 'Madres Burrito',
      price: '$13.50',
      image: 'madresBurrito',
      description:
        'The house burrito — your choice of meat with rice, beans, cheese and salsa in a fresh flour tortilla.',
    },
    {
      id: 'torta',
      name: 'Torta',
      price: '$11.50',
      image: 'torta',
      description:
        'Grilled bolillo roll with your choice of meat, beans, avocado and the fixings.',
    },
  ],

  meats: [
    'Asada',
    'Al Pastor',
    'Pollo',
    'Barbacoa',
    'Chicharrón',
    'Chile Verde',
    'Bistek con Papas',
    'Chorizo',
    'Rajas con Queso',
    'Nopales',
  ],

  menu: {
    note: 'Full menu and current pricing available in-store and on our delivery apps.',
    categories: [
      {
        id: 'combos',
        label: 'Combos',
        sublabel: 'Plato Combinación',
        note: 'Served with rice, beans and tortillas.',
        image: 'menuCombos',
        choose: true,
        items: [
          {
            name: 'Chile Relleno Combo',
            description: 'Chile relleno with cheese, tomato salsa, rice, beans, side salad and tortillas.',
          },
          { name: 'Meat/Guisado Combo' },
          { name: 'Flautas Combo' },
          { name: 'Breakfast Combo' },
        ],
      },
      {
        id: 'fries',
        label: 'Fries & Nachos',
        image: 'menuFries',
        items: [
          {
            name: 'Asada Fries',
            description: 'Seasoned fries, your choice of meat, nacho cheese, pico, crema, guacamole and beans.',
          },
          { name: 'Nachos' },
        ],
      },
      {
        id: 'breakfast',
        label: 'Desayunos',
        sublabel: 'Breakfast · served all day',
        image: 'menuBreakfast',
        items: [
          {
            name: 'Chilaquiles',
            tag: 'Most Ordered',
            description: 'Crisp tortilla chips simmered in red or green salsa, cheese and crema.',
          },
          { name: 'Breakfast Combo' },
          { name: 'Breakfast Burrito' },
          { name: 'Torta/Burrito de Chilaquiles' },
        ],
      },
      {
        id: 'tacos',
        label: 'Tacos',
        sublabel: 'Carnes y guisados',
        image: 'menuTacos',
        choose: true,
        items: [
          {
            name: 'Tacos Dorados de Papa',
            description: 'Six mini crispy potato tacos dorados.',
          },
          { name: 'Shrimp Taco' },
        ],
      },
      {
        id: 'burritos',
        label: 'Burritos',
        image: 'menuBurritos',
        items: [
          {
            name: 'Madres Burrito',
            description: 'Your choice of meat with rice, beans, cheese and salsa in a fresh flour tortilla.',
          },
        ],
      },
      {
        id: 'tortas',
        label: 'Tortas',
        image: 'menuTortas',
        items: [
          {
            name: 'Torta',
            description: 'Grilled bolillo roll with your choice of meat, beans, avocado and the fixings.',
          },
        ],
      },
      {
        id: 'quesadillas',
        label: 'Quesadillas y Mulitas',
        image: 'menuQuesadillas',
        choose: true,
        items: [{ name: 'Quesadilla' }, { name: 'Mulita' }],
      },
      {
        id: 'gorditas',
        label: 'Gorditas',
        image: 'menuGorditas',
        choose: true,
        items: [
          {
            name: 'Gordita',
            description: 'Hand-pressed masa pocket split and stuffed with your choice of meat or guisado.',
          },
        ],
      },
      {
        id: 'drinks',
        label: 'Bebidas',
        sublabel: 'Drinks',
        image: 'menuDrinks',
        items: [
          { name: 'Horchata' },
          { name: 'Agua de Pepino' },
          {
            name: 'Jarritos',
            description: 'Fruit Punch, Lime, Orange, Pineapple, Tamarind, Strawberry, Mango, Grapefruit, Guava.',
          },
        ],
      },
    ],
  },

  about: {
    eyebrow: 'Nuestra Historia',
    heading: 'A taste of ',
    headingAccent: 'home.',
    body: [
      'Tacos Madres is family-owned by women from Jalisco and Zacatecas who grew up right here in Baldwin Park.',
      'The restaurant soft-opened on December 21, 2023, bringing their mother’s home-cooked recipes to a wider table — nothing pre-made, tortillas pressed by hand in the kitchen every day.',
    ],
    quote: 'There is food at home.',
    quoteAttribution: '— the Madres family',
    facts: [
      { label: 'Est.', value: '2023' },
      { label: 'Roots', value: 'Jalisco & Zacatecas' },
      { label: 'Tortillas', value: 'Pressed by hand, daily' },
    ],
  },

  order: {
    heading: 'Hungry? ',
    headingAccent: 'Let’s eat.',
    body: 'Order for pickup or delivery through Uber Eats, DoorDash or Grubhub — or call the shop directly.',
  },
};

export default restaurant;
