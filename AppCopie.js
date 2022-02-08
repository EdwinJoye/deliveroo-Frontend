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
                          onClick={() => {
                            const newcart = [...cart];
                            newcart.push(meal);
                            setCart(newcart);
                            console.log(newcart);
                          }}
                        >
                          <Cases meal={meal} />
                          <div key={meal.id} onClick={() => {}}></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* BOUTON VALIDER */}
          <div>
            {cart.map((item, index) => {
              return (
                <div className="validerCase">
                  <button className="buttonValider">Valider mon panier</button>
                  <div className="sousTotal button1">
                    <div className="display align">
                      {counter > 0 && (
                        <button
                          className="validMorePlus"
                          onClick={() => setCounter(counter - 1)}
                        >
                          -
                        </button>
                      )}
                      <p className="counter ">{counter}</p>
                      <button
                        className="validMorePlus"
                        onClick={() => setCounter(counter + 1)}
                      >
                        +
                      </button>
                      <div>
                        <p className="validTitre">{item.title}</p>
                      </div>
                    </div>
                    <p>{item.price} €</p>
                  </div>
                  <div className="sousTotal buttonAutres">
                    <p>Sous-total</p>
                    <p>{item.price} €</p>
                  </div>
                  <div className="sousTotal buttonAutres">
                    <p>Frais de livraison</p>
                    <p>2,50 €</p>
                  </div>

                  <div className="sousTotal">
                    <p className="buttonsTotal">Total</p>
                    <p className="buttonsTotal">{item.price} €</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
