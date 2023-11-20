type EventType = {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    price: string;
    category: "food" | "drink" | "course";
    image: string;
  };
  
  export default EventType;