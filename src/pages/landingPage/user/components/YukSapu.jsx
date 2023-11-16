import { GiPlantWatering, GiUpgrade } from "react-icons/gi";
import "./css/yukSapu.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

const YukSapu = () => {
  return (
    <>
      <h4 className="text-center header-yuk">Yuk Sapu</h4>
      <hr className="line-header" />
      <div className="row">
        <div className="col-12">
          <div className="card card-sapu-yuk">
            <div className="card-body d-flex gap-4">
              <div className="icon-yuk">
                <GiUpgrade size={50} color="green" />
              </div>
              <div className="deskripsi-yuk">
                Yuk Sapu! Tingkatkan Pendapatan dengan Daur Ulang Sampah! Mari
                bersama-sama merawat lingkungan dan menghasilkan uang ekstra
                dengan memanfaatkan sampah bekas. Ayo, kita bisa melakukan
                perubahan positif untuk diri sendiri dan planet kita!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="card card-sapu-yuk">
            <div className="card-body d-flex gap-4 flex-row-reverse">
              <div className="icon-yuk">
                <GiPlantWatering size={50} color="green" />
              </div>
              <div className="deskripsi-yuk">
                Yuk Sapu! Bersihkan Lingkungan Sekitar Kita dengan Cinta dan
                Peduli. Mari jadikan tindakan kebersihan sebagai bentuk
                perhatian kita terhadap alam, lingkungan, dengan bersama-sama
                membersihkan.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="card card-sapu-yuk">
            <div className="card-body d-flex gap-4">
              <div className="icon-yuk">
                <RiDeleteBin6Fill size={50} color="green" />
              </div>
              <div className="deskripsi-yuk">
                Dengan menjaga kebersihan dan membuang sampah dengan benar, kita
                dapat melindungi alam, mencegah pencemaran, dan menciptakan
                tempat yang lebih bersih dan aman untuk semua.
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default YukSapu;
