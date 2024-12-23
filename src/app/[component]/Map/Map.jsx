import React from "react";

export default function Map() {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <iframe
        title="Jatra Bari Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.870235282745!2d90.41932551504227!3d23.708370784603097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b869f5ff1c99%3A0x49ef3641ffb5f2d4!2sJatra%20Bari!5e0!3m2!1sen!2sbd!4v1718054920997!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
