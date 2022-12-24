const { Details } = require("@material-ui/icons");

const categoriesContent = [
  {
    mainCategory: "Machinery",
    minorCategories: [
      "Agricultural Machinery & Equipment",
      "Apparel & textile Machinery",
      "Building Material Machinery",
      "Chemical Material Machinery",
      "Chemical Equipment",
      "Electrice Equipment Making Machinery",
    ],
  },
  {
    mainCategory: "Vehicles & Accessories",
    minorCategories: [
      "ATV/UTV Parts & Accessories",
      "Automotive Parts & Accessories",
      "Aviation Parts & Accessories",
      "Bus Parts & Accessories",
      "Container Parts & Accessories",
      "Racer Cars Parts & Accessories",
    ],
  },
  {
    mainCategory: "Consumer Electronics",
    minorCategories: [
      "BlockChain Miners",
      "Camera, Photo & accessories",
      "Chargers,Batteries & Power Supplies",
      "Commonly Used Accessories & Parts",
      "Computer Hardware & Software",
    ],
  },
  {
    mainCategory: "Home Appliances",
    minorCategories: [
      "Air conditioning Appliances",
      "Baby Appliances",
      "Cleaning Appliances",
      "Home Appliance Parts",
      "Home Appliance Stocks",
      "Home Heaters",
    ],
  },
  {
    mainCategory: "Apparel",
    minorCategories: [
      "Men's Clothing",
      "Women's Clothing",
      "SportsWear",
      "Garment & Processing Accessories",
      "Wedding Apparel & Accessories",
      "Made In Germany",
    ],
  },
  {
    mainCategory: "Fashion Accessories",
    minorCategories: [
      "Belts & Accessories",
      "Clothes Accessories",
      "Ear Muff & Eye Masks",
      "Ethnic Accessories",
      "Gloves & Mittens",
      "Hair Accessories",
    ],
  },
  {
    mainCategory: "TimePieces,Jewelry,Eyewear",
    minorCategories: [
      "EyeWear",
      "EyeWear Accessories",
      "Jewelry",
      "Jewelry Accessories",
      "Watch Accessories & Parts",
      "Watches",
    ],
  },
  {
    mainCategory: "Lights & Lighting",
    minorCategories: [
      "Commercial & Industrial Lighting",
      "Healthcare Lighting",
      "Holiday Lighting",
      "Indoor Lighting",
      "Landscape Lighting",
    ],
  },
  {
    mainCategory: "Construction & Real Estate",
    minorCategories: [
      "Balustrades & Handrails",
      "Bathroom & Kitchen",
      "Building & Industrial Glass",
      "Building Boards",
      "Building Glass",
      "Ceilings",
    ],
  },
  {
    mainCategory: "Home & Garden",
    minorCategories: [
      "Kitchen & Tabletop",
      "Garden Supplies",
      "Pet Products",
      "Home Storage & Organization",
      "Household Cleaning Tools & Accessories",
      "Household Sundries",
    ],
  },
  {
    mainCategory: "Furniture",
    minorCategories: [
      "Commercial Furniture",
      "Furniture Accessories",
      "Furniture Accessories",
      "Furniture Parts",
      "Home Furniture",
    ],
  },
  {
    mainCategory: "Fabric & Textiles Materials",
    minorCategories: [
      "Downs & Feather",
      "Fabric",
      "Fiber",
      "Fur",
      "Leather",
      "Leather Product",
    ],
  },
  {
    mainCategory: "Home textiles",
    minorCategories: [
      "Bedding",
      "Bedding Basics",
      "Carpets & Rugs",
      "Curtains & Drapes",
      "Cushion",
      "Kids & Baby Bedding",
    ],
  },
  {
    mainCategory: "Beauty & Personal Care",
    minorCategories: [
      "Baby Care",
      "Baby Supplies",
      "Beauty Equipment",
      "Body Art",
      "Breast Care",
      "False Eyelashes & Tools",
    ],
  },
  {
    mainCategory: "Health & Medical",
    minorCategories: [
      "Medical Mask,Medical Protective Clothing...",
      "Health Care Products",
      "Professional Medical Devices",
      "Extract",
      "Phramaceutical",
      "Medical Consumables",
    ],
  },
  {
    mainCategory: "Packaging & Printing",
    minorCategories: [
      "Adhesive Tape,Film,Paper",
      "Biodegradable Packaging",
      "Glass Packaging",
      "Logistic Packaging",
      "Metal Packaging",
      "Other Packaging & Printing Products",
    ],
  },
  {
    mainCategory: "Office & School Supplies",
    minorCategories: [
      "Art Supplies",
      "Badge Holder & Accessories",
      "Board",
      "Board Eraser",
      "Book Cover",
      "Books",
    ],
  },
  {
    mainCategory: "Electrical Equipment & Supplies",
    minorCategories: [
      "Batteries",
      "Connectors & Terminals",
      "Electrical Instrument",
      "Electrical Supplies",
      "Generators",
      "Industial Controls",
    ],
  },
  {
    mainCategory: "Tools & Hardware",
    minorCategories: [
      "Abrasives",
      "Drill Bits",
      "Fasterners",
      "Hand Tools",
      "Hardware",
      "Hydraulic Tools",
    ],
  },
  {
    mainCategory: "Security & Protection",
    minorCategories: [
      "Access Control System & Products",
      "Alarms",
      "IoY Solutions & Software",
      "Locks & Keys",
      "Othe Security & protection Products",
    ],
  },
  {
    mainCategory: "Fabrication Service",
    minorCategories: [
      "Casting Services",
      "Forging Services",
      "Machining Services",
      "Moulds",
      "Other Fabrication Services",
      "Sheet Metal Fabrication",
    ],
  },
  {
    mainCategory: "Electrical Equipment & Supplies",
    minorCategories: [
      "Batteries",
      "Connectors & Terminals",
      "Electrical Instruments",
      "Electrical Supplies",
      "Generators",
      "Industrial Controls",
    ],
  },
  {
    mainCategory: "Electronic Components Telecommunications",
    minorCategories: ["Passive Components", "Electonic Signs", "EL Products"],
  },
  {
    mainCategory: "Sports & Entertainment",
    minorCategories: [
      "Amusement Park",
      "Artificial Grass & Sports Flooring",
      "Boats & Ships",
      "Cycling",
      "Exercise Rehabilitation",
      "Fitness & Body Building",
    ],
  },
  {
    mainCategory: "Toys & Hobbies",
    minorCategories: [
      "Action & Toy Figures",
      "Arts, Crafts & DIY Toys",
      "Baby & Toddles Toys",
      "Ballons",
      "Classic Toys",
    ],
  },
  {
    mainCategory: "Gifts & Crafts",
    minorCategories: [
      "Crafts",
      "Festive & Party Supplies",
      "Key Chains",
      "Candle Holders",
      "Flags,Banners & Accessories",
      "Stickers",
    ],
  },
  {
    mainCategory: "Luggage,Bags & Cases",
    minorCategories: [
      "Backpacks",
      "Bag & Luggage Making Materials",
      "Bag Parts & Accessories",
      "Briefcases",
    ],
  },
  {
    mainCategory: "Shoes & Accessories",
    minorCategories: [
      "Functional Shoes",
      "kids Shoes",
      "Men Shoes",
      "Other Shoes",
      "Outdoor Shoes",
      "Shoe Care & Services",
    ],
  },
  {
    mainCategory: "Minerals & Metallurgy",
    minorCategories: [
      "Alloy Steel",
      "Carbon Stell",
      "Iron & iron Products",
      "Metal & Metal Products",
      "Non-ferrous Metal",
      "Stainless Stell",
    ],
  },
  {
    mainCategory: "Chemicals",
    minorCategories: [
      "Adhesive & Sealants",
      "Admixture & Additives",
      "Agrochemicals",
      "Basic Organic Chemcicals",
      "Biological Chemicla Products",
      "Catalysts & Chemical Auxiliary Agents",
    ],
  },
  {
    mainCategory: "Rubber & Plastics",
    minorCategories: [
      "Plastics Products",
      "Plastic Raw Materials",
      "Rubber Products",
      "Plastic Raw Materials",
      "Recycled Plastic",
      "Recycled Rubber",
    ],
  },
  {
    mainCategory: "Agriculture",
    minorCategories: [
      "Agricultural Equipment",
      "Agriculture Waste",
      "Animal Feed",
      "Animal Products",
      "Beans",
      "Fresh Fruit",
    ],
  },
  {
    mainCategory: "Food & Beverage",
    minorCategories: [
      "Baby Food",
      "Baked Products",
      "Bean Goods",
      "Beverage",
      "Canned Food",
    ],
  },
  {
    mainCategory: "Commercial Service Equipment",
    minorCategories: [
      "Advertising equipment",
      "Commercial Robot",
      "Commercial Laundry Equipment",
      "Digital Signage",
      "Financial Equipment",
      "Funeral Supplies",
    ],
  },
  {
    mainCategory: "Business Services",
    minorCategories: [
      "Advertising",
      "Agency Services",
      "Assurance Services",
      "Auction",
      "Brokerage,Intermediary Service",
      "Bussiness Travel Services",
    ],
  },
  {
    mainCategory: "Energy",
    minorCategories: [
      "Petrochemical Products",
      "Charcoal",
      "Wood Pellers",
      "Biogas",
      "Industrial Fuel",
      "Biogas",
    ],
  },
  {
    mainCategory: "Environment",
    minorCategories: [
      "Other Environmental products",
      "Other Excess Inventory",
      "Recycling",
      "Sewer",
    ],
  },
];
const products =[
  {
    "name": "Electronic Puppy Robot",
    "image": "/toy.png",
    "price": {"maximum":12779, "minimum":7996},
    "importFee": 100,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 1,
    "customization": ["customized packaging(2)", "Graphic customization(2)"],
    "productDetails": [
      { "Product name": "Electronic Puppy Robot" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "toys"
  },
  {
    "name": "Dogs and Cats",
    "image": "/dogCat.jpg",
    "price": {"maximum":12779, "minimum":4036},
    "importFee": 90,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 5,
    "customization": [
      "customized packaging(1 dog or 1 cat)",
      "Graphic customization(5 cats or 5 dogs)"
    ],
    "productDetails": [
      { "Product name": "Dogs and Cats" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "pets"
  },

  {
    "name": "marvel Books",
    "image": "/book1.png",
    "price": {"maximum":379, "minimum":1296},
    "importFee": 80,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 15,
    "customization": [
      "customized packaging(25 books)",
      "Graphic customization(15 books)"
    ],
    "productDetails": [
      { "Product name": "Marvel Books" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "books"
  },
  {
    "name": "Beauty and Make Up tools",
    "image": "/makeUp.jpg",
    "price": {"maximum":10379, "minimum":1296},
    "importFee": 480,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 15,
    "customization": [
      "customized packaging(20 Accessories)",
      "Graphic customization(15 accessories)"
    ],
    "productDetails": [
      { "Product name": "Beauty and Make Up tools" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Jeans package",
    "image": "/clothes1.png",
    "price": {"maximum":80678, "minimum":12396},
    "importFee": 120,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": "whole package",
    "customization": [
      "customized packaging(3 packaes)",
      "Graphic customization(1 package)"
    ],
    "productDetails": [
      { "Product name": "Jeans package" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Iron saucepans",
    "image": "/utensils.jpg",
    "price": {"maximum":479,"minimum":96},
    "importFee": 200,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(10 sets)",
      "Graphic customization(5 sets)"
    ],
    "productDetails": [
      { "Product name": "Iron saucepans" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "kitchenTools"
  },
  {
    "name": "Cats feeders",
    "image": "/petDish.jpg",
    "price": {"maximum":28779, "minimum":4096},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(5 feeders)",
      "Graphic customization(2 feeders)"
    ],
    "productDetails": [
      { "Product name": "Cats feeders" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "homeTools"
  },
  {
    "name": "Wireless Keyboards",
    "image": "/keyboards.png",
    "price": {"maximum":8500,"minimum": 105},
    "importFee": 180,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 keyboards)",
      "Graphic customization(1 keyboard)"
    ],
    "productDetails": [
      { "Product name": "Wireless Keyboards" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Digne Doors",
    "image": "/doors.jpg",
    "price": {"maximum":100787, "minimum":12067},
    "importFee": 680,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 doors)",
      "Graphic customization(1 door)"
    ],
    "productDetails": [
      { "Product name": "Digne Doors" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Probook Computers",
    "image": "/tech.png",
    "price": {"maximum":800550, "minimum":10596},
    "importFee": 255,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 computers)",
      "Graphic customization(1 computers)"
    ],
    "productDetails": [
      { "Product name": "Probook Computers" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "computers"
  },
  {
    "name": "Kibble Pet food",
    "image": "/feeds.jpg",
    "price": {"maximum":4550,"minimum": 896},
    "importFee": 295,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(30 packets)",
      "Graphic customization(15 packets)"
    ],
    "productDetails": [
      { "Product name": "Kibble Pet food" },
      { "Manufacturer": "Pet Care Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pet Care company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "pets"
  },

  {
    "name": "Gaming Screens",
    "image": "/game2.png",
    "price": {"maximum":75779, "minimum":9496},
    "importFee": 290,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(4 Screens)",
      "Graphic customization(2 Screens)"
    ],
    "productDetails": [
      { "Product name": "Cats feeders" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "movies"
  },
  {
    "name": "stereao Headsets",
    "image": "/headsets.png",
    "price": {"maximum":779,"minimum": 106},
    "importFee": 220,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": ["customized packaging(3)", "Graphic customization(1)"],
    "productDetails": [
      { "Product name": "stereao Headsets" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Glasses",
    "image": "/glasses.png",
    "price": {"maximum":11779,"minimum": 156},
    "importFee": 90,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": ["customized packaging(0)", "Graphic customization(1)"],
    "productDetails": [
      { "Product name": "Glasses" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Cartoon Toys",
    "image": "/toys.png",
    "price": {"maximum":13779,"minimum": 256},
    "importFee": 390,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 toys)",
      "Graphic customization(2 toys)"
    ],
    "productDetails": [
      { "Product name": "Cartoon Toys" },
      { "Manufacturer": "Pico Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Pico company" },
      { "Location": "Germany" },
      { "Other Products": "AI Speakers" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "toys"
  },
  {
    "name": "Akarabo Biscuits",
    "image": "/biscuits.png",
    "price": {"maximum":2900,"minimum":620},
    "importFee": 120,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(20 packets)",
      "Graphic customization(10 packets)"
    ],
    "productDetails": [
      { "Product name": "Akarabo Biscuits" },
      { "Manufacturer": "Sina Gerald Enterprise Urwibutso" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Sina Gerald Enterprise Urwibutso" },
      { "Location": "Rwanda" },
      { "Other Products": "Agashya Juice" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "food"
  },
  {
    "name": "Agashya Juice",
    "image": "/bottles.png",
    "price": {"maximum":3900,"minimum": 766},
    "importFee": 170,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(20 bottles)",
      "Graphic customization(10 bottles)"
    ],
    "productDetails": [
      { "Product name": "Agashya Juice" },
      { "Manufacturer": "Sina Gerald Enterprise Urwibutso" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Sina Gerald Enterprise Urwibutso" },
      { "Location": "Rwanda" },
      { "Other Products": "Akandi Water" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "food"
  },
  {
    "name": "Markkon Shirts",
    "image": "/shirt.png",
    "price": {"maximum":12900, "minimum":2066},
    "importFee": 230,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 Shirts)",
      "Graphic customization(1 shirt)"
    ],
    "productDetails": [
      { "Product name": "Markkon Shirts" },
      { "Manufacturer": "Utexrwa Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Utexrwa Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Cotton Bags",
    "image": "/bag.png",
    "price": {"maximum":13900, "minimum":2466},
    "importFee": 330,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(5 bags)",
      "Graphic customization(2 bags)"
    ],
    "productDetails": [
      { "Product name": "Cotton Bags" },
      { "Manufacturer": "Utexrwa Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Utexrwa Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "PS5",
    "image": "/game1.png",
    "price": {"maximum":73900, "minimum":8466},
    "importFee": 520,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 sets)",
      "Graphic customization(1 set)"
    ],
    "productDetails": [
      { "Product name": "PS5" },
      { "Manufacturer": "Sonny Interactive Entertainment" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Sonny Interactive Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "toys"
  },
  {
    "name": "Virtual Gaming Accessories",
    "image": "/game3.png",
    "price": {"maximum":65900, "minimum":7276},
    "importFee": 450,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 sets)",
      "Graphic customization(1 set)"
    ],
    "productDetails": [
      { "Product name": "Virtual Gaming Accessories" },
      { "Manufacturer": "Sonny Interactive Entertainment" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "White and Blue" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Sonny Interactive Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "toys"
  },
  {
    "name": "Xbox bluetooth Game Console",
    "image": "/game4.png",
    "price": {"maximum":55900, "minimum":6076},
    "importFee": 410,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 sets)",
      "Graphic customization(1 set)"
    ],
    "productDetails": [
      { "Product name": "Xbox bluetooth Game Console" },
      { "Manufacturer": "Sonny Interactive Entertainment" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Sonny Interactive Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "toys"
  },
  {
    "name": "leisure kit",
    "image": "/clothes2.png",
    "price": {"maximum":15900, "minimum":1806},
    "importFee": 230,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 sets)",
      "Graphic customization(1 set)"
    ],
    "productDetails": [
      { "Product name": "Leisure kit" },
      { "Manufacturer": "Nike Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Nike Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Fancy Blouse",
    "image": "/clothes3.png",
    "price": {"maximum":20900, "minimum":2556},
    "importFee": 280,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 blouses)",
      "Graphic customization(1 blouse)"
    ],
    "productDetails": [
      { "Product name": "Fancy blouse" },
      { "Manufacturer": "Nike Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Nike Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Lebron Sports Shoes",
    "image": "/most1.png",
    "price": {"maximum":2600, "minimum":3660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(2 pairs)"
    ],
    "productDetails": [
      { "Product name": "Lebron Sports Shoes" },
      { "Manufacturer": "L23 Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "L23 Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Trip fancy Shoes",
    "image": "/nikeShoes2.png",
    "price": {"maximum":1600, "minimum":2660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(2 pairs)"
    ],
    "productDetails": [
      { "Product name": "Trip fancy Shoes" },
      { "Manufacturer": "Nike Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Nike Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Ceremony fancy Shoes",
    "image": "/nikeShoes1.png",
    "price": {"maximum":3600, "minimum":4660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(2 pairs)"
    ],
    "productDetails": [
      { "Product name": "Ceremony fancy Shoes" },
      { "Manufacturer": "Nike Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Nike Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Smooth HP Computers ",
    "image": "/hp1.png",
    "price": {"maximum":3600, "minimum":4660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(2 pairs)"
    ],
    "productDetails": [
      { "Product name": "Smooth HP Computers" },
      { "Manufacturer": "HP Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "HP Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "computers"
  },
  {
    "name": "Ruskin Bond Story ",
    "image": "/book3.png",
    "price": {"maximum":2300, "minimum":2560},
    "importFee": 260,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(20 books)",
      "Graphic customization(10 books)"
    ],
    "productDetails": [
      { "Product name": "Ruskin Bond Story" },
      { "Manufacturer": "Disney Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Disney Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "books"
  },

  {
    "name": "HP Computers ",
    "image": "/hp2.png",
    "price": {"maximum":3600, "minimum":4660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(2 pairs)"
    ],
    "productDetails": [
      { "Product name": "HP Computers" },
      { "Manufacturer": "HP Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "HP Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "computers"
  },
  {
    "name": "Game Consoles ",
    "image": "/gameConsoles.png",
    "price": {"maximum":3600, "minimum":4660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(2 pairs)"
    ],
    "productDetails": [
      { "Product name": "Game Consoles" },
      { "Manufacturer": "XBOX Company Ltd" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "XBOX Company Ltd" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Pi Phones ",
    "image": "/tesla1.png",
    "price": {"maximum":6500, "minimum":7660},
    "importFee": 750,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 phones)",
      "Graphic customization(1 phone)"
    ],
    "productDetails": [
      { "Product name": "Pi Phones" },
      { "Manufacturer": "Tesla Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Tesla Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Pi Phones Smooth ",
    "image": "/tesla2.png",
    "price": {"maximum":6500, "minimum":7660},
    "importFee": 750,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(2 phones)",
      "Graphic customization(1 phone)"
    ],
    "productDetails": [
      { "Product name": "Pi Phones" },
      { "Manufacturer": "Tesla Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Tesla Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Virtual Viewers ",
    "image": "/virtualViewer.png",
    "price": {"maximum":7500, "minimum":8660},
    "importFee": 750,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": ["customized packaging(2)", "Graphic customization(1)"],
    "productDetails": [
      { "Product name": "Virtual Viewers" },
      { "Manufacturer": "EA Sports Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "EA Sports Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "Rolex Watches ",
    "image": "/rolex.png",
    "price": {"maximum":1300, "minimum":1660},
    "importFee": 750,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 Watches)",
      "Graphic customization(1 Watch)"
    ],
    "productDetails": [
      { "Product name": "Golden Rolex Watches" },
      { "Manufacturer": "Rolex Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Rolex Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  },
  {
    "name": "Toy Story ",
    "image": "/book2.png",
    "price": {"maximum":2300, "minimum":2560},
    "importFee": 220,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(20 books)",
      "Graphic customization(10 books)"
    ],
    "productDetails": [
      { "Product name": "Toy Story" },
      { "Manufacturer": "Disney Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Disney Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "books"
  },

  {
    "name": "Earpods ",
    "image": "/most4.png",
    "price": {"maximum":1300, "minimum":1660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": [
      "customized packaging(3 pairs)",
      "Graphic customization(1 pair)"
    ],
    "productDetails": [
      { "Product name": "Earpods" },
      { "Manufacturer": "Aplle Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Apple Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "electronics"
  },
  {
    "name": "High Resolution Screens ",
    "image": "/most3.png",
    "price": {"maximum":8300, "minimum":9660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": ["customized packaging(1)", "Graphic customization(1)"],
    "productDetails": [
      { "Product name": "High Resolution Screens" },
      { "Manufacturer": "Sonny  Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Sonny Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "movies"
  },
  {
    "name": "Golden Rolex Watches",
    "image": "/most2.png",
    "price": {"maximum":8300, "minimum":9660},
    "importFee": 350,
    "depositLocation": "Kigali",
    "amount": 1,
    "customizationNumber": 25000,
    "customization": ["customized packaging(1)", "Graphic customization(1)"],
    "productDetails": [
      { "Product name": "Golden Rolex Watches" },
      { "Manufacturer": "Rolex Company" },
      { "Functionality": "Uses electricity(rechargable,use of dry cells)" },
      { "Colors": "Red and White" },
      { "Origin": "Germany" },
      { "Supplier": "Interpol Transport" },
      { "Quality Checked by": "Germany Standard Board" }
    ],
    "companyDetails": [
      { "Company name": "Rolex Company" },
      { "Location": "Rwanda" },
      { "Other Products": "Made In Rwanda Shoes" },
      { "Partnership": "Yokohama Company Ltd" },
      { "Industrial activities": "Toys Manufacturing" },
      { "Contact Info": "picoCompany@gmail.com" }
    ],
    "category": "clothes"
  }
]

module.exports = { categoriesContent, products };
