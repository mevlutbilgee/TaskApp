import './Navbar.scss' 
import { useContext , useEffect , useState} from 'react'
import { TestCaseContext } from '../../context/testcasecontext'
const Navbar = () => {
  const { completed } = useContext(TestCaseContext);
  const [sum, setsum] = useState();
  useEffect(() => {
    
    let pointer =0;
    completed.forEach(element => {
    pointer = pointer + element.point
      
    });
    setsum(pointer)
  
  },[])
  
  return (
    <div className='bar'>
        <h2>TestCase APP</h2>
        <div className='pointer'>Point : {sum}</div>
    </div>
  )
}

export default Navbar