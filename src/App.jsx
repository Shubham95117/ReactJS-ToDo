import './App.css'
import Todo from './assets/components/todo'
function App() {
  // const arr =[1,2,3];
 
  // const arr=[
  //   {
  //     id:1,
  //     name:'a'
  //   },
  //   {
  //     id:2,
  //     name:'b'
  //   },
  // ]
  return (
    <div className='App'>
      <Todo/>
      {/* dont need to write to return bcz we are not usinh {}  */}
      {/* {
        arr.map((x)=><>{x}</>)
      } */}
      {/* map  */}
   {/* {
    arr.map((num)=>{
      return(
        <>
        {num},
        </>
      )
    })
   } */}

   {/* filter  */}
   {/* {
    arr.filter((num)=>num!=3)
   } */}
   {/* object  */}

   {
    // arr.map((num)=>{
    //   return(
    //     <div key={num.id}>
    //     {/* {num.id} <br /> */}
    //     {num.name} <br />
    //     </div>
    //   )
    // })
   }
    </div>
  )
}

export default App
