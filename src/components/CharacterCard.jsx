
export default function CharacterCard (characterData){

  return (
    <>
      <div className='character-card'>
          <div className='character-card_name flex'>
            <h4 className='no-margin'>
              {characterData.data.name}
            </h4>
          </div>
          <div>
            <img className='character-card_image' src={characterData.data.image} alt={characterData.data.name} />
          </div>
          <div className='character-status'>
            {characterData.status}
          </div>
         </div>
    </>
  )
}