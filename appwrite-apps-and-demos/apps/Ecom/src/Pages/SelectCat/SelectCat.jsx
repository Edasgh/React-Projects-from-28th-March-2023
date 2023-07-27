import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import "./SelectCat.scss"
import "dotenv/config";
const SelectCat = () => {
  const [category , setCategory] = useState()
  return (
    <div className='select_cat'>
      <label htmlFor="Category">Select a Category to Create a Product :</label>
      <select name="Category" id="Category" value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
        <option value="undefined">*Select A Category</option>
        <option value=process.env.KIDS_COLL_ID>Kids</option>
        <option value=process.env.MEN_COLL_ID>Men</option>
        <option value=process.env.WOMEN_COLL_ID>Women</option>
      </select>
       <button type='submit'> <Link to={`/create_product/${category}`}>Proceed</Link></button>
    </div>
  )
}

export default SelectCat
