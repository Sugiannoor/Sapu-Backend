

const GoogleMap = () => {
    return (
      <div>
        <iframe
          title="Google-Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.421465332813!2d114.83632536131593!3d-3.445744735726079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6810dd27cdb3d%3A0xf5c19d6b3bc3d1c0!2sMuseum%20Lambung%20Mangkurat!5e0!3m2!1sid!2sid!4v1699938055002!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: '2px solid green', width: '100%', borderRadius: '10px'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;