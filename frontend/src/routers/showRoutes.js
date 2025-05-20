export const routeDefs = [
  { path: "/", componentName: "Home" },
  { path: "/about", componentName: "About" },
  { path: "/contact", componentName: "Contact" },
  { path: "/orders", componentName: "Orders" },
  { path: "/fiction", componentName: "Fiction" },
  { path: "/nonfiction", componentName: "NonFiction" },
  { path: "/hightlights", componentName: "Highlights" },
  { path: "/login", componentName: "Login" },
  { path: "/register", componentName: "Register" },
];

routeDefs.forEach((r) => console.log(`Frontend route: ${r.path}`));
