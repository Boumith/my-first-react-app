import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
            <div>
                <label>Name</label>
                <input type="text" required placeholder='Ex:- Soumith'/>
            </div>

            <div>
                <label>Email</label>
                <input type="email" required placeholder='Ex:- abc@gmail.com '/>
            </div>

            <div>
                <label>Message</label>
                <textarea type="text" cols={50} rows={25}required placeholder='Tell us about your query.'/>
            </div>

            <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
