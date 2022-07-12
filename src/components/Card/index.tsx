import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../assets/icon/delete.png";
import EditIcon from "../../assets/icon/edit.png";
import FavoriteIcon from "../../assets/icon/favorite.png";
import styles from "./Card.module.scss";

interface ICard {
  title: string;
  children: ReactNode;
  id: number | undefined;
  name: string;
  description: string;
  brand: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

const Card = (props: ICard) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/:${props.id}`);
  };

  const handleDelete = async () => {};

  return (
    <>
      <div className={styles.Card}>
        <div className={styles.IconsContainer}>
          <img
            className={styles.EditCard}
            src={EditIcon}
            alt="Icone de editar o card"
            onClick={handleEdit}
          />
          <img
            className={styles.DeleteCard}
            src={DeleteIcon}
            alt="Icone de deletar o card"
            onClick={handleDelete}
          />
          <img
            className={styles.FavoriteIcon}
            src={FavoriteIcon}
            alt="Icone de favoritar o card"
          />
        </div>
        <h2>{props.title}</h2>
        <div className={styles.content}>{props.children}</div>
      </div>
    </>
  );
};

export default Card;
