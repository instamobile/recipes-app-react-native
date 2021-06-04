export const categories = [
  {
    id: 3,
    name: 'Desserts',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Mexican',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Italian',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Smoothies and Ice-Creams',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 5,
    name: 'Indian',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZvrQp_nbddxsVCWX4NFKyjY1Mud6JNf7zA&usqp=CAU'
  },
  {
    id: 6,
    name: 'Chinese',
    photo_url: 'https://www.thespruceeats.com/thmb/X6mg_2VBCQQ2X8VrLcPTf8_4ce0=/2733x2050/smart/filters:no_upscale()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg'
  },
  {
    id: 7,
    name: 'MockTails',
    photo_url: 'https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/05/mocktails-mobile-banner.jpg'
  },
];


export const recipes = [
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Oatmeal Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/04/dark-chocolate-chunk-oatmeal-cookies-5.jpg',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-07/gluten-free-oatmeal-cookies.jpg?itok=_amqqRk1',

    ],
    time: '25',
    ingredients: [
    [55, '1'], 
    [75, '1g'], 
    [64, '1/2'],
    [12, '1'], 
    [79, '1/2'], 
    [80, '1/2'],
    [1, '1/2'], 
    [81, '3/4'], 
  ],
    description:
    ' -- In a large bowl, cream together the shortening, white sugar and brown sugar. Mix in the egg and vanilla until well blended. Combine the flour, baking powder, baking soda and salt; stir into the batter until well blended. Mix in the oats, coconut and chocolate chips until evenly distributed. Roll dough into walnut sized balls and place 2 inches apart onto prepared cookie sheets. \n\n -- Bake for 12 minutes in the preheated oven, or until edges are lightly browned.',
      videoSeries : [
        "EhyNJdL4w-E",
        "naE27iCpVVg",
        "pXFPtxNMEOM",
      ]
  },
  {
    recipeId: 2,
    categoryId: 4,
    title: 'Triple Berry Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W7I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: '-- In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.',
    videoSeries : [
      "W5LaGxkn4l4",
      "Gmt-8zdlNoM",
    ]
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Vegan Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      'https://www.yummymummykitchen.com/wp-content/uploads/2018/11/vegan-chocolate-chip-cookies-4.jpg',
      'https://www.bakedambrosia.com/wp-content/uploads/2020/05/Vegan-Chocolate-Chip-Cookies-11-scaled.jpg',
    ],
    
    time: '30',
    ingredients: [
      [55, '1'], 
    [75, '1g'], 
    [64, '1/2'],
    [12, '1'], 
    [79, '1/2'], 
    [80, '1/2'],
    [1, '1/2'], 
    ],
    description:

    ' -- In a large bowl, cream together the shortening, white sugar and brown sugar. Combine the flour, baking powder, baking soda and salt; stir into the batter until well blended. Mix in the coconut until evenly distributed. Roll dough into walnut sized balls and place 2 inches apart onto prepared cookie sheets. \n\n -- Bake for 12 minutes in the preheated oven, or until edges are lightly browned.',
    
      videoSeries : [
        "j7rgSxPcyVc",
        "mwiKZ4qmRnQ",
        "BJ6lcH2htYY",
      ]

  },
  {
    recipeId: 4,
    categoryId: 3,
    title: 'Pumpkin Spice Cookies',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      'https://www.littlesweetbaker.com/wp-content/uploads/2017/10/pumpkin-spice-cookies-1-1.jpg',
      'https://www.justsotasty.com/wp-content/uploads/2016/09/Pumpkin-Spice-Cookies-5.jpg',
    ],
    time: '25',
    ingredients: [
      [55, '1'], 
    [75, '1g'], 
    [64, '1/2'],
    [12, '1'], 
    [79, '1/2'], 
    [80, '1/2'],
    [1, '1/2'], 
    [82, '3/4'], 
    ],
    description:
    ' -- In a large bowl, cream together the shortening, white sugar and brown sugar. Combine the flour, baking powder, baking soda and salt; stir into the batter until well blended. Mix in the pumpkins, coconut until evenly distributed. Roll dough into walnut sized balls and place 2 inches apart onto prepared cookie sheets. \n\n -- Bake for 12 minutes in the preheated oven, or until edges are lightly browned.',
      videoSeries : [
        "CfB-jApRuvg",
        "zOeefB9Bmag",
        "ceqxA1U64ns",
      ]
  },
  {
    recipeId: 5,
    categoryId: 3,
    title: 'Brownies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://www.biggerbolderbaking.com/wp-content/uploads/2021/03/Crinkle-Top-Brownies-Thumbnail-scaled.jpg',
      'https://handletheheat.com/wp-content/uploads/2015/08/Nutella-Brownies-011.jpg',
    ],
    time: '30',
    ingredients: [
      [68, '14 teaspoons'],
      [12, '1 cups'],
      [42, '3/4 tablespoon'],
      [0, '3 tablespoon'],
      [55, '2 breasts'],
      [75, '3'],
      [64, '2 quarts'],
    ],
    description:
    ' -- Beat cocoa powder, 3/4 cup butter, oil, and 2 cups sugar with an electric mixer in a large bowl until smooth. Add eggs one at a time, allowing each egg to blend into butter mixture before adding the next. Beat in vanilla extract with last egg. Mix flour mixture into egg mixture until just incorporated. Fold in walnuts, mixing just enough to evenly combine. \n\n -- Combine animal cracker crumbs, 1/3 cup sugar, and 6 tablespoons butter in a bowl; mix until well blended. Press cracker mixture into the bottom of each prepared muffin cup. Pour brownie mixture into muffin cups, filling 3/4 full. \n\n -- Bake in preheated oven until a toothpick inserted in center comes out clean, 25 to 35 minutes.',
      videoSeries : [
        "7c1U7REkWaw",
        "3nQTlGMO9NY",
        "Eb0VzmWU2VI",
        "Z1OLG7F3HD4",
      ]
  },
  {
    recipeId: 6,
    categoryId: 1,
    title: 'Perfect Fish Tacos',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/whm090120foodflash-001-1594326349.jpg?crop=0.645xw:0.479xh;0.179xw,0.265xh&resize=640:*',
    ],
    time: '35',
    ingredients: [
      [30, 'jucie of 1 '],
      [24, '2 teaspoons'],
      [0, '3 tablespoons'],
      [3, '1 teaspoon'],
      [31, '1/2 teaspoons'],
      [32, '1/2 teaspoons'],
      [4, '2 teaspoons'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 teasponns'],
      [34, '1'],
    ],
    description:
      '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ',
      videoSeries : [
        "H4JgGHpJyr4",
        "qDFqRxeEn9o",
        "0Lr7gRFcFxM",
        "aeZ5QcWAjPU",
      ]
  },
  {
    recipeId: 50,
    categoryId: 1,
    title: 'Chicken Fajitas',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 teaspoons'],
      [0, '4 tablespoons'],
      [1, '1/2 teaspoons'],
      [30, '2 tablespoons'],
      [31, '1 teaspoon'],
      [7, '1 teaspoon'],
      [24, '1/2 teaspoons'],
      [3, '1/2 teaspoons'],
      [21, '1 pound'],
      [22, '1/2 cup'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2'],
    ],
    description:
      '-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.',
      videoSeries : [
        "VSmCWKLHWxk",
        "SdEcMiXdDxs",
        "0g1bv8b2zKU",
        "DeNsUhaUH6k",
      ]
  },
  {
    recipeId: 60,
    categoryId: 2,
    title: 'Buffalo Pizza',
    photo_url:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 50,
    ingredients: [
      [39, '1 lb'],
      [40, '1 cup'],
      [41, '1/2 cup'],
      [42, '1/4 cup'],
      [43, '2 tablespoons'],
      [44, '1/2 cup'],
      [7, '1/4 teaspoons'],
      [5, '1/4 teaspoons'],
      [30, '1/4 teaspoons'],
      [45, '2 oz'],
      [12, 'for dusting'],
      [4, '1/2 teaspoons'],
      [47, '2'],
      [46, '9 oz'],
    ],
    description:
      '-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.',
      videoSeries : [
        "0pnsU0-kGDA",
        "skOnx6T7FaQ",
        "0kkzINSUF7I",
        "mJtUOVJvh_YA",
      ]
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Spaghetti Carbonara',
    photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
    photosArray: [
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg',
      'https://lilluna.com/wp-content/uploads/2017/05/pasta-carbonara-resize-6.jpg',
    ],
    time: 15,
    ingredients: [
      [48, '50g'],
      [49, '100g'],
      [50, '350g'],
      [51, '2 plump'],
      [42, '50g'],
      [16, '3'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons'],
    ],
    description:
      '-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.',
      videoSeries : [
        "4a0KpB5rC3U",
        "vBcXtkXzuVE",
        "dLbWuG7lkJs",
        "o5M6Vsb4iTM",
      ]
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Lasagna',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [36, '1 large'],
      [25, '1 pound'],
      [51, '5 cloves'],
      [52, '1 pound'],
      [53, '1 pound'],
      [54, '1 28 ounce can'],
      [23, '2 6 ounce can'],
      [55, '2 tablespoons'],
      [56, '1/4 cup'],
      [10, '1/2 cup'],
      [1, '1/2 teaspoons'],
      [58, '1 teaspoon'],
      [4, '1/4 teaspoons'],
      [16, '1 large'],
      [46, '1 pound'],
      [48, '1 cup'],
      [57, '30 ounces'],
    ],
    description:
      '-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.',
      videoSeries : [
        "U0zk2H3mMoA",
        "1kMD9RyvGMY",
        "DhwGdJA-WiE",
        "J9mR85TXuic",
      ]
  },
  {
      recipeId: 9,
      categoryId: 5,
      title: 'Chicken Biryani',
      photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC737wdjU-MBkLV52fNz-UBqCDGxQmBAIxhQ&usqp=CAU',
      photosArray: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC737wdjU-MBkLV52fNz-UBqCDGxQmBAIxhQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pLp8bJ4G6xXc1rokcefwr06ZvoeUewqo_g&usqp=CAU',
        'https://www.spiceindiaonline.com/wp-content/uploads/2021/04/Pressure-Cooker-Chicken-Biryani-2.jpg',
      ],
    time: '120',
    ingredients: [
      [0, '4 kg'],
      [2, '4'],
      [22, '2'],
      [51, '1 plump'],
      [24, '1/2g'],
      [4, '1/2'],
      [31, '1 teaspoons'],
      [1, '1 teaspoons'],
      [23, '2 plump'],
      [44, '2g'],
      [69, '2'],
      [73, '3 teaspoons'],
      [62, '1 teaspoons'],
    ],
    description:
    'In a large skillet, in 2 tablespoons vegetable oil (or ghee) fry potatoes until brown, drain and reserve the potatoes. Add remaining 2 tablespoons oil to the skillet and fry onion, garlic and ginger until onion is soft and golden. Add chili, pepper, turmeric, cumin, salt and the tomatoes. Fry, stirring constantly for 5 minutes. Add yogurt, mint, cardamom and cinnamon stick. Cover and cook over low heat, stirring occasionally until the tomatoes are cooked to a pulp. It may be necessary to add a little hot water if the mixture becomes too dry and starts to stick to the pan. \n\n -- When the mixture is thick and smooth, add the chicken pieces and stir well to coat them with the spice mixture. Cover and cook over very low heat until the chicken is tender, approximately 35 to 45 minutes. There should only be a little very thick gravy left when chicken is finished cooking. If necessary cook uncovered for a few minutes to reduce the gravy. \n\n -- In a large skillet, heat vegetable oil (or ghee) and fry the onions until they are golden. Add saffron, cardamom, cloves, cinnamon stick, ginger and rice. Stir continuously until the rice is coated with the spices. \n\n -- In a medium-size pot, heat the chicken stock and salt. When the mixture is hot pour it over the rice and stir well. Add the chicken mixture and the potatoes; gently mix them into the rice. Bring to boil. Cover the saucepan tightly, turn heat to very low and steam for 20 minutes. Do not lift lid or stir while cooking. Spoon biryani onto a warm serving dish.',
  },
{
  recipeId: 11,
  categoryId: 4,
  title: 'Vanila Ice-Cream',
  photo_url: 'https://c.ndtvimg.com/2020-01/g47pm5vo_ice-cream_625x300_22_January_20.jpg',
  photosArray: [
    'https://c.ndtvimg.com/2020-01/g47pm5vo_ice-cream_625x300_22_January_20.jpg',
    'https://www.tasteandtellblog.com/wp-content/uploads/2019/06/Homemade-Vanilla-Ice-Cream-Recipe-tasteandtellblog.com-2.jpg',
    'https://www.theflavorbender.com/wp-content/uploads/2019/06/Homemade-Vanilla-Ice-Cream-Featured1-500x375.jpg',
  ],
  time: '120',
  ingredients: [
    [55, '3/4 cup'],
    [43, '1 cup'],
    [63, '2 cups'],
    [64, '2 tsp'],
  ],
  description:
    '--  Stir sugar, cream, and milk into a saucepan over low heat until sugar has dissolved. Heat just until mix is hot and a small ring of foam appears around the edge. \n\n -- Transfer cream mixture to a pourable container such as a large measuring cup. Stir in vanilla extract and chill mix thoroughly, at least 2 hours. \n\n --Pour cold ice cream mix into an ice cream maker, turn on the machine, and churn according to manufacturers directions, 20 to 25 minutes.\n\n --When ice cream is softly frozen, serve immediately or place a piece of plastic wrap directly on the ice cream and place in freezer to ripen, 2 to 3 hours. '
},

{
  recipeId: 12,
  categoryId: 2,
  title: 'Pasta',
  photo_url: 'https://www.cookwithmanali.com/wp-content/uploads/2018/12/Creamy-White-Sauce-Pasta-500x500.jpg',
  photosArray: [
    'https://www.cookwithmanali.com/wp-content/uploads/2018/12/Creamy-White-Sauce-Pasta-500x500.jpg',
    'https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-3.jpg',
    'https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/white-sauce-pasta/white-sauce-pasta.jpg',
  ],
  time: 10                                                                               ,
  ingredients: [
    [51, '3'],
    [42, '2 tbsp'],
    [63, '2 cups'],
    [64, '2 tsp'],
    [65, '2 cup'],
    [12, '3 cups'],
    [4, '1/2 tsp'],
    [1, '1/2 tbsp'],
    [18, '6 cups'],
    [35, '1/2 tsp'],
    [45, '1'],
  ],
  description:
    '-- firstly, in a large kadai boil 6 cup water and 1 tsp salt. once the water comes to a boil, add 2 cup pasta. boil for 7 minutes, or until the pasta is cooked al dente. \n\n --drain off the pasta and keep aside. in a frying pan, heat 2 tbsp oil and saute 3 clove garlic. add ½ onion, ½ carrot, ½ capsicum and 3 tbsp sweet corn. saute for a minute or until vegetables shrink slightly yet remain crunchy. further, add ½ tsp pepper and ½ tsp salt. saute well until the spices are well combined. keep aside. to prepare white sauce for pasta, heat 2 tbsp butter. add 3 tbsp maida and saute on low flame. \n\n -- saute until the maida turns aromatic yet do not change its colour. now add 1 cup milk and mix well. mix until the sauce thickens without forming any lumps. further, add 1 more cup of milk and continue to stir continuously. mix continuously, until the sauce thickens. if required using a whisk break the lumps. cook until the sauce turns silk smooth and creamy texture. now add ½ tsp pepper, ½ tsp chilli flakes, ½ tsp mixed herbs and ½ tsp salt. mix well making sure everything is well combined. add in sauted vegetables and combine well. now add in boiled pasta and mix gently. add 2 tbsp of boiled pasta water if the sauce thickens. mix gently making sure everything is well combined. '
},
{
  recipeId: 13,
  categoryId: 1,
  title: 'Bruschetta',
  photo_url: 'https://natashaskitchen.com/wp-content/uploads/2020/07/Tomato-Bruschetta-Recipe-7.jpg',
  photosArray: [
    'https://natashaskitchen.com/wp-content/uploads/2020/07/Tomato-Bruschetta-Recipe-7.jpg',
    'https://www.thespruceeats.com/thmb/3f_nuR3VTACtbqfwY5Q2GpGoQo4=/2000x2000/smart/filters:no_upscale()/how-to-make-bruschetta-2020459-hero-01-15950eb2b852461abc9cfbbf536382dd.jpg',
    'https://www.cookingclassy.com/wp-content/uploads/2019/07/bruschetta-2.jpg',
  ],
  time: 15,
  ingredients: [
    [23, '8 nos'],
    [10, '1/2 cup'],
    [48, '1/4 cup'],
    [2, '5 nos'],
    [0, '1 tbsp'],
    [1, '1/4 tbsp'],
    [4, '1/4 tsp'],
    [7, '1 loaf'],
  ],
  description:
    '-- In a bowl, toss together the tomatoes, basil, Parmesan cheese, and garlic. Mix in the balsamic vinegar, olive oil, kosher salt, and pepper. Serve on toasted  slices.'
},
{
  recipeId: 14,
  categoryId: 1,
  title: 'Classic Taco',
  photo_url: 'https://www.spendwithpennies.com/wp-content/uploads/2019/05/Ground-Beef-Tacos-SWP-5.jpg',
  photosArray: [
    'https://www.spendwithpennies.com/wp-content/uploads/2019/05/Ground-Beef-Tacos-SWP-5.jpg',
    'https://hispanickitchen-nglmedia.netdna-ssl.com/wp-content/uploads/2017/01/classic-ground-beef-hardshell-tacos-3-2.jpg',
    'https://www.cooksmarts.com/wp-content/uploads/2014/05/20140301-Classic-Tacos-Blog-Thumbnail.jpg',
  ],
  time: 20,
  ingredients: [
    [23, '1 nos'],
    [1, '1/2 cup'],
    [43, '1/4 cup'],
    [51, '2 nos'],
    [0, '2 tbsp'],
    [27, '7 tbsp'],
    [30, '1/2 tsp'],
    [67, '1 nos'],
    [31, '1/2 nos'],
    [3, '1/2 tbsp'],
    [22, '1 tbsp'],
    [45, '2 oz'],
    [22, '1 nos'],
  ],
  description:
    '-- Heat a skillet over medium-high heat. Add cooking oil and then garlic, jalapenos, onions, and a bit of salt to heated oil. Saute until softened, ~3 minutes. \n\n -- Next add in ground meat and break up with a wooden spoon. Saute until broken up into smaller pieces, 4 to 6 minutes. Add in crushed tomatoes and tomato paste and cook for another 3 to 5 minutes until meat is cooked through. Season to taste with salt, pepper and any of the spices. \n\n -- Slice lime into wedges. Spread out your taco bar – taco shells, meat filling, lettuce, cheese, sour cream, lime wedges, and salsa. Let everyone assemble their own tacos!'
},
{
  recipeId: 15,
  categoryId: 4,
  title: 'Chocolate Ice-Cream',
  photo_url: 'https://www.thespruceeats.com/thmb/BYOHKcXhja-ez7Fr9obgBrDHJ1Y=/3064x2042/filters:fill(auto,1)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg',
  photosArray: [
    'https://www.thespruceeats.com/thmb/BYOHKcXhja-ez7Fr9obgBrDHJ1Y=/3064x2042/filters:fill(auto,1)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg',
  ],
  time: 120                                                                               ,
  ingredients: [
    [55, '3/4 cup'],
    [43, '1 cup'],
    [63, '2 cups'],
    [68, '2 tsp'],
  ],
  description:
    '--  Stir sugar, cream, and milk into a saucepan over low heat until sugar has dissolved. Heat just until mix is hot and a small ring of foam appears around the edge. \n\n -- Transfer cream mixture to a pourable container such as a large measuring cup. Stir in cocoa powder and chill mix thoroughly, at least 2 hours. \n\n --Pour cold ice cream mix into an ice cream maker, turn on the machine, and churn according to manufacturer directions, 20 to 25 minutes.\n\n --When ice cream is softly frozen, serve immediately or place a piece of plastic wrap directly on the ice cream and place in freezer to ripen, 2 to 3 hours. '
},
{
  recipeId: 16,
  categoryId: 4,
  title: 'Chocolate Smoothie',
  photo_url:
    'https://cdn.thelemonbowl.com/wp-content/uploads/2021/01/Chocolate-Oatmeal-Smoothie_13_WEB.jpg',
  photosArray: [
    'https://cdn.thelemonbowl.com/wp-content/uploads/2021/01/Chocolate-Oatmeal-Smoothie_13_WEB.jpg',
  ],
  time: '10',
  ingredients: [
    [59, '1'],
    [68, '1/2 lbs'],
    [61, '1/2 liters'],
  ],
  description: '-- In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with chocolates, if desired.'
},
{
  recipeId: 17,
  categoryId: 5,
  title: 'Veg Biryani',
  photo_url: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe.jpg',
  photosArray: [
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe.jpg',
  ],
  time: 120,
  ingredients: [
    [0, '4 kg'],
    [2, '4'],
    [22, '2'],
    [51, '1 plump'],
    [24, '1/2g'],
    [4, '1/2'],
    [31, '1 teaspoons'],
    [1, '1 teaspoons'],
    [23, '2 plump'],
    [44, '2g'],
    [69, '2'],
    [62, '1 teaspoons'],
  ],
  description:
  'In a large skillet, in 2 tablespoons vegetable oil (or ghee) fry potatoes until brown, drain and reserve the potatoes. Add remaining 2 tablespoons oil to the skillet and fry onion, garlic and ginger until onion is soft and golden. Add chili, pepper, turmeric, cumin, salt and the tomatoes. Fry, stirring constantly for 5 minutes. Add yogurt, mint, cardamom and cinnamon stick. Cover and cook over low heat, stirring occasionally until the tomatoes are cooked to a pulp. It may be necessary to add a little hot water if the mixture becomes too dry and starts to stick to the pan. \n\n -- When the mixture is thick and smooth, add the veggies and stir well to coat them with the spice mixture. Cover and cook over very low heat, approximately 35 to 45 minutes. There should only be a little very thick gravy left when it is finished cooking. If necessary cook uncovered for a few minutes to reduce the gravy. \n\n -- In a large skillet, heat vegetable oil (or ghee) and fry the onions until they are golden. Add saffron, cardamom, cloves, cinnamon stick, ginger and rice. Stir continuously until the rice is coated with the spices. \n\n -- In a medium-size pot, heat the vegetable stock and salt. When the mixture is hot pour it over the rice and stir well. Add the vegetable mixture and the potatoes; gently mix them into the rice. Bring to boil. Cover the saucepan tightly, turn heat to very low and steam for 20 minutes. Do not lift lid or stir while cooking. Spoon biryani onto a warm serving dish.',
},
{
  recipeId: 18,
  categoryId: 7,
  title: 'Strawberry Mojito',
  photo_url:
    'https://www.recipegirl.com/wp-content/uploads/2016/06/Strawberry-Mojitos.jpg',
  photosArray: [
    'https://www.recipegirl.com/wp-content/uploads/2016/06/Strawberry-Mojitos.jpg'
  ],
  time: '10',
  ingredients: [
    [55, '1 cup'],
    [60, '7'],
    [69, '1/2'],
    [30, '2 nos'],
    [18, '1 cup'],
    [70, '2cup'],
  ],
  description: '-- Pour 1/4 to 1/2 inch of sugar onto a small, shallow plate. Run one of the lime quarters around the rim of each cocktail glass, then dip the glasses into the sugar to rim; set aside. \n\n -- Squeeze all of the lime quarters into a sturdy glass pitcher. Toss the juiced limes into the pitcher along with the mint, strawberries, and 1 cup of sugar. Crush the fruits together with a muddler to release the juices from the strawberries and the oil from the mint leaves. Stir in the club soda until the sugar has dissolved. Pour into the sugared glasses over ice cubes to serve.'
},
{
  recipeId: 19,
  categoryId: 7,
  title: 'Virgin Mojito',
  photo_url:
    'https://www.whiskaffair.com/wp-content/uploads/2020/04/Virgin-Mojito-3.jpg',
  photosArray: [
    'https://www.whiskaffair.com/wp-content/uploads/2020/04/Virgin-Mojito-3.jpg'
  ],
  time: '10',
  ingredients: [
    [55, '1 cup'],
    [69, '1/2'],
    [30, '2 nos'],
    [18, '1 cup'],
    [70, '2cup'],
  ],
  description: '-- Pour 1/4 to 1/2 inch of sugar onto a small, shallow plate. Run one of the lime quarters around the rim of each cocktail glass, then dip the glasses into the sugar to rim; set aside. \n\n -- Squeeze all of the lime quarters into a sturdy glass pitcher. Toss the juiced limes into the pitcher along with the mint and 1 cup of sugar. Crush the fruits together with a muddler to release the oil from the mint leaves. Stir in the club soda until the sugar has dissolved. Pour into the sugared glasses over ice cubes to serve.'
},
{
  recipeId: 20,
  categoryId: 7,
  title: 'Blueberry Mojito',
  photo_url:
    'https://recipesfromapantry.com/wp-content/uploads/2017/08/blueberry-mojito-18.jpg',
  photosArray: [
    'https://recipesfromapantry.com/wp-content/uploads/2017/08/blueberry-mojito-18.jpg'
  ],
  time: '10',
  ingredients: [
    [55, '1 cup'],
    [71, '7'],
    [69, '1/2'],
    [30, '2 nos'],
    [18, '1 cup'],
    [70, '2cup'],
  ],
  description: '-- Pour 1/4 to 1/2 inch of sugar onto a small, shallow plate. Run one of the lime quarters around the rim of each cocktail glass, then dip the glasses into the sugar to rim; set aside. \n\n -- Squeeze all of the lime quarters into a sturdy glass pitcher. Toss the juiced limes into the pitcher along with the mint, blueberries, and 1 cup of sugar. Crush the fruits together with a muddler to release the juices from the blueberries and the oil from the mint leaves. Stir in the club soda until the sugar has dissolved. Pour into the sugared glasses over ice cubes to serve.'
},
{
  recipeId: 21,
  categoryId: 7,
  title: 'Orange Mojito',
  photo_url:
    'https://somethingiscooking.com/wp-content/uploads/2021/04/Orange-Mojito-Mocktail-featured.jpg',
  photosArray: [
    'https://somethingiscooking.com/wp-content/uploads/2021/04/Orange-Mojito-Mocktail-featured.jpg'
  ],
  time: '10',
  ingredients: [
    [55, '1 cup'],
    [72, '7'],
    [69, '1/2'],
    [30, '2 nos'],
    [18, '1 cup'],
    [70, '2cup'],
  ],
  description: '-- Pour 1/4 to 1/2 inch of sugar onto a small, shallow plate. Run one of the lime quarters around the rim of each cocktail glass, then dip the glasses into the sugar to rim; set aside. \n\n -- Squeeze all of the lime quarters into a sturdy glass pitcher. Toss the juiced limes into the pitcher along with the mint, Orange, and 1 cup of sugar. Crush the fruits together with a muddler to release the juices from the Oranges and the oil from the mint leaves. Stir in the club soda until the sugar has dissolved. Pour into the sugared glasses over ice cubes to serve.'
},
{
  recipeId: 22,
  categoryId: 5,
  title: 'Tandoori Chicken',
  photo_url: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken.jpg',
  photosArray: [
    'https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken.jpg',
  ],
time: '15',
ingredients: [
  [0, '3'],
  [67, '1'],
  [31, '1'],
  [3, '1 nos'],
  [44, '1 nos chopped'],
  [30, '2 teaspoons'],
  [51, '2 teaspoons'],
  [1, '1 teaspoons'],
  [73, '1 whole chicken'],
],
description:
  '-- Heat the oil in a small pan over medium heat, then cook the coriander, cumin, turmeric, cayenne, garam masala and paprika, stirring often, until fragrant (approximately 2-3 minutes). Let cool completely. \n\n -- Whisk the cooled spice-oil mixture into the yogurt, then mix in the lemon juice, garlic, salt and ginger. \n\n -- Cut deep slashes (to the bone) in 3-4 places on the leg/thigh pieces. Just make 2-3 cuts if you are using separate drumsticks and thighs. Coat the chicken in the marinade, cover and chill for at least an hour (preferably 6 hours), no more than 8 hours. \n\n -- Take the chicken out of the marinade and shake off the excess. You want the chicken coated, but not gloppy. Put the chicken pieces on the hot side of the grill and cover. Cook 2-3 minutes before checking. Turn the chicken so it is brown (even a little bit charred) on all sides. '
},
{
  recipeId: 24,
  categoryId: 5,
  title: 'Chicken Curry',
  photo_url: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/poojanadkarni/Simple_Tasty_Tandoori_Chicken_Curry.jpg',
  photosArray: [
    'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/poojanadkarni/Simple_Tasty_Tandoori_Chicken_Curry.jpg'
  ],
time: '60',
ingredients: [
  [0, '1/2'],
  [67, '1'],
  [31, '1'],
  [22, '2 nos'],
  [44, '1 nos chopped'],
  [30, '1 teaspoons'],
  [51, '1 teaspoons'],
  [1, '2 teaspoons'],
  [73, '2'],
  [18, '1 teaspoons'],
  [23, '1'],
],
description:
  '-- Heat the oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned. Transfer the browned chicken breasts to a plate and set aside. \n\n -- Reduce the heat under the skillet to medium-high; add the onion, garlic, and ginger to the oil remaining in the skillet and cook and stir until the onion turns translucent, about 8 minutes. Stir the curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Mix the tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt into the mixture. Return the chicken breast to the skillet along with any juices on the plate. Pour 1/2 cup water into the mixture; bring to a boil, turning the chicken to coat with the sauce. Sprinkle the garam masala and 1 tablespoon cilantro over the chicken. \n\n -- Cover the skillet and simmer until the chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Sprinkle with lemon juice to serve.'
},
{
  recipeId: 25,
  categoryId: 6,
  title: 'Fried Rice',
  photo_url: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg',
  photosArray: [
    'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg'
  ],
time: '45',
ingredients: [
  [40, '1'],
  [1, '2 teaspoons'],
  [75, '2'],
  [18, '4 teaspoons'],
  [74, '2'],
],
description:
'-- In a saucepan, combine rice and water. Bring to a boil. Reduce heat, cover, and simmer for 20 minutes. \n\n -- In a small saucepan, boil carrots in water about 3 to 5 minutes. Drop peas into boiling water, and drain. \n\n -- Heat wok over high heat. Pour in oil, then stir in carrots and peas; cook about 30 seconds. Stir in cooked rice. Shake in soy sauce, and toss rice to coat. Drizzle with sesame oil, and toss again.'
},
{
  recipeId: 26,
  categoryId: 6,
  title: 'Spring Rolls',
  photo_url: 'https://5.imimg.com/data5/YM/UQ/GLADMIN-27973816/veg-spring-rolls-500x500.jpg',
  photosArray: [
    'https://5.imimg.com/data5/YM/UQ/GLADMIN-27973816/veg-spring-rolls-500x500.jpg'
  ],
time: '50',
ingredients: [
  [51, '1'],
  [30, '2 teaspoons'],
  [69, '3'],
  [18, '1 teaspoons'],
  [74, '2'],
  [55, '2'],
  [53, '1/2'],
],
description:
' -- Bring a medium saucepan of water to boil. Boil rice vermicelli 3 to 5 minutes, or until al dente, and drain. \n\n -- Fill a large bowl with warm water. Dip one wrapper into the hot water for 1 second to soften. Lay wrapper flat. In a row across the center, place 2 shrimp halves, a handful of vermicelli, basil, mint, cilantro and lettuce, leaving about 2 inches uncovered on each side. Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce. Repeat with remaining ingredients.'
},
{
  recipeId: 27,
  categoryId: 6,
  title: 'Egg Noodles',
  photo_url: 'https://static.toiimg.com/photo/52467119.cms',
  photosArray: [
    'https://static.toiimg.com/photo/52467119.cms',
  ],
time: '33',
ingredients: [
  [12, '2'],
  [1, '1'],
  [75, '2'],
  [63, '1/2'],
  [1, '42'],
],
description:
'-- In a large bowl, stir together the flour and salt. Add the beaten egg, milk, and butter. Knead dough until smooth, about 5 minutes. Let rest in a covered bowl for 10 minutes. \n\n -- On a floured surface, roll out to 1/8 or 1/4 inch thickness. Cut into desired lengths and shapes. \n\n -- To cook fresh noodles, in a large pot with boiling salted water cook until al dente. \n\n -- Mix all the ingredients well in the hot pan and serve after 5-10 minutes.'
},
{
  recipeId: 28,
  categoryId: 6,
  title: 'Peanut Butter Noodles',
  photo_url: 'https://cdn.cookingcarnival.com/wp-content/uploads/2019/03/Thai-peanut-sauce-noodle.jpg',
  photosArray: [
    'https://cdn.cookingcarnival.com/wp-content/uploads/2019/03/Thai-peanut-sauce-noodle.jpg',
  ],
time: '45',
ingredients: [
  [52, '1'],
  [53, '3'],
  [0, '2'],
  [51, '3'],
  [73, '1'],
  [38, '1'],
  [22, '1/4'],
  [76, '2'],
],
description:
'Bring a large pot with lightly salted water to a rolling boil. Drop the udon in a few noodles at a time and return to a boil. Cook uncovered, stirring occasionally, until the pasta has cooked through, but is still firm to the bite, 10 to 12 minutes. Drain; return to the pot. \n\n -- While the udon noodles are cooking, whisk the chicken broth, ginger, soy sauce, peanut butter, honey, chile oil, and garlic in a saucepan over medium-high heat. Bring to a boil, whisking until the peanut butter has melted. Pour the sauce over the noodles. Add the chicken and red bell pepper; toss until the noodles are evenly coated in the sauce. Sprinkle with green onions, chopped peanuts, and cilantro to serve.'
},
{
  recipeId: 29,
  categoryId: 6,
  title: 'Sweet and Sour Chicken',
  photo_url: 'https://www.averiecooks.com/wp-content/uploads/2017/01/sweetsourchicken-10-720x540.jpg',
  photosArray: [
    'https://www.averiecooks.com/wp-content/uploads/2017/01/sweetsourchicken-10-720x540.jpg',
  ],
time: '60',
ingredients: [
  [55, '1'],
  [12, '1/4'],
  [0, '2'],
  [1, '1/2'],
  [73, '8'],
  [18, '2'],
  [4, '1/4'],
  [75, '1'],
  [37, '2'],
],
description:
' -- In a saucepan, combine 1 1/2 cups water, sugar, vinegar, reserved pineapple juice, and orange food coloring. Heat to boiling. Turn off heat. Combine 1/4 cup cornstarch and 1/4 cup water; slowly stir into saucepan. Continue stirring until mixture thickens. \n\n -- Combine flour, 2 tablespoons oil, 2 tablespoons cornstarch, salt, white pepper, and egg. Add 1 1/2 cups water gradually to make a thick batter. Stir to blend thoroughly. Add chicken pieces, and stir until chicken is well coated. \n\n -- Heat oil in skillet or wok to 360 degrees F (180 degrees C). Fry chicken pieces in hot oil 10 minutes, or until golden. Remove chicken, and drain on paper towels.',
},
{
  recipeId: 30,
  categoryId: 5,
  title: 'Buttermilk',
  photo_url: 'https://www.aspicyperspective.com/wp-content/uploads/2019/10/How-To-Make-Buttermilk-15.jpg',
  photosArray: [
    'https://www.aspicyperspective.com/wp-content/uploads/2019/10/How-To-Make-Buttermilk-15.jpg',
  ],
time: '15',
ingredients: [
  [44, '2'],
  [18, '3'],
  [1, '1'],
  [55, '2 nos'],
],
description:
' -- In a blender, blend the yogurt, ice, water, sugar and salt until mixture becomes frothy. Pour mixture over ice cubes in tall glasses.',
},
{
  recipeId: 31,
  categoryId: 7,
  title: 'Watermelon Mojito',
  photo_url:
    'https://lh3.googleusercontent.com/proxy/IdcbWRh4qs5T-ERghH-8Ru9MMNiyFOisdwyDsWcXdCGhzSEZY6iMC4VqWMv91rUm1yVT-JdqRKJFhYsKCBjPwUtbjbras58dNAXjRLspYNZKP2kFp9L4bjGvEh-P26cb7SgKtDmj75teql0c',
  photosArray: [
    'https://lh3.googleusercontent.com/proxy/IdcbWRh4qs5T-ERghH-8Ru9MMNiyFOisdwyDsWcXdCGhzSEZY6iMC4VqWMv91rUm1yVT-JdqRKJFhYsKCBjPwUtbjbras58dNAXjRLspYNZKP2kFp9L4bjGvEh-P26cb7SgKtDmj75teql0c'
  ],
  time: '10',
  ingredients: [
    [55, '1 cup'],
    [77, '1'],
    [69, '1/2'],
    [30, '2 nos'],
    [18, '1 cup'],
    [70, '2cup'],
  ],
  description: '-- Pour 1/4 to 1/2 inch of sugar onto a small, shallow plate. Run one of the lime quarters around the rim of each cocktail glass, then dip the glasses into the sugar to rim; set aside. \n\n -- Squeeze all of the lime quarters into a sturdy glass pitcher. Toss the juiced limes into the pitcher along with the mint, Watermelon, and 1 cup of sugar. Crush the fruits together with a muddler to release the juices from the Watermelon and the oil from the mint leaves. Stir in the club soda until the sugar has dissolved. Pour into the sugared glasses over ice cubes to serve.'
},
{
  recipeId: 32,
  categoryId: 4,
  title: 'Banana Smoothie',
  photo_url:
    'https://www.thespruceeats.com/thmb/RTH5cMhDMvK61a4okKEUqneMtxU=/3909x2601/filters:fill(auto,1)/banana-smoothie-recipes-759606-hero-01-d2abaa79f3204030a0ec0a8940456acc.jpg',
  photosArray: [
    'https://www.thespruceeats.com/thmb/RTH5cMhDMvK61a4okKEUqneMtxU=/3909x2601/filters:fill(auto,1)/banana-smoothie-recipes-759606-hero-01-d2abaa79f3204030a0ec0a8940456acc.jpg',
  ],
  time: '10',
  ingredients: [
    [59, '1'],
    [61, '1/2 liters'],
  ],
  description: '-- In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with chocolates, if desired.'
},
{
  recipeId: 33,
  categoryId: 1,
  title: 'Mexican Chipotle Chicken',
  photo_url: 'https://www.galonamission.com/wp-content/uploads/2019/08/Copycat-Chipotle-Chicken-5.jpg',
  photosArray: [
    'https://www.galonamission.com/wp-content/uploads/2019/08/Copycat-Chipotle-Chicken-5.jpg'
  ],
  time: '30',
  ingredients: [
    [73, '2 nos'],
    [1, '1 cup'],
    [43, '1 cup'],
    [51, '1/4 nos'],
    [0, '2 tbsp'],
    [37, '3 tbsp'],
    [4, '1 tsp'],
  ],
  description:
  ' -- Heat oil in a skillet over medium to high heat. Saute chicken in the hot pan until browned, about 5 to 8 minutes per side. \n\n -- Mash chipotle peppers in a bowl with a fork and mix with cream. Pour over browned chicken and simmer until chicken is fully cooked, about 10 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).',
},
{
  recipeId: 34,
  categoryId: 2,
  title: 'Italian Chips',
  photo_url:
    'https://vaya.in/recipes/wp-content/uploads/2018/04/Italian-Chips.jpg',
  photosArray: [
    'https://vaya.in/recipes/wp-content/uploads/2018/04/Italian-Chips.jpg'
  ],
  time: '25',
  ingredients: [
    [75, '1 lb'],
    [78, '12 cup'],
    [45, '3/4 cup'],
  ],
  description:
' -- Arrange the wonton wrappers on the baking sheet in a single layer. Brush each wrapper with egg white; sprinkle with oregano and Parmigiano-Reggiano cheese. Cut each into two triangles using a pizza cutter. \n\n -- Bake in the preheated oven until the edges are brown, 6 to 7 minutes. Transfer to a cooling rack to cool completely. Store in an airtight container up to 2 days.',
},
{
  recipeId: 35,
  categoryId: 3,
  title: 'Sour Cream Cookies',
  photo_url:
    'https://bakerbettie.com/wp-content/uploads/2012/11/sour-cream-sugar-cookies-7.jpg',
  photosArray: [
    'https://bakerbettie.com/wp-content/uploads/2012/11/sour-cream-sugar-cookies-7.jpg',
  ],
  time: '25',
    ingredients: [
    [55, '1'], 
    [75, '1g'], 
    [64, '1/2'],
    [12, '1'], 
    [79, '1/2'], 
    [80, '1/2'],
    [1, '1/2'], 
    [43, '3/4'], 
    ],
    description:
    ' -- In a large bowl, cream together the shortening, white sugar and brown sugar. Combine the flour, baking powder, baking soda and salt; stir into the batter until well blended. Mix in the cream, coconut until evenly distributed. Roll dough into walnut sized balls and place 2 inches apart onto prepared cookie sheets. \n\n -- Bake for 12 minutes in the preheated oven, or until edges are lightly browned.'
},
{
  recipeId: 36,
  categoryId: 3,
  title: 'Chocolate Cookies',
  photo_url:
    'https://www.purelykaylie.com/wp-content/uploads/2021/02/Vegan-Double-Chocolate-Chip-Cookies-12.jpg',
  photosArray: [
    'https://www.purelykaylie.com/wp-content/uploads/2021/02/Vegan-Double-Chocolate-Chip-Cookies-12.jpg',
  ],
  time: '25',
    ingredients: [
    [55, '1'], 
    [75, '1g'], 
    [64, '1/2'],
    [12, '1'], 
    [79, '1/2'], 
    [80, '1/2'],
    [1, '1/2'], 
    [68, '3/4'], 
    ],
    description:
    ' -- In a large bowl, cream together the shortening, white sugar and brown sugar. Combine the flour, baking powder, baking soda and salt; stir into the batter until well blended. Mix in the cream, cocoa powder until evenly distributed. Roll dough into walnut sized balls and place 2 inches apart onto prepared cookie sheets. \n\n -- Bake for 12 minutes in the preheated oven, or until edges are lightly browned.'
  },
  {
    recipeId: 37,
    categoryId: 5,
    title: 'Sweet Buttermilk',
    photo_url: 'https://cdn2.foodviva.com/static-content/food-images/punjabi-recipes/sweet-lassi/sweet-lassi.jpg',
    photosArray: [
      'https://cdn2.foodviva.com/static-content/food-images/punjabi-recipes/sweet-lassi/sweet-lassi.jpg',
    ],
  time: '15',
  ingredients: [
    [44, '2'],
    [18, '3'],
    [55, '4 nos'],
  ],
  description:
  ' -- In a blender, blend the yogurt, ice, water and sugar until mixture becomes frothy. Pour mixture over ice cubes in tall glasses.',
  },
  {
    recipeId: 38,
    categoryId: 7,
    title: 'Kiwi Mojito',
    photo_url:
      'https://ameessavorydish.com/wp-content/uploads/2012/03/Kiwi-skinny-mojito-feature.jpg',
    photosArray: [
      'https://ameessavorydish.com/wp-content/uploads/2012/03/Kiwi-skinny-mojito-feature.jpg'
    ],
    time: '10',
    ingredients: [
      [55, '1 cup'],
      [83, '1'],
      [69, '1/2'],
      [30, '2 nos'],
      [18, '1 cup'],
      [70, '2cup'],
    ],
    description: '-- Pour 1/4 to 1/2 inch of sugar onto a small, shallow plate. Run one of the lime quarters around the rim of each cocktail glass, then dip the glasses into the sugar to rim; set aside. \n\n -- Squeeze all of the lime quarters into a sturdy glass pitcher. Toss the juiced limes into the pitcher along with the mint, Kiwi, and 1 cup of sugar. Crush the fruits together with a muddler to release the juices from the Kiwi and the oil from the mint leaves. Stir in the club soda until the sugar has dissolved. Pour into the sugared glasses over ice cubes to serve.'
  },
  {
    recipeId: 39,
    categoryId: 6,
    title: 'Egg Fried Rice',
    photo_url: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg',
    photosArray: [
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg'
    ],
  time: '45',
  ingredients: [
    [40, '1'],
    [1, '2 teaspoons'],
    [75, '2'],
    [18, '4 teaspoons'],
    [74, '2'],
    [75, '2'],

  ],
  description:
  '-- In a saucepan, combine rice and water. Bring to a boil. Reduce heat, cover, and simmer for 20 minutes. \n\n -- In a small saucepan, boil carrots in water about 3 to 5 minutes. Drop peas into boiling water, and drain. \n\n -- Heat wok over high heat. Pour in oil, then stir in carrots, eggs and peas; cook about 30 seconds. Crack in eggs, stirring quickly to scramble eggs with vegetables. Stir in cooked rice. Shake in soy sauce, and toss rice to coat. Drizzle with sesame oil, and toss again.'
  },  
  {
    recipeId: 40,
    categoryId: 4,
    title: 'Blueberry Smoothie',
    photo_url:
      'https://www.thespruceeats.com/thmb/82w_yFQIMv1DOLKcG2mLX5ofKmk=/2943x2207/smart/filters:no_upscale()/blueberry-smoothie-2238438-16_Hero_1-0901a8305220460da963ef7b210629ea.jpg',
    photosArray: [
      'https://www.thespruceeats.com/thmb/82w_yFQIMv1DOLKcG2mLX5ofKmk=/2943x2207/smart/filters:no_upscale()/blueberry-smoothie-2238438-16_Hero_1-0901a8305220460da963ef7b210629ea.jpg',
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [71, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: '-- In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with chocolates, if desired.'
  },  
  {
    recipeId: 41,
    categoryId: 2,
    title: 'Chicken Pasta',
    photo_url: 'https://i.ndtvimg.com/i/2017-08/spicy-chicken-pasta_650x400_81503903192.jpg',
    photosArray: [
      'https://i.ndtvimg.com/i/2017-08/spicy-chicken-pasta_650x400_81503903192.jpg',
    ],
    time: 10                                                                               ,
    ingredients: [
      [51, '3'],
      [42, '2 tbsp'],
      [63, '2 cups'],
      [64, '2 tsp'],
      [65, '2 cup'],
      [12, '3 cups'],
      [4, '1/2 tsp'],
      [1, '1/2 tbsp'],
      [18, '6 cups'],
      [35, '1/2 tsp'],
      [45, '1'],
      [73, '1'],
    ],
    description:
      '-- firstly, in a large kadai boil 6 cup water and 1 tsp salt. once the water comes to a boil, add 2 cup pasta. boil for 7 minutes, or until the pasta is cooked al dente. \n\n --drain off the pasta and keep aside. in a frying pan, heat 2 tbsp oil and saute 3 clove garlic with chicken. add ½ onion, ½ carrot, ½ capsicum and 3 tbsp sweet corn. saute for a minute or until vegetables and chicken shrink slightly yet remain crunchy. further, add ½ tsp pepper and ½ tsp salt. saute well until the spices are well combined. keep aside. to prepare white sauce for pasta, heat 2 tbsp butter. add 3 tbsp maida and saute on low flame. \n\n -- saute until the maida turns aromatic yet do not change its colour. now add 1 cup milk and mix well. mix until the sauce thickens without forming any lumps. further, add 1 more cup of milk and continue to stir continuously. mix continuously, until the sauce thickens. if required using a whisk break the lumps. cook until the sauce turns silk smooth and creamy texture. now add ½ tsp pepper, ½ tsp chilli flakes, ½ tsp mixed herbs and ½ tsp salt. mix well making sure everything is well combined. add in sauted vegetables and chicken, and combine well. now add in boiled pasta and mix gently. add 2 tbsp of boiled pasta water if the sauce thickens. mix gently making sure everything is well combined. '
  },
  {
    recipeId: 42,
    categoryId: 1,
    title: 'Chicken Bruschetta',
    photo_url: 'https://i.pinimg.com/originals/5e/dc/7e/5edc7ec0ad76810bad15f261beb25093.jpg',
    photosArray: [
      'https://i.pinimg.com/originals/5e/dc/7e/5edc7ec0ad76810bad15f261beb25093.jpg',
    ],
    time: 15,
    ingredients: [
      [23, '8 nos'],
      [10, '1/2 cup'],
      [48, '1/4 cup'],
      [2, '5 nos'],
      [0, '1 tbsp'],
      [1, '1/4 tbsp'],
      [4, '1/4 tsp'],
      [7, '1 loaf'],
      [73, '1'],
    ],
    description:
      '-- In a bowl, toss together the tomatoes, basil, Parmesan cheese, chicken(chopped) and garlic. Mix in the balsamic vinegar, olive oil, kosher salt, and pepper. Serve on toasted  slices.',
      videoSeries : [

        "95BCU1n268w",
        "oiEH4z_EoDw",
        "XTM0wwIGXfY",
        "VZsgMLQUJlM",
      ]


  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Oil',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpUnvfcn0wF9iG4jYIES6nWE9jLgIxhc72A&usqp=CAU'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh9u1TJj2X1TKGgQXADDmGs9OmAkiTZEQ4w&usqp=CAU'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6M2Ai2dASzgFdOskvLSPiTiy0KY_i1R1oA&usqp=CAU'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-72383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede81756a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMzV_4efTsO3yCg10D0fVVRVcVgkPs_GAiw&usqp=CAU'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqcdhs1dSmvCpcyK1OuWhrXWUIDbe8CBp4Q&usqp=CAU'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza--260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoh5qUoP7OEbVL-Z6WT4NYBbd11SV2XB34DQ&usqp=CAU'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Strawberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Basmati Rice',
    photo_url:
      'https://www.thespruceeats.com/thmb/4f4z8htcPWAtBaGmxy_km88Ee5c=/1732x1299/smart/filters:no_upscale()/Basmati-rice-583f907f3df78c0230257ac3.jpg'
  },
  {
    ingredientId: 63,
    name: 'Milk',
    photo_url:
      'https://33q47o1cmnk34cvwth15pbvt120l-wpengine.netdna-ssl.com/wp-content/uploads/raw-milk-1-e1563894986431.jpg'
  },
  {
    ingredientId: 64,
    name: 'Vanilla Extract',
    photo_url:
      'https://images-na.ssl-images-amazon.com/images/I/61gWt0%2BFjKL._SL1000_.jpg'
  },
  {
    ingredientId: 65,
    name: 'Pasta',
    photo_url:
      'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200.jpg'
  },
  {
    ingredientId: 66,
    name: 'Bread',
    photo_url:
      'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg'
  },
  {
    ingredientId: 74,
    name: 'Rice',
    photo_url:
      'https://www.simplyrecipes.com/thmb/j_IZxLEP2tJjonCl3s7RiGnMuxo=/2000x1331/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__HTC-White-Rice-Lead-4-e5743ee4c63a40a0aec2f3abd9f1c097.jpg'
  },
  {
    ingredientId: 67,
    name: 'Coriander',
    photo_url:
      'https://s3-ap-southeast-1.amazonaws.com/sb-singleserver-prod-bucket/a94cf4cbe28b4635031451f093d54d5c/o_1584010542.jpg'
  },
  {
    ingredientId: 68,
    name: 'Cocoa Powder',
    photo_url:
      'https://www.thespruceeats.com/thmb/NWjBWQhJq6A1e9AlWBneOSDUnCI=/1885x1414/smart/filters:no_upscale()/cocoa-powder-and-cacao-beans-on-dark-background--top-view-654544408-5ab44e6304d1cf00361f1b33.jpg'
  },
  {
    ingredientId: 69,
    name: 'Mint Leaves',
    photo_url:
      'https://5.imimg.com/data5/QR/IV/LO/SELLER-44044532/pudina-500x500.jpg'
  },
  {
    ingredientId: 70,
    name: 'Soda',
    photo_url:
      'https://www.thespruceeats.com/thmb/An5j7KHyg-_r_jzv8k9ZBDLHFq0=/1000x1000/smart/filters:no_upscale()/MythsSoda-GettyImages_89538964-56a173c45f9b58b7d0bf67c3.jpg'
  },
  {
    ingredientId: 71,
    name: 'Blueberries',
    photo_url:
      'https://images-prod.healthline.com/hlcmsresource/images/AN_images/blueberries-1296x728-feature.jpg'
  },
  {
    ingredientId: 72,
    name: 'Oranges',
    photo_url:
      'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg'
  },
  {
    ingredientId: 73,
    name: 'Chicken',
    photo_url:
'https://previews.123rf.com/images/olegdudko/olegdudko1907/olegdudko190704407/128656393-raw-uncooked-chicken-breast-fillet-against-white.jpg'  },
  {
    ingredientId: 75,
    name: 'Eggs',
    photo_url:
'https://cdn-prod.medicalnewstoday.com/content/images/articles/283/283659/a-basket-of-eggs.jpg'  },
  {
    ingredientId: 76,
    name: 'Peanuts',
    photo_url:
'https://www.bigbasket.com/media/uploads/p/l/40072484-6_4-bb-royal-organic-raw-peanuts.jpg'  },
  {
    ingredientId: 77,
    name: 'Watermelon',
    photo_url:
    'https://static.toiimg.com/photo/msid-68374658/68374658.jpg?2359844'  },
  {
    ingredientId: 78,
    name: 'Wonton',
    photo_url:
'https://iamhomesteader.com/wp-content/uploads/2020/04/cream-cheese-wontons-2.jpg'  },
  {
    ingredientId: 79,
    name: 'Baking Soda',
    photo_url:
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_08/1678799/baking-soda-mc-main1-210224-v2-1678799.jpg'  },
  {
    ingredientId: 80,
    name: 'Baking Powder',
    photo_url:
'https://www.thespruceeats.com/thmb/5pCPVwZ4s3-TePUeMEvgFDvonoM=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/baking-soda-58ace6af5f9b58a3c9b23ab2.jpg'  },
  {
    ingredientId: 81,
    name: 'Oats',
    photo_url:
'https://post.healthline.com/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg'  },
  {
    ingredientId: 82,
    name: 'Pumpkins',
    photo_url:
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pumpkins-1529604270.jpg'  },
];
