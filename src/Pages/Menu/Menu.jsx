
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from"../../assets/menu/banner3.jpg"
import UseMenu from '../../Hooks/UseMenu';
import Sectiontitle from"../../../src/Components/Sectiontitle/Sectiontitle"
import Menucategory from './Menucategory/Menucategory';
import dessertImg from"../../assets/menu/dessert-bg.jpeg"
import pizzaimg from"../../assets/menu/pizza-bg.jpg"
import soupimage from"../../assets/menu/soup-bg.jpg"
import saladimg from"../../assets/menu/salad-bg.jpg"
const Menu = () => {
    const [menu]=UseMenu();
const dessert = menu.filter(item => item.category === 'dessert');
const salad   = menu.filter(item => item.category === 'salad');
const pizza   = menu.filter(item => item.category === 'pizza');
const soup    = menu.filter(item => item.category === 'soup');
const offered = menu.filter(item => item.category === 'offered');
  return (
        <div>
               <Helmet>
        <title>Bistro Boss |Menu</title>
      </Helmet>
      <Cover img={menuImg} title="OUR MENU" subtitile="Would you Like to Fry A Dish?"></Cover>
      <Sectiontitle heading="TODAY'S OFFER" subHeading="Don't Miss"></Sectiontitle>
      {/* offered */}
      <Menucategory items={offered}></Menucategory>
      {/* desserts */}
      <Menucategory items={dessert} title="Desserts" img={ dessertImg }
       subtitle="Dive into the world of irresistible sweetness with our handcrafted desserts. From velvety cheesecakes 
       and rich brownies to refreshing fruit parfaits and classic tiramisu — each dish is a masterpiece of flavor and finesse. Perfectly balanced in taste, texture,
        and presentation, our desserts are made to satisfy every sweet craving and leave a lasting impression." >
      </Menucategory>
      {/* pizza */}
      <Menucategory items={pizza} title="pizza"  img={pizzaimg}
      subtitle="Experience the irresistible aroma and flavor of our artisanal pizzas — baked to perfection
       with a golden crust, bubbling cheese, and a rich medley of fresh toppings. Whether you prefer classic Margherita,
       spicy pepperoni, or a gourmet blend of exotic ingredients, each slice is a celebration of taste."
      >
 </Menucategory>
 {/* soups */}
 <Menucategory items={soup} title="soup" img={soupimage}
 subtitle="Warm your soul with our handcrafted soups — a perfect blend of comfort and flavor. From the richness
  of creamy tomato bisque to the wholesome
  goodness of chicken noodle and the bold zest of spicy Thai soups, our selection caters to every craving"
 >       

 </Menucategory>
 {/*  salad*/}
 <Menucategory items={salad} title="salad"  img={saladimg}
 subtitle="Celebrate freshness with our vibrant salads, bursting with colour, crunch, and nourishing flavour.
  From crisp garden greens tossed in a zesty vinaigrette to Mediterranean bowls
  brimming with olives, feta, and sun-kissed tomatoes, each creation is a symphony of texture and taste. "
 >

 </Menucategory>
        </div>
    );
};

export default Menu;