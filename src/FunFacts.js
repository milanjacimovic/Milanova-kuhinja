import React, { useState } from 'react'
import style from './recipe.module.css'
import { useTranslation } from 'react-i18next';
import i18n from './i18next';


const Niz = () => {
    const { t, i18n } = useTranslation();
    const [randomFact, setRandomFact] = useState({})
    const gimmeFact = (niz) => {
        let random = niz[Math.floor(Math.random() * niz.length)]
        setRandomFact(random)

        return random
    }

    return (<div>
        <div onTouchStart="">
            <div className="button">
                <a href="javascript:void(0)" onClick={() => { gimmeFact(niz) }}>{t('Fun food facts.1')}</a>

            </div>
        </div>
        <div className={style.recipe}>
            <h1>{randomFact.a}</h1>
            <img style={{ width: "30%" }} src={randomFact.img} />
            <h4>{randomFact.b}</h4>

        </div>
    </div>)
}




let niz = [
    {
        "id": "1",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pound-cake-recipe.jpg",
        "a": "Pound cake got its name from its recipe",
        "b": "The early recipes of pound cake called for one pound of butter, one pound of eggs, and one pound of sugar.That’s a huge cake!"
    },
    {
        "id": "2",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/wasabi-supermarket-horseradish.jpg",
        "a": "Most supermarket wasabi is actually horseradish",
        "b": "Real wasabi is challenging to make and expensive. As an alternative, most wasabi for sale is colored horseradish with flavorings."
    },
    {
        "id": "3",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/most-expensive-pizza.jpg",
        "a": "The most expensive pizza in the world costs $12,000 dollars.",
        "b": "That’s because it takes 72 hours to make, and it can only be made in your home by 3 Italian chefs. The pizza is topped with 3 types of caviar, bufala mozzarella, lobster from Norway and Cilento, and pink Australian sea salt."
    },
    {
        "id": "4",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/ranch-dressing-fact.jpg",
        "a": "Ranch dressing is dyed.",
        "b": "One ingredient in ranch is titanium dioxide which is used to make it look whiter. It’s the same ingredient that is used in sunscreen and paint for coloring."
    },
    {
        "id": "5",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/fast-food-burger-meat.jpg",
        "a": "One fast food burger can have meat from 100 different cows.",
        "b": "It sounds like a crazy amount, but the ground beef used to make burgers, both in fast food places and grocery stores, is made of a collection of muscle tissues."
    },
    {
        "id": "6",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/fruit-shine-car-wax.jpg",
        "a": "Fruit flavored snacks shine because of car wax.",
        "b": "Yep, the same wax that is used on cars, carnauba wax, is the same type of wax that is used to give gummy candy a glossy sheen. Not sure how I feel about that!"
    },
    {
        "id": "7",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/nutmeg-hallucinogen.jpg",
        "a": "Nutmeg is a hallucinogen.",
        "b": "If you ingest nutmeg in large doses, it works like a hallucinogen due to a natural compound in it called myristicin.It has mind-altering effects if taken in large doses."
    },
    {
        "id": "8",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/crackers-holes.jpg",
        "a": "Crackers have holes in them for a reason.",
        "b": "During the baking process, if the crackers have holes in them, if prevents air bubbles from ruining the product."
    },
    {
        "id": "9",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/ketchup-medicine.jpg",
        "a": "Ketchup used to be used as a medicine.",
        "b": "Back in the early 1800’s, people thought tomatoes had medicinal qualities.One doctor claimed they could treat diarrhea and indigestion, so he made a recipe for a type of tomato ketchup which then became a pill."
    },
    {
        "id": "10",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/white-chocolate-fact.jpg",
        "a": "White chocolate isn’t chocolate.",
        "b": "Its name is deceiving, because white chocolate doesn’t have any components of regular chocolate.It’s really just a mixture of sugar, milk, vanilla, lecithin, and cocoa butter."
    },
    {
        "id": "11",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/salmon-dyed-pink.jpg",
        "a": "Farmed salmon is dyed pink.",
        "b": "Wild salmon is naturally pink because of all the shrimp they eat. Meanwhile, farm- raised salmon have a different diet, and end up being white.However, they are fed specific plant pigments to get the same hue of wild salmon."
    },
    {
        "id": "12",
        "img": "https://www.thefactsite.com/wp-content/uploads/2016/01/skittles-origins.jpg",
        "a": "The red food dye for Skittles is made from boiled beetles.",
        "b": "A common red food dye, carminic acid, is made from the crushed bodies of a beetle called the dactylopius coccus. This acid is used in maraschino cherries, strawberry and raspberry flavored candy, and lipstick."
    },
    {
        "id": "13",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/crackers-and-sugar.jpg",
        "a": "Crackers are worse for your teeth than sugar.",
        "b": "Acid is the biggest cause of tooth decay, not sugar! Crackers tend to stick to your teeth which ends up being a breeding ground for bacteria."
    },
    {
        "id": "14",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/peppers-dont-burn-mouth.jpg",
        "a": "Peppers don’t actually burn your mouth.",
        "b": "There’s a chemical in chili peppers called capsaicin that tricks your mouth to feeling like it’s being burned – that’s why spicy food hurts. The pain is all in your head!"
    },
    {
        "id": "15",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/american-cheese-facts.jpg",
        "a": "American cheese is not American.",
        "b": "Processed cheese is thought of as an American product, but it was actually invented in Switzerland. It was created by Waltz Gerber and Fritz Stettler in 1911 to lengthen the shelf-life before it was shipped overseas."
    },
    {
        "id": "16",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/russian-beer.jpg",
        "a": "Russia took a long time to classify beer as being alcoholic.",
        "b": "Until 2013, beer and other alcohol under 10% ABV was classified as a soft drink! Until then, and even still today, it was common for people to drink beer in the streets and parks as commonly as you would see soda."
    },
    {
        "id": "17",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/cheese-palte.jpg",
        "a": "Cheese is the most stolen food in the world.",
        "b": "In fact, it’s stolen so much it has its own percentage! About 4% of all cheese made around the globe ends up stolen. There’s even a black market for cheese!"
    },
    {
        "id": "18",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/hazelnuts-in-nutella.jpg",
        "a": "One in four hazelnuts end up in Nutella.",
        "b": "Nutella is so popular, 25% of all hazelnuts end up in a jar! Since they’re in such high demand, some universities are trying to grow them in labs in order to negate global shortages."
    },
    {
        "id": "19",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/corned-beef-sandwich.jpg",
        "a": "A corned beef sandwich was smuggled into space.",
        "b": "An astronaut snuck a sandwich on his spacecraft for a 6-hour mission. When he took the sandwich out in zero-gravity, it started falling apart and he had to put it away before crumbs compromised the spaceship."
    },
    {
        "id": "20",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/music-makes-you-drink-faster.jpg",
        "a": "Certain music can make you drink faster.",
        "b": "Researchers had an experiment to see how people’s drinking habits changed based on the music that was playing. Loud music seemed to make people drink more, and faster."
    },
    {
        "id": "21",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/03/cocoa-beans-currency.jpg",
        "a": "Chocolate has been used as a currency in Ancient civilizations of Mexico and South America.",
        "b": "As the Aztecs started dominating Mesoamerica, they also loved cocoa beans which couldn’t be grown in their civilization. They had to rely on the Mayans, and traded cocoa beans with them as a system of money. Chocolate isn’t the weirdest thing that’s been used as currency in the past either… potato mashers?"
    },
    {
        "id": "22",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/mcdonalds-hamburger-sales.jpg",
        "a": "McDonald’s sells 2.5 billion hamburgers every year.",
        "b": "That equates to 75 McDonald’s hamburgers sold every second, every day, or 6.5 million hamburgers each day!"
    },
    {
        "id": "23",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/peanuts-dynamite.jpg",
        "a": "You can find peanuts in dynamite.",
        "b": "Peanuts have an oil which is used as an ingredient while making glycerol, which is a main component of nitroglycerin."
    },
    {
        "id": "24",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/bottled-water-expiration.jpg",
        "a": "Expiration dates on bottled water have nothing to do with the water.",
        "b": "Water can’t expire – but the bottle it’s in can. Plastic bottles will eventually start leaking chemicals into the water. It won’t make the water harmful to drink, but it will make it taste less fresh."
    },
    {
        "id": "25",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/peanut-butter-fear.jpg",
        "a": "Some people are scared of peanut butter.",
        "b": "Getting peanut butter stuck to the roof of your mouth is annoying sure, but to have an irrational fear of it happening is next level. But there’s a phobia for everything and this common occurrence is no exception. Arachibutyrophobia is the fear of peanut butter getting stuck to the roof of your mouth!"
    },
    {
        "id": "26",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/spam-isnt-hawaiian.jpg",
        "a": "Spam wasn’t invented in Hawaii.",
        "b": "Although Hawaii consumed the most Spam per capita than any other state, it was invented in Minnesota. There’s even a spam museum in Minnesota!"
    },
    {
        "id": "27",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/honey-bee-vomit.jpg",
        "a": "Honey is bee vomit.",
        "b": "When bees collect nectar, they drink it and keep it in their “stomach.” Once they’re back at the hive, they regurgitate the nectar into the hive."
    },
    {
        "id": "28",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/three-musketeers-candy.jpg",
        "a": "The Three Musketeers doesn’t live up to its name.",
        "b": "The famous Three Musketeers candy bar originally had vanilla, strawberry, and chocolate flavors in one! However, during World War II, they changed to only chocolate due to rations."
    },
    {
        "id": "29",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/froot-loops-flavors.jpg",
        "a": "Froot Loops are all the same flavor.",
        "b": "As colorful as they are, you’d think they were flavored accordingly! But no, all Froot Loops are all the same flavor."
    },
    {
        "id": "30",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/tootsie-pop-fact.jpg",
        "a": "There’s no answer to how many licks it takes to get to the center of a tootsie pop.",
        "b": "It’s a heavily debated topic – exactly how many licks does it take to get to the center of a tootsie pop? It can take anywhere from 144 to 411 licks. However, one study conducted determined the average was 364 licks!"
    },
    {
        "id": "31",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/radishes.jpg",
        "a": "In ancient Egyptian days, radishes, onions, and garlic were given to workers as wages.",
        "b": "Radishes specifically were because they helped with infectious diseases!"
    },
    {
        "id": "32",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pufferfish-japan.jpg",
        "a": "In Japan, chefs have to train for over two years in order to qualify to serve pufferfish.",
        "b": "Pufferfish is a delicacy in Japan, but if it’s prepared wrong, it can kill the person eating it."
    },
    {
        "id": "33",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/french-fries-belgium.jpg",
        "a": "French fries originated in Belgium, not France!",
        "b": "They are only called French fries because they are French cut."
    },
    {
        "id": "34",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/twinkies-cream.jpg",
        "a": "Twinkie cream isn’t cream at all.",
        "b": "Although the inside is the best part and we’re always excited to get a solid bite of that fluffy goodness, it’s actually vegetable shortening!"
    },
    {
        "id": "35",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/strawberries-not-berries.jpg",
        "a": "Strawberries are not berries.",
        "b": "Technically, berries only have seeds on the inside, a rule which is obviously broken by strawberries!"
    },
    {
        "id": "36",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pineapples-not-pine.jpg",
        "a": "Pineapples have no relation to pine.",
        "b": "The name comes from early explorers. When they saw pineapples for the first time, they thought they looked like pine cones which is how the fruit got its name!"
    },
    {
        "id": "37",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/chocolate-chip-cookies-origins.jpg",
        "a": "No one knows the origin of chocolate chip cookies.",
        "b": "There are a few ideas of where this popular recipe came from. One suggests Ruth Wakefield, the creator of chocolate chip cookies, ran out of nuts for ice cream cookies and used chocolate instead. Others suggest chocolate chunks accidentally fell into the mixer, but the true story has never been confirmed."
    },
    {
        "id": "38",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/margherita-pizza-name-origins.jpg",
        "a": "Margherita pizza is named after a queen.",
        "b": "When King Umberto I and Queen Margherita visited Naples, they wanted a change from their fancy food and asked for pizza, which was food for the poor back then. The queen loved the mozzarella pizza so much that it ended up being named after her."
    },
    {
        "id": "39",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pasta-thomas-jefferson.jpg",
        "a": "Thomas Jefferson made pasta popular in the U.S.",
        "b": "Thomas Jefferson is responsible for bringing the first macaroni machine over to the U.S. after spending time in France. He was also the one who introduced mac and cheese to Americans!"
    },
    {
        "id": "40",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/cauliflower-colors.jpg",
        "a": "Cauliflower comes in multiple colors.",
        "b": "Although we typically only see white cauliflower, it actually has purple, orange, and green varieties. Orange and purple cauliflowers have higher antioxidants!"
    },
    {
        "id": "41",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/lima-beans-deadly.jpg",
        "a": "Lima beans are deadly.",
        "b": "Raw lima beans have lethal amounts of cyanide in them. But, if you cook them thoroughly, you’ll be just fine!"
    },
    {
        "id": "42",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/chickpeas-names.jpg",
        "a": "Chickpeas have more names than you think.",
        "b": "Chickpeas and garbanzo beans are the same thing – along with sanagali, ceci beans, chana, and bengal gram. Additionally, they come in red, black, brown, and pale yellow."
    },
    {
        "id": "43",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/popcorn-south-africa.jpg",
        "a": "South African popcorn isn’t popcorn.",
        "b": "If you visit South Africa and get a craving for popcorn – be careful! In South Africa, it’s more common for what they call popcorn, to be roasted termites and ants."
    },
    {
        "id": "44",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/vegan-wine.jpg",
        "a": "Not all wine is vegan.",
        "b": "With the main ingredient being grapes, you’d think this would be a no brainer. However, some common ingredients in wine are milk protein, egg white, gelatin, and fish bladder protein."
    },
    {
        "id": "45",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/soda-dementia.jpg",
        "a": "Sweet drinks can cause dementia.",
        "b": "It’s not quite as drastic as it originally sounds… However, studies have shown that people who drink one or more artificially sweetened drinks per day were almost three times more likely to develop dementia."
    },
    {
        "id": "46",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/nutrition-labels.jpg",
        "a": "Nutrition labels are in order.",
        "b": "If you’re reading up on the nutritional label to see if it fits into your diet, it’s organized by the ingredients that are used the most. So if you need a good power bar for the gym and you see sugar at the top of the list, it’s time to find another source of protein!"
    },
    {
        "id": "47",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/bad-eggs-float.jpg",
        "a": "Bad eggs will float.",
        "b": "If you need to test the freshness of your eggs, put them in a glass of cold water. The fresher the egg, the faster it will fall to the bottom! Any eggs that float should be thrown out."
    },
    {
        "id": "48",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/coffee-antioxdants-americans.jpg",
        "a": "Coffee is the main source of antioxidants for Americans.",
        "b": "It’s no secret Americans drink a lot of coffee, but it’s the number one source where they get their antioxidants. Antioxidants help fight aging and heart disease, but coffee doesn’t really have that many of them – we just drink so much of it! You may also like these 10 surprising health benefits of drinking coffee."
    },
    {
        "id": "49",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/ripe-cranberries-bounce.jpg",
        "a": "Ripe cranberries will bounce.",
        "b": "If you want to test how ripe your cranberries are, drop them on the ground! Cranberries are nature’s bouncy ball – even farmers use this technique to see if their cranberries are ready for shipment!"
    },
    {
        "id": "50",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/popsicles-invention.jpg",
        "a": "Popsicles were invented by accident.",
        "b": "The details are debated, but the general story is that in 1905, an 11-year-old kid left a mixture of soda and water outside in a cup overnight. It froze, and he ate it in the morning. He originally called it an “Epsicle” (his last name was Epperson). When he later had kids, they started calling it “Pop’s ‘Sicle” and the new name was born."
    },
    {
        "id": "51",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/birds-nest-soup.jpg",
        "a": "Bird saliva is a delicacy in China.",
        "b": "One expensive delicacy of China is Bird’s nest soup which is made from rare bird’s nests created from the saliva of small swiftlets. They have been used in China for cooker for over four centuries."
    },
    {
        "id": "52",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/fda-allows-insects-in-food.jpg",
        "a": "Food is allowed to contain some amount of insects.",
        "b": "By FDA standards, there’s an allowance for the level of traces of bugs could be in your food. For example, chocolate can have no more than 60 insect fragments per 100 grams. Peanut butter can’t have more than 30 insects per 100 grams."
    },
    {
        "id": "53",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/coffee-beans-for-bad-breath.jpg",
        "a": "Coffee beans can help eliminate bad breath.",
        "b": "If you chew on roasted coffee beans, it can help prevent the bacteria that cause bad breath. Drinking coffee helps too, it’s just less effective."
    },
    {
        "id": "54",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/mountain-dew-orange-juice.jpg",
        "a": "Mountain Dew contains orange juice.",
        "b": "Although it tastes like a lemon-lime soda, orange juice is third on the list of ingredients, just behind carbonated water and high fructose corn syrup."
    },
    {
        "id": "55",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/chimichanga.jpg",
        "a": "Chimichanga means “thingamajig”.",
        "b": "Considered to be Mexican food, chimichangas actually originated from Tucson, Arizona. The name was coined in the 50’s by a cook who was trying not to curse in front of kids."
    },
    {
        "id": "56",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/airplane-food-taste.jpg",
        "a": "Food tastes different when you’re flying.",
        "b": "Altitude changes your body chemistry, making certain flavors taste different than how they taste when you’re on the ground."
    },
    {
        "id": "57",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/wood-pulp-cheese.jpg",
        "a": "There’s wood pulp in shredded cheese.",
        "b": "An ingredient called “cellulose” is digestible wood pulp. It’s a filler used to keep the cheese from clumping together and is approved as safe by the FDA."
    },
    {
        "id": "58",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/bananas-dna.jpg",
        "a": "Humans DNA is 60% the same as bananas.",
        "b": "Our genes are comprised of 3 billion building blocks which are surprisingly un-unique. From this, 60% of our genes are identical to that of a banana; however the other 40% is different enough to make us who we are!"
    },
    {
        "id": "59",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/kale-fact.jpg",
        "a": "Pizza Hut used to be the nation’s biggest purchaser of kale.",
        "b": "Pizza Hut’s salad bar was popular way before kale became a trend back in the early 2010’s. They used it as a garnish for its salad bars – it wasn’t even for eating!"
    },
    {
        "id": "60",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/figs-contain-wasps.jpg",
        "a": "Figs can contain dead wasps.",
        "b": "Figs are actually inverted flowers with a unique pollination process requiring wasps instead of bees. Female wasps lay their eggs in male figs that we don’t eat, but sometimes the wasp will accidentally enter a female fig, which is a deadly mistake. The wasp dies inside and ends up decomposing inside the fig."
    },
    {
        "id": "61",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/potatoes-water-content.jpg",
        "a": "Potatoes are 80% water.",
        "b": "Sure we all know celery is high in water, but who knew potatoes were only 15% behind them! Technically, you could juice a potato, but I don’t think anyone wants that."
    },
    {
        "id": "62",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/india-chili-peppers.jpg",
        "a": "India produces, consumes, and exports the most chili peppers in the world.",
        "b": "Chili peppers weren’t introduced to India until the 15th century, but they were a hit. These days, they not only eat and grow more than anyone else, but this is where you’ll find some of the spiciest peppers such as the bhut jolokia."
    },
    {
        "id": "63",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/american-sandwiches.jpg",
        "a": "49% of Americans over 20 eat a sandwich every day.",
        "b": "During the Revolutionary War, the Americans would avoid sandwiches due to their association and origin in Britain. Clearly that has changed today, after a 2014 study found that 49% of Americans over 20 eat one sandwich every day."
    },
    {
        "id": "64",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pule-cheese.jpg",
        "a": "Serbia hosts the most costly cheese.",
        "b": "Pule cheese is made from donkey milk at one location in Serbia.  One pound of discounted Pule was sold for $576 per pound, but the normal cost is over $1,000 per pound!"
    },
    {
        "id": "65",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/turkish-tea.jpg",
        "a": "Turkey consumes the most tea per person.",
        "b": "Although Turkish coffee is popular, tea is the bigger of the staples. Per capita, Turks drink almost 7 pounds of tea every year. Even England doesn’t drink that much!"
    },
    {
        "id": "66",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/dutch-coffee-fact.jpg",
        "a": "The Netherlands drinks the most coffee per person.",
        "b": "Another surprising statistic here – each person drinks about 2.5 cups of coffee every day. Finland and Sweden trail behind them at 1.8 and 1.3 cups."
    },
    {
        "id": "67",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/movie-popcorn-fact.jpg",
        "a": "Popcorn at the movies isn’t universal.",
        "b": "Popcorn is the go to movie snack for Americans, and it’s easy to assume everyone else does this too. However, in Colombia, dried ants are the popular option. Meanwhile in Korea, the snack of choice is dried cuttlefish, and in China they eat dried salted plums."
    },
    {
        "id": "68",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/brown-sugar-vs-white-sugar.jpg",
        "a": "Brown sugar is no different than white sugar.",
        "b": "Brown sugar is no less refined than white sugar. The only difference is the fact that some of the molasses that gets removed in the refining process, is added back in."
    },
    {
        "id": "69",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/german-chocolate-cake-fact.jpg",
        "a": "German chocolate cake has nothing to do with Germany.",
        "b": "German chocolate cake was invented by a Texan who used “German’s Chocolate” which is simply baking chocolate named after the creator, Sam German. It’s all in the name!"
    },
    {
        "id": "70",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/tonic-water-glows.jpg",
        "a": "Tonic water glows in the dark.",
        "b": "It’s weird to think that my insides are glowing whenever I have a gin and tonic, but it’s true! Quinine is the component of tonic water which is what causes the glow."
    },
    {
        "id": "71",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/flamin-hot-cheetos-inventor.jpg",
        "a": "Flamin’ Hot Cheetos were invented by a janitor.",
        "b": "In 1976, Richard Montanez made a pitch for the idea of Flamin’ Hot Cheetos to the Frito-LAy’s CEO. Richard was working as a janitor at the Frito-Lay plant in California and got the idea while eating elote, grilled corn on a stick."
    },
    {
        "id": "72",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/cilantro-fact.jpg",
        "a": "Coriander and cilantro are not the same thing.",
        "b": "Although people tend to think it’s the same thing with a different name, that’s not the case. Cilantro is the plant’s leaves and stems, while the coriander is the name of the dried seeds."
    },
    {
        "id": "73",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/jelly-vs-jam.jpg",
        "a": "There’s a small difference between jelly and jam.",
        "b": "Jam is made with fruit, which is why it’s so chunky. Meanwhile, jelly is made with fruit juice. An easy way to tell the difference between jelly and jam is that jelly will spread evenly, while jam will tend to be a little lumpy."
    },
    {
        "id": "74",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pecans-alabama.jpg",
        "a": "Alabama’s state nut is famous.",
        "b": "The state nut of Alabama is the pecan. It’s such a big deal, there’s a state pecan festival every year with carnival rides, country music, and a western show. All revolving around pecans!"
    },
    {
        "id": "75",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/india-meat-consumption.jpg",
        "a": "India has the lowest meat consumption in the world.",
        "b": "Per capita, Indians only consume 7 pounds of meat per person per year. That’s less than I eat in a week!"
    },
    {
        "id": "76",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/salad.jpg",
        "a": "Nutritious food is more expensive than junk food.",
        "b": "This is a great excuse to use to eat junk food and save money, but our bodies don’t like it so much! Per ounce, nutritious food costs up to 10 times more than junk food."
    },
    {
        "id": "77",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/coconut-water.jpg",
        "a": "In an emergency, coconut water can be used for blood plasma.",
        "b": "Just like blood plasma, coconut water has levels of high sodium and low potassium. It should only be used in absolute emergencies, because adverse effects may be fever, headaches, itchiness, or aching sensations."
    },
    {
        "id": "78",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/fortune-cookies-not-chinese.jpg",
        "a": "Fortune cookies are not Chinese.",
        "b": "Although we think of these as a Chinese food staple, fortune cookies are from an entirely different continent! They were invented in the early 1900’s in San Francisco."
    },
    {
        "id": "79",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/bottles-of-milk.jpg",
        "a": "You could survive only by drinking breast milk.",
        "b": "Breast milk is the only single food that provides all the nutrients that our bodies need. Adults could survive off of this as well, provided they receive enough of it."
    },
    {
        "id": "80",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/eskimos-use-fridges.jpg",
        "a": "Eskimos use refrigerators to stop their food from freezing.",
        "b": "You wouldn’t think you’d need anything to keep your food cold in the arctic, but it’s exactly the opposite! In order to prevent food from freezing, eskimo’s need refrigerators to keep it from getting too cold."
    },
    {
        "id": "81",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/fast-food-bad-for-liver.jpg",
        "a": "Eating fast food regularly has the same impact on the liver as hepatitis.",
        "b": "One month of eating fast food can cause significant changes to your liver due to the amount of fat and saturated fats. These changes in liver enzymes are similar with the effects of hepatitis."
    },
    {
        "id": "82",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/nutella-sales.jpg",
        "a": "A ridiculous amount of Nutella is sold every year.",
        "b": "So much so, that it could cover The Great Wall of China 8 times, you could circle the world 1.8 times, and the amount weighs the same as the Empire State Building."
    },
    {
        "id": "83",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/goat-meat.jpg",
        "a": "Goat meat is the most popular meat.",
        "b": "Although we may be accustomed to burgers, goat meat accounts for 70% of the red meat eaten globally! This is great news because goats are better for you and the environment."
    },
    {
        "id": "84",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/food-waste-illegal.jpg",
        "a": "Throwing food away is illegal in Seattle.",
        "b": "Since 2015, if you don’t compost your food waste and compostable paper, businesses will be fined $50 per dumpster, and just $1 for single family homes."
    },
    {
        "id": "85",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/agriculture.jpg",
        "a": "One of the most influential men in history was an agricultural scientist.",
        "b": "Norman Borlaug developed new strains of crops which yielded 4 times as much food. He is said to have saved the lives of over a billion people!"
    },
    {
        "id": "86",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/california-food-supplier.jpg",
        "a": "California is the world’s 5th largest supplier of food.",
        "b": "In spite of its struggles with droughts, California is also one of the leading irrigation water users in the U.S. – probably to supply all of the food it grows!"
    },
    {
        "id": "87",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/food-grown-in-space.jpg",
        "a": "Astronauts ate food grown in space for the first time in 2015.",
        "b": "Specifically, on August 10th, 2015, NASA astronauts sampled red romaine lettuce that was growing in a specially designed chamber. The fact that food can now be grown in space means we can explore space for longer without running out of food supplies."
    },
    {
        "id": "88",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/american-produce.jpg",
        "a": "Some produce in the U.S. is too ugly to sell.",
        "b": "Specifically, a whopping 40% of produce grown is never sold just because it’s too ugly. Because consumers won’t buy imperfect fruits or veggies, grocery stores in turn refuse to stock them."
    },
    {
        "id": "89",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/sound-influences-food-taste.jpg",
        "a": "Sound can influence the taste of your food.",
        "b": "High-frequency sounds enhance the sweetness in food, while low frequencies bring out the bitterness."
    },
    {
        "id": "90",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/death-row-last-meal-request.jpg",
        "a": "Death row inmates in Texas don’t get to pick their last meal.",
        "b": "An inmate on death row requested a ridiculous meal costing hundreds of dollars. He then ate none of it because “he wasn’t hungry”. After this, the state legislators asked to end the tradition of allowing inmates to request their final meal."
    },
    {
        "id": "91",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/australians-meat-eaters.jpg",
        "a": "Australians eat the most meat.",
        "b": "Coming in at a whopping 200 pounds per person every year, Australians take first place, but are still closely followed by Americans."
    },
    {
        "id": "92",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/americans-peanut-butter-consumption.jpg",
        "a": "Americans eat millions of pounds of peanut butter.",
        "b": "Each year, Americans consume enough peanut butter to coat the floor of the Grand Canyon – 500 million pounds to be exact!"
    },
    {
        "id": "93",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/indian-restaurants-london.jpg",
        "a": "There are more Indian restaurants in London than in Mumbai or Delhi.",
        "b": "There are around 15,000 restaurants in the U.K., with most of them being in major cities, specifically London. And while they serve Indian food, most of the owners are of Bangladesh descent."
    },
    {
        "id": "94",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/colombian-exchange.jpg",
        "a": "The Columbian Exchange changed the course of food.",
        "b": "Until Christopher Columbus started the worldwide spread of plants and seeds, there were no oranges in Florida and no bananas in Ecuador. Not only this, but there were no potatoes in Ireland, no coffee in Colombia, no pineapples in Hawaii – the list goes on!"
    },
    {
        "id": "95",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/hot-chocolate-fact.jpg",
        "a": "Hot chocolate tastes better out of an orange cup.",
        "b": "Depending on how you serve something, it can scientifically change your perception of taste. Scientists had 57 volunteers try hot chocolate out of white, cream, red, and orange cups. It was the same hot chocolate, but the volunteers preferred the orange cup."
    },
    {
        "id": "96",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/pizza-margherita-colors.jpg",
        "a": "The original margherita pizza was color coded.",
        "b": "The margherita pizza was made to represent the Italian flag – basil for green, tomatoes for red, and mozzarella for white."
    },
    {
        "id": "97",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/eating-in-bed.jpg",
        "a": "Not eating before bed burns fat.",
        "b": "If you eat an early dinner, or skip dinner altogether, it increases the amount of fat a person burns while they’re sleeping."
    },
    {
        "id": "98",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/egg-sidewalk.jpg",
        "a": "It’s impossible to cook an egg on a sidewalk.",
        "b": "The highest temperature ever recorded was 131 Fahrenheit. In order to cook an egg on a sidewalk, it would need to be 158 degrees. Even with the reflection of heat, concrete is not a good heat conductor so you wouldn’t be able to cook an egg!"
    },
    {
        "id": "99",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/breakfast-meal.jpg",
        "a": "Breakfast is NOT the most important meal of the day.",
        "b": "The only reason this became a popular idea, is because a company called General Foods used this as a marketing campaign in 1944. They coined the phrase to sell more of their cereal Grape Nuts. The campaign stated that “Nutrition experts say breakfast is the most important meal of the day.”"
    },
    {
        "id": "100",
        "img": "https://www.thefactsite.com/wp-content/uploads/2019/12/dominoes-co-founder.jpg",
        "a": "The Domino’s co-founder traded his shares for a Volkswagen.",
        "b": "One year after opening, James Monaghan, a co-founder, traded his half of the shares for a used VW Beetle. 38 years later, the other co-founder, Tom Monaghan, sold his shares for $1 billion."
    }
]


export default Niz