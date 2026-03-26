import './App.css'
import profileAvatar from './assets/images/profile-avatar.jpg'
import journeyAvatar from './assets/images/journey-avatar.jpg'
import stackAvatar from './assets/images/stack-avatar.jpg'
import Section from './components/Section'


function App() {
  return (
    <div className='App'>
        <h1 className='app-title'>Jazmín | Web Developer Jr</h1>
        <Section 
          title='About Me'
          description='I am a passionate developer with experience in React and Node.js.'
          image={profileAvatar}
        />
        <Section 
          title='My Journey'
          description='I started my journey in web development in 2020 and have been learning and growing ever since.'
          image={journeyAvatar}
        />
        <Section 
          title='Tech Stack'
          description='I am proficient in JavaScript, React, Node.js, and have experience with databases like MongoDB.'
          image={stackAvatar}
        />
    </div>
  )
}

export default App
