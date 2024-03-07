import finalbg from '../images/finalbg.png';
const Welcomeback = () => {
  return ( 
    <div className="Welcomeback">
      <div className="Welcomback  w-full h-screen flex items-center justify-center text-white" 
      style={{backgroundImage: `url(${finalbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}>
        <div className='MainGlass h-5/6 w-5/6 bg-yellow-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-row'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
   );
}
 
export default Welcomeback;