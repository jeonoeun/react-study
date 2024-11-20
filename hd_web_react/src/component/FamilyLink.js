import { useEffect, useState } from "react"

const FLINK = [
    { id: 0, name: "FAMILY LINK", link: "" },
    { id: 1, name: "현대아산", link: "https://www.hdasan.com/main" },
    { id: 2, name: "현대무벡스", link: "https://www.hyundaimovex.com/" },
    { id: 3, name: "현대경제연구원", link: "http://www.hri.co.kr/" },
]

const FamilyLink = () => {
    const [flnk, setflnk] = useState();
    useEffect(() => {
        flnk && window.open(flnk)
    }, [flnk])

    return (
        <select onChange={(e) => setflnk(e.target.value)}>
            {
                FLINK.map(link => <option value={link.link} key={link.id}>{link.name}</option>
                )
            }
        </select>
    )
}

export default FamilyLink;