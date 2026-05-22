export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  ingredients: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  discount?: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export const menuItems: MenuItem[] = [

  {
    id: "1",
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon grilled to perfection with lemon butter sauce",
    price: 1299,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 124,
    ingredients: [
      "Salmon",
      "Lemon",
      "Butter",
      "Herbs",
      "Asparagus"
    ],
    isFeatured: true,
    isPopular: true,
  },

  {
    id: "2",
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza with fresh mozzarella and basil",
    price: 749,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 89,
    ingredients: [
      "Dough",
      "Tomato Sauce",
      "Mozzarella",
      "Basil",
      "Olive Oil"
    ],
    isPopular: true,
  },

  {
    id: "3",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing and parmesan",
    price: 549,
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 67,
    ingredients: [
      "Romaine Lettuce",
      "Croutons",
      "Parmesan",
      "Caesar Dressing"
    ],
  },

  {
    id: "4",
    name: "Beef Burger",
    description:
      "Juicy beef patty with cheese, lettuce, and special sauce",
    price: 699,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 156,
    ingredients: [
      "Beef Patty",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Special Sauce",
      "Bun"
    ],
    isFeatured: true,
  },

  {
    id: "5",
    name: "Chocolate Cake",
    description:
      "Rich chocolate cake with creamy frosting",
    price: 449,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 203,
    ingredients: [
      "Chocolate",
      "Flour",
      "Eggs",
      "Sugar",
      "Butter"
    ],
    isFeatured: true,
  },

  {
    id: "6",
    name: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo pasta with grilled chicken",
    price: 849,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 98,
    ingredients: [
      "Pasta",
      "Chicken",
      "Cream",
      "Parmesan",
      "Garlic"
    ],
    isPopular: true,
  },

  {
    id: "7",
    name: "Sushi Platter",
    description:
      "Assorted fresh sushi rolls with wasabi and ginger",
    price: 1599,
    category: "Sushi",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 145,
    ingredients: [
      "Rice",
      "Fresh Fish",
      "Nori",
      "Avocado",
      "Cucumber"
    ],
    isFeatured: true,
  },

  {
    id: "8",
    name: "Steak & Fries",
    description:
      "Premium ribeye steak with crispy french fries",
    price: 1899,
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 187,
    ingredients: [
      "Ribeye Steak",
      "Potatoes",
      "Butter",
      "Garlic",
      "Herbs"
    ],
    isPopular: true,
  },

  {
    id: "9",
    name: "Greek Salad",
    description:
      "Fresh vegetables with feta cheese and olives",
    price: 499,
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 56,
    ingredients: [
      "Tomatoes",
      "Cucumber",
      "Feta Cheese",
      "Olives",
      "Onions"
    ],
  },

  {
    id: "10",
    name: "Pepperoni Pizza",
    description:
      "Classic pepperoni pizza with extra cheese",
    price: 899,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 178,
    ingredients: [
      "Dough",
      "Tomato Sauce",
      "Mozzarella",
      "Pepperoni"
    ],
  },

  {
    id: "11",
    name: "Tiramisu",
    description:
      "Classic Italian coffee-flavored dessert",
    price: 599,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 142,
    ingredients: [
      "Mascarpone",
      "Coffee",
      "Ladyfingers",
      "Cocoa",
      "Eggs"
    ],
  },

  {
    id: "12",
    name: "Lobster Tail",
    description:
      "Butter-poached lobster tail with garlic sauce",
    price: 2499,
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=500&h=500&fit=crop",
    rating: 5.0,
    reviews: 93,
    ingredients: [
      "Lobster",
      "Butter",
      "Garlic",
      "Lemon",
      "Herbs"
    ],
    isFeatured: true,
    discount: 10,
  },

];

export const categories = [
  "All",
  "Main Course",
  "Pizza",
  "Pasta",
  "Salads",
  "Burgers",
  "Seafood",
  "Sushi",
  "Desserts",
];

export const reviewsData: {
  [key: string]: Review[];
} = {

  "1": [
    {
      id: "r1",
      userName: "Sarah Johnson",
      rating: 5,
      comment:
        "Absolutely delicious! The salmon was cooked perfectly.",
      date: "2026-05-10",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },

    {
      id: "r2",
      userName: "Mike Chen",
      rating: 4,
      comment:
        "Great dish, portion size could be bigger.",
      date: "2026-05-08",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ],

  "4": [
    {
      id: "r3",
      userName: "Emily Davis",
      rating: 5,
      comment:
        "Best burger I've ever had! Will order again.",
      date: "2026-05-12",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ],

};