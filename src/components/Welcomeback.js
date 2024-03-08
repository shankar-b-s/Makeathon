import finalbg from '../images/finalbg.png';
import vector from '../images/vectorleft.png';
import Mycarousel from './Mycarousel';
import email from '../images/email.png';
import contact from '../images/contact.png';
import pwd from '../images/pwd.png';
import ggl from '../images/ggl.png';

const Welcomeback = () => {
  return ( 
    <div className="Welcomeback">
      <div className="Welcomback   w-full h-full md:h-screen flex items-center justify-center text-white" 
      style={{backgroundImage: `url(${finalbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
        <div className='MainGlass h-full lg:h-5/6  bg-yellow-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col w-5/6 md:flex-row pb-6 md:pb-0'>
          <div className='sm:h-inherit sm:w-1/2 flex items-center justify-center relative pt-1 md:pt-0 '>
            <img src={vector} alt="vector" className=' size-80 absolute z-0'/>
            <Mycarousel className="size-0.5 lg:size-3 relative z-10"/>            
          </div>
          <div className='h-inherit w-4/5 md:w-1/2  pt-2 pl-10 md:pt-8 md:pr-10 md:pl-0'>
            <div>
              <p className='text-4xl lg:text-7xl font-bold -tracking-32 bg-gradient-to-r from-startgradient  to-endgradient text-transparent bg-clip-text py-1'>Welcome Back !</p>
              <div className='pb-3'>
                <p className='text-md bg-gradient-to-r from-white via-startgradient to-endgradient text-transparent bg-clip-text inline'>new here ? </p>
                <a href='/' className='underline underline-offset-2 px-1'>Sign up here</a>
              </div>
            </div>
            <div className="contacts">
              <form action="/">
                <div className='email'>
                    <label htmlFor="email">Email</label><br />
                    <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div  className='flex flex-row  py-3 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <img src={email} alt="img" className='size-6  px-1'/>
                          <input type="email" placeholder='johndoe@gmail.com' className='mx-2 bg-transparent focus:outline-0 w-full'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='phno'>
                    <label htmlFor="email">Contact Number</label><br />
                    <div className=' my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div  className=' flex flex-row justify-between  py-3 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <div className='flex flex-row'>
                            <img src={contact} alt="img" className='px-1  size-6'/>
                            <input type="tel" placeholder='9164253253' className='mx-2 bg-transparent focus:outline-0 w-full' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pwd'>
                    <label htmlFor="pwd">Password</label><br />
                    <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div className=' flex flex-row py-1.5 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <img src={pwd} alt="img" className='px-1'/>
                          <input type="password" placeholder='******************' className='mx-2 bg-transparent focus:outline-0 w-full'/>
                        </div>
                      </div>
                    </div>
                    <a href="/forgotpwd"><div className='inline underline underline-offset-2 text-sm text-forgotpwd'>forgot password ?</div></a>
                  </div>
                  <div className='flex align-center justify-center mt-4'>
                      <button className='bg-black p-2   border-2 rounded-full py-2 px-10'>Submit</button>
                  </div>                                    
              </form>
              <hr className='h-px my-4 mt-8 bg-white border-0 dark:bg-white-800'/>
              <div className='Footer flex flex-row justify-between'>
                <div className='withGgl flex flex-row '>
                  <a href="/"><img src={ggl} alt="img" className='size-10' /></a>
                  <a href="/">Sign up with Google</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Welcomeback;