import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    //let name = 'Saleh'

//    const [name, setName] = useState("Saleh") 
  //  const [age, setAge] = useState(25)
   // const handleClick = () => {
     // setName("Uzer")
      //setAge(45)
    //}

 //   return (
   //     <div className="home">
    //        <h1>This is your home page</h1>
     //       <p>{name} is {age} years old</p>
       //     <button onClick={handleClick}>Click Me</button>
           
        //</div>
      //);


    const[blogs, setBlogs] = useState([
        {title: 'My new website', body:'lorem ipsum...', author:'mario', id:1},
        {title: 'Welcome party', body:'lorem ipsum...', author:'Uzer', id:2},
        {title: 'Web dev top tips', body:'lorem ipsum...', author:'mario', id:3}
        
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => id !== id)
    }
    return(
        <div className="Home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
          
        </div>
    )



}
 
export default Home ;