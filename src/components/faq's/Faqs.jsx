import React, { useState } from 'react'
import { Accordion, Container } from 'react-bootstrap'

const Faqs = () => {

    const faqArray = [
        {
            id: "0",
            qstn: "What is supply chain lending?",
            ans: "Supply chain lending is a financial solution that provides working capital to businesses by leveraging their supply chain transactions, such as invoices, purchase orders, or inventory."
        },
        {
            id: "1",
            qstn: "What are the benefits of supply chain lending?",
            ans: "Supply chain lending offers businesses improved cash flow, better working capital management, access to quick funding, and the ability to negotiate better terms with suppliers."
        },
        {
            id: "2",
            qstn: "Who can benefit from supply chain lending?",
            ans: "Small and medium-sized businesses (SMBs), suppliers, distributors, manufacturers, and other entities involved in the supply chain can benefit from supply chain lending."
        },
        {
            id: "3",
            qstn: "How fast can I get funding through supply chain lending?",
            ans: "Funding times can vary depending on the fintech platform and the specific transaction, but many supply chain lending solutions offer quick access to funds, sometimes within a few hours."
        },
        {
            id: "4",
            qstn: "What types of transactions are eligible for supply chain lending?",
            ans: "Typically, invoices, purchase orders, and inventory can be used as collateral for supply chain lending. The specific eligibility criteria may vary depending on the platform."
        },
        {
            id: "5",
            qstn: "How does supply chain lending differ from traditional financing options?",
            ans: "Unlike traditional bank loans, which may require extensive paperwork and have stringent eligibility criteria, supply chain lending often offers faster approval times, more flexible terms, and the ability to leverage existing transactions."
        },
        {
            id: "6",
            qstn: "Is my data secure when using your platform?",
            ans: "Our platforms prioritize the security of user data and employ advanced encryption methods to protect sensitive information."
        },
        {
            id: "7",
            qstn: "How do I get started with supply chain lending?",
            ans: "To get started with supply chain lending, you can typically apply through our platform's website by providing information about your business, transactions, and financing needs. From there, the platform will assess your eligibility and guide you through the process."
        },
        {
            id: "8",
            qstn: "Can startups and small businesses secure business loans?",
            ans: "Yes. They can. There are specific types of business loans specially tailored for startups and SMEs to help them grow and compete with legacy players."
        },
        {
            id: "9",
            qstn: "What is the maximum business loan offered by AltaNeo?",
            ans: "The business loan limit in AltaNeo depends on the eligibility, your requirement, and viability of the project."
        }
    ]

    
    return (
        <div className=''>
            <div className='d-flex justify-content-center'>
                <h1 className='text-black text-2xl font-bold'>Frequently Asked Questions</h1>
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
                    })
                    }
                </Accordion>
            </Container>
        </div>
    )
}

export default Faqs