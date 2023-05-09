const snacks = [
  {
    snack_name: 'snack-1',
    price: 795,
    description: 'a tart, tender bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-2',
    price: 635,
    description: 'a cooling, crumbly delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-3',
    price: 280,
    description: 'a sharp, juicy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-4',
    price: 457,
    description: 'a nutty, creamy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-5',
    price: 329,
    description: 'a nutty, doughy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-6',
    price: 60,
    description: 'a fruity, juicy bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-7',
    price: 265,
    description: 'a sour, doughy moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-8',
    price: 421,
    description: 'a bittersweet, chewy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-9',
    price: 587,
    description: 'a citrusy, flaky bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-10',
    price: 955,
    description: 'a sharp, succulent snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-11',
    price: 51,
    description: 'a acidic, buttery bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-12',
    price: 156,
    description: 'a sour, delicate snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-13',
    price: 631,
    description: 'a acidic, hearty bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-14',
    price: 994,
    description: 'a fresh, succulent snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-15',
    price: 289,
    description: 'a honeyed, fizzy chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-16',
    price: 878,
    description: 'a bittersweet, gooey delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-17',
    price: 447,
    description: 'a yeasty, doughy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-18',
    price: 76,
    description: 'a sweet, creamy treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-19',
    price: 527,
    description: 'a zesty, silky bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-20',
    price: 619,
    description: 'a acidic, gooey moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-21',
    price: 679,
    description: 'a sour, chewy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-22',
    price: 534,
    description: 'a sweet, smooth moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-23',
    price: 210,
    description: 'a cooling, crusty moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-24',
    price: 492,
    description: 'a sweet, fluffy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-25',
    price: 573,
    description: 'a tart, delicate bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-26',
    price: 648,
    description: 'a fruity, juicy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-27',
    price: 593,
    description: 'a cooling, succulent bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-28',
    price: 796,
    description: 'a bitter, sticky snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-29',
    price: 768,
    description: 'a zesty, crusty moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-30',
    price: 536,
    description: 'a citrusy, crumbly moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-31',
    price: 72,
    description: 'a bitter, doughy moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-32',
    price: 671,
    description: 'a fruity, fluffy bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-33',
    price: 360,
    description: 'a fruity, chewy moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-34',
    price: 594,
    description: 'a honeyed, buttery snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-35',
    price: 941,
    description: 'a robust, tender chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-36',
    price: 254,
    description: 'a smoky, airy treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-37',
    price: 720,
    description: 'a tangy, flaky treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-38',
    price: 935,
    description: 'a woody, airy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-39',
    price: 805,
    description: 'a cooling, doughy chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-40',
    price: 280,
    description: 'a citrusy, hearty treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-41',
    price: 924,
    description: 'a full bodied, fizzy bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-42',
    price: 155,
    description: 'a fresh, crumbly chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-43',
    price: 442,
    description: 'a tart, doughy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-44',
    price: 841,
    description: 'a nutty, flaky bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-45',
    price: 968,
    description: 'a bittersweet, hearty moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-46',
    price: 130,
    description: 'a citrusy, airy treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-47',
    price: 642,
    description: 'a acidic, delicate snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-48',
    price: 745,
    description: 'a sour, succulent delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-49',
    price: 595,
    description: 'a rich, hearty delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-50',
    price: 193,
    description: 'a honeyed, crunchy delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-51',
    price: 514,
    description: 'a cooling, chewy treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-52',
    price: 211,
    description: 'a tangy, juicy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-53',
    price: 322,
    description: 'a tart, succulent treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-54',
    price: 194,
    description: 'a robust, chewy delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-55',
    price: 749,
    description: 'a robust, crusty moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-56',
    price: 412,
    description: 'a sweet, doughy moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-57',
    price: 529,
    description: 'a yeasty, airy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-58',
    price: 249,
    description: 'a robust, creamy treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-59',
    price: 156,
    description: 'a woody, gooey delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-60',
    price: 886,
    description: 'a fruity, tender bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-61',
    price: 7,
    description: 'a nutty, creamy snack',
    category: 'cake'
  },
  {
    snack_name: 'snack-62',
    price: 333,
    description: 'a spicy, juicy bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-63',
    price: 528,
    description: 'a yeasty, silky moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-64',
    price: 52,
    description: 'a earthy, flaky delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-65',
    price: 252,
    description: 'a briny, smooth moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-66',
    price: 697,
    description: 'a herbal, delicate bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-67',
    price: 964,
    description: 'a citrusy, crumbly bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-68',
    price: 848,
    description: 'a full bodied, fluffy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-69',
    price: 793,
    description: 'a herbal, buttery snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-70',
    price: 971,
    description: 'a yeasty, delicate chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-71',
    price: 35,
    description: 'a woody, creamy treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-72',
    price: 654,
    description: 'a woody, crusty bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-73',
    price: 455,
    description: 'a herbal, crispy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-74',
    price: 933,
    description: 'a fresh, hearty treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-75',
    price: 564,
    description: 'a nutty, crispy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-76',
    price: 562,
    description: 'a herbal, hearty bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-77',
    price: 321,
    description: 'a full bodied, tender bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-78',
    price: 738,
    description: 'a rich, airy bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-79',
    price: 17,
    description: 'a nutty, creamy snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-80',
    price: 75,
    description: 'a sour, tender treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-81',
    price: 703,
    description: 'a briny, creamy treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-82',
    price: 245,
    description: 'a honeyed, silky moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-83',
    price: 723,
    description: 'a bittersweet, gooey snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-84',
    price: 359,
    description: 'a rich, tender treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-85',
    price: 804,
    description: 'a bittersweet, fizzy chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-86',
    price: 826,
    description: 'a bitter, fizzy treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-87',
    price: 775,
    description: 'a sweet, silky chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-88',
    price: 846,
    description: 'a citrusy, fluffy bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-89',
    price: 965,
    description: 'a herbal, buttery bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-90',
    price: 278,
    description: 'a yeasty, fluffy bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-91',
    price: 83,
    description: 'a acidic, flaky bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-92',
    price: 845,
    description: 'a yeasty, doughy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-93',
    price: 468,
    description: 'a bitter, buttery chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-94',
    price: 919,
    description: 'a bittersweet, crispy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-95',
    price: 603,
    description: 'a sour, doughy delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-96',
    price: 600,
    description: 'a cooling, creamy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-97',
    price: 302,
    description: 'a tangy, crunchy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-98',
    price: 299,
    description: 'a bitter, smooth moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-99',
    price: 997,
    description: 'a briny, creamy snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-100',
    price: 187,
    description: 'a citrusy, flaky delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-101',
    price: 593,
    description: 'a yeasty, hearty delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-102',
    price: 110,
    description: 'a rich, gooey snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-103',
    price: 98,
    description: 'a cooling, doughy delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-104',
    price: 549,
    description: 'a bittersweet, delicate delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-105',
    price: 457,
    description: 'a zesty, silky delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-106',
    price: 45,
    description: 'a sweet, crumbly bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-107',
    price: 149,
    description: 'a robust, juicy treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-108',
    price: 796,
    description: 'a cooling, hearty bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-109',
    price: 429,
    description: 'a smoky, tender bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-110',
    price: 24,
    description: 'a zesty, smooth snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-111',
    price: 693,
    description: 'a sweet, buttery treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-112',
    price: 133,
    description: 'a robust, crunchy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-113',
    price: 181,
    description: 'a tart, airy bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-114',
    price: 501,
    description: 'a briny, juicy moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-115',
    price: 52,
    description: 'a nutty, fluffy delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-116',
    price: 318,
    description: 'a full bodied, smooth bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-117',
    price: 632,
    description: 'a sweet, succulent bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-118',
    price: 835,
    description: 'a full bodied, velvety treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-119',
    price: 685,
    description: 'a herbal, crispy bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-120',
    price: 454,
    description: 'a sharp, flaky delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-121',
    price: 544,
    description: 'a herbal, buttery treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-122',
    price: 85,
    description: 'a bitter, crusty bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-123',
    price: 427,
    description: 'a fiery, creamy bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-124',
    price: 439,
    description: 'a herbal, smooth bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-125',
    price: 935,
    description: 'a citrusy, silky bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-126',
    price: 277,
    description: 'a bitter, succulent treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-127',
    price: 754,
    description: 'a fresh, tender bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-128',
    price: 560,
    description: 'a nutty, doughy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-129',
    price: 197,
    description: 'a zesty, gooey moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-130',
    price: 403,
    description: 'a sharp, chewy bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-131',
    price: 345,
    description: 'a sour, gooey chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-132',
    price: 482,
    description: 'a woody, velvety delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-133',
    price: 482,
    description: 'a cooling, fizzy moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-134',
    price: 93,
    description: 'a tangy, crusty bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-135',
    price: 207,
    description: 'a smoky, doughy treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-136',
    price: 103,
    description: 'a sweet, gooey moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-137',
    price: 902,
    description: 'a tart, succulent snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-138',
    price: 19,
    description: 'a robust, airy chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-139',
    price: 839,
    description: 'a acidic, velvety bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-140',
    price: 187,
    description: 'a woody, buttery chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-141',
    price: 694,
    description: 'a rich, chewy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-142',
    price: 570,
    description: 'a cooling, sticky treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-143',
    price: 721,
    description: 'a bitter, fizzy snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-144',
    price: 80,
    description: 'a acidic, velvety treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-145',
    price: 909,
    description: 'a nutty, juicy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-146',
    price: 204,
    description: 'a sweet, creamy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-147',
    price: 688,
    description: 'a sharp, sticky chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-148',
    price: 437,
    description: 'a earthy, velvety moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-149',
    price: 779,
    description: 'a bitter, flaky delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-150',
    price: 689,
    description: 'a fruity, flaky bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-151',
    price: 143,
    description: 'a honeyed, buttery moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-152',
    price: 779,
    description: 'a sharp, doughy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-153',
    price: 907,
    description: 'a citrusy, crunchy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-154',
    price: 464,
    description: 'a smoky, hearty moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-155',
    price: 116,
    description: 'a nutty, airy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-156',
    price: 644,
    description: 'a rich, delicate chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-157',
    price: 361,
    description: 'a sour, creamy chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-158',
    price: 444,
    description: 'a herbal, chewy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-159',
    price: 358,
    description: 'a woody, hearty treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-160',
    price: 243,
    description: 'a briny, crispy delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-161',
    price: 562,
    description: 'a sweet, gooey delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-162',
    price: 955,
    description: 'a robust, crusty snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-163',
    price: 107,
    description: 'a woody, hearty treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-164',
    price: 664,
    description: 'a nutty, gooey delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-165',
    price: 149,
    description: 'a fiery, silky bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-166',
    price: 808,
    description: 'a full bodied, silky delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-167',
    price: 19,
    description: 'a bittersweet, airy bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-168',
    price: 758,
    description: 'a rich, airy snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-169',
    price: 928,
    description: 'a sharp, airy bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-170',
    price: 425,
    description: 'a acidic, tender treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-171',
    price: 99,
    description: 'a acidic, crusty treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-172',
    price: 211,
    description: 'a bitter, chewy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-173',
    price: 669,
    description: 'a zesty, hearty treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-174',
    price: 604,
    description: 'a sweet, sticky bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-175',
    price: 332,
    description: 'a cooling, buttery snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-176',
    price: 815,
    description: 'a honeyed, crunchy snack',
    category: 'cake'
  },
  {
    snack_name: 'snack-177',
    price: 321,
    description: 'a spicy, creamy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-178',
    price: 828,
    description: 'a fiery, fluffy delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-179',
    price: 89,
    description: 'a robust, fizzy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-180',
    price: 181,
    description: 'a sweet, buttery delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-181',
    price: 367,
    description: 'a tangy, crispy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-182',
    price: 254,
    description: 'a sweet, sticky bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-183',
    price: 472,
    description: 'a woody, crispy treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-184',
    price: 429,
    description: 'a sharp, tender treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-185',
    price: 596,
    description: 'a sour, fizzy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-186',
    price: 170,
    description: 'a robust, crunchy bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-187',
    price: 904,
    description: 'a yeasty, hearty treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-188',
    price: 247,
    description: 'a cooling, buttery moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-189',
    price: 552,
    description: 'a fruity, crunchy bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-190',
    price: 353,
    description: 'a bitter, sticky treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-191',
    price: 295,
    description: 'a acidic, smooth snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-192',
    price: 58,
    description: 'a sour, silky bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-193',
    price: 574,
    description: 'a yeasty, flaky bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-194',
    price: 280,
    description: 'a woody, silky treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-195',
    price: 687,
    description: 'a robust, succulent snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-196',
    price: 931,
    description: 'a sour, flaky moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-197',
    price: 92,
    description: 'a robust, sticky bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-198',
    price: 656,
    description: 'a earthy, crusty moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-199',
    price: 703,
    description: 'a smoky, juicy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-200',
    price: 300,
    description: 'a woody, silky moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-201',
    price: 862,
    description: 'a cooling, tender bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-202',
    price: 561,
    description: 'a citrusy, tender treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-203',
    price: 851,
    description: 'a fruity, smooth chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-204',
    price: 520,
    description: 'a fruity, tender moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-205',
    price: 392,
    description: 'a honeyed, smooth moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-206',
    price: 904,
    description: 'a briny, juicy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-207',
    price: 762,
    description: 'a bittersweet, flaky snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-208',
    price: 84,
    description: 'a bittersweet, tender moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-209',
    price: 240,
    description: 'a sweet, velvety snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-210',
    price: 822,
    description: 'a robust, crunchy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-211',
    price: 242,
    description: 'a acidic, crispy delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-212',
    price: 461,
    description: 'a full bodied, delicate bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-213',
    price: 726,
    description: 'a woody, fizzy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-214',
    price: 61,
    description: 'a nutty, doughy bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-215',
    price: 402,
    description: 'a yeasty, hearty delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-216',
    price: 610,
    description: 'a acidic, chewy treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-217',
    price: 579,
    description: 'a fruity, creamy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-218',
    price: 66,
    description: 'a sweet, velvety snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-219',
    price: 502,
    description: 'a woody, doughy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-220',
    price: 689,
    description: 'a acidic, fizzy snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-221',
    price: 874,
    description: 'a bitter, chewy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-222',
    price: 301,
    description: 'a briny, fizzy bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-223',
    price: 770,
    description: 'a sharp, doughy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-224',
    price: 7,
    description: 'a bittersweet, juicy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-225',
    price: 432,
    description: 'a acidic, hearty treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-226',
    price: 814,
    description: 'a fresh, succulent bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-227',
    price: 398,
    description: 'a robust, chewy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-228',
    price: 617,
    description: 'a cooling, smooth bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-229',
    price: 439,
    description: 'a fresh, crumbly moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-230',
    price: 847,
    description: 'a nutty, crunchy snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-231',
    price: 460,
    description: 'a tangy, chewy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-232',
    price: 437,
    description: 'a fiery, airy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-233',
    price: 318,
    description: 'a robust, flaky chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-234',
    price: 632,
    description: 'a sharp, airy bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-235',
    price: 4,
    description: 'a sour, gooey bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-236',
    price: 181,
    description: 'a fresh, fluffy snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-237',
    price: 942,
    description: 'a citrusy, doughy moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-238',
    price: 327,
    description: 'a nutty, tender chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-239',
    price: 248,
    description: 'a fiery, fluffy chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-240',
    price: 245,
    description: 'a honeyed, delicate chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-241',
    price: 855,
    description: 'a tart, tender chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-242',
    price: 775,
    description: 'a tart, delicate bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-243',
    price: 626,
    description: 'a fiery, juicy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-244',
    price: 268,
    description: 'a robust, buttery bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-245',
    price: 480,
    description: 'a bitter, crusty moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-246',
    price: 882,
    description: 'a citrusy, crumbly moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-247',
    price: 167,
    description: 'a acidic, creamy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-248',
    price: 803,
    description: 'a nutty, buttery treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-249',
    price: 403,
    description: 'a tangy, doughy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-250',
    price: 315,
    description: 'a sour, velvety delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-251',
    price: 617,
    description: 'a spicy, fizzy snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-252',
    price: 173,
    description: 'a fruity, silky chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-253',
    price: 63,
    description: 'a nutty, buttery delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-254',
    price: 246,
    description: 'a bitter, crispy delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-255',
    price: 851,
    description: 'a woody, hearty delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-256',
    price: 772,
    description: 'a rich, flaky bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-257',
    price: 36,
    description: 'a zesty, juicy snack',
    category: 'cake'
  },
  {
    snack_name: 'snack-258',
    price: 862,
    description: 'a briny, crunchy moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-259',
    price: 887,
    description: 'a sharp, flaky snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-260',
    price: 742,
    description: 'a bittersweet, fluffy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-261',
    price: 578,
    description: 'a yeasty, crispy bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-262',
    price: 948,
    description: 'a briny, flaky chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-263',
    price: 358,
    description: 'a sour, airy moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-264',
    price: 425,
    description: 'a earthy, succulent moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-265',
    price: 468,
    description: 'a fiery, delicate treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-266',
    price: 58,
    description: 'a earthy, chewy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-267',
    price: 298,
    description: 'a acidic, crusty moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-268',
    price: 491,
    description: 'a smoky, buttery treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-269',
    price: 922,
    description: 'a earthy, flaky delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-270',
    price: 16,
    description: 'a fiery, creamy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-271',
    price: 535,
    description: 'a rich, gooey chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-272',
    price: 40,
    description: 'a woody, delicate moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-273',
    price: 947,
    description: 'a fruity, airy delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-274',
    price: 197,
    description: 'a rich, silky moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-275',
    price: 500,
    description: 'a briny, doughy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-276',
    price: 437,
    description: 'a bitter, airy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-277',
    price: 417,
    description: 'a cooling, fizzy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-278',
    price: 289,
    description: 'a citrusy, buttery bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-279',
    price: 600,
    description: 'a citrusy, juicy chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-280',
    price: 33,
    description: 'a briny, flaky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-281',
    price: 104,
    description: 'a robust, airy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-282',
    price: 304,
    description: 'a honeyed, hearty bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-283',
    price: 290,
    description: 'a fiery, juicy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-284',
    price: 468,
    description: 'a smoky, crispy bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-285',
    price: 544,
    description: 'a earthy, silky treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-286',
    price: 5,
    description: 'a cooling, hearty delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-287',
    price: 195,
    description: 'a bittersweet, delicate bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-288',
    price: 529,
    description: 'a fiery, flaky bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-289',
    price: 337,
    description: 'a fresh, airy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-290',
    price: 590,
    description: 'a woody, crispy bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-291',
    price: 937,
    description: 'a tangy, succulent moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-292',
    price: 347,
    description: 'a sharp, doughy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-293',
    price: 759,
    description: 'a yeasty, fluffy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-294',
    price: 728,
    description: 'a herbal, fizzy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-295',
    price: 64,
    description: 'a fiery, succulent moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-296',
    price: 811,
    description: 'a bittersweet, juicy chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-297',
    price: 961,
    description: 'a robust, crusty chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-298',
    price: 19,
    description: 'a earthy, silky moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-299',
    price: 276,
    description: 'a tart, crumbly chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-300',
    price: 275,
    description: 'a robust, airy moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-301',
    price: 426,
    description: 'a spicy, crusty moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-302',
    price: 575,
    description: 'a smoky, crumbly delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-303',
    price: 71,
    description: 'a woody, juicy bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-304',
    price: 720,
    description: 'a full bodied, buttery bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-305',
    price: 225,
    description: 'a acidic, delicate moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-306',
    price: 20,
    description: 'a bittersweet, buttery bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-307',
    price: 109,
    description: 'a cooling, buttery snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-308',
    price: 249,
    description: 'a smoky, buttery bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-309',
    price: 928,
    description: 'a bitter, airy chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-310',
    price: 784,
    description: 'a acidic, crispy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-311',
    price: 999,
    description: 'a robust, silky delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-312',
    price: 212,
    description: 'a tart, creamy bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-313',
    price: 769,
    description: 'a briny, sticky treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-314',
    price: 893,
    description: 'a fruity, crispy bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-315',
    price: 19,
    description: 'a citrusy, crumbly treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-316',
    price: 879,
    description: 'a acidic, delicate snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-317',
    price: 655,
    description: 'a briny, doughy bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-318',
    price: 705,
    description: 'a acidic, juicy chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-319',
    price: 606,
    description: 'a tart, airy snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-320',
    price: 978,
    description: 'a rich, hearty bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-321',
    price: 115,
    description: 'a nutty, fluffy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-322',
    price: 129,
    description: 'a bitter, hearty treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-323',
    price: 558,
    description: 'a citrusy, sticky delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-324',
    price: 556,
    description: 'a acidic, airy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-325',
    price: 459,
    description: 'a fruity, hearty treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-326',
    price: 456,
    description: 'a earthy, delicate bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-327',
    price: 268,
    description: 'a sweet, juicy snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-328',
    price: 954,
    description: 'a herbal, smooth bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-329',
    price: 577,
    description: 'a smoky, crusty delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-330',
    price: 540,
    description: 'a bitter, velvety chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-331',
    price: 340,
    description: 'a fruity, juicy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-332',
    price: 398,
    description: 'a fresh, sticky bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-333',
    price: 896,
    description: 'a briny, crumbly snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-334',
    price: 338,
    description: 'a fresh, crispy bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-335',
    price: 726,
    description: 'a citrusy, fizzy delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-336',
    price: 428,
    description: 'a spicy, fluffy chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-337',
    price: 475,
    description: 'a sharp, airy moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-338',
    price: 595,
    description: 'a briny, crunchy treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-339',
    price: 866,
    description: 'a fresh, chewy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-340',
    price: 118,
    description: 'a bitter, sticky snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-341',
    price: 367,
    description: 'a tart, gooey bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-342',
    price: 383,
    description: 'a earthy, succulent treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-343',
    price: 897,
    description: 'a zesty, velvety delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-344',
    price: 805,
    description: 'a spicy, hearty bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-345',
    price: 423,
    description: 'a zesty, chewy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-346',
    price: 481,
    description: 'a fruity, juicy bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-347',
    price: 774,
    description: 'a bitter, doughy bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-348',
    price: 307,
    description: 'a citrusy, hearty chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-349',
    price: 134,
    description: 'a tart, flaky moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-350',
    price: 851,
    description: 'a sour, chewy bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-351',
    price: 418,
    description: 'a yeasty, crispy chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-352',
    price: 379,
    description: 'a zesty, tender treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-353',
    price: 368,
    description: 'a earthy, chewy moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-354',
    price: 337,
    description: 'a cooling, flaky treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-355',
    price: 640,
    description: 'a tangy, sticky bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-356',
    price: 344,
    description: 'a herbal, gooey bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-357',
    price: 788,
    description: 'a woody, creamy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-358',
    price: 612,
    description: 'a sour, juicy treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-359',
    price: 549,
    description: 'a rich, delicate moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-360',
    price: 531,
    description: 'a tangy, gooey treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-361',
    price: 133,
    description: 'a sweet, doughy chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-362',
    price: 914,
    description: 'a robust, succulent treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-363',
    price: 535,
    description: 'a bittersweet, gooey bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-364',
    price: 18,
    description: 'a herbal, flaky snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-365',
    price: 60,
    description: 'a sharp, doughy snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-366',
    price: 862,
    description: 'a fresh, crusty treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-367',
    price: 517,
    description: 'a tart, fluffy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-368',
    price: 204,
    description: 'a bitter, smooth snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-369',
    price: 935,
    description: 'a acidic, crunchy moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-370',
    price: 228,
    description: 'a robust, crumbly treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-371',
    price: 155,
    description: 'a sharp, flaky chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-372',
    price: 892,
    description: 'a fiery, gooey bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-373',
    price: 269,
    description: 'a nutty, smooth bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-374',
    price: 163,
    description: 'a tart, smooth bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-375',
    price: 610,
    description: 'a sour, crusty snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-376',
    price: 922,
    description: 'a honeyed, tender chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-377',
    price: 762,
    description: 'a cooling, chewy moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-378',
    price: 248,
    description: 'a spicy, doughy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-379',
    price: 61,
    description: 'a honeyed, crunchy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-380',
    price: 584,
    description: 'a sour, sticky bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-381',
    price: 305,
    description: 'a bitter, smooth snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-382',
    price: 336,
    description: 'a zesty, chewy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-383',
    price: 488,
    description: 'a nutty, chewy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-384',
    price: 142,
    description: 'a herbal, juicy delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-385',
    price: 98,
    description: 'a smoky, delicate bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-386',
    price: 258,
    description: 'a rich, velvety snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-387',
    price: 545,
    description: 'a fruity, hearty chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-388',
    price: 34,
    description: 'a sharp, crunchy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-389',
    price: 882,
    description: 'a yeasty, chewy chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-390',
    price: 207,
    description: 'a citrusy, hearty treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-391',
    price: 487,
    description: 'a sharp, doughy delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-392',
    price: 882,
    description: 'a fresh, tender delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-393',
    price: 26,
    description: 'a acidic, gooey snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-394',
    price: 36,
    description: 'a zesty, silky bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-395',
    price: 309,
    description: 'a yeasty, crumbly treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-396',
    price: 591,
    description: 'a cooling, silky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-397',
    price: 891,
    description: 'a citrusy, sticky delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-398',
    price: 167,
    description: 'a tangy, crusty treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-399',
    price: 976,
    description: 'a herbal, delicate bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-400',
    price: 252,
    description: 'a woody, juicy chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-401',
    price: 753,
    description: 'a smoky, creamy moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-402',
    price: 384,
    description: 'a rich, tender bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-403',
    price: 130,
    description: 'a herbal, juicy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-404',
    price: 992,
    description: 'a briny, creamy snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-405',
    price: 411,
    description: 'a herbal, doughy treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-406',
    price: 938,
    description: 'a yeasty, hearty delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-407',
    price: 206,
    description: 'a citrusy, fluffy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-408',
    price: 91,
    description: 'a fruity, juicy treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-409',
    price: 805,
    description: 'a fruity, silky snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-410',
    price: 514,
    description: 'a tart, fluffy snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-411',
    price: 968,
    description: 'a briny, juicy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-412',
    price: 773,
    description: 'a bitter, doughy chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-413',
    price: 797,
    description: 'a honeyed, flaky chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-414',
    price: 286,
    description: 'a spicy, flaky bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-415',
    price: 392,
    description: 'a briny, velvety moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-416',
    price: 58,
    description: 'a full bodied, airy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-417',
    price: 888,
    description: 'a rich, fizzy treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-418',
    price: 43,
    description: 'a fiery, creamy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-419',
    price: 443,
    description: 'a tart, buttery treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-420',
    price: 94,
    description: 'a herbal, airy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-421',
    price: 218,
    description: 'a earthy, doughy delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-422',
    price: 701,
    description: 'a briny, chewy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-423',
    price: 425,
    description: 'a fruity, crispy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-424',
    price: 635,
    description: 'a fresh, succulent snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-425',
    price: 490,
    description: 'a bittersweet, delicate bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-426',
    price: 525,
    description: 'a briny, buttery delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-427',
    price: 175,
    description: 'a bitter, creamy bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-428',
    price: 919,
    description: 'a fruity, flaky treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-429',
    price: 989,
    description: 'a honeyed, gooey delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-430',
    price: 606,
    description: 'a zesty, hearty moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-431',
    price: 214,
    description: 'a spicy, chewy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-432',
    price: 861,
    description: 'a herbal, crusty chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-433',
    price: 429,
    description: 'a acidic, hearty bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-434',
    price: 572,
    description: 'a earthy, crumbly moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-435',
    price: 296,
    description: 'a sweet, silky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-436',
    price: 316,
    description: 'a sweet, gooey treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-437',
    price: 803,
    description: 'a zesty, sticky chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-438',
    price: 740,
    description: 'a cooling, smooth bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-439',
    price: 953,
    description: 'a spicy, silky chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-440',
    price: 13,
    description: 'a earthy, sticky treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-441',
    price: 817,
    description: 'a sweet, chewy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-442',
    price: 418,
    description: 'a cooling, sticky delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-443',
    price: 230,
    description: 'a honeyed, flaky moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-444',
    price: 84,
    description: 'a bitter, chewy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-445',
    price: 386,
    description: 'a briny, buttery treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-446',
    price: 420,
    description: 'a zesty, creamy bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-447',
    price: 764,
    description: 'a herbal, chewy bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-448',
    price: 376,
    description: 'a tart, crumbly bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-449',
    price: 198,
    description: 'a tart, smooth bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-450',
    price: 652,
    description: 'a earthy, succulent chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-451',
    price: 156,
    description: 'a full bodied, delicate treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-452',
    price: 401,
    description: 'a sharp, velvety snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-453',
    price: 477,
    description: 'a fruity, smooth delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-454',
    price: 642,
    description: 'a nutty, chewy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-455',
    price: 178,
    description: 'a rich, crunchy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-456',
    price: 341,
    description: 'a yeasty, juicy snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-457',
    price: 137,
    description: 'a fresh, crusty snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-458',
    price: 835,
    description: 'a cooling, crusty moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-459',
    price: 557,
    description: 'a herbal, buttery moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-460',
    price: 594,
    description: 'a earthy, airy treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-461',
    price: 796,
    description: 'a sour, smooth chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-462',
    price: 663,
    description: 'a earthy, fizzy delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-463',
    price: 488,
    description: 'a tangy, airy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-464',
    price: 291,
    description: 'a full bodied, velvety delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-465',
    price: 620,
    description: 'a robust, juicy bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-466',
    price: 79,
    description: 'a fresh, gooey moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-467',
    price: 890,
    description: 'a bitter, smooth bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-468',
    price: 967,
    description: 'a yeasty, buttery delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-469',
    price: 172,
    description: 'a citrusy, airy bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-470',
    price: 748,
    description: 'a fruity, succulent treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-471',
    price: 629,
    description: 'a full bodied, flaky bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-472',
    price: 783,
    description: 'a bittersweet, juicy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-473',
    price: 0,
    description: 'a nutty, crunchy snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-474',
    price: 398,
    description: 'a fresh, fizzy treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-475',
    price: 499,
    description: 'a fiery, crumbly treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-476',
    price: 713,
    description: 'a fresh, succulent chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-477',
    price: 568,
    description: 'a fruity, creamy moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-478',
    price: 390,
    description: 'a briny, tender snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-479',
    price: 135,
    description: 'a sweet, hearty snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-480',
    price: 328,
    description: 'a yeasty, succulent bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-481',
    price: 71,
    description: 'a sour, crumbly bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-482',
    price: 214,
    description: 'a spicy, airy delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-483',
    price: 248,
    description: 'a citrusy, velvety bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-484',
    price: 161,
    description: 'a sharp, gooey moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-485',
    price: 225,
    description: 'a cooling, crumbly chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-486',
    price: 937,
    description: 'a bittersweet, crumbly treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-487',
    price: 765,
    description: 'a bittersweet, creamy bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-488',
    price: 651,
    description: 'a smoky, silky moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-489',
    price: 466,
    description: 'a fiery, silky bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-490',
    price: 564,
    description: 'a sour, crumbly bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-491',
    price: 12,
    description: 'a fruity, juicy moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-492',
    price: 676,
    description: 'a robust, tender treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-493',
    price: 559,
    description: 'a briny, chewy bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-494',
    price: 414,
    description: 'a full bodied, flaky snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-495',
    price: 115,
    description: 'a fruity, tender snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-496',
    price: 416,
    description: 'a bitter, flaky delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-497',
    price: 496,
    description: 'a yeasty, crumbly moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-498',
    price: 743,
    description: 'a nutty, fizzy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-499',
    price: 101,
    description: 'a zesty, creamy delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-500',
    price: 860,
    description: 'a sharp, chewy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-501',
    price: 946,
    description: 'a nutty, silky bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-502',
    price: 738,
    description: 'a cooling, doughy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-503',
    price: 976,
    description: 'a fresh, smooth delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-504',
    price: 685,
    description: 'a earthy, buttery chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-505',
    price: 851,
    description: 'a bitter, delicate snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-506',
    price: 79,
    description: 'a sharp, smooth moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-507',
    price: 123,
    description: 'a tart, crispy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-508',
    price: 168,
    description: 'a nutty, velvety bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-509',
    price: 199,
    description: 'a fresh, gooey bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-510',
    price: 541,
    description: 'a briny, flaky snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-511',
    price: 665,
    description: 'a sour, silky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-512',
    price: 192,
    description: 'a robust, crusty moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-513',
    price: 228,
    description: 'a woody, smooth treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-514',
    price: 269,
    description: 'a briny, crispy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-515',
    price: 314,
    description: 'a honeyed, succulent moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-516',
    price: 131,
    description: 'a briny, delicate moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-517',
    price: 905,
    description: 'a fresh, crispy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-518',
    price: 408,
    description: 'a honeyed, velvety delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-519',
    price: 204,
    description: 'a full bodied, sticky treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-520',
    price: 135,
    description: 'a spicy, airy chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-521',
    price: 906,
    description: 'a bitter, crumbly bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-522',
    price: 81,
    description: 'a bitter, succulent bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-523',
    price: 926,
    description: 'a nutty, sticky bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-524',
    price: 255,
    description: 'a sweet, gooey bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-525',
    price: 215,
    description: 'a acidic, fizzy treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-526',
    price: 531,
    description: 'a nutty, delicate chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-527',
    price: 651,
    description: 'a yeasty, crispy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-528',
    price: 173,
    description: 'a earthy, tender delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-529',
    price: 456,
    description: 'a fruity, creamy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-530',
    price: 917,
    description: 'a tart, succulent chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-531',
    price: 561,
    description: 'a sharp, juicy bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-532',
    price: 477,
    description: 'a cooling, buttery snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-533',
    price: 337,
    description: 'a bitter, smooth bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-534',
    price: 484,
    description: 'a fresh, flaky bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-535',
    price: 606,
    description: 'a rich, delicate moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-536',
    price: 46,
    description: 'a tart, succulent bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-537',
    price: 247,
    description: 'a spicy, creamy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-538',
    price: 192,
    description: 'a honeyed, chewy chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-539',
    price: 945,
    description: 'a acidic, juicy bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-540',
    price: 133,
    description: 'a acidic, crumbly snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-541',
    price: 555,
    description: 'a sharp, succulent chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-542',
    price: 656,
    description: 'a fiery, hearty bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-543',
    price: 925,
    description: 'a tangy, sticky treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-544',
    price: 268,
    description: 'a smoky, buttery snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-545',
    price: 979,
    description: 'a woody, fluffy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-546',
    price: 250,
    description: 'a briny, crusty moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-547',
    price: 133,
    description: 'a fiery, flaky bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-548',
    price: 394,
    description: 'a smoky, buttery chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-549',
    price: 156,
    description: 'a robust, airy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-550',
    price: 888,
    description: 'a tangy, creamy bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-551',
    price: 311,
    description: 'a fruity, crunchy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-552',
    price: 391,
    description: 'a fiery, sticky treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-553',
    price: 578,
    description: 'a woody, crusty bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-554',
    price: 646,
    description: 'a bittersweet, crumbly delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-555',
    price: 418,
    description: 'a fiery, chewy moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-556',
    price: 637,
    description: 'a rich, smooth chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-557',
    price: 985,
    description: 'a bitter, juicy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-558',
    price: 897,
    description: 'a briny, crumbly bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-559',
    price: 944,
    description: 'a acidic, silky delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-560',
    price: 519,
    description: 'a nutty, buttery bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-561',
    price: 509,
    description: 'a citrusy, tender bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-562',
    price: 889,
    description: 'a briny, sticky delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-563',
    price: 25,
    description: 'a honeyed, airy snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-564',
    price: 896,
    description: 'a nutty, gooey bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-565',
    price: 291,
    description: 'a earthy, crumbly snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-566',
    price: 936,
    description: 'a yeasty, crunchy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-567',
    price: 33,
    description: 'a sweet, sticky chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-568',
    price: 53,
    description: 'a full bodied, sticky chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-569',
    price: 760,
    description: 'a citrusy, hearty bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-570',
    price: 989,
    description: 'a spicy, airy delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-571',
    price: 93,
    description: 'a citrusy, tender bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-572',
    price: 708,
    description: 'a spicy, fizzy bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-573',
    price: 726,
    description: 'a nutty, tender snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-574',
    price: 656,
    description: 'a fresh, gooey moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-575',
    price: 946,
    description: 'a fiery, crumbly chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-576',
    price: 573,
    description: 'a citrusy, succulent moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-577',
    price: 478,
    description: 'a earthy, crumbly delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-578',
    price: 90,
    description: 'a fresh, velvety treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-579',
    price: 678,
    description: 'a honeyed, velvety delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-580',
    price: 586,
    description: 'a bitter, flaky chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-581',
    price: 350,
    description: 'a tart, juicy snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-582',
    price: 985,
    description: 'a robust, crumbly delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-583',
    price: 442,
    description: 'a herbal, silky delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-584',
    price: 201,
    description: 'a bitter, creamy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-585',
    price: 982,
    description: 'a rich, sticky treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-586',
    price: 551,
    description: 'a fruity, tender snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-587',
    price: 114,
    description: 'a bittersweet, flaky bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-588',
    price: 646,
    description: 'a yeasty, succulent moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-589',
    price: 382,
    description: 'a woody, crumbly chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-590',
    price: 276,
    description: 'a fruity, velvety treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-591',
    price: 119,
    description: 'a rich, fluffy snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-592',
    price: 203,
    description: 'a bittersweet, silky bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-593',
    price: 576,
    description: 'a briny, silky snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-594',
    price: 819,
    description: 'a fiery, doughy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-595',
    price: 37,
    description: 'a nutty, juicy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-596',
    price: 578,
    description: 'a acidic, flaky chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-597',
    price: 333,
    description: 'a fresh, airy delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-598',
    price: 755,
    description: 'a zesty, hearty bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-599',
    price: 225,
    description: 'a tart, crunchy treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-600',
    price: 421,
    description: 'a fiery, creamy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-601',
    price: 907,
    description: 'a fiery, succulent delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-602',
    price: 394,
    description: 'a earthy, delicate delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-603',
    price: 212,
    description: 'a full bodied, chewy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-604',
    price: 557,
    description: 'a smoky, fizzy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-605',
    price: 23,
    description: 'a sour, silky chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-606',
    price: 852,
    description: 'a yeasty, crumbly delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-607',
    price: 922,
    description: 'a briny, airy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-608',
    price: 147,
    description: 'a spicy, gooey treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-609',
    price: 862,
    description: 'a herbal, juicy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-610',
    price: 13,
    description: 'a tart, hearty treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-611',
    price: 327,
    description: 'a nutty, crunchy snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-612',
    price: 937,
    description: 'a acidic, juicy snack',
    category: 'cake'
  },
  {
    snack_name: 'snack-613',
    price: 523,
    description: 'a briny, crusty snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-614',
    price: 43,
    description: 'a robust, fizzy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-615',
    price: 743,
    description: 'a bitter, crumbly chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-616',
    price: 287,
    description: 'a nutty, juicy bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-617',
    price: 876,
    description: 'a nutty, flaky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-618',
    price: 212,
    description: 'a full bodied, crispy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-619',
    price: 274,
    description: 'a bitter, silky treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-620',
    price: 818,
    description: 'a full bodied, sticky chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-621',
    price: 702,
    description: 'a citrusy, buttery bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-622',
    price: 590,
    description: 'a yeasty, doughy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-623',
    price: 570,
    description: 'a woody, crumbly snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-624',
    price: 461,
    description: 'a cooling, airy snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-625',
    price: 651,
    description: 'a herbal, hearty moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-626',
    price: 82,
    description: 'a sharp, crispy chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-627',
    price: 321,
    description: 'a zesty, smooth bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-628',
    price: 783,
    description: 'a sour, crunchy delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-629',
    price: 131,
    description: 'a smoky, flaky delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-630',
    price: 864,
    description: 'a zesty, delicate treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-631',
    price: 109,
    description: 'a sweet, crispy delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-632',
    price: 805,
    description: 'a briny, smooth chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-633',
    price: 696,
    description: 'a tangy, succulent bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-634',
    price: 873,
    description: 'a herbal, sticky moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-635',
    price: 846,
    description: 'a herbal, tender bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-636',
    price: 158,
    description: 'a tangy, crusty snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-637',
    price: 35,
    description: 'a full bodied, fizzy chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-638',
    price: 428,
    description: 'a fruity, fluffy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-639',
    price: 373,
    description: 'a robust, crumbly bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-640',
    price: 653,
    description: 'a bittersweet, smooth bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-641',
    price: 321,
    description: 'a tart, chewy chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-642',
    price: 36,
    description: 'a briny, crumbly treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-643',
    price: 756,
    description: 'a sour, crunchy chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-644',
    price: 761,
    description: 'a full bodied, crumbly snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-645',
    price: 325,
    description: 'a acidic, silky bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-646',
    price: 358,
    description: 'a smoky, sticky chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-647',
    price: 633,
    description: 'a citrusy, smooth bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-648',
    price: 433,
    description: 'a herbal, velvety treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-649',
    price: 176,
    description: 'a woody, buttery snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-650',
    price: 132,
    description: 'a woody, crusty delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-651',
    price: 380,
    description: 'a earthy, airy bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-652',
    price: 658,
    description: 'a sour, succulent treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-653',
    price: 912,
    description: 'a zesty, tender moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-654',
    price: 663,
    description: 'a yeasty, sticky bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-655',
    price: 190,
    description: 'a herbal, hearty bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-656',
    price: 684,
    description: 'a spicy, creamy snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-657',
    price: 707,
    description: 'a zesty, fluffy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-658',
    price: 579,
    description: 'a sharp, crunchy bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-659',
    price: 698,
    description: 'a woody, airy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-660',
    price: 944,
    description: 'a herbal, chewy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-661',
    price: 175,
    description: 'a fruity, succulent moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-662',
    price: 743,
    description: 'a citrusy, crusty delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-663',
    price: 877,
    description: 'a rich, crusty treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-664',
    price: 787,
    description: 'a smoky, tender snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-665',
    price: 520,
    description: 'a yeasty, sticky snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-666',
    price: 832,
    description: 'a tart, creamy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-667',
    price: 405,
    description: 'a yeasty, velvety delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-668',
    price: 501,
    description: 'a sour, buttery treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-669',
    price: 903,
    description: 'a yeasty, velvety treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-670',
    price: 274,
    description: 'a robust, crumbly moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-671',
    price: 836,
    description: 'a nutty, velvety snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-672',
    price: 5,
    description: 'a tart, succulent bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-673',
    price: 25,
    description: 'a smoky, gooey treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-674',
    price: 111,
    description: 'a fruity, crusty bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-675',
    price: 193,
    description: 'a fruity, smooth treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-676',
    price: 838,
    description: 'a nutty, crunchy delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-677',
    price: 803,
    description: 'a earthy, flaky delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-678',
    price: 698,
    description: 'a fresh, juicy bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-679',
    price: 964,
    description: 'a bitter, crumbly bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-680',
    price: 110,
    description: 'a tangy, sticky bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-681',
    price: 427,
    description: 'a zesty, gooey delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-682',
    price: 809,
    description: 'a sour, flaky bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-683',
    price: 57,
    description: 'a yeasty, crusty chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-684',
    price: 520,
    description: 'a honeyed, tender chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-685',
    price: 944,
    description: 'a fruity, gooey delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-686',
    price: 944,
    description: 'a smoky, smooth moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-687',
    price: 747,
    description: 'a fresh, buttery bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-688',
    price: 733,
    description: 'a bitter, doughy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-689',
    price: 215,
    description: 'a spicy, fluffy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-690',
    price: 470,
    description: 'a yeasty, doughy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-691',
    price: 238,
    description: 'a fiery, succulent treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-692',
    price: 521,
    description: 'a zesty, creamy treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-693',
    price: 410,
    description: 'a fruity, juicy chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-694',
    price: 661,
    description: 'a honeyed, creamy chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-695',
    price: 322,
    description: 'a citrusy, succulent bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-696',
    price: 608,
    description: 'a smoky, silky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-697',
    price: 295,
    description: 'a earthy, hearty chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-698',
    price: 668,
    description: 'a honeyed, delicate snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-699',
    price: 231,
    description: 'a zesty, gooey delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-700',
    price: 908,
    description: 'a bittersweet, gooey moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-701',
    price: 795,
    description: 'a spicy, fizzy moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-702',
    price: 19,
    description: 'a nutty, juicy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-703',
    price: 205,
    description: 'a cooling, juicy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-704',
    price: 921,
    description: 'a full bodied, hearty moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-705',
    price: 82,
    description: 'a smoky, chewy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-706',
    price: 367,
    description: 'a acidic, crunchy bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-707',
    price: 423,
    description: 'a zesty, chewy chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-708',
    price: 561,
    description: 'a briny, buttery bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-709',
    price: 783,
    description: 'a spicy, airy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-710',
    price: 999,
    description: 'a cooling, succulent moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-711',
    price: 364,
    description: 'a bitter, doughy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-712',
    price: 649,
    description: 'a bittersweet, gooey treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-713',
    price: 945,
    description: 'a acidic, buttery delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-714',
    price: 919,
    description: 'a zesty, smooth moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-715',
    price: 135,
    description: 'a fresh, juicy treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-716',
    price: 252,
    description: 'a sharp, crumbly moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-717',
    price: 735,
    description: 'a fresh, airy delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-718',
    price: 346,
    description: 'a full bodied, chewy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-719',
    price: 788,
    description: 'a sweet, fizzy bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-720',
    price: 444,
    description: 'a zesty, hearty bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-721',
    price: 929,
    description: 'a woody, gooey moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-722',
    price: 430,
    description: 'a fresh, airy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-723',
    price: 585,
    description: 'a rich, sticky snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-724',
    price: 526,
    description: 'a citrusy, smooth bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-725',
    price: 842,
    description: 'a full bodied, fluffy bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-726',
    price: 778,
    description: 'a fresh, flaky moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-727',
    price: 903,
    description: 'a sharp, crusty bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-728',
    price: 264,
    description: 'a earthy, crispy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-729',
    price: 104,
    description: 'a zesty, hearty moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-730',
    price: 348,
    description: 'a robust, smooth chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-731',
    price: 635,
    description: 'a sweet, delicate bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-732',
    price: 894,
    description: 'a nutty, delicate moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-733',
    price: 662,
    description: 'a spicy, silky snack',
    category: 'cake'
  },
  {
    snack_name: 'snack-734',
    price: 732,
    description: 'a smoky, sticky chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-735',
    price: 578,
    description: 'a sweet, airy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-736',
    price: 108,
    description: 'a citrusy, velvety chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-737',
    price: 60,
    description: 'a bittersweet, juicy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-738',
    price: 893,
    description: 'a nutty, hearty delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-739',
    price: 531,
    description: 'a sharp, velvety bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-740',
    price: 879,
    description: 'a sweet, fizzy chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-741',
    price: 560,
    description: 'a tart, crusty chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-742',
    price: 83,
    description: 'a herbal, delicate delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-743',
    price: 801,
    description: 'a zesty, succulent treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-744',
    price: 450,
    description: 'a fiery, gooey snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-745',
    price: 887,
    description: 'a robust, fluffy bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-746',
    price: 502,
    description: 'a spicy, doughy treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-747',
    price: 268,
    description: 'a briny, creamy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-748',
    price: 523,
    description: 'a honeyed, smooth snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-749',
    price: 182,
    description: 'a citrusy, hearty chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-750',
    price: 118,
    description: 'a nutty, silky moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-751',
    price: 506,
    description: 'a yeasty, velvety delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-752',
    price: 607,
    description: 'a rich, succulent bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-753',
    price: 702,
    description: 'a citrusy, crunchy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-754',
    price: 450,
    description: 'a smoky, chewy moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-755',
    price: 231,
    description: 'a honeyed, buttery bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-756',
    price: 956,
    description: 'a full bodied, sticky bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-757',
    price: 993,
    description: 'a briny, hearty chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-758',
    price: 616,
    description: 'a bitter, succulent chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-759',
    price: 719,
    description: 'a sharp, smooth chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-760',
    price: 876,
    description: 'a robust, chewy chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-761',
    price: 190,
    description: 'a fiery, sticky delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-762',
    price: 619,
    description: 'a robust, gooey snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-763',
    price: 638,
    description: 'a cooling, fluffy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-764',
    price: 46,
    description: 'a spicy, crusty chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-765',
    price: 547,
    description: 'a honeyed, doughy treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-766',
    price: 465,
    description: 'a fruity, crumbly bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-767',
    price: 522,
    description: 'a earthy, airy chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-768',
    price: 928,
    description: 'a zesty, hearty snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-769',
    price: 237,
    description: 'a cooling, fluffy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-770',
    price: 820,
    description: 'a sour, fizzy treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-771',
    price: 306,
    description: 'a rich, chewy bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-772',
    price: 236,
    description: 'a robust, succulent treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-773',
    price: 14,
    description: 'a herbal, fizzy bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-774',
    price: 235,
    description: 'a tangy, chewy moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-775',
    price: 993,
    description: 'a robust, crispy bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-776',
    price: 651,
    description: 'a citrusy, delicate delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-777',
    price: 334,
    description: 'a fresh, crunchy chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-778',
    price: 504,
    description: 'a rich, gooey moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-779',
    price: 377,
    description: 'a tangy, velvety bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-780',
    price: 902,
    description: 'a robust, gooey snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-781',
    price: 796,
    description: 'a yeasty, fizzy treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-782',
    price: 260,
    description: 'a sharp, buttery bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-783',
    price: 833,
    description: 'a fresh, succulent snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-784',
    price: 61,
    description: 'a fruity, sticky delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-785',
    price: 127,
    description: 'a robust, juicy snack',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-786',
    price: 489,
    description: 'a robust, smooth bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-787',
    price: 635,
    description: 'a fiery, crumbly moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-788',
    price: 64,
    description: 'a tart, tender snack',
    category: 'cake'
  },
  {
    snack_name: 'snack-789',
    price: 707,
    description: 'a bittersweet, gooey chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-790',
    price: 752,
    description: 'a bittersweet, delicate snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-791',
    price: 107,
    description: 'a sweet, sticky moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-792',
    price: 519,
    description: 'a bittersweet, juicy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-793',
    price: 646,
    description: 'a tangy, delicate moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-794',
    price: 14,
    description: 'a spicy, succulent snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-795',
    price: 581,
    description: 'a briny, fluffy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-796',
    price: 59,
    description: 'a bittersweet, buttery bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-797',
    price: 131,
    description: 'a honeyed, gooey bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-798',
    price: 764,
    description: 'a acidic, hearty snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-799',
    price: 186,
    description: 'a citrusy, crusty chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-800',
    price: 902,
    description: 'a sweet, fluffy moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-801',
    price: 522,
    description: 'a spicy, velvety moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-802',
    price: 165,
    description: 'a smoky, creamy delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-803',
    price: 639,
    description: 'a earthy, creamy bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-804',
    price: 945,
    description: 'a sweet, crumbly chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-805',
    price: 494,
    description: 'a bittersweet, fizzy treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-806',
    price: 212,
    description: 'a tangy, doughy bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-807',
    price: 633,
    description: 'a tart, crusty moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-808',
    price: 846,
    description: 'a herbal, crunchy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-809',
    price: 510,
    description: 'a sharp, fizzy bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-810',
    price: 740,
    description: 'a acidic, buttery moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-811',
    price: 246,
    description: 'a robust, sticky bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-812',
    price: 810,
    description: 'a fresh, chewy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-813',
    price: 608,
    description: 'a bitter, velvety bite',
    category: 'drink'
  },
  {
    snack_name: 'snack-814',
    price: 585,
    description: 'a bitter, silky snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-815',
    price: 719,
    description: 'a yeasty, buttery delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-816',
    price: 666,
    description: 'a tart, doughy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-817',
    price: 97,
    description: 'a fresh, gooey bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-818',
    price: 36,
    description: 'a tangy, chewy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-819',
    price: 860,
    description: 'a zesty, silky snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-820',
    price: 764,
    description: 'a woody, gooey delight',
    category: 'cake'
  },
  {
    snack_name: 'snack-821',
    price: 982,
    description: 'a tangy, flaky bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-822',
    price: 247,
    description: 'a citrusy, crispy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-823',
    price: 452,
    description: 'a sweet, airy bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-824',
    price: 16,
    description: 'a robust, chewy treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-825',
    price: 995,
    description: 'a fiery, silky bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-826',
    price: 324,
    description: 'a robust, velvety treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-827',
    price: 255,
    description: 'a robust, gooey moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-828',
    price: 523,
    description: 'a spicy, buttery snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-829',
    price: 484,
    description: 'a robust, sticky delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-830',
    price: 240,
    description: 'a rich, gooey chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-831',
    price: 662,
    description: 'a zesty, crunchy bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-832',
    price: 668,
    description: 'a robust, delicate moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-833',
    price: 5,
    description: 'a briny, crunchy chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-834',
    price: 778,
    description: 'a citrusy, smooth bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-835',
    price: 22,
    description: 'a full bodied, flaky treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-836',
    price: 731,
    description: 'a full bodied, juicy moment of bliss',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-837',
    price: 134,
    description: 'a fresh, smooth moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-838',
    price: 873,
    description: 'a bittersweet, fizzy treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-839',
    price: 515,
    description: 'a yeasty, velvety treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-840',
    price: 132,
    description: 'a herbal, fizzy chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-841',
    price: 486,
    description: 'a tart, velvety delight',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-842',
    price: 244,
    description: 'a bitter, crispy chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-843',
    price: 258,
    description: 'a sour, smooth bite',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-844',
    price: 384,
    description: 'a zesty, crispy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-845',
    price: 856,
    description: 'a yeasty, flaky delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-846',
    price: 622,
    description: 'a earthy, buttery bit of scran',
    category: 'pastry'
  },
  {
    snack_name: 'snack-847',
    price: 634,
    description: 'a bitter, buttery treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-848',
    price: 366,
    description: 'a herbal, chewy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-849',
    price: 320,
    description: 'a honeyed, crumbly chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-850',
    price: 462,
    description: 'a herbal, fluffy bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-851',
    price: 506,
    description: 'a full bodied, crunchy snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-852',
    price: 268,
    description: 'a robust, juicy moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-853',
    price: 575,
    description: 'a sour, buttery snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-854',
    price: 701,
    description: 'a woody, crusty chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-855',
    price: 244,
    description: 'a sour, crumbly bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-856',
    price: 222,
    description: 'a tart, crusty treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-857',
    price: 688,
    description: 'a yeasty, fluffy bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-858',
    price: 224,
    description: 'a acidic, sticky snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-859',
    price: 558,
    description: 'a fruity, succulent moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-860',
    price: 641,
    description: 'a sharp, hearty chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-861',
    price: 266,
    description: 'a sweet, succulent moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-862',
    price: 856,
    description: 'a cooling, flaky treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-863',
    price: 422,
    description: 'a full bodied, crunchy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-864',
    price: 641,
    description: 'a citrusy, flaky snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-865',
    price: 173,
    description: 'a smoky, doughy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-866',
    price: 792,
    description: 'a fiery, chewy moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-867',
    price: 939,
    description: 'a zesty, crumbly delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-868',
    price: 9,
    description: 'a cooling, crumbly treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-869',
    price: 192,
    description: 'a bitter, airy snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-870',
    price: 635,
    description: 'a fruity, fluffy chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-871',
    price: 358,
    description: 'a tart, succulent bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-872',
    price: 682,
    description: 'a robust, juicy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-873',
    price: 754,
    description: 'a tart, crusty bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-874',
    price: 831,
    description: 'a sharp, tender snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-875',
    price: 717,
    description: 'a tart, smooth snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-876',
    price: 188,
    description: 'a nutty, buttery delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-877',
    price: 375,
    description: 'a nutty, crispy snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-878',
    price: 983,
    description: 'a sharp, sticky delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-879',
    price: 133,
    description: 'a fiery, crusty treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-880',
    price: 345,
    description: 'a bitter, doughy delight',
    category: 'cereal'
  },
  {
    snack_name: 'snack-881',
    price: 135,
    description: 'a briny, crusty bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-882',
    price: 839,
    description: 'a nutty, fluffy chomp',
    category: 'drink'
  },
  {
    snack_name: 'snack-883',
    price: 419,
    description: 'a fiery, crusty chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-884',
    price: 887,
    description: 'a yeasty, smooth treat',
    category: 'fruit'
  },
  {
    snack_name: 'snack-885',
    price: 62,
    description: 'a yeasty, crumbly treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-886',
    price: 449,
    description: 'a tangy, crusty bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-887',
    price: 708,
    description: 'a rich, flaky bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-888',
    price: 187,
    description: 'a honeyed, creamy moment of bliss',
    category: 'soup'
  },
  {
    snack_name: 'snack-889',
    price: 101,
    description: 'a robust, smooth delight',
    category: 'drink'
  },
  {
    snack_name: 'snack-890',
    price: 762,
    description: 'a briny, crusty chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-891',
    price: 290,
    description: 'a sour, creamy moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-892',
    price: 892,
    description: 'a sweet, succulent chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-893',
    price: 995,
    description: 'a sour, crunchy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-894',
    price: 673,
    description: 'a bittersweet, crispy snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-895',
    price: 259,
    description: 'a nutty, crispy bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-896',
    price: 754,
    description: 'a nutty, fizzy treat',
    category: 'drink'
  },
  {
    snack_name: 'snack-897',
    price: 962,
    description: 'a fiery, gooey treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-898',
    price: 55,
    description: 'a woody, crispy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-899',
    price: 449,
    description: 'a tangy, crunchy delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-900',
    price: 597,
    description: 'a honeyed, fluffy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-901',
    price: 620,
    description: 'a woody, delicate chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-902',
    price: 461,
    description: 'a bitter, gooey bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-903',
    price: 294,
    description: 'a sharp, crusty delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-904',
    price: 199,
    description: 'a rich, gooey moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-905',
    price: 924,
    description: 'a nutty, gooey treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-906',
    price: 558,
    description: 'a fiery, crusty bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-907',
    price: 503,
    description: 'a tart, crumbly chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-908',
    price: 147,
    description: 'a fresh, silky moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-909',
    price: 232,
    description: 'a citrusy, airy moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-910',
    price: 348,
    description: 'a zesty, delicate treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-911',
    price: 808,
    description: 'a zesty, sticky treat',
    category: 'pastry'
  },
  {
    snack_name: 'snack-912',
    price: 662,
    description: 'a woody, fizzy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-913',
    price: 552,
    description: 'a tangy, sticky chomp',
    category: 'cereal'
  },
  {
    snack_name: 'snack-914',
    price: 956,
    description: 'a smoky, succulent treat',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-915',
    price: 455,
    description: 'a citrusy, airy moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-916',
    price: 422,
    description: 'a yeasty, airy bit of scran',
    category: 'drink'
  },
  {
    snack_name: 'snack-917',
    price: 621,
    description: 'a smoky, fluffy snack',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-918',
    price: 372,
    description: 'a bittersweet, juicy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-919',
    price: 80,
    description: 'a fiery, succulent bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-920',
    price: 748,
    description: 'a bittersweet, fluffy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-921',
    price: 561,
    description: 'a honeyed, delicate bit of scran',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-922',
    price: 620,
    description: 'a robust, airy moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-923',
    price: 774,
    description: 'a fruity, fizzy chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-924',
    price: 622,
    description: 'a sharp, crunchy moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-925',
    price: 429,
    description: 'a honeyed, buttery snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-926',
    price: 786,
    description: 'a herbal, creamy delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-927',
    price: 395,
    description: 'a fruity, doughy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-928',
    price: 227,
    description: 'a sharp, creamy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-929',
    price: 428,
    description: 'a fresh, crunchy bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-930',
    price: 493,
    description: 'a sweet, buttery delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-931',
    price: 248,
    description: 'a cooling, gooey bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-932',
    price: 202,
    description: 'a rich, smooth bite',
    category: 'soup'
  },
  {
    snack_name: 'snack-933',
    price: 763,
    description: 'a sour, tender bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-934',
    price: 838,
    description: 'a yeasty, crumbly snack',
    category: 'cereal'
  },
  {
    snack_name: 'snack-935',
    price: 672,
    description: 'a tart, sticky treat',
    category: 'soup'
  },
  {
    snack_name: 'snack-936',
    price: 248,
    description: 'a spicy, sticky treat',
    category: 'cereal'
  },
  {
    snack_name: 'snack-937',
    price: 53,
    description: 'a tart, creamy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-938',
    price: 535,
    description: 'a acidic, crusty bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-939',
    price: 665,
    description: 'a rich, hearty bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-940',
    price: 636,
    description: 'a acidic, velvety moment of bliss',
    category: 'drink'
  },
  {
    snack_name: 'snack-941',
    price: 126,
    description: 'a fiery, velvety snack',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-942',
    price: 192,
    description: 'a sweet, creamy snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-943',
    price: 495,
    description: 'a bittersweet, crusty delight',
    category: 'fruit'
  },
  {
    snack_name: 'snack-944',
    price: 612,
    description: 'a bitter, smooth moment of bliss',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-945',
    price: 370,
    description: 'a woody, smooth snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-946',
    price: 301,
    description: 'a acidic, crusty chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-947',
    price: 481,
    description: 'a herbal, fizzy treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-948',
    price: 134,
    description: 'a smoky, fizzy treat',
    category: 'cake'
  },
  {
    snack_name: 'snack-949',
    price: 661,
    description: 'a rich, crumbly delight',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-950',
    price: 212,
    description: 'a sour, succulent treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-951',
    price: 306,
    description: 'a sweet, gooey snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-952',
    price: 846,
    description: 'a fiery, sticky bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-953',
    price: 265,
    description: 'a zesty, airy chomp',
    category: 'fruit'
  },
  {
    snack_name: 'snack-954',
    price: 514,
    description: 'a rich, gooey moment of bliss',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-955',
    price: 587,
    description: 'a citrusy, fizzy bite',
    category: 'fruit'
  },
  {
    snack_name: 'snack-956',
    price: 263,
    description: 'a cooling, buttery moment of bliss',
    category: 'fruit'
  },
  {
    snack_name: 'snack-957',
    price: 355,
    description: 'a earthy, smooth snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-958',
    price: 658,
    description: 'a earthy, crunchy chomp',
    category: 'pastry'
  },
  {
    snack_name: 'snack-959',
    price: 831,
    description: 'a woody, silky delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-960',
    price: 508,
    description: 'a earthy, fizzy chomp',
    category: 'cake'
  },
  {
    snack_name: 'snack-961',
    price: 194,
    description: 'a bitter, succulent moment of bliss',
    category: 'cereal'
  },
  {
    snack_name: 'snack-962',
    price: 105,
    description: 'a acidic, crusty snack',
    category: 'soup'
  },
  {
    snack_name: 'snack-963',
    price: 392,
    description: 'a spicy, fluffy bit of scran',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-964',
    price: 477,
    description: 'a honeyed, crunchy bit of scran',
    category: 'fruit'
  },
  {
    snack_name: 'snack-965',
    price: 116,
    description: 'a spicy, crumbly delight',
    category: 'pastry'
  },
  {
    snack_name: 'snack-966',
    price: 289,
    description: 'a cooling, sticky chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-967',
    price: 747,
    description: 'a cooling, doughy delight',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-968',
    price: 568,
    description: 'a smoky, flaky chomp',
    category: 'soup'
  },
  {
    snack_name: 'snack-969',
    price: 970,
    description: 'a tangy, doughy bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-970',
    price: 237,
    description: 'a fiery, hearty bit of scran',
    category: 'cereal'
  },
  {
    snack_name: 'snack-971',
    price: 686,
    description: 'a smoky, sticky treat',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-972',
    price: 263,
    description: 'a zesty, doughy snack',
    category: 'pastry'
  },
  {
    snack_name: 'snack-973',
    price: 866,
    description: 'a yeasty, delicate bite',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-974',
    price: 158,
    description: 'a zesty, juicy chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-975',
    price: 74,
    description: 'a honeyed, buttery chomp',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-976',
    price: 47,
    description: 'a sweet, crumbly bit of scran',
    category: 'cake'
  },
  {
    snack_name: 'snack-977',
    price: 557,
    description: 'a fiery, smooth moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-978',
    price: 881,
    description: 'a bitter, succulent bite',
    category: 'cake'
  },
  {
    snack_name: 'snack-979',
    price: 308,
    description: 'a yeasty, fizzy treat',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-980',
    price: 923,
    description: 'a fresh, crispy chomp',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-981',
    price: 413,
    description: 'a herbal, crumbly chomp',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-982',
    price: 790,
    description: 'a robust, tender bite',
    category: 'cereal'
  },
  {
    snack_name: 'snack-983',
    price: 273,
    description: 'a fiery, silky bit of scran',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-984',
    price: 232,
    description: 'a spicy, delicate delight',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-985',
    price: 798,
    description: 'a woody, silky moment of bliss',
    category: 'pastry'
  },
  {
    snack_name: 'snack-986',
    price: 590,
    description: 'a full bodied, juicy bite',
    category: 'biscuit'
  },
  {
    snack_name: 'snack-987',
    price: 214,
    description: 'a robust, sticky snack',
    category: 'fruit'
  },
  {
    snack_name: 'snack-988',
    price: 895,
    description: 'a citrusy, velvety snack',
    category: 'drink'
  },
  {
    snack_name: 'snack-989',
    price: 513,
    description: 'a smoky, crispy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-990',
    price: 170,
    description: 'a acidic, silky bit of scran',
    category: 'soup'
  },
  {
    snack_name: 'snack-991',
    price: 957,
    description: 'a bittersweet, fizzy bite',
    category: 'pastry'
  },
  {
    snack_name: 'snack-992',
    price: 428,
    description: 'a citrusy, flaky chomp',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-993',
    price: 88,
    description: 'a briny, juicy snack',
    category: 'chocolate bar'
  },
  {
    snack_name: 'snack-994',
    price: 701,
    description: 'a earthy, airy moment of bliss',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-995',
    price: 511,
    description: 'a yeasty, silky bit of scran',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-996',
    price: 280,
    description: 'a bitter, chewy bite',
    category: 'potatoes'
  },
  {
    snack_name: 'snack-997',
    price: 966,
    description: 'a fresh, sticky treat',
    category: 'vegetables'
  },
  {
    snack_name: 'snack-998',
    price: 201,
    description: 'a briny, crusty delight',
    category: 'soup'
  },
  {
    snack_name: 'snack-999',
    price: 396,
    description: 'a tart, crunchy moment of bliss',
    category: 'cake'
  },
  {
    snack_name: 'snack-1000',
    price: 515,
    description: 'a herbal, succulent bit of scran',
    category: 'vegetables'
  }
];

module.exports = snacks;
