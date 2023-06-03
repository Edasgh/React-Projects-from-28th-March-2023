import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import "./ViewProducts.scss"
const ViewProducts = () => {
  const [category , setCategory] = useState()
  return (
    <div className='select_cat'>
      <label htmlFor="Category">Select a Category to Create a Product :</label>
      <select name="Category" id="Category" value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
        <option value="undefined">*Select A Category</option>
        <option value="647592b520cac59e4f93">Kids</option>
        <option value="6475929e6225730818af">Men</option>
        <option value="647592ad2898cd9ef7f7">Women</option>
      </select>
       <button type='submit'> <Link to={`/products/${category}`}>Proceed</Link></button>
    </div>
  )
}

export default ViewProducts