import React from 'react';

const MoviesContainer = () => {
  // Function to iterate through all movies, turn each movie into a component
  // Save this to a new variable (an array) movieThumbnails

  // Render this variable

  return (
    <div>
      {movieThumbnails}
    </div>
  )
}

export default MoviesContainer;




// import React, { Fragment } from 'react';
// import Card from './Card';
// import './Ideas.css';
//
// const Ideas = ({ideas, deleteIdea}) => {
//   const ideaCards = ideas.map(idea => {
//     return (
//       <Card
//         title={idea.title}
//         description={idea.description}
//         id={idea.id}
//         key={idea.id}
//         deleteIdea={deleteIdea}
//       />
//     )
//   })
//
//   return (
//     <div className='ideas-container'>
//       {ideaCards}
//     </div>
//   )
// }
//
// export default Ideas;
