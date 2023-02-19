import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
     
      <img src={`https://i.ibb.co/rG276Wf/logo5.png`} />
      <h1 className={styles.h1}>
      Stake Your Juz Amma NFT Collections !</h1>
      <h3>DEMO Sessions - Stake NFT Only Open For 24 Hours </h3>
      <h3><b>START on 23.00 WIB / 16.00 UTC 15th Feb 2023 | FINISH 23.00 WIB / 16.00 UTC - 16th Feb 2023</b></h3>
      <h1><b><u>340.000 $ICNV2 Total Pools Reward </u></b></h1>
     
             
                
                  <h3>
                  <button className={styles.mainButton} onClick={() => router.push(`/al-falaq`)}>
                    <b>Stake Al-Falaq NFTs</b>
                  </button>
                  </h3>
                 <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmYEQsxP3Rcn3ZXo6FvMXGfVy1rq1FVbs566T8MwmV8X84/"
          width="500px"
          height="500px"
        ></iframe>
                  
                
               
                 
                  <h3>
                  <button className={styles.mainButton} onClick={() => router.push(`/an-nas`)}>
                    <b>Stake An-Nas NTFs</b>
                  </button>
                  </h3>
                 <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmVgVPEEtKpbPpS6oiVdWQp9jpjmSZQ4dnmSSYtNghR4ff/"
          width="500px"
          height="500px"
        ></iframe>
                  
                
                
                  <h3>
                  <button className={styles.mainButton}onClick={() => router.push(`/al-kautsar`)}>
                    <b>Stake Al-Kautsar NTFs</b>
                  </button>
                  </h3>
                 <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmQkCwUHheCWNmU8EuymMEPUHCcNDsBnTvRatuUK5f3RBc/"
          width="500px"
          height="500px"
        ></iframe>
                
               
                  <h3>
                  <button className={styles.mainButton}onClick={() => router.push(`/al-ikhlas`)}>
                    <b>Stake Al-Ikhlas NTFs</b>
                  </button>
                  </h3>
                 <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmQ2R2Jm9xrk2Wbz7S5X6tZmFc8NeQNfLTX3dnnCLTajGj/"
          width="500px"
          height="500px"
        ></iframe>
               
                
                  <h3>
                  <button className={styles.mainButton}onClick={() => router.push(`/an-nasr`)}>
                    <b>Stake An-Nasr NTFs</b>
                  </button>
                  </h3>
                  
                 <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmQU82e6kW9947wHCGFXSpLU1ifKbYLcGUGpvUQ6nGytdu/"
          width="500px"
          height="500px"
        ></iframe>
               
            
    </div>
  );
};

export default Home;