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
  }
  const authorInitialsStyle = {
    margin: "0",
    color: textColor,
    cursor: cursor,
  }
  return (
    <div style={authorDiv}>
      <img src={authorPic} alt={author} className="profilePic" />
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
  const getUniqueId = (id) => "#" + "0".repeat(4 - String(id).length) + id;
  const divider = {
    width: "auto",
    height: "0.5px",
    background: "hsl(215, 32%, 27%)",
  };
  const nftTitleStyle = {
    color: textColor,
    fontSize: "15px",
    fontWeight: "600",
    cursor: cursor,
  };
  const paragraphTextStyle = {
    margin: "5px 0 5px 0",
  }
  return (
    <>
      <div className="nft-template">
        <div className="img-hover-zoom">
          <img src={nftData.data.image} alt={nftData.data.name} className="image" />
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
