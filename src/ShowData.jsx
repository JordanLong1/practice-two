import React from 'react'; 

function ShowData({name, favoriteAnimal}) {
  if (favoriteAnimal !== '') {
      return (
          <div>
             <span>{name}'s favorite animal is a {favoriteAnimal}</span>
          </div>
      )
  } else {
      return null
  }
}

export default ShowData; 