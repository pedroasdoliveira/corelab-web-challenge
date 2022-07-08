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
      setVehicles(payload);
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

          <Card title="Sandero Stepway">
            <p>Price: 22000</p>
            <p>Description: Carro usado por 2 anos...</p>
            <p>Year: 2018</p>
          </Card>

          <Card title="Sandero Stepway">
            <p>Price: 22000</p>
            <p>Description: Carro usado por 2 anos...</p>
            <p>Year: 2018</p>
          </Card>
          
        </div>

      </main>
    </div>
  );
};

export default VehiclesPage;
