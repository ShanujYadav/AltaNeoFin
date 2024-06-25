import React, { useState } from 'react'

const SiCalculator = () => {
    const [amount, setAmount] = useState(100000)
    const [intrest, setIntrest] = useState(21)
    const [time, setTime] = useState(90)

    let si = (amount * intrest * time) / 36500

    console.log('sii--', si)
    
    return ( 
        <div>SiCalculator</div>
    )
}

export default SiCalculator