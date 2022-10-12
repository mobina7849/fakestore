
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import image from "../../assets/images/controller.png";
import Container from '../../component/container/Container';
import Card from '../../component/card/Card';
import { Link } from 'react-router-dom';
import './categories.style.scss';
const Categories = () => {
    //esm params mostaghim az router miad baed :
    const {categoryID}=useParams()
    console.log(categoryID)
    const [categories, setCategories] = useState([
        { id: 1, title: "موبایل" },
        { id: 2, title: "لپ تاپ" },
        { id: 3, title: "تلویزیون" },
        { id: 4, title: "بازی" },
        { id: 5, title: "لوازم جانبی" },
      ]);
      const [productList, setProductList] = useState([
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        { 
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
        {
          id:Math.floor(Math.random()*100),
          image: image,
          name: "نام آیتم در دسته بندی",
          price: 22_000_000,
          onClick: () => {},
        },
      ]);
    return ( 
        <div className="Categories">
        <Container>
          <div className="Categories__content">
            <ul className="categories__list">
              {categories.map((item) => (
                <li key={item.id}>
                  <Link to={`/categories/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="product">
              <h1>
                {
                  categories.find((item) => item.id.toString() === categoryID).title
                }
              </h1>
              <div className="product__list">
                {productList.map((p) => (
                  <Card key={p.id} {...p} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}
 
export default Categories;