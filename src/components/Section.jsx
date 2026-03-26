import '../assets/styles/section.css'

function Section(props) {
  return (
    <div className='section-container'>

      <img 
        className='section-image' 
        src={props.image} 
        alt={`icon for ${props.title}`} />

      <div className='section-content'>
        <p className='section-title'>{props.title}</p>
        <p className='section-description'>{props.description}</p>
      </div>

    </div>
  )
}

export default Section