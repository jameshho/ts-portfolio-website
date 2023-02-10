import React from 'react'

const Contact = () => {
    const handleClick = (e: any) => {
        e.preventDefault()
    }


    return (
        <div className='contact'>
            <img src='/images/james-headshot-2.jpg' className='about-img' />
            <div>

                <h1>Start the Conversation!</h1>
                <p>I'm always eager to hear from my visitors. Whether you want to offer <strong>feedback on my portfolio</strong>, <strong>discuss job opportunities</strong>, or <strong>just want to connect</strong>, I'd love to hear from you. Use the form below to reach out, and let's start a conversation today!</p>
                <form>
                    <div className="over-form">

                        <p>My contact form is currently under construction, but you can still reach out to me directly via email. Just send a message to <span onClick={() => navigator.clipboard.writeText('jameshowebdev@gmail.com')}>jameshowebdev@gmail.com</span>, and I'll be sure to respond as soon as I can.

                            Sorry for any inconvenience, and I look forward to hearing from you!</p>

                    </div>

                    <p>Name</p>
                    <input type="text" placeholder='Name' onClick={() => { }} />
                    <p>Email</p>

                    <input type="text" placeholder='Your Email' />
                    <p>Comment</p>

                    <textarea placeholder='Comment' />
                    <button onClick={handleClick}>Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Contact