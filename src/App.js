import './App.css';
import logo from './image/Screenshot_2.png'

function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2' >
        <img className='h-24 mx-auto rounded-sm ring-1 ring-green-200' src={logo} alt="" />
        <div className='text-center space-y-2'>
          <div className='space-y-2'>
            <p className='text-lg text-black font-semibold' >Learn With Sumit</p>
            <p className='text-gray-500 font-medium'>YouTube Channel</p>
          </div>
          <button className='px-4 py-1 border border-purple-200 rounded-full font-semibold text-sm text-purple-600' >
            Visit Youtube
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
