import vector from '../images/createpwd.png';
import finalbg from '../images/finalbg.png';
import pwd from '../images/pwd.png';

const Createpassword = () => {
  return ( 
    <div className="Createpassword">
      <div className="welcomePage  w-full h-screen lg:h-screen flex items-center justify-center text-white" 
      style={{backgroundImage: `url(${finalbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
        <div className='MainGlass  bg-yellow-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex h-full flex-col w-5/6 md:flex-row'>
            <div className='sm:h-inherit sm:w-1/2 flex items-center justify-center relative pt-10 md:pt-0 '>
              <img src={vector} alt="vector" className='size-64 md:size-4/5'/>
            </div>
            <div className='h-inherit w-4/5 md:w-1/2  pt-10 pl-10 md:pt-20 md:pr-10'>
              <div className='flex flex-col items-center justify-center md:flex-none'>
                <div>
                  <p className='text-4xl md:text-5xl font-bold -tracking-32 py-4  md:py-1'>Create New Password</p>
                </div>
                <div className='pwds'>
                  <form action="/welcomeback">
                      <div className='Passwords flex flex-col justify-center align-center  md:mt-3 md:py-4'>
                        <div className='pwd'>
                          <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                            <div className='bg-black rounded-full'>
                              <div className=' flex flex-row justify-between  py-1.5 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                                <img src={pwd} alt="img" className='px-1'/>
                                <input type="password" placeholder='Enter new password' className='w-full mx-2 bg-transparent focus:outline-0'/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='cpwd'>
                          <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                            <div className='bg-black rounded-full'>
                              <div className=' flex flex-row justify-between  py-1.5 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                                <img src={pwd} alt="img" className='px-1' />
                                <input type="password" placeholder='Confirm your password' className='w-full mx-2 bg-transparent focus:outline-0'/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </form>
                </div>
                <div>
                  <div className='flex align-center justify-center mt-4'>
                        <div className='mt-4 mr-36'>
                          <div><button className='bg-black p-2   border-2 rounded-full py-2 px-10'>Change</button></div>
                          <div className='text-md md:text-lg my-2 p-2 px-3 py-2 text-nowrap'>
                            <p className='inline'>Back to </p>
                            <a href='/welcomeback' className='underline underline-offset-2 px-1 text-endgradient '>Sign in </a>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default Createpassword;