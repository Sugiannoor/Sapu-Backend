import { useState, useEffect } from "react";
import { InputElement } from "../../../../components/elements/input";
import { ButtonElement } from "../../../../components/elements/button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FormJual = () => {
  const [loading, setLoading] = useState(true);
  const { idBarang } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    nama_barang: "",
    alamat: "",
    harga: "",
    image: "",
    jumlah: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${idBarang}`
        );
        const productData = response.data;

        setFormData((prevData) => ({
          ...prevData,
          nama_barang: productData.title,
          harga: productData.price, // convert harga to string if needed
          image: productData.image,
        }));
        setLoading(false);
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
    <>
      <div className="d-flex flex-column container bg-white p-4">
        <h4 className="text-center">Formulir Jual</h4>
        <hr className="line-header" />
        <div className="row">
          {loading ? (
            <div className="image-sampah text-center">
              <Skeleton width={300} height={300} />
            </div>
          ) : (
            <div className="image-sampah text-center">
              <img
                src={formData.image === undefined ? "" : formData.image}
                alt="Gambar Sampah"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <InputElement
              label="Nama Penjual"
              type="text"
              name="nama_lengkap"
              id="nama_lengkap"
              value={
                formData.nama_lengkap === undefined ? "" : formData.nama_lengkap
              }
              className="mb-2"
              disabled
            />
            <InputElement
              label="Nama Barang"
              type="text"
              name="nama_barang"
              id="nama_barang"
              value={
                formData.nama_barang === undefined ? "" : formData.nama_barang
              }
              className="mb-2"
              disabled
            />
            <InputElement
              label="Alamat Penjemputan *"
              type="text"
              name="alamat"
              id="alamat"
              value={formData.alamat === undefined ? "" : formData.alamat}
              onChange={handleChange}
              className="mb-2"
              required
            />
            <InputElement
              label="Harga / Kg"
              type="text"
              name="harga"
              id="harga"
              value={formData.harga === undefined ? "" : formData.harga}
              className="mb-2"
              disabled
            />
            <InputElement
              label="Perkiraan Sampah (Kg) *"
              type="number"
              name="jumlah"
              id="jumlah"
              value={formData.jumlah === undefined ? "" : formData.jumlah}
              className="mb-2"
              onChange={handleChange}
            />
            <div
              className="text-end mt-5"
              style={{ fontWeight: 500, fontFamily: "inherit" }}
            >
              Total: Rp.{formData.harga * formData.jumlah}
            </div>

            <ButtonElement
              handleClick={handleSubmit}
              type="submit"
              className="btn btn-success"
              isLoading={false}
            >
              Jual
            </ButtonElement>
            <ButtonElement
              handleClick={() => navigate(-1)}
              type="submit"
              className="btn btn-danger mx-2"
              isLoading={false}
            >
              Kembali
            </ButtonElement>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormJual;
