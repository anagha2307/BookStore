import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'


const Home = () => {
  return (
    <div>
      <Header />
      {/* landing */}
      <div className="flex flex-col h-screen justify-center items-center bg-[url(/background-image.png)]
        bg-cover text-white">
        <h1 className="text-5xl font-bold">Wonderful Gifts</h1>
        <p>Give your family and friends a book</p>
        <div className="mt-9">
          <input type="text" placeholder='Search Books' />
        </div>
      </div>
      {/* arrival section */}
      <section className="p-5 flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h1 className="text-xl">Explore Our Latest Collection</h1>
        <div className="md:grid grid-cols-4 w-full mt-5">
          <div className="shadow p-3 rounded mx-4">
            <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-blue-700 font-bold text-lg">Author</p>
              <p>Book Title</p>
              <p>$ 400</p>
            </div>
          </div>
          <div className="shadow p-3 rounded mx-4">
            <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-blue-700 font-bold text-lg">Author</p>
              <p>Book Title</p>
              <p>$ 400</p>
            </div>
          </div>
          <div className="shadow p-3 rounded mx-4">
            <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-blue-700 font-bold text-lg">Author</p>
              <p>Book Title</p>
              <p>$ 400</p>
            </div>
          </div>
          <div className="shadow p-3 rounded mx-4">
            <img width={'100%'} height={'250px'} src="/photo.png" alt="book1" />
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-blue-700 font-bold text-lg">Author</p>
              <p>Book Title</p>
              <p>$ 400</p>
            </div>
          </div>
        </div>
      </section>
      {/* author */}
      <section className="md:grid grid-cols-2 items-center md:gap-10 gap-15 mt-10 md:px-40 p-5">
        <div className="text-center">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique optio, ea non facere ex sit totam exercitationem praesentium facilis voluptas odio veniam voluptate dignissimos hic consequatur eaque, quisquam dicta eius?</p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique optio, ea non facere ex sit totam exercitationem praesentium facilis voluptas odio veniam voluptate dignissimos hic consequatur eaque, quisquam dicta eius?</p>
        </div>
        <div className="text-center md:my-1 my-5">
          <img className='w-90' height={'300px'} src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg" alt="author" />
        </div>
      </section>
      {/* testimonial */}
      <section className='mt-10'>
        <h1 className="text-3xl font-bold text-center">TESTIMONIALS</h1>
        <h1 className="text-xl text-center">See What Other People Are Saying</h1>
        <div className="my-5 flex flex-col justify-center items-center mx-auto p-5">
          <img src="https://static.vecteezy.com/system/resources/previews/038/962/461/non_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" 
          alt="User" width={'300px'} height={'300px'} style={{borderRadius:'50%'}} className='my-4'/>
          <h4 className='font-bold text-center'>Treesa Joseph</h4>
          <p className='max-w-5xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quis expedita temporibus aspernatur vitae adipisci ullam assumenda ratione quam suscipit laborum, molestiae perspiciatis non repellat voluptate consequatur qui consectetur.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
