import { createContext } from "react"
import { useState } from "react"


export const SongContext = createContext()

export const SongContextProvider = ({children}) => {

const [song, setSong] = useState({
   "url": "https://ik.imagekit.io/g3kdev24p/cohort-2/moodify/songs/Ed_Sheeran_-_Shape_Of_You__Official_Lyric_Video__qR6G-D6-2.mp3",
        "posterUrl": "https://ik.imagekit.io/g3kdev24p/cohort-2/moodify/posters/Ed_Sheeran_-_Shape_Of_You__Official_Lyric_Video__RHkCw4qYN.jpeg",
        "title": "Ed Sheeran - Shape Of You [Official Lyric Video]",
        "mood": "Neutral",
}
)
const [loading, setLoading] = useState(false)


return (

    <SongContext.Provider value={{loading,setLoading,song,setSong}}>
     {children}
    </SongContext.Provider>
)
    
}