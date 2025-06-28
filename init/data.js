
const sampleListings = [
  {
    title: "Oceanview Studio in Santorini",
    description: "Enjoy romantic sunsets from your private balcony in this beautiful cliffside studio.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "photo-1507525428034-b723cf961d3e"
    },
    price: 2100,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Alpine Chalet in the Rockies",
    description: "A perfect winter getaway nestled in the Rocky Mountains with ski access.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 2700,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Countryside Barn Stay",
    description: "Rustic converted barn surrounded by rolling hills and farmland.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 900,
    location: "Yorkshire",
    country: "United Kingdom"
  },
  {
    title: "Luxury Desert Camp",
    description: "Sleep under the stars in this luxurious Bedouin-style tent in the Sahara.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "photo-1507525428034-b723cf961d3e"
    },
    price: 1600,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "Overwater Bungalow in Bora Bora",
    description: "Experience tropical luxury with crystal-clear water beneath your feet.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "photo-1507525428034-b723cf961d3e"
    },
    price: 5500,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Cave House in Cappadocia",
    description: "Stay in a unique cave dwelling carved into the rock, surrounded by fairy chimneys.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 1200,
    location: "Göreme",
    country: "Turkey"
  },
  {
    title: "Urban Flat in Berlin",
    description: "Modern apartment in the heart of Berlin, perfect for culture and nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 1100,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Riverfront Cabin in Oregon",
    description: "Cozy wooden cabin with private river access and forest views.",
    image: {
      url: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f",
      filename: "photo-1473625247510-8ceb1760943f"
    },
    price: 950,
    location: "Bend",
    country: "United States"
  },
  {
    title: "Riad in Marrakech",
    description: "Authentic Moroccan experience in a beautifully restored riad with a courtyard.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 1300,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Treehouse in Oregon Forest",
    description: "Escape into nature in this elevated treehouse surrounded by evergreens.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 800,
    location: "Eugene",
    country: "United States"
  },
  {
    title: "Historic Apartment in Prague",
    description: "Charming flat in a historic building near Prague Castle and Charles Bridge.",
    image: {
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      filename: "photo-1560347876-aeef00ee58a1"
    },
    price: 1400,
    location: "Prague",
    country: "Czech Republic"
  },
  {
    title: "Jungle Retreat in Ubud",
    description: "Serene eco-villa surrounded by tropical jungle and rice paddies.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "photo-1512917774080-9991f1c4c750"
    },
    price: 1000,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Beach House in Cape Town",
    description: "Modern beach house with panoramic views of the ocean and Table Mountain.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 2400,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Cozy Flat in Kyoto",
    description: "Traditional meets modern in this stylish apartment near historic temples.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 1300,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Farmhouse in Tuscany",
    description: "Wake up to vineyard views and enjoy wine-tasting tours in the countryside.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 2000,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Loft Apartment in Barcelona",
    description: "Bright and spacious loft near the Gothic Quarter and La Rambla.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "photo-1512917774080-9991f1c4c750"
    },
    price: 1700,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Villa with Pool in Algarve",
    description: "Relax in your private villa just minutes from Portugal’s best beaches.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c"
    },
    price: 2100,
    location: "Albufeira",
    country: "Portugal"
  },
  {
    title: "Ski Cabin in the French Alps",
    description: "Charming wood cabin with fireplace and direct slope access.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "photo-1512917774080-9991f1c4c750"
    },
    price: 2900,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Boathouse in Stockholm",
    description: "Unique floating stay on a quiet canal with Scandinavian decor.",
    image: {
      url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      filename: "photo-1526778548025-fa2f459cd5c1"
    },
    price: 1800,
    location: "Stockholm",
    country: "Sweden"
  },
  ];

module.exports = { data: sampleListings };
