import React from 'react';
//import Card from '../../component/card/Card';
//import Button from '../../component/button/Button';
import image from '../../assets/images/controller.png'
import CardList from '../../component/card_list/CardList';
import Container from '../../component/container/Container';
import Card from '../../component/card/Card';
import './home.style.scss';
const products=[
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
        {
            id:Math.floor(Math.random()*100),
            image:image,
            name:"نام آیتم در دسته بندی",
            price:22_000_000
        },
];
const Home = () => {
    return ( 
      <div className='Home' >
          <Container>
            <CardList
            title={"دسته بندی اول"}
            href="/categories/1">
                {products.map(item=>(
                    <Card key={item.id} {...item}/>
                ))}
            </CardList>
            <CardList
            title={"دسته بندی دوم"}
            href="/categories/2">
                {products.map(item=>(
                    <Card key={item.id} {...item}/>
                ))}
            </CardList>
            <CardList
            title={"دسته بندی سوم"}
            href="/categories/3">
                {products.map(item=>(
                    <Card key={item.id} {...item}/>
                ))}
            </CardList>
            <CardList
            title={"دسته بندی چهارم"}
            href="/categories/4">
                {products.map(item=>(
                    <Card key={item.id} {...item}/>
                ))}
            </CardList>
          </Container>
        </div>
     );
}
 
export default Home;