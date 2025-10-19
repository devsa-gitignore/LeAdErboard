import React,{useState,useEffect} from 'react';
function Leaderboard(){
    const [data,setData]=useState([])
    const spreadsheetId="1pAc8AlCdPFduk1cblYitu9fz3eg8_05OfFsQg2GF48I";
    const apiKey="AIzaSyBMWmy4TIagDVj_PjVftkEVBgdDM3PJKis";
    const apiUrl=`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`;
    const fetchData=async()=>{
        try{
            const response=await fetch(apiUrl);
            const json=await response.json();
            if(json.values&&json.values.length>1) {
                const rows=json.values.slice(1).sort((a, b) => Number(b[1]) - Number(a[1]));
                setData(rows);
            }
        }
        catch(e){
            console.error("Error fetching data:",e);
        }
    };
    useEffect(()=>{
        fetchData();
        const interval=setInterval(fetchData,5000);
        return()=>clearInterval(interval);
    },[]);
    const medal=(position)=>{
        if(position===0) return "🥇";
        if(position===1) return "🥈";
        if(position===2) return "🥉";
        return "";
    };
    return(
        <div className='flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-8'>
            <h1 className='text-4xl font-bold text-center mb-8'>Leaderboard</h1>
            {data.length === 0 ? (
                <p className="text-gray-500">Loading...</p>
            ) : (
                <div className="w-full flex flex-col gap-3">
                    {data.map((row,position) => (
                    <div key={position} className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
                    <span className="w-1/12 text-lg font-semibold">{medal(position)}</span>
                    <span className="w-7/12 text-lg font-medium">{row[0]}</span>
                    <span className="w-4/12 text-right text-lg font-semibold">{row[1]}</span>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}
export default Leaderboard;