import {LiaMapSolid} from 'react-icons/lia'
import './css/cardContact.css'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import GoogleMap from './GoogleMaps'
const CardContact = () => {
  return (
    <div>
     <h4 className='text-center header-contact'>Contact</h4>
     <hr className='line-header' />
     <div className="row">
        <div className="col-6">
            <div className="card card-maps position-relatif">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="position-absolute">
              <path
                fill="#116530"
                fillOpacity="0.4"
                d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,277.3C672,299,768,309,864,277.3C960,245,1056,171,1152,154.7C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
                <div className="card-body card-body-maps d-flex flex-column">
                    <span className="icon-maps">
                    <LiaMapSolid size={40} color='white'/>
                    </span>
                    <p className='maps-header mt-2'>Lokasi :</p>
                    <p className='maps-deskripsi'>Jl. Kampung Durian Runtuh Rt.01 No.25</p>
                </div>
            </div>
        </div>
        <div className="col-6">
        <div className="card card-maps position-relatif">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="position-absolute">
              <path
                fill="#116530"
                fillOpacity="0.4"
                d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,277.3C672,299,768,309,864,277.3C960,245,1056,171,1152,154.7C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
                <div className="card-body card-body-maps d-flex flex-column">
                    <span className="icon-maps">
                    <LiaMapSolid size={40} color='white'/>
                    </span>
                    <p className='maps-header mt-2'>Kontak Kami :</p>
                    <span className='maps-deskripsi'><AiOutlineWhatsApp size={20}/> +62-324-1234-5231                    
                    </span>
                </div>
            </div>
        </div>
        
     </div>
        <div className="row mt-4">
            <div className="col-12">
                <GoogleMap/>
            </div>
        </div>
      </div>
  )
}

export default CardContact
