import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icon/arrow_back.png";
import "./style.scss";

interface EditVehicleObj {
  name: string;
  brand: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

const EditVehicle = () => {
  const navigate = useNavigate();

  return (
    <div className="Page">
      <img
        className="BackIcon"
        src={BackIcon}
        alt="Icone de voltar"
        onClick={() => navigate("/")}
      />

      <main className="Container">
        <form action="">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="  Sandero"
            required
          />

          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="  Renault"
            required
          />

          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="  Vermelho"
            required
          />

          <label htmlFor="year">Ano:</label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="  2016"
            required
          />

          <label htmlFor="plate">Placa:</label>
          <input
            type="text"
            name="plate"
            id="plate"
            placeholder="  PWZ1020"
            required
          />

          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="  45000"
            required
          />

          <label htmlFor="description">Descrição:</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="  Algum comentario..."
            required
          />

          <button type="submit">Editar</button>
        </form>
      </main>
    </div>
  );
};

export default EditVehicle;
