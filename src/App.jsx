import './App.css'
import profileAvatar from './assets/images/profile-avatar.jpg'
import lifestyleAvatar from './assets/images/lifestyle-avatar.jpg'
import techAvatar from './assets/images/tech-avatar.jpg'
import Section from './components/Section'


function App() {
  return (
    <div className='App'>

      <header>
        <h1 className='app-title'>Jazmín | Web Developer Jr</h1>
        <span className="tagline">Turning discipline into functional code.</span>
      </header>

      <Section 
        title='About Me'
        description='I am a Mexico City-based Full Stack Developer in training. My journey into technology began after a professional transition in early 2025, allowing me to channel my energy into web development. I am passionate about building clean, functional interfaces while maintaining professional standards like Conventional Commits and reusable component architecture.'
        image={profileAvatar}
      />
      <Section 
        title='Tech Stack'
        description='I am currently deep-diving into the MERN stack (MongoDB, Express, React, Node.js), strengthening my foundation through the University of Helsinki’s Full Stack Open and FreeCodeCamp. I enjoy solving frontend logic challenges with React and I am consistently building solid backend skills to create robust, end-to-end applications."'
        image={techAvatar}
      />
      <Section 
        title='Lifestyle & Discipline'
        description='Beyond code, fitness is a pillar of my life. The discipline required for physical training is the same I apply when learning a new library or debugging complex errors: consistency, patience, and attention to detail. I am seeking my first opportunity as a Junior Web Developer to bring this blend of energy and technical commitment to an innovative team'
        image={lifestyleAvatar}
      />
    </div>
  )
}

export default App
