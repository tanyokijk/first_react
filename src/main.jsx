import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './Book.jsx'
import Group from './Group.jsx'
import Recipe from './Recipe.jsx'
import './index.css'

const reviews = [
  { text: "Really enjoyed reading a book that I can't talk about. I'd say the cuts from scene to scene were innovative, but I can't talk about it. I'd ask if Marla was a third personality, but can't talk about it. Great read." },
  { text: "Reread this, and it hits harder now. Chuck Palahnuik is a genius. It's a quick read but has pages of thought-provoking quotes. It's a book that you think about and remember forever." },
  { text: "Great pace, a very fast read with plenty of meat. I could not put it down. We await your return Mr. Durden." }
];
const members = [
  {name: "Till Lindemann", role: "Vocalist"},
  {name: "Oliver Riedel", role: "Bassist"},
  {name: "Richard Kruspe", role: "Solo guitarist"},
  {name: "Paul Landers", role: "Guitarist"},
  {name: "Christian Lorenz", role: "Keyboardist"},
  {name: "Christoph Schneider", role: "Drummer"},
];
const albums = [
  {name: "Zeit", img: "/zeit.jpg"},
  {name: "Mutter", img: "/mutter.jpg"},
  {name: "Sehnsucht", img: "/sehnsucht.jpg"},
];

const components= [
  {name: "Flour", quantity: "500 g"},
  {name: "Eggs", quantity: "2 pcs."},
  {name: "Milk", quantity: "1 cup"},
  {name: "Vegetable oil", quantity: "1 tbsp. spoon"},
  {name: "Salt", quantity: "1.5 tsp"},
  {name: "Minced pork", quantity: "500 g"},
  {name: "Onions", quantity: "1 pc."},
  {name: "Ground black pepper", quantity: "0.5 tsp"},
];

const consistency = [
  { text: "First prepare the dough:Mix 500 g of flour with salt." },
  { text: "Warm the milk to a temperature of 40 degrees centigrade. Add eggs and vegetable oil. Mix thoroughly." },
  { text: "Make a depression in the flour and pour the prepared liquid into it. Carefully start mixing the liquid with the flour." },
  { text: "Knead the dough into an elastic dough. Cover with a towel and leave for 30 minutes." },
  { text: "Prepare stuffing:Peel onions, chop (with a meat grinder, blender) and mix with minced meat." },
  { text: "Season with salt and pepper. Mix thoroughly." },
  { text: "It is easier to use the dough in batches.Sprinkle the table with flour (100 g).Roll out a quarter of the dough into a 1.5-2 mm thick layer and cut out circles with a mould or a glass of a suitable diameter.The rest of the dough can be kneaded and rolled out again, or you can boil it just like this )))))" },
  { text: "Spread the mincemeat (about 1 tsp) on each circle." },
  { text: "Carefully mould the edges to form a crescent moon. And then form the actual dumpling. To do this, connect the corners to each other." },
  { text: "Boil the water and cook the dumplings for about 8 minutes.The dumplings are ready. Bon appetit!" },
];
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Book book_name="Fight Club" author_name="Chuck Palahniuk" genre = "Satirical novel" reviews={reviews} page_count={318}/>
    <Group name="Rammstein" members={members} albums={albums}/>
    <Recipe name="Pelmeni" components={components} consistency={consistency} photo="/pelmeni.jpg"/>
  </React.StrictMode>,
)
