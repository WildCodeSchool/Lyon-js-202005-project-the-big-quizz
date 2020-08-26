import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectParameters (){
    const [difficultyLevel, setDifficultyLevel] = useState ('Easy');
    const [category, setCategory] = useState('General Knowledge')

    //recupération de l'API catégory
     useEffect (()=>{
            axios.get ('https://opentdb.com/api_category.php')
            .then ((response) => {
                setCategory (response.data)
                console.log(response.data)
            })
            .catch((error) => {console.log(error);})  
   }, [])  
// {"trivia_categories":[
// {"id":9,"name":"General Knowledge"},
// {"id":10,"name":"Entertainment: Books"},
// {"id":11,"name":"Entertainment: Film"},
// {"id":12,"name":"Entertainment: Music"},
// {"id":13,"name":"Entertainment: Musicals & Theatres"},
// {"id":14,"name":"Entertainment: Television"},
// {"id":15,"name":"Entertainment: Video Games"},
// {"id":16,"name":"Entertainment: Board Games"},
// {"id":17,"name":"Science & Nature"},
// {"id":18,"name":"Science: Computers"},
// {"id":19,"name":"Science: Mathematics"},
// {"id":20,"name":"Mythology"},
// {"id":21,"name":"Sports"},
// {"id":22,"name":"Geography"},{"id":23,"name":"History"},
// {"id":24,"name":"Politics"},
// {"id":25,"name":"Art"},
// {"id":26,"name":"Celebrities"},
// {"id":27,"name":"Animals"},
// {"id":28,"name":"Vehicles"},
// {"id":29,"name":"Entertainment: Comics"},
// {"id":30,"name":"Science: Gadgets"},
// {"id":31,"name":"Entertainment: Japanese Anime & Manga"},
// {"id":32,"name":"Entertainment: Cartoon & Animations"}]}
        
    //changement au select :
    function handleChangeLevel (event){
        setDifficultyLevel(event.target.value)
        console.log (event.target.value);
       };
    function handleChangeCategory (event){
        setCategory(event.target.value)
        console.log (event.target.value);
       };

    return (

        <div>
            <h2>Choisissez le niveau de dificulté </h2>
            <p>Niveau choisi : {difficultyLevel}</p>
                <select onChange={(event)=>handleChangeLevel(event)}> 
                    <option value = 'Easy'> Easy </option>
                    <option value = 'Medium'> Medium </option>
                    <option value = 'Hard'> Hard </option>  
                </select>
            <h2>Choisissez la catégorie</h2>
            <p> Catégorie choisie : {category.trivia_categories.name}</p>   
                <select onChange={handleChangeCategory}>
                    {category.trivia_categories.map((item)=>{
                        return <option value = {item.trivia_categories.id}>{item.trivia_categories.name}</option>
                    })
                    }
                </select>

        </div>
    )   
}

export default SelectParameters;
