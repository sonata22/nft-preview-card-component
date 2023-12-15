import { useState } from 'react';
import './App.css'

// CSS Colors List
const cyan = "hsl(178, 100%, 50%)";
const white = "hsl(0, 0%, 100%)";

const nftComponentData = [
  {
    id: 11,
    image: "./src/images/0011_Deep_Ocean_Siren.png",
    name: "Deep Ocean Siren",
    price: 0.075,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
  },
  {
    id: 25,
    image: "./src/images/0025_Pink_Chinchilla.png",
    name: "Pink Chinchilla",
    price: 0.096,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
  },
  {
    id: 2,
    image: "./src/images/0002_Blue_Octane.png",
    name: "Blue Octane",
    price: 0.087,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
  },
]

const Price = ({ price }) => {
  const priceElement = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    gap: "5px",
  };
  const rhombusIconTop = {
    width: "9px",
    height: "14px",
    background: cyan,
    clipPath: "polygon(0% 50%, 50% 0%, 100% 50%, 50% 70%)",
    position: "absolute",
  };
  const rhombusIconBottom = {
    width: "9px",
    height: "14px",
    background: cyan,
    clipPath: "polygon(3% 55%, 50% 73%, 97% 55%, 50% 100%)",
    position: "relative",
  };
  const priceText = {
    color: cyan,
    fontSize: "11px",
  }
  return (
    <>
      <div style={priceElement}>
        <div>
          <div style={rhombusIconTop}></div>
          <div style={rhombusIconBottom}></div>
        </div>
        <p style={priceText}>{price + " ETH"}</p>
      </div>
    </>
  )
}

const Author = ({ author, authorPic }) => {
  const [textColor, setTextColor] = useState(white);
  const [cursor, setCursor] = useState("default");
  const authorDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    marginTop: "10px",
    marginBottom: "5px",
  };
  const authorTextStyle = {
    margin: "0",
  };
  const authorInscriptionStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const authorInitialsStyle = {
    margin: "0",
    color: textColor,
    cursor: cursor,
  };
  const authorProfilePicStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: "1px solid hsl(0, 0%, 100%)",
  };

  return (
    <div style={authorDiv}>
      <img style={authorProfilePicStyle} src={authorPic} alt={author} className="profilePic" />
      <div style={authorInscriptionStyle}>
        <p style={authorTextStyle}>Creation of </p>
        <p
          style={authorInitialsStyle}
          onMouseEnter={() => { setTextColor(cyan); setCursor("pointer"); }}
          onMouseLeave={() => { setTextColor(white); setCursor("default"); }}
        >
          {author}
        </p>
      </div>
    </div>
  )
}

const NftComponent = (nftData) => {
  const [textColor, setTextColor] = useState(white);
  const [cursor, setCursor] = useState("default");
  const [opacity, setOpacity] = useState("0");
  const [eyeIconOpacity, setEyeIconOpacity] = useState("0");
  const getUniqueId = (id) => "#" + "0".repeat(4 - String(id).length) + id;
  const divider = {
    width: "auto",
    height: "0.5px",
    background: "hsl(215, 32%, 27%)",
  };
  const nftTitleStyle = {
    width: "auto",
    color: textColor,
    fontSize: "15.5px",
    fontWeight: "600",
    cursor: cursor,
  };
  const paragraphTextStyle = {
    margin: "5px 0 5px 0",
  };
  const nftImg = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "220px",
    height: "220px",
    borderRadius: "5px",
  };
  const nftImgHoverBg = {
    width: "220px",
    height: "220px",
    borderRadius: "5px",
    opacity: ".5",
    position: "absolute",
    background: cyan,
    opacity: opacity,
  };
  const eyeIconStyle = {
    position: "absolute",
    opacity: eyeIconOpacity,
  };
  const imgWithHoverStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div className="nft-template">
        <div
          style={imgWithHoverStyle}
          onMouseEnter={() => { setEyeIconOpacity("1"); setOpacity("0.7"); }}
          onMouseLeave={() => { setEyeIconOpacity("0"); setOpacity("0"); }}
        >
          <div style={nftImgHoverBg}></div>
          <svg style={eyeIconStyle} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" fill="#ffffff" /></svg>
          <img
            style={nftImg}
            src={nftData.data.image}
            alt={nftData.data.name}
            className="image"
          />
        </div>
        <div>
          <p
            style={nftTitleStyle}
            onMouseEnter={() => { setTextColor(cyan); setCursor("pointer"); }}
            onMouseLeave={() => { setTextColor(white); setCursor("default"); }}
          >
            {nftData.data.name} {getUniqueId(nftData.data.id)}</p>
          <p style={paragraphTextStyle}>Our {nftData.data.collection} collection aims to highlight the warm memories that we keep safely in our hearts throughout our lives, in the midst of this world full of injustice and delusion.</p>

          <Price price={nftData.data.price} />
          <div style={divider}></div>
          <Author authorPic={nftData.data.authorPic} author={nftData.data.author} />
        </div>
      </div>
    </>
  )
}

function App() {
  const h1Style = {
    fontFamily: "Outfit",
    marginTop: "15px",
    marginBottom: "15px",
    fontSize: "25px",
    color: white,
    fontWeight: "600",
  };
  const nfts = {
    display: "flex",
    gap: "20px",
  }
  const rootDivStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  }
  return (
    <div style={rootDivStyle}>
      <h1 style={h1Style}>NFT Preview Card Template</h1>
      <div style={nfts}>
        {
          nftComponentData.map(
            (nftData) => <NftComponent data={nftData} key={nftData.id} />
          )
        }
      </div>
    </div>
  )
}

export default App
