INSERT INTO users(name,password) VALUES();

INSERT INTO ingredients(ingredient_name) VALUES ('whole chicken');
INSERT INTO ingredients(ingredient_name) VALUES ('chicken thigh');
INSERT INTO ingredients(ingredient_name) VALUES ('chicken breast');
INSERT INTO ingredients(ingredient_name) VALUES ('eggs');
INSERT INTO ingredients(ingredient_name) VALUES ('chicken stock');
INSERT INTO ingredients(ingredient_name) VALUES ('heavy cream');
INSERT INTO ingredients(ingredient_name) VALUES ('tomato sauce');
INSERT INTO ingredients(ingredient_name) VALUES ('Bechamel(white Sauce)');
INSERT INTO ingredients(ingredient_name) VALUES ('thyme');
INSERT INTO ingredients(ingredient_name) VALUES ('taraggon');
INSERT INTO ingredients(ingredient_name) VALUES ('rosemary');
INSERT INTO ingredients(ingredient_name) VALUES ('dill');
INSERT INTO ingredients(ingredient_name) VALUES ('salmon fillet');
INSERT INTO ingredients(ingredient_name) VALUES ('sea bass fillet');
INSERT INTO ingredients(ingredient_name) VALUES ('white wine');
INSERT INTO ingredients(ingredient_name) VALUES ('red wine');
INSERT INTO ingredients(ingredient_name) VALUES ('carrots');
INSERT INTO ingredients(ingredient_name) VALUES ('onions');
INSERT INTO ingredients(ingredient_name) VALUES ('celery');
INSERT INTO ingredients(ingredient_name) VALUES ('potatoes');
INSERT INTO ingredients(ingredient_name) VALUES ('Beef Brisket');
INSERT INTO ingredients(ingredient_name) VALUES ('Beef Shank');
INSERT INTO ingredients(ingredient_name) VALUES ('Steak');
INSERT INTO ingredients(ingredient_name) VALUES ('Oxtail');
INSERT INTO ingredients(ingredient_name) VALUES ('Lamb Shank');
INSERT INTO ingredients(ingredient_name) VALUES ('Basmati Rice');
INSERT INTO ingredients(ingredient_name) VALUES ('Couscous');
INSERT INTO ingredients(ingredient_name) VALUES ('Butter');
INSERT INTO ingredients(ingredient_name) VALUES ('pasta(any)');
INSERT INTO ingredients(ingredient_name) VALUES ('bacon');


INSERT INTO recipes (title,instructions) VALUES('scrambled eggs','whisk eggs add cream and stir while cooking over medium to low heat');
INSERT INTO recipes (title,instructions) VALUES('oxtail stew','sear oxtail & aromatics til brown in pot, add red wine and cook off wine, add stock & simmer for 3hrs or til ox tail is "fall off the bone"');
INSERT INTO recipes (title,instructions) VALUES('carbonara','cook pasta and strain. sauce: seperate egg yolks, sweat onions but dont brown them, add and cook off white wine. turn off fire and slowly add in cream. slowly incorporate by folding 2-3 ladles of onion mixture into egg yolks til thickened. DO NOT REHEAT sauce or it will seperate. mix pasta into the sauce and serve');

INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('1', '4');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('1', '6');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('1', '28');

INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '25');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '5');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '7');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '9');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '11');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '16');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '17');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '18');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '19');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('2', '20');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('3', '4');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('3', '6');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('3', '15');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('3', '18');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('3', '29');
INSERT INTO ingredToRecipe(recipe_id,ingredient_id) VALUES('3', '30');
