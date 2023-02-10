import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className='about'>
      <div className="about-container">
        <h1>About me</h1>
        <img src='/images/james-headshot-3.jpg' alt="James hiking on a trail surrounded by stunning autumn leaves in vibrant yellow, and orange colors."/>


        <h2>Who I Am</h2>

        <p >Hey there! I'm Jimmy, a web developer from Boston with a focus on front-end engineering. I'm passionate about taking ideas and turning them into amazing web experiences using my expertise in <span>React</span>, <span>TypeScript</span>, <span>Sass</span>, and <span>Figma</span>. I also have experience building high-performance APIs with Python and SQL, making me a well-rounded developer. When I'm not coding, you can find me out on a hike or exploring new places.
        </p>

        <h2>Bringing Stories to Life</h2>
        <p >I'm a website developer with a passion for helping individuals and businesses bring their unique stories to life online. I believe that every website should not only look great, but also effectively connect with its target audience. That's why I work hard to create custom, engaging websites that truly <span>reflect the vision of my clients</span>. Whether you're a small business looking to establish a strong online presence or an individual with a story to tell, I'm here to help bring your ideas to life. With my <span>passion for technology</span> and a <span>desire to make a positive impact</span>, I'm excited to work with you and help bring your story to the world through a beautiful and effective website.</p>
        <h2 >My Journey into Coding</h2>


        <p>My journey into coding started with a desire to create a <span>financial tracker</span> that would seamlessly integrate all aspects of my finances, including income, expenses, budget, and retirement accounts. I was wary of the <span>data security</span> on popular platforms, so I took on the challenge of <span>building my own tracker</span>.</p>

        <p>Having a background in <span>Economics and Finance</span>, I initially relied on my familiarity with <span>Excel</span> and <span>PowerBI</span>, tools that I was well-versed in. However, I soon realized that these tools were limiting and inefficient for my project. The repetitive tasks and lack of version control made the app slow and rigid. Despite my expertise with these tools, it became apparent that I needed to explore alternative solutions.</p>


        <p>Luckily, a friend suggested using Python, which would allow me to automate tasks and provide version control for my project. I delved into <span>Python</span> and its libraries, and I was impressed by how quickly I could turn my amateur code into a sophisticated web app using the Streamlit framework. The experience was extremely fulfilling, and I <span>found myself constantly learning about web development</span>.</p>

        <p>As I continue my journey in web development, I've rediscovered my <span>passion for creative expression</span>. I used to love painting and music, but I had neglected that part of myself for a while. However, web development has reignited that flame and I am thrilled. I aim to create websites that are both <span>responsive</span> and <span>accessible</span>, with user-friendly interfaces that are <span>simple yet effective</span>.</p>

        <p onClick={()=>navigate('/marketplace')} style={{cursor:"pointer"}}>As I continue to further my career in web development, I am excited to announce that I will be moving to California in a couple of months to pursue new opportunities. I would greatly appreciate any support in making this transition a success.</p>

        <p>With numerous websites under my belt, I am now eager to take my passion for web development to the next level. I am confident that my <span>unique blend of finance, tech, and creativity</span> will bring a new perspective to the field. The opportunities in this field are limitless, and I look forward to seeing where my journey will take me next.</p>





      </div>
    </div>
  )
}

export default About