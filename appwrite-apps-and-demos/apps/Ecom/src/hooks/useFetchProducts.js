import { useState , useEffect  } from "react";
import { databases } from "../Appwrite/appwrite_config";
import "dotenv/config";


export const useFetchProducts=(coll_id)=>{
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
  
    useEffect(() => {
      setLoader(true);
      const getproducts = databases.listDocuments(
        process.env.PRODUCTDB_ID,
        coll_id
      );
  
      getproducts.then(
        function (response) {
          setProducts(response.documents);
          console.log(response.documents);
        },
        function (error) {
          console.log(error);
        }
      );
      setLoader(false);
    }, [coll_id]);

    return {products,loader}
  
}
