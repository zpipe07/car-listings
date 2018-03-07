const cars = [
  {
    year: 2013,
    make: 'Kia',
    model: 'Optima',
    mileage: 24235,
    drivetrain: 'FWD',
    bodytype: 'sedan',
    image_url:
      'http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Hyundai',
    model: 'Accent',
    mileage: 21587,
    drivetrain: 'FWD',
    bodytype: 'sedan',
    image_url:
      'http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg',
    created_at: '2016-11-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Nissan',
    model: 'Juke',
    mileage: 10457,
    drivetrain: 'FWD',
    bodytype: 'CUV',
    image_url:
      'http://www.automobilesreview.com/gallery/2014-nissan-juke-nismo-rs/2014-nissan-juke-nismo-rs-08.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Land Rover',
    model: 'Range Rover',
    mileage: 7458,
    drivetrain: '4x4',
    bodytype: 'SUV',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Range-Rover-Autobiography-Black-Edition-front-three-quarters.jpg',
    created_at: '2016-12-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Jaguar',
    model: 'XK',
    mileage: 9852,
    drivetrain: 'RWD',
    bodytype: 'convertible',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Jaguar-XKR-S-GT-front-three-quarter-in-motion-02.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Audi',
    model: 'A5',
    mileage: 17216,
    image_url:
      'http://st.motortrend.com/uploads/sites/5/2012/07/2013-Audi-A5-front-three-quarter-in-motion.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Jeep',
    model: 'Wrangler Unlimited',
    mileage: 19000,
    image_url:
      'http://blog.caranddriver.com/wp-content/uploads/2014/07/2013-Jeep-Wrangler-Unlimited-Rubicon-10th-Anniversary-Edition-PLACEMENT.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 1999,
    make: 'BMW',
    model: '528i',
    mileage: 160254,
    image_url: 'http://intorg.netfirms.com/Cars8/1999_BMW_528/DrQuarter2.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Infinity',
    model: 'Q60',
    mileage: 9256,
    drivetrain: 'RWD',
    bodytype: 'coupe',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/11/2014-infiniti-q60-sport-coupe-angular-front.png',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Buick',
    model: 'Enclave',
    mileage: 9587,
    drivetrain: 'FWD',
    bodytype: 'CUV',
    image_url: 'https://i.ytimg.com/vi/aAdDnRnXDz8/maxresdefault.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Chevrolet',
    model: 'Silverado 2500HD',
    mileage: 10458,
    drivetrain: '4x4',
    bodytype: 'pickup',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/11/2014-chevrolet-silverado2500-wt-regularcab-truck-angular-front.png',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Volkswagen',
    model: 'Eos',
    mileage: 18145,
    drivetrain: 'FWD',
    bodytype: 'convertible',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/11/2013-volkswagen-eos-komfort-convertible-rear-view.png',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Nissan',
    model: 'Maxima',
    mileage: 17489,
    drivetrain: 'FWD',
    bodytype: 'sedan',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2013-Nissan-Maxima-three-quarters-in-motion-side-view-003.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Kia',
    model: 'Optima',
    mileage: 24235,
    drivetrain: 'FWD',
    bodytype: 'sedan',
    image_url:
      'http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Hyundai',
    model: 'Accent',
    mileage: 21587,
    drivetrain: 'FWD',
    bodytype: 'sedan',
    image_url:
      'http://www.conceptcarz.com/images/Hyundai/2013-Hyundai-Accent-Sedan-Image-01.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Nissan',
    model: 'Juke',
    mileage: 10457,
    drivetrain: 'FWD',
    bodytype: 'CUV',
    image_url:
      'http://www.automobilesreview.com/gallery/2014-nissan-juke-nismo-rs/2014-nissan-juke-nismo-rs-08.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Land Rover',
    model: 'Range Rover',
    mileage: 7458,
    drivetrain: '4x4',
    bodytype: 'SUV',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Range-Rover-Autobiography-Black-Edition-front-three-quarters.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Jaguar',
    model: 'XK',
    mileage: 9852,
    drivetrain: 'RWD',
    bodytype: 'convertible',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Jaguar-XKR-S-GT-front-three-quarter-in-motion-02.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Audi',
    model: 'A5',
    mileage: 17216,
    image_url:
      'http://st.motortrend.com/uploads/sites/5/2012/07/2013-Audi-A5-front-three-quarter-in-motion.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2013,
    make: 'Jeep',
    model: 'Wrangler Unlimited',
    mileage: 19000,
    image_url:
      'http://blog.caranddriver.com/wp-content/uploads/2014/07/2013-Jeep-Wrangler-Unlimited-Rubicon-10th-Anniversary-Edition-PLACEMENT.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 1999,
    make: 'BMW',
    model: '528i',
    mileage: 160254,
    image_url: 'http://intorg.netfirms.com/Cars8/1999_BMW_528/DrQuarter2.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2016,
    make: 'Lincoln',
    model: 'MKX',
    mileage: 1545,
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2016-Lincoln-MKX-front-three-quarter.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2015,
    make: 'RAM',
    model: '1500',
    mileage: 10547,
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2015-Ram-1500-Laramie-Longhorn-Crew-Cab-4x4-Ecodiesel-front-three-quarter-02.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2015,
    make: 'Toyota',
    model: 'Tundra',
    mileage: 11458,
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2015-Toyota-Tundra-Bass-Pro-Shops-Off-Road-Edition-front-three-quarter-view.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'SRT',
    model: 'Viper',
    mileage: 8411,
    image_url:
      'http://st.motortrend.com/uploads/sites/5/2013/03/2014-SRT-Viper-TA-front-three-quarters-in-motion-31.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Honda',
    model: 'Civic',
    mileage: 21458,
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2014-Honda-Civic-black-side-view.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2015,
    make: 'BMW',
    model: 'X4',
    mileage: 9457,
    image_url:
      'http://blog.caranddriver.com/wp-content/uploads/2014/04/2015-BMW-X4-PLACEMENT-626x382.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2015,
    make: 'Chrysler',
    model: '200',
    mileage: 8475,
    drivetrain: 'FWD',
    bodytype: 'sedan',
    image_url:
      'http://st.motortrend.com/uploads/sites/5/2014/01/2015-Chrysler-200-in-Detroit-rear-view-on-stage1.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
  {
    year: 2014,
    make: 'Nissan',
    model: 'Titan',
    mileage: 15478,
    drivetrain: 'RWD',
    bodytype: 'pickup',
    image_url:
      'http://st.motortrend.com/uploads/sites/10/2015/09/2014-nissan-titan-front.jpg',
    created_at: '2016-10-14T20:13:22.586Z',
  },
];

export default cars;
