import React, { useEffect, useState } from 'react'
import calsi from '../../assets/img/calsiPic.png'
import { Accordion, Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'

const SiCalculator = () => {

    const faqArray = [
        {
            id: "0",
            qstn: "What is Simple Interest?",
            ans: "Simple interest is a method of calculating the interest charge on a loan or investment based on the original principal amount. It is straightforward and does not take into account any interest that accumulates over time."        },
        {
            id: "1",
            qstn: "How to Calculate Simple Interest",
            ans: "The formula to calculate simple interest is-Simple Interest (SI)=P×r×t\text{Simple Interest (SI)} = P \times r \times tSimple Interest (SI)=P×r×t, where- P = Principal amount (the initial amount of money), r = Annual interest rate (in decimal form, so 5% becomes 0.05), t = Time period the money is borrowed or invested (in years)."
        },
        {
            id: "2",
            qstn: "How to use Altaneo Finance simple interest calculator?",
            ans: "Our Simple interest Calculator can help you to calculate interest charge on a loan or investment based on the original principal amount."
        },
    ]

    const [principal, setPrincipal] = useState(100000);
    const [rate, setRate] = useState(15);
    const [days, setDays] = useState(90);
    const [interest, setInterest] = useState(null)

    useEffect(() => {
        calculateInterest()
    }, [principal, rate, days])

    const calculateInterest = () => {
        const principalAmount = parseFloat(principal);
        const interestRate = parseFloat(rate);
        const timeInYears = parseFloat(days) / 365;
        if (!isNaN(principalAmount) && !isNaN(interestRate) && !isNaN(timeInYears)) {
            const calculatedInterest = (principalAmount * interestRate * timeInYears) / 100;
            setInterest(calculatedInterest.toFixed(2))
        } else {
            setInterest(null)
        }
    }

    
    return (
        <>
            <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 overflow-x-hidden mt-5 pt-3">
                <div class="w-full sm:w-2/5 h-full flex items-center justify-center">
                    <div class="bg-white p-6 rounded-lg w-full max-w-md">
                        <h1 class="font-bold text-2xl p-6 text-center mb-6">Interest Calculator</h1>
                        <div class="flex items-center mb-4">
                            <label for="principal-amount" class="w-5/7 text-md font-medium text-gray-500">
                                Principal Amount (in lac's)</label>
                            <input
                                type="text"
                                id="principal-amou  nt"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                class="w-4/12 ml-auto block p-1 bg-blue-100 text-black px-2 py-1 rounded-md"
                                value={principal}
                                onChange={(e) => setPrincipal(e.target.value)}
                                name="amount" />
                        </div>
                        <div class="flex items-center mt-8 mb-4">
                            <label for="rate-of-interest" class="w-5/7 text-md font-medium text-gray-500">
                                Rate of Interest (in %)</label>
                            <input
                                type="number"
                                id="rate-of-interest"
                                class="w-4/12 ml-auto block p-1 bg-blue-100 text-black px-2 py-1 rounded-md"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                name="intrest" />
                        </div>
                        <div class="mb-4">
                            <input
                                type="range"
                                min="13"
                                max="21"
                                class="w-full h-1 bg-gray-200 rounded-md"
                                id="slider-1"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                name="intrest"
                            />
                        </div>


                        {/* --------------Time peeriod----------------- */}
                        <div class="flex items-center mb-4">
                            <label for="time-period" class="w-5/7 text-md font-medium text-gray-500">
                                Time Period (In day's) </label>
                            <input
                                type="number"
                                id="time-period"
                                class="w-4/12 ml-auto block p-1 bg-blue-100 text-black px-2 py-1 rounded-md"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                name="time" />
                        </div>
                        <div class="mb-2">
                            <input
                                type="range"
                                min="30"
                                max="120"
                                class="w-full h-1 bg-gray-200 rounded-md"
                                id="slider-2"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                name="days" />
                        </div>
                        <div class="flex items-center mt-8 ">
                            {/* <label for="time-period" class="w-5/7 text-md font-medium text-gray-500">Output</label> */}
                            {/* <select id="time-period"
                            class="w-2/7 ml-auto block w-28 p-1 bg-blue-100 text-sm text-black px-2 py-1 rounded-md">
                            <option  >Yearly</option>
                            <option selected>Half Yearly</option>
                            <option >Quaterly</option>
                        </select> */}
                        </div>
                        <hr />

                        <div class="mb-2 mt-4 text-gray-500">
                            <div class="flex justify-between ">
                                <span>Principal amount</span>
                                <span id="principal-amount">{principal}</span>
                            </div>
                            <div class="flex justify-between ">
                                <span>Total Interest</span>
                                <span id="Total Interest">{interest}</span>
                            </div>
                            <div class="flex justify-between ">
                                <span>Total amount</span>
                                <span id="Total amount">{Number(principal) + Number(interest)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full sm:w-3/5 h-full flex items-center justify-center pt-3">
                    <img src={calsi} alt="Description of image" class="w-full h-full" />
                </div>
            </div>

            <div className='my-5 pb-5'>
                <div className='d-flex justify-content-center'>
                    <h1 className='text-black text-2xl font-bold'>FaQ About Calculator</h1>
                </div>
                <Container className='grid divide-y divide-neutral-200 max-w-5xl mx-auto mt-8'>
                    <Accordion>
                        {faqArray.map((faq, index) => {
                            return (
                                <Accordion.Item eventKey={index.toString()} className='mb-2'>
                                    <Accordion.Header>{faq.qstn}</Accordion.Header>
                                    <Accordion.Body className='text-muted'>
                                        {faq.ans}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })}
                    </Accordion>
                </Container>
                <Footer/>
            </div>
        </>
    )
}

export default SiCalculator