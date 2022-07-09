import React, { useEffect, useState } from "react";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";
import { useNavigate } from "react-router-dom";

const VehiclesPage = () => {
  const navigate = useNavigate();

  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      console.log(payload);
      setVehicles(payload.data);
    };

    fetchVehicles();
  }, []);

  const handleChangeValue = () => {};

  console.log({ vehicles });

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <Search
          placeholder=" Buscar"
          value={search}
          onChange={handleChangeValue}
        />
        <i className={styles.filter} onClick={() => navigate("/filter")} />

        <Button text="Adicionar " onClick={() => navigate("/register")} />

        <div className={styles.containerCards}>
          {vehicles.map((vehicle) => (
            <Card title={vehicle.name} key={vehicle.id}>
              <i />
              <p>Preço: {vehicle.price}</p>
              <p>Descrição: {vehicle.description}</p>
              <p>Placa: {vehicle.plate}</p>
              <p>Ano: {vehicle.year}</p>
              <p>Cor: {vehicle.color}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VehiclesPage;
