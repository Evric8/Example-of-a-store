import  { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useGetProductIdQuery,
  useUpdateProductMutation,
} from "../../../features/FakeStoreApi/ProductsApi";
import StarRateIcon from "@mui/icons-material/StarRate";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasket,
  selectItemCount,
} from "../../../features/Slice/CountInBasketSlice";
import { styles } from "./StylesMainProductId";

const MainProductId = () => {
  // const location = useLocation();
  // const productItemLocation = location.state?.item;
  // console.log(productItemLocation);

  const { id } = useParams();
  const { data: productItem } = useGetProductIdQuery(id);
  // console.log(id, productItem);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(productItem);
  // console.log(product);

  const handleAdd = () => {
    // console.log(product);
    dispatch(addBasket(product));
    navigate("/basket", { state: { product } });
  };

  const countFromSlice = useSelector((state) =>
    selectItemCount(state, product?.id)
  );
  // console.log(countFromSlice);

  const handleNavigateBasket = () => {
    navigate("/basket", { state: { product } });
  };

  //work with api
  useEffect(() => {
    if (productItem) {
      setProduct(productItem);
    }
  }, [productItem]);

  return (
    product && (
      <Card sx={styles.card}>
        <Typography gutterBottom variant="h5" component="div" sx={styles.title}>
          {product.category[0].toUpperCase() + product.category.slice(1)}
        </Typography>
        <CardMedia
          component="img"
          image={product.image}
          sx={styles.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>

          <Typography sx={styles.typography}>
            <StarRateIcon />
            rating:{product.rating.rate}
          </Typography>

          <Typography variant="h5" sx={styles.price}>
            {product.price}
            <AttachMoneyIcon sx={styles.icon} />
          </Typography>

          <Typography variant="body2" sx={styles.text}>
            {product.description}
          </Typography>
        </CardContent>

        {countFromSlice > 0 ? (
          <CardActions>
            <Button
              variant="contained"
              sx={styles.width}
              onClick={handleNavigateBasket}
            >
              Перейти в корзину
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button
              variant="contained"
              sx={styles.width}
              onClick={handleAdd}
            >
              Купити
            </Button>
          </CardActions>
        )}
      </Card>
    )
  );
};

export default MainProductId;

/*const [updateProduct, { data }] = useUpdateProductMutation();
const handleUpdate = async () => {
  const updatedProduct = {
    ...product,
    price: Number((product.price + 10).toFixed(2)),
    id: product.id,
  };

  try {
    const result = await updateProduct(updatedProduct).unwrap();
    // console.log(result);
    setProduct(updatedProduct);
  } catch (err) {
    console.log(err);
  }
}; */
