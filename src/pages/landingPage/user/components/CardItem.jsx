import { useEffect, useState } from "react";
import axios from "axios";
import { ButtonElement } from "../../../../components/elements/button";
import "./css/cardItem.css"
import { useNavigate } from "react-router-dom";




const CardItem = () => {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClickJual = (productId) => {
    navigate (`form-jual/${productId}`);
  };
  return (
    <div>
    <h4 className="mt-5 text-center">Kirim Sampah</h4>
    <hr className="line-header"/>
    <div className="mx-4 gap-3 row jual-sampah-section">
    {products.map((product) => (
          <div className="card card-sampah" key={product.id}>
            <div className="card-body d-flex gap-2">
              <div className="gambar-sampah-container text-center">
              <img src={product.image} className="gambar-sampah" alt= {`Gambar Sampah ${product.title}`}/>
              </div>
              <div>
              <h5 className="card-title">{product.title}</h5>
              <p>{product.description}</p>
              <p>Rp. {product.price}</p>
              <ButtonElement
                className="btn btn-success"
                handleClick={() => handleClickJual(product.id)}
              >
                Jual
              </ButtonElement>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default CardItem;
