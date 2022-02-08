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
      <button className="validMorePlus" onClick={() => setCounter(counter + 1)}>
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
</div>;
