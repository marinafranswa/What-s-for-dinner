var recipes = [
  {
    title: "Chicken Tikka Masala",
    img: "./images/tikka-masala.avif",
    subTitle: "Rich and creamy Indian curry with tender chicken pieces",
    rating: 4.7,
    reviews: 389,
    level: "Intermediate",
    kitchen: "Asian",
    prepTime: 20,
    serving: 4,
    cookTime: 30,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutrition: {
      calories: "450 Kcal",
      carbohydrates: "24g",
      fiber: "4g",
      protein: "38g",
      fat: "22g",
      sodium: "760mg",
    },
    chefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    title: "Teriyaki Chicken Bowl",
    img: "./images/teriyaki.avif",
    subTitle: "Sweet and savory chicken over rice with vegetables",
    rating: 4.7,
    reviews: 367,
    level: "Easy",
    kitchen: "Asian",
    prepTime: 15,
    serving: 2,
    cookTime: 20,
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    nutrition: {
      calories: "540 Kcal",
      carbohydrates: "58g",
      fiber: "4g",
      protein: "42g",
      fat: "14g",
      sodium: "1240mg",
    },
    chefTips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    title: "Margherita Pizza",
    img: "./images/pizza.avif",
    subTitle: "Classic Italian pizza with fresh mozzarella and basil",
    rating: 4.9,
    reviews: 512,
    level: "Intermediate",
    kitchen: "Italian",
    prepTime: 90,
    serving: 2,
    cookTime: 12,
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutrition: {
      calories: "580 Kcal",
      carbohydrates: "68g",
      fiber: "4g",
      protein: "24g",
      fat: "22g",
      sodium: "920mg",
    },
    chefTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    title: "Caesar Salad",
    img: "./images/caeser-salad.avif",
    subTitle: "Classic salad with crispy romaine and creamy dressing",
    rating: 4.4,
    reviews: 198,
    level: "Easy",
    kitchen: "Mediterranean",
    prepTime: 15,
    serving: 2,
    cookTime: 0,
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dres",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    nutrition: {
      calories: "320 Kcal",
      carbohydrates: "18g",
      fiber: "3g",
      protein: "12g",
      fat: "22g",
      sodium: "680mg",
    },
    chefTips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    title: "Mediterranean Quinoa Bowl",
    img: "./images/quinoa.avif",
    subTitle: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    rating: 4.5,
    reviews: 156,
    level: "Easy",
    kitchen: "Mediterranean",
    prepTime: 20,
    serving: 2,
    cookTime: 35,
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutrition: {
      calories: "480 Kcal",
      carbohydrates: "58g",
      fiber: "10g",
      protein: "18g",
      fat: "20g",
      sodium: "540mg",
    },
    chefTips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
  {
    title: "BBQ Pulled Pork",
    img: "./images/pulled-pork.avif",
    subTitle: "Slow-cooked tender pork in smoky barbecue sauce",
    rating: 4.7,
    reviews: 412,
    level: "Easy",
    kitchen: "American",
    prepTime: 15,
    serving: 4,
    cookTime: 240,
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    nutrition: {
      calories: "620 Kcal",
      carbohydrates: "52g",
      fiber: "3g",
      protein: "48g",
      fat: "22g",
      sodium: "1180mg",
    },
    chefTips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    title: "Vegetable Curry",
    img: "../images/vegi-curry.avif",
    subTitle: "Hearty vegetarian curry with coconut milk",
    rating: 4.6,
    reviews: 289,
    level: "Easy",
    kitchen: "Asian",
    prepTime: 20,
    serving: 4,
    cookTime: 30,
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    nutrition: {
      calories: "380 Kcal",
      carbohydrates: "48g",
      fiber: "12g",
      protein: "14g",
      fat: "16g",
      sodium: "480mg",
    },
    chefTips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },
  {
    title: "Classic Beef Burger",
    img: "./images/burger.avif",
    subTitle: "Juicy homemade burger with all the fixings",
    rating: 4.6,
    reviews: 421,
    level: "Easy",
    kitchen: "American",
    prepTime: 15,
    serving: 4,
    cookTime: 20,
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutrition: {
      calories: "650 Kcal",
      carbohydrates: "42g",
      fiber: "2g",
      protein: "38g",
      fat: "35g",
      sodium: "920mg",
    },
    chefTips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    title: "Beef Tacos",
    img: "../images/beef-tacos.avif",
    subTitle: "Flavorful Mexican tacos with seasoned ground beef",
    rating: 4.6,
    reviews: 278,
    level: "Easy",
    kitchen: "American",
    prepTime: 15,
    serving: 4,
    cookTime: 20,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    nutrition: {
      calories: "420 Kcal",
      carbohydrates: "32g",
      fiber: "4g",
      protein: "26g",
      fat: "20g",
      sodium: "780mg",
    },
    chefTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    title: "Caprese Sandwich",
    img: "../images/caprese.avif",
    subTitle: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    rating: 4.5,
    reviews: 189,
    level: "Easy",
    kitchen: "Italian",
    prepTime: 10,
    serving: 2,
    cookTime: 5,
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    nutrition: {
      calories: "480 Kcal",
      carbohydrates: "48g",
      fiber: "3g",
      protein: "22g",
      fat: "22g",
      sodium: "680mg",
    },
    chefTips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
  {
    title: "Greek Moussaka",
    img: "../images/greek.avif",
    subTitle: "Traditional layered eggplant casserole with lamb",
    rating: 4.8,
    reviews: 234,
    level: "Intermediate",
    kitchen: "Mediterranean",
    prepTime: 30,
    serving: 4,
    cookTime: 60,
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],
    nutrition: {
      calories: "580 Kcal",
      carbohydrates: "32g",
      fiber: "8g",
      protein: "36g",
      fat: "32g",
      sodium: "820mg",
    },
    chefTips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },
  {
    title: "Shrimp Scampi",
    img: "../images/shrimp.avif",
    subTitle: "Garlicky shrimp in white wine butter sauce",
    rating: 4.8,
    reviews: 356,
    level: "Easy",
    kitchen: "Seafood",
    prepTime: 10,
    serving: 2,
    cookTime: 15,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      calories: "520 Kcal",
      carbohydrates: "54g",
      fiber: "3g",
      protein: "36g",
      fat: "18g",
      sodium: "620mg",
    },
    chefTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    title: "Honey Garlic Salmon",
    img: "./images/salamon.avif",
    subTitle: "Pan-seared salmon with a sweet and savory glaze",
    rating: 4.9,
    reviews: 187,
    level: "Easy",
    kitchen: "Seafood",
    prepTime: 10,
    serving: 2,
    cookTime: 15,
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels and season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan and cook for 4–5 minutes until golden.",
      "Flip salmon and pour the honey garlic sauce over the top, cooking for another 4–5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: "380 Kcal",
      carbohydrates: "28g",
      fiber: "0g",
      protein: "35g",
      fat: "14g",
      sodium: "720mg",
    },
    chefTips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
];
var currentIndex = Math.floor(Math.random() * recipes.length);
function getRandomRecipe() {
  currentIndex = Math.floor(Math.random() * recipes.length);
  showRecipe();
}
function showRecipe() {
  var recipe = recipes[currentIndex];
  var ingredientsList = ``;
  for (var i = 1; i < recipe.ingredients.length; i++) {
    ingredientsList += `<li class="border-0 py-2 d-flex align-items-center gap-2">
                        <div
                          class="number d-flex justify-content-center align-items-center text-white fw-bold rounded-4 p-4 fs-5"
                        >${i}</div>${recipe.ingredients[i]}</li>`;
  }
  var instructionsList = ``;
  for (var i = 1; i < recipe.instructions.length; i++) {
    instructionsList += `<li class="border-0 py-2 d-flex align-items-center gap-2">
                        <div
                          class="number d-flex justify-content-center align-items-center text-white fw-bold rounded-4 p-4 fs-5"
                        >
                         ${i}
                        </div>
                     ${recipe.instructions[i]}
                      </li> `;
  }
  var chefTipsList = ``;
  for (var i = 0; i < recipe.chefTips.length; i++) {
    chefTipsList += `<div class="tip-box rounded-3 d-flex align-items-center p-3 my-3">
                      <div
                        class="tip-icon rounded-5 small-text me-3 d-flex align-items-center justify-content-center"
                      >
                        <i class="fa-solid fa-check text-white"></i>
                      </div>
                      <p class="mb-0 fw-medium">
                       ${recipe.chefTips[i]}
                      </p>
                    </div>`;
  }
  var warning = ``;

  if (recipe.prepTime >= 30) {
    //  console.log("hello");
    warning = `     <div class="red-box rounded-3 d-flex align-items-center p-3 my-2">
                      <div
                        class="me-3 d-flex align-items-center justify-content-center"
                      >
                        <i class="fa-solid fs-5 fa-warning"></i>
                      </div>
                     <div class="d-flex flex-column justify-content-center">
                      <p class="title-box mb-0 fw-semibold">Extended Preparation Time</p>
                      <p class="small-text">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                     </div>
                    </div>`;
  }

  var cartona = `<div
          class="d-flex flex-column flex-lg-row card border-0 rounded-5"
        >
          <div class="col-12 col-lg-5">
            <div
              class="rounded-start-5 position-relative w-100 h-100 overflow-hidden"
            >
              <img
                src="${recipe.img}"
                class="d-block w-100 h-100 object-fit-cover"
              />
              <div
                class="bill position-absolute shadow bg-white rounded-5 px-3 py-2"
              >
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fa-solid fa-star" style="color: gold"></i>
                  <span class="fw-semibold text-dark" id="rating">${recipe.rating}</span>
                  <span class="text-secondary ms-1" id="reviews"
                    >(${recipe.reviews} reviews)</span
                  >
                </div>
              </div>
              <div
                class="info-box position-absolute shadow bg-white rounded-4 p-4"
              >
                <div class="d-flex justify-content-around gap-2 text-center">
                  <div>
                    <i
                      class="fa-solid fa-clock fs-4"
                      style="color: #ff6900"
                    ></i>
                    <p class="text-secondary mt-2 mb-0">Prep Time</p>
                    <p class="fw-bold small-text text-dark">${recipe.prepTime} min</p>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-fire-burner fs-4"
                      style="color: #fb2c36"
                    ></i>
                    <p class="text-secondary mt-2 mb-0">Cook Time</p>
                    <p class="fw-bold small-text text-dark">${recipe.cookTime} min</p>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-users fs-4"
                      style="color: #2b7fff"
                    ></i>
                    <p class="text-secondary mt-2 mb-0">Servings</p>
                    <p class="fw-bold small-text text-dark">${recipe.serving} people</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 h-100 overflow-y-auto">
            <div class="bg-white rounded-end-5 px-5 mt-5">
              <span class="pill-green rounded-5 py-1 px-3 fw-semibold"
                >${recipe.level}</span
              >
              <span class="pill-blue rounded-5 py-1 px-3 fw-semibold ms-2"
                >${recipe.kitchen}</span
              >
              <div class="d-flex flex-row align-items-center">
                <div class="col-10">
                  <h2 class="fw-bold mt-3">${recipe.title}</h2>
                  <p class="text-secondary">
                    ${recipe.subTitle}
                  </p>
                </div>
                <div class="col-2">
                  <div
                    class="d-flex align-items-center justify-content-around gap-1"
                  >
                    <button class="btn orange-btn rounded-3">
                      <i class="fa-solid fa-bookmark"></i>
                    </button>

                    <button class="btn orange-btn rounded-3">
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
             ${warning}
              <div>
                <ul
                  class="nav nav-underline border-bottom mb-3 d-flex justify-content-center gap-5 align-items-center"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active active-tab tab-link"
                      data-bs-toggle="tab"
                      href="#ingredients"
                    >
                      <i class="fa-solid fa-list-check"></i> Ingredients
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link tab-link"
                      data-bs-toggle="tab"
                      href="#instructions"
                    >
                      <i class="fa-solid fa-book-open"></i> Instructions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link tab-link"
                      data-bs-toggle="tab"
                      href="#nutrition"
                    >
                      <i class="fa-solid fa-chart-pie"></i> Nutrition
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link tab-link"
                      data-bs-toggle="tab"
                      href="#tips"
                    >
                      <i class="fa-solid fa-lightbulb"></i> Chef's Tips
                    </a>
                  </li>
                </ul>
                <div class="tab-content w-100">
                  <div class="tab-pane fade show active" id="ingredients">
                    <ul
                      class="list-bg overflow-y-scroll px-4 py-2 border-0 mt-2 rounded-4"
                    >
                      ${ingredientsList}
                    </ul>
                  </div>
                  <div class="tab-pane list-bg-2 fade" id="instructions">
                    <ul
                      class="list-bg-2 overflow-y-scroll px-4 py-2 border-0 mt-2 rounded-2"
                    >
                     ${instructionsList}
                    </ul>
                  </div>
                  <div class="tab-pane list-bg-2 overflow-y-scroll fade" id="nutrition">
                    <div class="row g-3 mb-3">
                      <div class="col-md-6">
                        <div
                          class="nutri-box d-flex align-items-center justify-content-between p-3 rounded-4"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="icon-wrap d-flex justify-content-center align-items-center orange-div me-3 rounded-3"
                            >
                              <i class="fa-solid fa-fire"></i>
                            </div>
                            <p class="mb-0 text-dark fw-semibold">Calories</p>
                          </div>

                          <h5 class="fw-bold mb-0">${recipe.nutrition.calories}</h5>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div
                          class="nutri-box d-flex align-items-center justify-content-between p-3 rounded-4"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="icon-wrap d-flex justify-content-center align-items-center blue-div me-3 rounded-3"
                            >
                              <i class="fa-solid fa-dumbbell"></i>
                            </div>
                            <p class="mb-0 text-dark fw-semibold">Protein</p>
                          </div>

                          <h5 class="fw-bold mb-0">${recipe.nutrition.protein}</h5>
                        </div>
                      </div>
                    </div>
                    <div class="row g-3 mb-3">
                      <div class="col-md-6">
                        <div
                          class="nutri-box d-flex align-items-center justify-content-between p-3 rounded-4"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="icon-wrap d-flex justify-content-center align-items-center yellow-div me-3 rounded-3"
                            >
                              <i class="fa-solid fa-wheat-awn"></i>
                            </div>
                            <p class="mb-0 text-dark fw-semibold">
                              Carbohydrates
                            </p>
                          </div>
                          <h5 class="fw-bold mb-0">${recipe.nutrition.carbohydrates}</h5>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="nutri-box d-flex align-items-center justify-content-between p-3 rounded-4"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="icon-wrap d-flex justify-content-center align-items-center red-div me-3 rounded-3"
                            >
                              <i class="fa-solid fa-droplet"></i>
                            </div>
                            <p class="mb-0 text-dark fw-semibold">Fat</p>
                          </div>
                          <h5 class="fw-bold mb-0">${recipe.nutrition.fat}</h5>
                        </div>
                      </div>
                    </div>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <div
                          class="nutri-box d-flex align-items-center justify-content-between p-3 rounded-4"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="icon-wrap d-flex justify-content-center align-items-center green-div me-3 rounded-3"
                            >
                              <i class="fa-solid fa-seedling"></i>
                            </div>
                            <p class="mb-0 text-dark fw-semibold">Fiber</p>
                          </div>
                          <h5 class="fw-bold mb-0">${recipe.nutrition.fiber}</h5>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="nutri-box d-flex align-items-center justify-content-between p-3 rounded-4"
                        >
                          <div class="d-flex align-items-center">
                            <div
                              class="icon-wrap d-flex justify-content-center align-items-center pink-div me-3 rounded-3"
                            >
                              <i class="fa-solid fa-cube"></i>
                            </div>
                            <p class="mb-0 text-dark fw-semibold">Sodium</p>
                          </div>
                          <h5 class="fw-bold mb-0">${recipe.nutrition.sodium}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane list-bg-2 fade" id="tips">
                   ${chefTipsList}          
                  </div>
                </div>
              </div>
              <div class='line w-100'></div>
              <button class="btn change-btn py-3 px-5 text-white rounded-4 fw-semibold my-4" onclick="getRandomRecipe()">
                <i class="fa-solid fa-rotate-right me-2"></i> Try Another Recipe
              </button>
            </div>
          </div>
        </div>`;

  document.getElementById("cardContainer").innerHTML = cartona;
}

showRecipe();
