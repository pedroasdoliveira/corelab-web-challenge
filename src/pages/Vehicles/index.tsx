import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Search } from "../../components";
import { getVehicles } from "../../lib/api";
import { IVehicle } from "../../types/Vehicle";
import styles from "./Vehicles.module.scss";

const VehiclesPage = () => {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload.data);
    };

    fetchVehicles();
  }, []);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search
          placeholder=" Buscar"
          value={search}
          handleChangeValue={handleChangeValue}
        />

        <i className={styles.filter} onClick={() => navigate("/filter")} />

        <Button text="Adicionar " onClick={() => navigate("/register")} />

        <div className={styles.containerCards}>
          {search !== ""
            ? vehicles
                .filter(
                  (e: IVehicle) =>
                    e.name.toLowerCase().includes(search.toLowerCase()) ||
                    e.color.toLowerCase().includes(search.toLowerCase()) ||
                    e.plate.toLowerCase().includes(search.toLowerCase()) ||
                    e.year.toFixed().includes(search.toLowerCase()) ||
                    e.price.toFixed().includes(search.toLowerCase())
                )
                .map((vehicle) => (
                  <Card
                    title={vehicle.name}
                    key={vehicle.id}
                    id={vehicle.id}
                    name={vehicle.name}
                    description={vehicle.description}
                    brand={vehicle.brand}
                    plate={vehicle.plate}
                    year={vehicle.year}
                    color={vehicle.color}
                    price={vehicle.price}
                  >
                    <p>Preço: {vehicle.price}.</p>
                    <p>Descrição: {vehicle.description}.</p>
                    <p>Placa: {vehicle.plate}.</p>
                    <p>Ano: {vehicle.year}.</p>
                    <p>Cor: {vehicle.color}.</p>
                  </Card>
                ))
            : vehicles.map((vehicle) => (
                <Card
                  title={vehicle.name}
                  key={vehicle.id}
                  id={vehicle.id}
                  name={vehicle.name}
                  description={vehicle.description}
                  brand={vehicle.brand}
                  plate={vehicle.plate}
                  year={vehicle.year}
                  color={vehicle.color}
                  price={vehicle.price}
                >
                  <p>Preço: {vehicle.price}.</p>
                  <p>Descrição: {vehicle.description}.</p>
                  <p>Placa: {vehicle.plate}.</p>
                  <p>Ano: {vehicle.year}.</p>
                  <p>Cor: {vehicle.color}.</p>
                </Card>
              ))}
        </div>
      </main>
    </div>
  );
};

export default VehiclesPage;
