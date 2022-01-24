class Trips {
  constructor(
    Category,
    location,
    price,
    Description,
    fullDescription,
    imgPath
  ) {
    this.Category = Category;
    this.location = location;
    this.price = price;
    this.Description = Description;
    this.fullDescription = fullDescription;
    this.imgPath = imgPath;
  }
  ChargesInfo() {
    let charges = (this.price / 100) * 10;
    return charges;
  }
  converter(value) {
    return `${value}$`;
  }
}
class InterNationlTrips extends Trips {
  constructor(
    Category,
    location,
    price,
    Description,
    fullDescription,
    imgPath,
    Visa,
    Passport,
    TourGuide
  ) {
    super(Category, location, price, Description, fullDescription, imgPath);
    this.Visa = Visa;
    this.Passport = Passport;
    this.TourGuide = TourGuide;
  }
  // converter() {
  //   let string = "this is for  pratice";
  //   return;
  // }
}

class SeaTours extends InterNationlTrips {
  constructor(
    Category,
    location,
    price,
    Description,
    fullDescription,
    imgPath,
    Visa,
    Passport,
    TourGuide,
    BoatPrice,
    FoodCharge
  ) {
    super(
      Category,
      location,
      price,
      Description,
      fullDescription,
      imgPath,
      Visa,
      Passport,
      TourGuide
    );
  }
}

const Goa = new Trips(
  "Beach Trip",
  "Goa",
  35,
  "Beautiful beach trip for couples and family.",
  "Beachside bliss, trance parties, sizzling nightlife and gourmet temptations – Goa is all these and so much more! A kaleidoscopic destination, Goa is a punch of flavours that packs in fun, frivolousness, culture, heritage and even a sublime dose of spirituality. The buzzing place celebrates the idea of a carefree life like no other destination in India. At the same time, it tantalises you to soak in the splendour of Portuguese colonial ancestry that is laced with a dip of Indian culture. Such is the exotic beauty of Goa!<br>his sand-based party destination is a spectacular package of numerous known and lesser-known attractions. How about treating yourself to a trail of some of the most enticing treasures of Goa that definitely deserve to be on your must-visit list? Interested, are you? Then fasten your seatbelts and here you go!",
  "images/GoaBeach.jpg"
);

const interNationalTrips = new InterNationlTrips(
  "International",
  "Japan",
  55,
  "This is great opportunity for travel world",
  "If you plan to go to Japan you’ll find the country fascinating. To help you in your planning, consider these ten popular places that have been intriguing travelers for centuries.<br>apan can be less expensive to visit than many other major destinations. Public transportation is often convenient, safe, and cost-effective, important if you’re on a budget. On the other hand, the 100 or so railway lines in Tokyo alone can prove a bit daunting.",
  "images/japan-moutn-fuji.jpg",
  true,
  true,
  `TourGuide Charges  `
);

const LasVegas = new SeaTours(
  "Sea Tours",
  "Las Vegas",
  400,
  "This trip for Rich experience",
  `<p>This city in the desert is known around the world for fun and excitement. The Strip, Las Vegas' famous resort-lined street, sparkles with lights and recreated glamorous sites from cities around the world.

  Many of the hotels are attractions in and of themselves and feature free streetside shows, from dancing fountains to erupting volcanoes. You'll also find interesting museums, an always impressive list of shows, and countless other things to do.
  
  The Grand Canyon is just a short helicopter ride away, and the hills and mountains surrounding Las Vegas are home to all kinds of recreational opportunities, from hiking and camping to boating and skiing.
  
  Las Vegas is a great place to visit year-round. The cooler winter temperatures are pleasant for sightseeing, and in summer, when the temperature can rise above 104 degrees Fahrenheit, the hotel pools become an important part of the daytime activities.
  
  Plan your visit and make the most of your time with our list of the top attractions in Las Vegas.</p>`,
  "images/LasVegal.jpg",
  true,
  true,
  `Tour Gouide Charges `,
  60,
  40
);
const jacksonville = new InterNationlTrips(
  "International Trip",
  "jacksonville0",
  "600",
  "Jacksonville is a city located on the Atlantic coast of Florida, the most populous city in the state, and is the largest city ",
  `Our commitment to keeping all visitors safe can be seen across our hospitality industry with enhanced cleanliness and occupancy standards in restaurants, attractions and shops. So, let Jacksonville lift the weight off your shoulders and replace it with the vacation memories you crave – smiles, laughter, fun and sun. Jax. It’s Easier Here!

`,
  "images/jacksonville.jpg",
  true,
  true,
  45
);

const philiphines = new InterNationlTrips(
  "International Trip",
  "philiphines",
  "1200",
  "he Philippines is an archipelago composed of about 7,640 islands, covering a total area, including inland bodies of water, of around 300,000 square kilometers  ",
  `The Philippines is a destination that is easy to visit multiple times due to its more than 7,000 islands. The most difficult decision you make as a traveler, is figuring out which island to visit first. The Philippines is divided into the three main island groups of Luzon, Visayas, and Mindanao, representing different regions in the country.

  The scenery in each region of the Philippines ranges from mountainous and tropical to metropolitan. You can enjoy a day of walking the historical colonial streets of the capital city of Manila or catch a rare glimpse of tiny tarsier monkeys at a private sanctuary on the island of Bohol. The steep, plush mountains provide unforgettable hiking experiences.
  
  Since you are surrounded by the Pacific Ocean, it's not surprising the Philippines has some of the best beaches in Asia and the scuba diving opportunities are outstanding.
  
  Plan your travels around this tropical island nation with our list of the best places to visit in the Philippines
`,
  "images/philiphines.jpg",
  true,
  true,
  45
);
const thailand = new InterNationlTrips(
  "International Trip",
  "thailand",
  "1200",
  "Thailand is a collage of animated scenes that comprise bustling modern cities crowded with motorbikes and tuk-tuks, Buddhist temples tended by orange-robed monks, hill tribes selling handicrafts, lush landscapes  ",
  `s Thailand’s fifth-largest island, Ko Pha Ngan is a mix of rolling hills, lush jungles, and white-sand beaches. Compared to the neighboring island of Ko Samui, Ko Pha Ngan is relatively less developed, although it still offers plenty of activities for travelers and outdoor enthusiasts.

  Diving is a popular activity in Ko Pha Ngan. The island is located near some of the best dive sites in the Gulf of Thailand, including the iconic Sail Rock site. Beachgoers are also spoiled for choice, as Ko Pha Ngan is home to over 30 different tropical beaches
  A small city in northern Thailand, Sukhothai is a popular tourist destination due to the nearby ruins of an ancient city by the same name. Historic Sukhothai was the first capital of Thailand, then Siam, during the 13th century. Many temples, palaces, and monuments from this era can be found in the Sukhothai Historical Park.

The park is divided into multiple zones, with each featuring several excavated temples, chedis, Buddha figures and other monuments with impressive stucco reliefs. Wat Mahathat is considered to be the most impressive temple with its standing Buddha relics and lotus-shaped stupa. In the middle of the park is Wat Si Chum pavilion, which houses a massive 50-foot tall sitting Buddha.

The Sukhothai Historical Park is also dotted with sparkling lakes, sunken moats, and manicured gardens. The on-site Ramkhamhaeng National Museum is a great place to learn more about the park’s history, as it contains different artifacts and objects found in the area. In addition to the historic city, the Sri Satchanalai National Park and Ramkhamhaeng National Park are nearby and well worth a visit for their natural scenery and outdoor recreation.
`,
  "images/thailand.jpg",
  true,
  true,
  45
);
export const WorldTrips = [Goa, interNationalTrips, LasVegas];
WorldTrips.push(jacksonville, philiphines, thailand);
