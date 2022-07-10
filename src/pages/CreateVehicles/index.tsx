import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icon/arrow_back.png";
import "./style.scss";
import { API } from '../../lib/api'

interface RegisterVehicleObj {
  name: string;
  brand: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

const RegisterVehicles = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    brand: '',
    description: '',
    plate: '',
    year: 0,
    color: '',
    price: 0,
  });

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: RegisterVehicleObj) => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }

  const registerVehicle = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    await fetch(`${API}/vehicles`, {
      method: 'POST',
      body: JSON.stringify({
        ...values,
        is_favorite: false,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    

    navigate('/')
  } 

  return (
    <div className="Page">
      <img
        className="BackIcon"
        src={BackIcon}
        alt="Icone de voltar"
        onClick={() => navigate("/")}
      />

      <main className="Container">
        <form onSubmit={registerVehicle}>

          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="  Sandero"
            required
            onChange={handleChangeValues}
          />

          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="  Renault"
            required
            onChange={handleChangeValues}
          />

          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="  Vermelho"
            required
            onChange={handleChangeValues}
          />

          <label htmlFor="year">Ano:</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="  2016"
            required
            onChange={handleChangeValues}
          />

          <label htmlFor="plate">Placa:</label>
          <input
            type="text"
            name="plate"
            id="plate"
            placeholder="  PWZ1020"
            required
            onChange={handleChangeValues}
          />

          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="  45000"
            required
            onChange={handleChangeValues}
          />

          <label htmlFor="description">Descrição:</label>
          <input
            type='text'
            name="description"
            id="description"
            placeholder="  Algum comentario..."
            required
          />

          <button type="submit">
            Salvar
          </button>

        </form>
      </main>
    </div>
  );
};

export default RegisterVehicles;
