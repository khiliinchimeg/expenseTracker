"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

export const Cate = () => {
  const [accounts, setAccounts] = useState([]);
  const [title, setTitle] = useState(""); 
  const [amount, setAmount] = useState(""); 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/accounts");
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    getData();
  }, []);

  const createAccounts = async () => {
    const newAccount = {
      title,
      amount,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/accounts",
        newAccount
      );
      setAccounts([...accounts, response.data]);
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <div>
      <h1>Accounts</h1> 
      <ul>
        {accounts?.map((account, index) => (
          <li key={account.title + index}>
            {account?.title} - {account?.amount}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <Input
          className="border"
          value={title}
          onChange={(event) => setTitle(event.target.value)} 
        />

        <Input
          className="border"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button onClick={createAccounts}>Create</button>
      </div>
    </div>
  );
};
