
import companyLogo from './../assets/footerLogo.png'

const Footer = () => {
  return (
    
<footer className="bg-[#509FDD] bg-blend-multiply shadow-md dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src={companyLogo} className="h-8 mr-3" alt="company Logo" />
                
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Who We Are</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Our Values</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">The Perks</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Company</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer