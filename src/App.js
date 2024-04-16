import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions()
      .then((transactions) => {
        console.log("Transactions data:", transactions); // Log the data received from the API
        setTransactions(transactions);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error); // Log any errors that occur during data fetching
      });
  }, []);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL + "/transactions";
    const response = await fetch(url);
    return response.json();
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split(" ")[0];
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name.substring(price.length + 1),
        price,
        description,
        datetime,
      }),
    }).then((response) => {
      response.json().then((json) => {
        console.log("result", json);
        setName("");
        setDatetime("");
        setDescription("");
      });
    });
  }
  return (
    <main>
      <h1>
        $400<span>.00</span>
        {transactions.length}
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basics">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 for Moto TV"}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder={"description"}
          />
        </div>
        <button type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        {transactions.length > 0 &&
          transactions
            .map((transaction) => {
              return (
                <div className="transaction">
                  <div className="left">
                    <div className="name">{transaction.name}</div>
                    <div className="description">{transaction.description}</div>
                  </div>
                  <div className="right">
                    <div
                      className={
                        "price-" + (transaction.price < 0 ? "red" : "green")
                      }
                    >
                      {transaction.price}
                    </div>
                    <div className="datetime">{transaction.datetime}</div>
                  </div>
                </div>
              );
            })
            .reverse()}
      </div>
    </main>
  );
}

export default App;
