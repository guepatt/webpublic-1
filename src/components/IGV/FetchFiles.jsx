import React, { useEffect, useState } from "react"
import * as api from '../../Auth/auth'
import IgvAlignmentsOld from "./IGV_old";


export default function FetchFiles() {
  
       const [data, setData] = useState([])
       const [loading, setLoading] = useState(false);

       useEffect(() => {

        async function axios_get() {
            setLoading(true)
            const response = await api.genarchive()
            const urls = response
            setData(urls);
            setLoading(false)
            }
    
        axios_get()

    }, []);

const cram = data.map(i => i.CRAM_file)
const crai = data.map(i => i.CRAM_index_file)
const sample = data.map(i => i.sample)

const urls = [cram, crai, sample]

    return (
  
           
                loading ? <span> Please wait ... fetching data </span> : <IgvAlignmentsOld data={urls} /> 
            
        
            )
 }