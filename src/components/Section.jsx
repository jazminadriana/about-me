import '../assets/styles/section.css'

function Section({ image, title, description }) {
  return (
    <section className='section-container'>

      <div className='section-image-wrapper'>
        <img 
          className='section-image' 
          src={image} 
          alt={`Visual representation of ${title}`} 
          loading="lazy" 
        />
      </div>

      <div className='section-content'>
        <h2 className='section-title'>{title}</h2> 
        <p className='section-description'>{description}</p>
      </div>

    </section>
  )
} 

export default Section