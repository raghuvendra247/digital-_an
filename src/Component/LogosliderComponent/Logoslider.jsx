import './Logoslider.css';

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2BpLryfOPE_W4zr2-grBJ5DCrv50dGAiaQ&s",
  "https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg",
  "https://png.pngtree.com/template/20201030/ourmid/pngtree-star-blue-line-abstract-logo-design-template-image_430317.jpg",
  "https://png.pngtree.com/template/20190513/ourmid/pngtree-businessglobalinternationalnetworkweb-logo-design--blue-image_152506.jpg",
  "https://img.freepik.com/free-psd/instagram-application-logo_23-2151544098.jpg",
  "https://images.seeklogo.com/logo-png/42/2/noise-logo-png_seeklogo-427911.png"
];

export default function Logoslider() {
  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div className="slide-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
