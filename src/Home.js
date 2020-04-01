import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import Recipe from './Recipe';
import { APP_ID, APP_KEY, API_KEY } from './AppKey';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import Spinner from './Spinner';
import RandomRecipe from './RandomRecipe';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import Niz from './FunFacts';
import MealPlanner from './IsplanirajObroke';
import Calories from './Calories';

// import About from './About';
// import { Signin } from './Signin';
// import Signup from './Signup';
// import Signout from './Signout';
// import PublicRoute from './public/PublicRoute';
// import WelcomePage from './public/components/WelcomePage';
// import PrivateRoute from './private/PrivateRoute';



const Home = () => {
    const { t, i18n } = useTranslation();
    const [isloading, setIsloading] = useState(false)

    const [recipes, setRecipes] = useState([]);
    const [randomrecipe, setRandomrecipe] = useState([])

    const [planmeal, setPlanmeal] = useState([])
    const [calorie, setCalories] = useState({})

    const [caloriegoal, setCaloriegoal]= useState('2000')

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');



    // useEffect(() => {
    //   getRecipes()

    // }, [query]);

    // const getRecipes = async () => {
    //   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    //   const data = await response.json()
    //   setIsloading(false)
    //   setRecipes(data.hits);
    //   console.log(data.hits);


    // }

    useEffect(() => {
        getRandomRecipe()

    }, []);


    // Proveriti da li radi
    // useEffect(() => {
    //     Spoonacular()

    // }, []);

    const getRandomRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await response.json()
        setRandomrecipe(data.meals);
        console.log(data.meals);

    }
    const Spoonacular = async () => {
        const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${caloriegoal}&apiKey=${API_KEY}`)
        const data = await response.json()
        setPlanmeal(data.meals)
        setCalories(data.nutrients)
        console.log(data.meals);

    }


    const updateSearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    const updateCalories = (e) =>{
        setCaloriegoal(e.target.value)
        console.log(caloriegoal);
        
    }

    const getSearch = e => {
        setIsloading(true)
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }
    return (
        <Fragment>

            <Navbar />

            {/* <button className="search-button"
                style={{alignContent:"center", 
                alignItems:"center", 
                margin:"auto", 
                textAlign:"center", 
                display:"flex"}}  
            onClick={getRandomRecipe}>Recipe of the day</button> */}
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch} />
                <button className="search-button" type="submit">{t('Search recipes.1')}</button>
            </form>
            <div className="recipes">
                {isloading ? <Spinner /> : <div className="recipes">{recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients} />
                ))} </div>}</div>
            <Button getRandomRecipe={getRandomRecipe} />
            <div className="recipes">
                <div className="random-recipe">{randomrecipe.map(recipe => (
                    <RandomRecipe
                        key={recipe.idMeal}
                        category={recipe.strCategory}
                        origin={recipe.strArea}
                        video={recipe.strYoutube}
                        title={recipe.strMeal}
                        image={recipe.strMealThumb}
                        instructions={recipe.strInstructions} />
                ))} </div></div>

            <Niz />
            <div style={{paddingBottom:"1%", paddingTop:"3%"}}><label style={{fontSize:"120%"}} for="name">{t("How many calories do you want? Don't worry, you're not fat.1")}!</label></div>
            <input className="search-bar" name="name" id="name" value={caloriegoal} placeholder="Enter your calories goal for today"  onChange={(e)=>updateCalories(e)} style={{width:"20%"}}></input>
            <button  /*onClick={Spoonacular}*/  className="search-button">{t('Plan your meals for today.1')}</button>
            <div className="recipes">{planmeal.map(recipe => (
                <MealPlanner
                    key={recipe.id}
                    title={recipe.title}
                    readyin={recipe.readyInMinutes}
                    servings={recipe.servings}
                    image={recipe.image}
                />
            ))}
                <Calories
                    calories={calorie.calories}
                    protein={calorie.protein}
                    fat={calorie.fat}
                    carbohydrates={calorie.carbohydrates}
                />
            </div>


        </Fragment>
    )
}

export default Home