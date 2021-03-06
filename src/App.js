import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Cases from "./components/Cases";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [basket, setBasket] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://deliverooooo.herokuapp.com/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      {/* HEADER */}
      <Header data={data}></Header>

      {/* CORPS */}
      <div className="back">
        <div className="background container">
          <div>
            {data.categories.map((mealtype) => {
              return (
                <div>
                  <h2 className="titres">{mealtype.name} </h2>
                  <div className="entreCases">
                    {mealtype.meals.map((meal) => {
                      return (
                        <div
                          key={meal.id}
                          onClick={() => {
                            const newcart = [...cart];
                            meal.counter = 1;
                            newcart.push(meal);
                            setCart(newcart);
                            // console.log(newcart);
                          }}
                        >
                          <Cases meal={meal} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* BOUTON VALIDER */}
          <div className="validerCase">
            <button className="buttonValider">Valider mon panier</button>
            {cart.length === 0 ? (
              <p></p>
            ) : (
              cart.map((item, index) => {
                return <div>{item.title}</div>;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
