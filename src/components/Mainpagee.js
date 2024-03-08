import finalbg from '../images/finalbg.png';
import vector from '../images/vectorleft.png';
import contact from '../images/contact.png';
import email from '../images/email.png';
import fname from '../images/fname.png';
import lname from '../images/lname.png';
import ggl from '../images/ggl.png';
import pwd from '../images/pwd.png';
import signin from '../images/signin.png';
import Mycarousel from './Mycarousel';

const Mainpagee = () => {
  return ( 
    <div className="mainPage">
        <div className="welcomePage  w-full h-screen flex items-center justify-center text-white" 
      style={{backgroundImage: `url(${finalbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
        <div className='MainGlass h-5/6 w-5/6 bg-yellow-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-row'>
          <div className='h-inherit w-1/2 flex items-center justify-center'>
            <img src={vector} alt="vector" className='size-80 absolute z-0'/>
            <Mycarousel className="size-3 relative z-10"/>
          </div>
          <div className='h-inherit w-1/2 pt-2 pr-10'>
            <div>
                <p className='text-6xl font-bold -tracking-32 bg-gradient-to-r from-startgradient  to-endgradient text-transparent bg-clip-text py-1'>Welcome !</p>
                <div className='pb-3'>
                  <p className='text-sm bg-gradient-to-r from-white via-startgradient to-endgradient text-transparent bg-clip-text inline'>already signed up? </p>
                  <a href='/welcomeback' className='underline underline-offset-2 px-1'>Sign in here</a>
                </div>
            </div>
            <div className='Form'>
              <form action="/">
                <div className='flex flex-row  pr-5'>
                  <div className='fname mr-4'>
                    <label htmlFor="fname">First Name</label><br />
                    <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div className=' flex flex-row  py-1 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <img src={fname} alt="img" className='size-6 py-1'/>
                          <input type="text" className='bg-transparent  mx-2 focus:outline-0 w-full' />
                        </div>
                      </div>
                    </div>
                    <caption className='text-sm'>Internal</caption>
                  </div>
                  <div className='lname'>
                    <label htmlFor="lname">Last Name</label><br />
                    <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div className=' flex flex-row  py-1 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <img src={lname} alt="img" className='size-6 py-1' />
                          <input type="text" className='bg-transparent  mx-2 focus:outline-0 w-full' />
                        </div>
                      </div>
                    </div>
                    <caption className='text-sm'>External</caption>
                  </div>
                </div>
                <div className='contacts my-2'>
                  <div className='email'>
                      <label htmlFor="email">Email</label><br />
                      <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                        <div className='bg-black rounded-full'>
                          <div  className='flex flex-row  py-1 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                            <img src={email} alt="img" className=' py-1'/>
                            <input type="email" placeholder='johndoe@gmail.com' className='w-full mx-2 bg-transparent focus:outline-0'/>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='phno'>
                      <label htmlFor="email">Contact Number</label><br />
                      <div className=' my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                          <div  className=' flex flex-row justify-between  py-0.5 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                            <div className='flex flex-row'>
                              <img src={contact} alt="img" className='px-1 size-8'/>
                              <input type="tel" placeholder='9164253253' className='w-full mx-2 bg-transparent focus:outline-0' />
                            </div>
                            <div><button className=' px-5 rounded-full  bg-black border-2 border-borderend bg-opacity-25'>Verify</button></div>
                          </div>
                      </div>
                      </div>
                  </div>
                </div>
                <div className='Passwords flex flex-row mt-3'>
                  <div className='pwd mr-4'>
                    <label htmlFor="pwd">Password</label><br />
                    <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div className=' flex flex-row justify-between  py-0.5 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <img src={pwd} alt="img" className='px-1 size-8'/>
                          <input type="password" placeholder='**********' className='w-full mx-2 bg-transparent focus:outline-0'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='cpwd'>
                    <label htmlFor="pwd">Conirm password</label><br />
                    <div className='my-2 py-0.5 px-0.5 rounded-full bg-gradient-to-r from-borderstart to-borderend'>
                      <div className='bg-black rounded-full'>
                        <div className=' flex flex-row justify-between  py-0.5 px-3 bg-yellow-200 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
                          <img src={pwd} alt="img" className='px-1 size-8' />
                          <input type="password" placeholder='**********' className='w-full mx-2 bg-transparent focus:outline-0'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex align-center justify-center mt-4'>
                  <button className='bg-black p-2   border-2 rounded-full py-1 px-10'>Submit</button>
                </div>
              </form>
            </div>
            <hr className='h-px my-6 bg-white border-0 dark:bg-white-800'/>
            <div className='Footer flex flex-row justify-between'>
              <div className='withGgl flex flex-row '>
                <a href="/"><img src={ggl} alt="img" className='size-10' /></a>
                <a href="/">Sign up with Google</a>
              </div>
              <div className='signin flex flex-row'>
                <a href="/" className='px-2'>Sign in</a>
                <a href="/"><img src={signin} alt="img" className='size-8' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Mainpagee;