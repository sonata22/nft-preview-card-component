import './App.css'
const cyan = "hsl(178, 100%, 50%)";

const nftComponentData = [
  {
    id: 4,
    image: "./src/images/0011_Deep_Ocean_Siren.png",
    name: "Deep Ocean Siren",
    price: 0.075,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
    uniqueNum: "0011",
  },
  {
    id: 5,
    image: "./src/images/0025_Pink_Chinchilla.png",
    name: "Pink_Chinchilla",
    price: 0.087,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
    uniqueNum: "0025",
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

const Author = ({author, authorPic}) => {
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

  return (
    <div style={authorDiv}>
      <img src={authorPic} alt={author} className="profilePic" />
      <p style={authorTextStyle}>Creation of {author}</p>
    </div>
  )
}

const NftComponent = (nftData) => {
  const divider = {
    width: "auto",
    height: "0.5px",
    background: "hsl(215, 32%, 27%)",
  }

  return (
    <>
      <div className="nft-template">
        <div className="img-hover-zoom">
          <img src={nftData.data.image} alt={nftData.data.name} className="image" />
        </div>
        <div>
          <p>{nftData.data.name} {"#" + nftData.data.uniqueNum}</p>
          <p>Our {nftData.data.collection} collection promotes voxel art.</p>


          <Price price={nftData.data.price} />
          <div style={divider}></div>
          <Author authorPic={nftData.data.authorPic} author={nftData.data.author} />
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      {
        nftComponentData.map(
          (nftData) => <NftComponent data={nftData} key={nftData.id} />
        )
      }
    </>
  )
}

export default App
