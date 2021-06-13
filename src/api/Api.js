

const API_KEY="wuKRinYBwoSWC1GHQMVzTm0zd1Y2";

export default function getMatches() {
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
    
    return  fetch(url).then((response)=>response.json()).catch((err)=>console.error("Error:",err));
}
export const getMatchdetail=(id)=>{
    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url).then((response)=>response.json()).catch(error=>console.error("Error:",error));
}