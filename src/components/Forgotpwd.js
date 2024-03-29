import finalbg from '../images/finalbg.png';
import vector from '../images/forgotpwd.png';
import email from '../images/email.png';

const Forgotpwd = () => {
  return ( 
    <div className="Forgotpwd">
      <div className="welcomePage  w-full h-screen lg:h-screen flex items-center justify-center text-white" 
      style={{backgroundImage: `url(${finalbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
          <div className='MainGlass  bg-yellow-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex h-full lg:h-5/6 flex-col w-5/6 md:flex-row'>
            <div className='sm:h-inherit sm:w-1/2 flex items-center justify-center relative pt-6  md:pt-0 '>
              <img src={vector} alt="vector" className='size-64 md:size-full'/>
            </div>
            <div className='h-inherit w-4/5 md:w-1/2  pt-10 pl-10 md:pr-10 lg:pt-20 lg:pr-10'>
                <div>
                  <p className='text-4xl lg:text-7xl font-bold -tracking-32 py-2  md:py-1'>Forgot <br />Your Password ?</p>
                  <div className='pb-1 md:pb-3'>
                    <p className='text-md lg:text-2xl py-2 md:md:py-8'>Enter your email and we’ll send you a link to reset your password.</p>
                  </div>
                </div>
                <div className="mailstuff">
                  <form action="/createpwd">
                    <div className='email'>
                        <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                          <div className='bg-black rounded-full'>
                            <div  className='flex flex-row  py-2 md:py-3 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                              <img src={email} alt="img" className=' py-1 px-2'/>
                              <input type="email" className='w-full mx-2 bg-transparent focus:outline-0'/>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className='flex align-center justify-center mt-4'>
                      <div className='mt-4'>
                        <div><button className='bg-black p-2   border-2 rounded-full py-2 px-10'>Reset Password</button></div>
                        <div className='text-md lg:text-lg my-2 p-2 px-10 py-2 text-nowrap'>
                          <p className='inline'>Back to </p>
                          <a href='/welcomeback' className='underline underline-offset-2 px-1 text-endgradient'>Sign in </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
          </div>

      </div>
    </div>
   );
}
 
export default Forgotpwd;