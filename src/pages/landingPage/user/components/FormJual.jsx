import { useState, useEffect } from "react";
import { InputElement } from "../../../../components/elements/input";
import { ButtonElement } from "../../../../components/elements/button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const FormJual = () => {
  const { idBarang } = useParams();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    nama_barang: "", 
    alamat: "",
    harga: "",
    jumlah: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${idBarang}`);
        const productData = response.data;

        setFormData((prevData) => ({
          ...prevData,
          nama_barang: productData.title,
          harga: productData.price // convert harga to string if needed
        }));
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [idBarang]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk mengirim data form ke API atau melakukan operasi lainnya sesuai kebutuhan
  };

  return (
    <div>
      <h4>Formulir Jual</h4>
      <hr className="line-header" />
      <div className="row">
        <div className="image-sampah">
          <img src="" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <InputElement
            label="Nama Penjual"
            type="text"
            name="nama_lengkap"
            value={formData.nama_lengkap === undefined ? "" : formData.nama_lengkap}
            disabled
          />
          <InputElement
            label="Nama Barang"
            type="text"
            name="nama_barang"
            value={formData.nama_barang === undefined ? "" : formData.nama_barang}
            disabled
          />
          <InputElement
            label="Alamat Penjemputan"
            type="text"
            name="alamat"
            value={formData.alamat === undefined ? "" : formData.alamat}
            onChange={handleChange}
          />        
          <InputElement
            label="Harga / Kg"
            type="text"
            name="harga"
            value={formData.harga === undefined ? "" : formData.harga}
            disabled
          />
          <InputElement
            label="Jumlah Barang (Kg)"
            type="number"
            name="jumlah"
            value={formData.jumlah === undefined ? "" : formData.jumlah}
            onChange={handleChange}
          />
          <div>Total Uang: {formData.harga * formData.jumlah}</div>

          <ButtonElement
            handleClick={handleSubmit}
            type="submit"
            className="btn btn-success"
            isLoading={false}
          >
            Jual
          </ButtonElement>
          <ButtonElement
            handleClick={()=> navigate(-1)} 
            type="submit"
            className="btn btn-success"
            isLoading={false}
          >
            Kembali
          </ButtonElement>
        </form>
      </div>
    </div>
  );
};

export default FormJual;
