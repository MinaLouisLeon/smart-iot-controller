import { useEffect } from "react"
import{importAppLayout} from '../../Firebase/Firestore';
import { useDispatch,useSelector } from "react-redux";
import {setLayoutData} from '../../Slices/gridViewSlice';
import GridComp from "../../Components/GridComp/GridComp";
import { NativeStorage } from '@awesome-cordova-plugins/native-storage';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { useState } from "react";
const Home = () => {
    const dispatch = useDispatch(null);
    const [isUidInStorage,setIsUidInStorage] = useState(false);
    const isLayoutReady = useSelector((state) => state.gridViewSlice.isLayoutReady);
    const importLayoutDataFromFirestore = async (uid) => {
        const res = await importAppLayout(uid);
        if(res !== false){
            dispatch(setLayoutData(res));
        }else{
            alert("error importing layout")
        }
    }
    const getUidFromNativeStorage = async () => {
        try{
            const data = await NativeStorage.getItem("uid");
            importLayoutDataFromFirestore(data)
        }catch{
            const scanResult = await BarcodeScanner.scan();
            NativeStorage.setItem("uid",scanResult.text);
            setIsUidInStorage(true);
        }
        
    }
    useEffect(() => {
        getUidFromNativeStorage();
    },[isUidInStorage])
  return (
    <>{
        isLayoutReady ? <>
            <GridComp />
        </>:<>
            <h1>layout not ready</h1>
        </>
    }</>
  )
}

export default Home