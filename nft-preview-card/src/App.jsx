import './App.css'

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

const Price = ({price}) => {
  const priceElement = {
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const rhombusIconTop = {
    width: "25px",
    height: "40px",
    background: "#2FFFFF",
    clipPath: "polygon(0% 50%, 50% 0%, 100% 50%, 50% 70%)",
    scale: ".3",
    position: "absolute",
  };
  const rhombusIconBottom = {
    width: "25px",
    height: "40px",
    background: "#2FFFFF",
    clipPath: "polygon(3% 55%, 50% 73%, 97% 55%, 50% 100%)",
    scale: ".3",
    position: "absolute",
  };
  const priceText = {
    color: "#2FFFFF",
    paddingLeft: "21px",
    fontFamily: "Outfit",
    fontSize: "11px",
  }
  return(
    <>
      <div style={priceElement}>
        <div style={rhombusIconTop}></div>
        <div style={rhombusIconBottom}></div>
        <p style={priceText}>{price + " ETH"}</p>
      </div>
      
    </>
  )
}

const NftComponent = (nftData) => {
  return (
    <>
      <div className="nft-template">
        <div className="img-hover-zoom">
          <img src={nftData.data.image} alt={nftData.data.name} className="image" />
        </div>
        <div>
          <p>{nftData.data.name} {"#" + nftData.data.uniqueNum}</p>
          <p>Our {nftData.data.collection} collection promotes voxel art.</p>

          
          <Price price={nftData.data.price}/>
          
          <img src={nftData.data.authorPic} alt={nftData.data.author} className="profilePic" />
          <p>Creation of {nftData.data.author}</p>
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
