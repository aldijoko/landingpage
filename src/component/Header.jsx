
import companyLogo from './../assets/logo.png'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-16 shadow-md px-5 '>
        <div className='flex items-center rounded-md'>
           <img src={companyLogo} alt="logo" />
        </div>
        <div className='w-1/2 flex items-center justify-end gap-3 relative'>
            <div className='border-r-2 pr-5 cursor-pointer'>
                <p className='text-sm font-bold leading-3'>Home</p>
                    
            </div>
             <div className='border-r-2 pr-5 cursor-pointer'>
                <p className='text-sm font-normal leading-3'>Event</p>
            </div>
            <div className='border-r-2 pr-5 cursor-pointer'>
                <p className='text-sm font-normal leading-3'>Our Service</p>
            </div>
            <div className='border-r-2 pr-5 cursor-pointer'>
                <p className='text-sm font-normal leading-3'>Event</p>
            </div>
            <div className='cursor-pointer'>
                <p className='text-sm font-normal leading-3'>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Header