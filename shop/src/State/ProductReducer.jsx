const initial = [
  {
    id: "0",
    name: "Nandu Shop",
    area: "Thane",
    start: "08/08/199",
    end: "08/09/2003",
    category: "Grocery",
  },
  {
    id: "1",
    name: "Cake Shop",
    area: "Pune",
    start: "08/08/199",
    end: "08/09/2003",
    category: "Baker",
  },
  {
    id: "2",
    name: "Nasheman ",
    area: "Mumbai suburban",
    start: "08/08/199",
    end: "08/09/2003",
    category: "Hotel",
  },
  {
    id: "3",
    name: "Ganesh",
    area: "Nashik",
    start: "08/08/199",
    end: "08/09/2003",
    category: "Stationery Shop",
  },
  {
    id: "4",
    name: "Chickne Shop",
    area: "Ahmednagar",
    start: "08/08/199",
    end: "08/09/2003",
    category: "Butcher",
  },
  {
    id: "5",
    name: "Dhaiwade Special",
    area: "Solapur",
    start: "08/08/199",
    end: "08/09/2003",
    category: "Hotel",
  },
];

export const ProductReducer = (state = { products: [...initial] }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: [...state.products, action.data],
      };
    case "EDIT":
      return {
        ...state,
        products: [...action.data],
      };
    default:
      return state;
  }
};
