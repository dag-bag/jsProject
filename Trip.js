export default class Trips {
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
export class InterNationlTrips extends Trips {
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

export class SeaTours extends InterNationlTrips {
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
