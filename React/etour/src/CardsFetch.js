import React, { useEffect, useState } from 'react';
import Cards from './Cards'

const CardsFetch = (props) => {
console.log(props)



let neww=props.name

 if(neww!="*")

  {neww=props.match.params.subcatID} 


    const [cards, setCards] = useState([]);
    const getCards = async () => {
        const responce = await fetch('http://localhost:8080/destination/'+neww);
        setCards(await responce.json());
        console.log(...cards);
    }


    useEffect(() => {
        getCards();
    }, []);


    return (
        <Cards cards={cards}/>
    )
}
export default CardsFetch;
