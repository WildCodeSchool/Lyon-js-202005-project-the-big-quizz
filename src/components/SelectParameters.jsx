import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectParameters (){
    
    const [category, setCategory] = useState([])
    const [choosenCategory, setChoosenCategory] = useState('')
    const [choosenTimer,setChoosenTimer] =useState('');
    const [difficultyLevel, setDifficultyLevel] = useState ('')

    //recupération de l'API catégory
     useEffect (()=>{
        let configAPI = {
            method: 'get',
            url: 'https://opentdb.com/api_category.php',
          };
            axios (configAPI)
            .then ((response) => {
                setCategory (response.data.trivia_categories)
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
    function handleChoosenLevel (event){
        setDifficultyLevel(event.target.value)
        console.log (event.target.value);
       };
    function handleChoosenCategory (event){
        setChoosenCategory(event.target.value)
        console.log (event.target.value)
       };
       function handleChoosenTimer (event){
        setChoosenTimer(event.target.value)
        console.log (event.target.value)
       };


    return (

        <div>
            <div>
                <h2>Select the level </h2>
                <p>Choosen level : {difficultyLevel}</p>
                    <select onChange={(event)=>handleChoosenLevel(event)}> 
                        <option value = ''/>
                        <option value = 'Easy'> Easy </option>
                        <option value = 'Medium'> Medium </option>
                        <option value = 'Hard'> Hard </option>  
                    </select>
            </div>
            <div>
                <h2>Select a category</h2>
                <p> Choosen Category : {choosenCategory} </p>   
                <select onChange={(event)=>handleChoosenCategory(event)}>
                    <option value =""/>
                     {category.map((item)=>{
                        return <option key={item.id} value={item.name}>{item.name} </option>
                     })
                    }
                </select>
            </div>
            <div>
                <h2>Select a timer duration </h2>
                <p>Choosen level : {choosenTimer}</p>
                    <select onChange={(event)=>handleChoosenTimer(event)}> 
                        <option value = ''/>
                        <option value = '30'> 30' </option>
                        <option value = '60'> 60' </option>
                        <option value = '90'> 90'</option>  
                    </select>
            </div>  
        </div>
    )   
}

export default SelectParameters;


// ok niveau de difficulté
// ok catégories/thème
// _ type de questions
// ok choix du temps pour le chronometre
// _ nombre de questions (attention au nombre de questions max par rapport au nombre de joueurs)