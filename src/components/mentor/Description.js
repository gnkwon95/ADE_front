import React from 'react'

function Description({ label, type, data }) {
    

    return (
        <div className="description-container" style={{ fontSize:"20px" }}>
            <div className="description-container-header">{label}</div>
            {type === "list" ?
                <ul style={{ padding:"10px", listStyleType:"none" }}>
                    {data.map(item => (
                        <li>• {item}</li>
                    ))}
                </ul>
                :
                <div>{data}</div>
            }
        </div>
    )
}

export default Description
