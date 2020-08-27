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

    //    const nbOfQuestion = [  
    //     "<option value ='10'>10</option>",
    //     "<option value ='15'>15</option>",
    //     "<option value ='20'>20</option>",
    //     "<option value ='25'>25</option>",
    //     "<option value ='30'>30</option>",
    //     "<option value ='35'>35</option>",
    //     "<option value ='40'>40</option>",
    //     "<option value ='45'>45</option>",
    //     "<option value ='50'>60</option>",
    //     ];
    //     function (nbPlayer){
    //         if (nbPlayer === 1) {
    //             nbOfQuestion;                        
    //         }
    //         } else if (nbPlayer === 2){   
    //             nbOfQuestion.filter(index[i], i<=3) 
    //         } else if (nbPlayer === 3){
    //         } else if (nbPlayer === 4){
    //         } else if (nbPlayer === 5){
    //         } else if (nbPlayer === 6){
    //         } else if (nbPlayer === 7){
    //         } else if (nbPlayer === 8){
    //         } else if (nbPlayer === 9){
    //         }else {
            
    //     }
    //     }
    


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
            {/* <div>
                <h2>Select a number of question </h2>
                <p>Choosen number of questions : {choosenNumberOfQuestions}</p>
                    <select onChange={(event)=>handleChoosenNumberOfQuestions(event)}> 
                        <option value = ''/>
                        {nbOfQuestion }
                    </select>
            </div>   */}
        </div>
    )   
}

export default SelectParameters;


// _ type de questions
