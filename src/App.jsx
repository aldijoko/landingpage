
import './App.css'
import Accordion from './component/Accordion'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {


  return (
    <>
      <div>
        <Header />
        <div>
          
        <section className="bg-center bg-no-repeat bg-[url('./assets/bg-jumbo.png')] bg-gray-700 bg-blend-multiply bg-cover">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Discover Your Wonder</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
            </div>
        </section>
        <section>
          <div className='md:grid md:grid-cols-3 md:gap-6 px-5'>
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" >
              <div className="mb-8 md:mb-0">
                <a
                  className='flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3'
                  href="#0"
                 
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-[#029FE4] text-3xl">Who we are</div>
                    <p className='font-semibold text-lg mb-2'>Technology Company</p>
                    <div className="text-gray-600 text-sm">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
                  </div>
                  
                </a>
                <a
                  className='flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3'
                  href="#0"
                 
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-[#029FE4] text-3xl">What we do</div>
                    <p className='font-semibold text-lg mb-2'>Professional Brand Management</p>
                    <div className="text-gray-600 text-sm">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                  </div>
                  
                </a>
                <a
                  className='flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3'
                  href="#0"
                 
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1 text-[#029FE4] text-3xl">How we do</div>
                    <p className='font-semibold text-lg mb-2'>Strategize, Design, Collaborate</p>
                    <div className="text-gray-600 text-sm">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.</div>
                  </div>
                  
                </a>
              </div>
            </div>
          </div>
        </section>

        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
