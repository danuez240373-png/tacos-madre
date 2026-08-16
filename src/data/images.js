/* ============================================================================
   IMAGE CONFIG  —  the only file you need to touch to swap photography.
   ----------------------------------------------------------------------------
   EVERY image below is FREE STOCK PHOTOGRAPHY from Unsplash (Unsplash License:
   free for commercial use, no attribution required). NONE of these are photos
   of Tacos Madres. They are here so the layout can be judged with real food
   photography instead of grey boxes.

   TO REPLACE WITH THE RESTAURANT'S OWN PHOTOS:
   1. Drop the files into /public/photos/
   2. Change `src` below to "/photos/your-file.jpg"
   3. Update `alt` to describe the real photo, and set stock: false
   Nothing else in the codebase needs to change.

   The `w` argument controls the width Unsplash serves.
   Hero ~2000px, cards ~1000-1200px.
   ========================================================================== */

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}`;

const local = (path) => `${import.meta.env.BASE_URL}${path}`;
export const images = {
  // ---- Hero -------------------------------------------------------------
  hero: {
    src: local('photos/tacos-madres-hero-logo.jpg'),
    alt: 'Tacos Madres embroidered logo patch, floral design in turquoise, orange and magenta on black',
    stock: false,
  },

  // ---- Featured dishes (keys referenced from restaurant.featured) --------
  chilaquiles: {
    src: local('photos/chilaquiles.jpg'),
    alt: 'Plate of chilaquiles rojos topped with scrambled egg, queso fresco and crema',
    stock: false,
  },
  asadaFries: {
    src: local('photos/asada-fries.jpg'),
    alt: 'Carne asada fries topped with guacamole, pico de gallo and crema',
    stock: false,
  },
  tacos: {
    src: local('photos/tacos.jpg'),
    alt: 'Plate of carne asada tacos with salsa, onion, cilantro and lime',
    stock: false,
  },
  madresBurrito: {
    src: unsplash('1552332386-f8dd00dc2f85', 1000),
    alt: 'Close-up of a filled flour tortilla',
    stock: true,
  },
  torta: {
    src: local('photos/torta.jpg'),
    alt: 'Torta sliced in half showing meat, avocado, cabbage and melted cheese on a grilled roll',
    stock: false,
  },

  // ---- Menu category art (one per tab) ----------------------------------
  menuCombos: {
    src: local('photos/combos.jpg'),
    alt: 'Clay bowl of red chile broth with tender meat, served with a chile-rimmed agua fresca, a basket of warm tortillas, and dried oregano and chile flake garnish on a decorated metal tray',
    objectPosition: 'center 30%',
    stock: false,
  },
  menuFries: {
    src: local('photos/asada-fries.jpg'),
    alt: 'Carne asada fries topped with guacamole, pico de gallo and crema',
    stock: false,
  },
  menuBreakfast: {
    src: unsplash('1615870216519-2f9fa575fa5c', 1000),
    alt: 'Hands holding a warm mug of coffee at breakfast',
    stock: true,
  },
  menuTacos: {
    src: local('photos/tacos.jpg'),
    alt: 'Plate of carne asada tacos with salsa, onion, cilantro and lime',
    stock: false,
  },
  menuBurritos: {
    src: local('photos/burrito.jpg'),
    alt: 'Burrito smothered in melted white cheese and sauce, served in a hand-painted terracotta dish',
    objectPosition: 'center 40%',
    stock: false,
  },
  menuTortas: {
    src: local('photos/torta.jpg'),
    alt: 'Torta sliced in half showing meat, avocado, cabbage and melted cheese on a grilled roll',
    stock: false,
  },
  menuQuesadillas: {
    src: local('photos/quesadilla.jpg'),
    alt: 'Stacked quesadilla layered with melted cheese and shredded beef in red sauce, topped with cilantro and onion, on a hand-painted terracotta plate with lime wedges',
    objectPosition: 'center 20%',
    stock: false,
  },
  menuGorditas: {
    src: local('photos/gordita.jpg'),
    alt: 'Gordita split open and filled with a savory red guisado, held in a to-go paper-lined box',
    objectPosition: 'center 0%',
    stock: false,
  },
  menuDrinks: {
    src: local('photos/agua-de-pepino.jpg'),
    alt: 'Tall cucumber agua fresca in a tajín-and-chamoy-rimmed cup, garnished with lemon and cucumber slices, on a wooden table with a colorful paper flower backdrop',
    objectPosition: 'center 35%',
    stock: false,
  },

  // ---- About ------------------------------------------------------------
  aboutPrimary: {
    src: unsplash('1584208632661-f8db31bb6489', 1200),
    alt: 'Vendors and shoppers at a bustling Mexican market',
    stock: true,
  },
  aboutSecondary: {
    src: unsplash('1567539549213-cc1697632146', 800),
    alt: 'Pile of dried red chiles',
    stock: true,
  },

  // ---- Gallery (order drives the masonry layout: g1 … g8) ---------------
  gallery: [
    {
      src: unsplash('1719948515819-71265e1abb0d', 1200),
      alt: 'Basket of three tacos piled with toppings',
      caption: 'Order of three',
      stock: true,
    },
    {
      src: unsplash('1757283961546-a662fb945114', 1000),
      alt: 'Stack of fresh green limes',
      caption: 'Fresh, always',
      stock: true,
    },
    {
      src: unsplash('1567539549213-cc1697632146', 1000),
      alt: 'Dried red chiles ready for salsa',
      caption: 'Salsa, from scratch',
      stock: true,
    },
    {
      src: unsplash('1687918154068-618fc795f62b', 1200),
      alt: 'Interior of a casual family taqueria dining room',
      caption: 'The dining room',
      stock: true,
    },
    {
      src: unsplash('1700625916627-16ad4fb0553c', 1000),
      alt: 'Plates of Mexican food shared across a table',
      caption: 'Made to share',
      stock: true,
    },
    {
      src: unsplash('1504544750208-dc0358e63f7f', 1000),
      alt: 'Taco served with a wedge of lime',
      caption: 'Con limón',
      stock: true,
    },
    {
      src: unsplash('1747409970302-453232e49021', 1200),
      alt: 'Evening light over a busy neighbourhood food counter',
      caption: 'Open until 10pm',
      stock: true,
    },
    {
      src: unsplash('1615870216519-2f9fa575fa5c', 1000),
      alt: 'Warm mug of coffee served with breakfast',
      caption: 'Desayunos from 8am',
      stock: true,
    },
  ],

  // ---- Order CTA background --------------------------------------------
  orderCta: {
    src: unsplash('1765087909734-a8a07a167fb3', 1800),
    alt: 'Diner seated at a taqueria counter in the evening',
    stock: true,
  },

  // ---- Visit ------------------------------------------------------------
  visit: {
    src: local('photos/Visit-test.jpg'),
    alt: 'Diners gathered at long tables under string lights on a warm evening',
    stock: true,
  },
};

export default images;
