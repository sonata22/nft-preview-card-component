import { useState } from 'react'
import './App.css'

const nftComponentData = [
  {
    id: 1,
    image: "./src/images/0002_Blue_Octane.png",
    name: "Blue Octane",
    price: 0.041,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
    uniqueNum: "0002",
  },
  {
    id: 2,
    image: "./src/images/0003_Orange_Octane.png",
    name: "Orange Octane",
    price: 0.041,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
    uniqueNum: "0003",
  },
  {
    id: 3,
    image: "./src/images/0006_Elite_Game_Controller.png",
    name: "Elite Game Controller",
    price: 0.099,
    collection: "Crypto Charms",
    author: "Mykola Sosnovshchenko",
    authorPic: "./src/images/authorProfilePic.jpg",
    uniqueNum: "0006",
  },
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
          <p>{nftData.data.price + "ETH"}</p>

          <img src={nftData.data.authorPic} alt={nftData.data.author} className="profilePic" />
          <p>Creation of {nftData.data.author}</p>
        </div>
      </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
        nftComponentData.map(
          (nftData) => <NftComponent data={nftData} key={nftData.id} />
        )
      }


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
