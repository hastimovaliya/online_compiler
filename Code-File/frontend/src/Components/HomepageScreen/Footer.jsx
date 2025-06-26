import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <span className='footer_faizan' target='_faizan'>Hasti Movaliya</span></p>
        </div>
    </>
  )
}

export default Footer