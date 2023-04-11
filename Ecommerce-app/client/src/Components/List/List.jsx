import React from 'react'
// import { Link } from 'react-router-dom';
import "./List.scss"
import Card from '../../Components/Card/Card';
const List = () => {
    const data = [
        {
          id: 1,
          image1:
            "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinyrgb&w=1600",
          image2:
            "https://images.pexels.com/photos/15336614/pexels-photo-15336614.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "SportsWear",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          image1:
            "https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=1600",
            image2:"https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 3,
          image1:"https://images.pexels.com/photos/2888211/pexels-photo-2888211.jpeg?auto=compress&cs=tinysrgb&w=1600",
          image2:
            "https://images.pexels.com/photos/8180732/pexels-photo-8180732.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Skirt",
          oldPrice: 19,
          price: 12,
        },
        {
          id: 4,
          image1:
            "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=1600",
          image2:"https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Hat",
          oldPrice: 19,
          price: 12,
        },
        {
          id: 5,
          image1:"https://images.pexels.com/photos/9896926/pexels-photo-9896926.jpeg?auto=compress&cs=tinysrgb&w=1600",
          image2:
            "https://images.pexels.com/photos/9980378/pexels-photo-9980378.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Wrist-Watch",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 6,
          image1:
            "https://images.pexels.com/photos/894077/pexels-photo-894077.jpeg?auto=compress&cs=tinysrgb&w=1600",
          image2:"https://images.pexels.com/photos/8364109/pexels-photo-8364109.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Sunglass",
          oldPrice: 19,
          price: 12,
        },
        {
          id: 7,
          image1:
            "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1600",
          image2:"https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Perfume",
          isNew:true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 8,
          image1:"https://images.pexels.com/photos/600195/pexels-photo-600195.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          image2:
            "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Bag",
          isNew:true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 9,
          image1:
            "https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=1600",
          image2:"https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          title: "Heels",
          isNew:true,
          oldPrice: 19,
          price: 12,
        },
      ];
  return (
    <>
     <div className="list">{data?.map(item=>(
       <Card item={item} key={item.id}/>
        ))}
        </div> 
         
    </>
  )
}

export default List
