import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { red } from '@mui/material/colors';
import RightContent from '../RightContent';

let baseUrl = import.meta.env.VITE_SOME_KEY


const VendorFinancingForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const profileDetails = useSelector((state) => state.profile)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [step, setStep] = useState(1)
  const [date, setDate] = useState(Date.now())

  const [bankStatement, setBankStatementFile] = useState(null)
  const [purchaseOrder, setPurchaseOrderFile] = useState(null)
  const [copyOfAgreement, setCopyOfAgreementFile] = useState(null)
  const [auditedFinancials, setAuditedFinancialsFile] = useState(null)

  let uuid = profileDetails.userInfo.uuid

  const [showError, setShowError] = useState({
    annualTurnover: false,
    panNo: false,
    name: false,
    email: false,
    dob: false,
    gender: false,
    pinCode: false,

    gstRegistered: false,
    gstNo: false,
    businessType: false,
    businessAge: false,
    businessPinCode: false,
    yearlySales: false,

    bankStatement: false,
    auditedFinancials: false,
    purchaseOrder: false,
    copyOfAgreement: false,
  })

  const [data, setData] = useState({
    annualTurnover: '',
    panNo: "",
    name: "",
    email: '',

    dob: date,
    gender: "",
    pinCode: "",

    gstRegistered: '',
    gstNo: '',
    businessType: '',
    businessAge: '',
    businessPinCode: '',
    yearlySales: "",
  })


  const onChangeHandelar = (value, name) => {
    setShowError(false)
    setData({ ...data, [name]: value })
  }

  const onChangebankStatement = (file) => {
    setShowError({ ...showError, bankStatement: false })
    setBankStatementFile(file)
  }

  const onChangeauditedFinancials = (file) => {
    setShowError({ ...showError, auditedFinancials: false })
    setAuditedFinancialsFile(file)
  }
  const onChangepurchaseOrder = (file) => {
    setShowError({ ...showError, purchaseOrder: false })
    setPurchaseOrderFile(file)
  }
  const onChangecopyOfAgreement = (file) => {
    setShowError({ ...showError, copyOfAgreement: false })
    setCopyOfAgreementFile(file)
  }

  const onFetchDetails = async () => {
    if (!data.annualTurnover) {
      setShowError({ ...showError, annualTurnover: true })
      return
    }
    if (!data.panNo) {
      setShowError({ ...showError, panNo: true })
      return
    }
    if (!data.name) {
      setShowError({ ...showError, name: true })
      return
    }
    if (!data.email) {
      setShowError({ ...showError, email: true })
      return
    }
    else {
      let body = {
        turnover: data.annualTurnover,
        panCardNumber: data.panNo,
        fullName: data.name,
        email: data.email,
      }
      console.log('body----',body)
      const response = await fetch(`${baseUrl}/saveUserDetails?uuid=${uuid}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      console.log('res---', res)
      if (res.statusCode === 200) {
        setStep(2)
      }
    }
  }

  const onSubmitSecondForm = () => {
    setStep(3)
  }

  const onSubmitThirdForm = async () => {
    if (!data.gstRegistered) {
      setShowError({ ...showError, gstRegistered: true })
      return
    }
    if (!data.gstNo) {
      setShowError({ ...showError, gstNo: true })
      return
    }
    if (!data.businessType) {
      setShowError({ ...showError, businessType: true })
      return
    }
    if (!data.businessAge) {
      setShowError({ ...showError, businessAge: true })
      return
    }
    if (!data.businessPinCode) {
      setShowError({ ...showError, businessPinCode: true })
      return
    }
    if (!data.yearlySales) {
      setShowError({ ...showError, yearlySales: true })
      return
    }
    else {
      let gstReg
      if (data.gstRegistered == 'true') {
        gstReg = true
      }
      else if (data.gstRegistered == 'false') {
        gstReg = false
      }
      let body = {
        gstRegistered: gstReg,
        businessAge: Number(data.businessAge),
        yearlySales: Number(data.yearlySales),
        gstNumber: data.gstNo.toString(),
        businessType: "Retail",
        businessPincode: data.businessPinCode.toString(),
      }
      const response = await fetch(`${baseUrl}/createBusinessVerification?uuid=${uuid}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-type': 'application/json' }
      })
      const res = await response.json()
      console.log('res---', res)
      if (res.statusCode === 200) {
        setStep(4)
      }
    }
  }




  const onClickSubmit = async (e) => {
    if (!bankStatement) {
      setShowError({ ...showError, bankStatement: true })
      return
    }
    if (!auditedFinancials) {
      setShowError({ ...showError, auditedFinancials: true })
      return
    }
    if (!copyOfAgreement) {
      setShowError({ ...showError, copyOfAgreement: true })
      return
    }
    if (!purchaseOrder) {
      setShowError({ ...showError, purchaseOrder: true })
      return
    }
    else {
      const formData = new FormData()
      formData.append('copyOfAgreement', copyOfAgreement);
      formData.append('purchaseOrder', purchaseOrder);
      formData.append('auditedFinancials', auditedFinancials);
      formData.append('bankStatement', bankStatement);
      console.log([...formData])
      const response = await fetch(`${baseUrl}/documents/upload?uuid=${uuid}`, {
        method: "POST",
        body: formData,
      })

      const res = await response.json();
      console.log('res---', res);
      if (res.statusCode === 200) {
        setOpenSuccessModal(true)
      }
    }
  }


  const onCloseSuccessModal = () => {
    history.push("/");
    setOpen(false)
  }




  return (
    <>
      <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
        <div class="bg-white min-h-[80vh] shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          {step == 1 && (<>
            <ProgressBar now={0} />
            <div class="isolate bg-white px-6 lg:px-8">
              {/* <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tex</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">Text who ever y ou want where ever you want any time you want enjoy contacting freinds and families.</p>
        </div> */}
              <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                  <div >
                    <label for="annual-Turnover" class="block text-sm font-semibold leading-6 text-black">ANNUAL TURNOVER</label>
                    <div class="mt-2.5">
                      <select
                        // className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
                        // {`${colSpan ? 'col-span-2' : ''} ${rowSpan ? 'row-span-2' : ''} bg-white p-3 rounded`}
                        className={`${showError.annualTurnover ? 'form-select is-invalid' : 'form-select'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.annualTurnover}
                        onChange={(e) => onChangeHandelar(e.target.value, 'annualTurnover')}
                        name="annualTurnover"
                      >
                        <option value="">Select Annual Turnover</option>
                        <option value="1 cr-50 cr">1 cr-50 cr</option>
                        <option value="50-250 cr">50-250 cr</option>
                        <option value="250-500 cr">250-500 cr</option>
                        <option value="500-1000 cr">500-1000 cr</option>
                        <option value="1000 cr & above">1000 cr & above</option>
                      </select>
                    </div>
                  </div>
                  <div >
                    <label for="pan-card" class="block text-sm font-semibold leading-6 text-black">PAN CARD</label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        placeholder='Enter Pan No.'
                        className={`${showError.panNo ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.panNo}
                        onChange={(e) => onChangeHandelar(e.target.value, 'panNo')}
                        name="panNo"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="full-name" class="block text-sm font-semibold leading-6 text-black">FULL NAME</label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        placeholder='Enter Full Name'
                        className={`${showError.name ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.name}
                        onChange={(e) => onChangeHandelar(e.target.value, 'name')}
                        name="name"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-semibold leading-6 text-black">EMAIL</label>
                    <div class="mt-2.5">
                      <input type="email"
                        placeholder='Enter Email'
                        className={`${showError.email ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.email}
                        onChange={(e) => onChangeHandelar(e.target.value, 'email')}
                        name="email"
                      />
                    </div>
                  </div>

                  {/* <div class="mt-8 text-end">
                <button
                  class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true">
                  NEXT</button>
              </div> */}
                </div>

                <div class="mt-10">
                  <button
                    type="submit"
                    onClick={onFetchDetails}
                    class="middle block w-full none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  // class="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Proceed
                  </button>
                </div>
              </div>
            </div>
          </>
          )}

          {step == 2 && (<>
            <ProgressBar now={25} />
            <div class="isolate bg-white px-6 lg:px-8">
              <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                  <div >
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Dtae Of Birth</label>
                    <div class="mt-2.5">
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={70}
                        className='form-control text-muted shadow-sm placeholder:text-gray-400'
                        // className={showError.dob ? 'form-control is-invalid' : 'form-control'}
                        autoComplete="off"
                        placeholder="Enter DOB"
                      />
                    </div>
                  </div>

                  <div >
                    <label for="last-name" class="block text-sm font-semibold leading-6 text-black">GENDER</label>
                    <div class="mt-2.5">
                      <select
                        className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
                      // className={showError.category ? 'form-select is-invalid' : 'form-select'}
                      // onChange={(e) =>
                      //   setData({ ...data, category: e.target.value })
                      // }
                      // value={data.category}
                      >
                        <option value="">Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">PIN CODE</label>
                    <div class="mt-2.5">
                      <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Pin Code' />
                    </div>
                  </div>
                  <div>
                  </div>
                </div>

                <div class="flex flex-row space-x-auto mt-5 items-center justify-between min-w-screen sm:mt-10">
                  <div class="flex flex-col text-end">
                    <button
                      onClick={() => setStep(1)}
                      className='border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white'

                    // className="middle none center mr-4 rounded-lg bg-green-500 py-2 px-4 font-sans text-sm outline outline-2 outline-offset-2 font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >Back</button>
                  </div>
                  <div class="flex flex-col">
                    <button
                      onClick={onSubmitSecondForm}
                      class="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >Next</button>
                  </div>
                </div>
              </div>
            </div>
          </>
          )}

          {step == 3 && (<>
            <ProgressBar now={75} />
            <div class="isolate bg-white px-6 lg:px-8">
              <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                  <div >
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">GST REGISTERED</label>
                    <div class="mt-2.5">
                      <select
                        className={`${showError.gstRegistered ? 'form-select is-invalid' : 'form-select'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.gstRegistered}
                        onChange={(e) => onChangeHandelar(e.target.value, 'gstRegistered')}
                        name="gstRegistered"
                      >
                        <option value="">GST Reg.</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">GST No.</label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        placeholder='Enter GST No.'
                        className={`${showError.gstNo ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.gstNo}
                        onChange={(e) => onChangeHandelar(e.target.value, 'gstNo')}
                        name="gstNo"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS TYPE</label>
                    <div class="mt-2.5">
                      <select
                        className={`${showError.businessType ? 'form-select is-invalid' : 'form-select'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.businessType}
                        onChange={(e) => onChangeHandelar(e.target.value, 'businessType')}
                        name="businessType"
                      >
                        <option value="">Select Type</option>
                        <option value="Partner Firm">Partner Firm</option>
                        <option value="Proprietorship">Proprietorship</option>
                        <option value="Pvt. Ltd. Company">Pvt. Ltd. Company</option>
                      </select>
                    </div>
                  </div>
                  <div >
                    <label for="last-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS AGE</label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        className={`${showError.businessAge ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.businessAge}
                        onChange={(e) => onChangeHandelar(e.target.value, 'businessAge')}
                        name="businessAge"
                        placeholder="Enter business Age"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS PINCODE</label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        placeholder='Enter Business PinCode'
                        className={`${showError.businessPinCode ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.businessPinCode}
                        onChange={(e) => onChangeHandelar(e.target.value, 'businessPinCode')}
                        name="businessPinCode"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">YEARLY SALES</label>
                    <div class="mt-2.5">
                      <input
                        type="text"
                        placeholder='Enter Yearly Sales'
                        className={`${showError.yearlySales ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        value={data.yearlySales}
                        onChange={(e) => onChangeHandelar(e.target.value, 'yearlySales')}
                        name="yearlySales"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex flex-row space-x-auto mt-5 items-center justify-between min-w-screen sm:mt-10">
                  <div class="flex flex-col text-end">
                    <button
                      onClick={() => setStep(2)}
                      className='border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white'
                    >Back
                    </button>
                  </div>
                  <div class="flex flex-col">
                    <button
                      onClick={onSubmitThirdForm}
                      class="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
          )}

          {step == 4 && (<>
            <ProgressBar now={100} />
            <div class="isolate bg-white px-6 lg:px-8">
              <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                  <div >
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Bank Statement (Past 12 Month's) </label>
                    <div class="mt-2.5">
                      <input type="file"
                        id="myFile"
                        className={`${showError.bankStatement ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        // value={bankStatement}
                        // onChange={(e) => onChangeHandelar(e.target.files[0], 'bankStatement')}
                        // onChange={(e) => setBankStatementFile(e.target.files[0])}
                        onChange={(e) => onChangebankStatement(e.target.files[0])}

                        name="bankStatement"
                      />
                      <span className='text-xs text-red-600'>* File must be Named as Bank Statement.pdf</span>
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Audit Finincial</label>
                    <div class="mt-2.5">
                      <input
                        type="file"
                        id="myFile"
                        className={`${showError.auditedFinancials ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        // value={auditedFinancials}
                        // onChange={(e) => onChangeHandelar(e.target.files[0], 'auditedFinancials')}
                        onChange={(e) => onChangeauditedFinancials(e.target.files[0])}
                        name="auditedFinancials"
                      />
                      <span className='text-xs text-red-600'>* File must be Named as auditedFinancials.pdf</span>
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Purches Order</label>
                    <div class="mt-2.5">
                      <input
                        type="file"
                        id="myFile"
                        className={`${showError.purchaseOrder ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        // value={purchaseOrder}
                        // onChange={(e) => onChangeHandelar(e.target.files[0], 'purchaseOrder')}
                        onChange={(e) => onChangepurchaseOrder(e.target.files[0])}
                        name="purchaseOrder"
                      />
                      <span className='text-xs text-red-600'>* File must be Named as purchaseOrder.pdf</span>
                    </div>
                  </div>
                  <div>
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Copy Of Agreement</label>
                    <div class="mt-2.5">
                      <input
                        type="file"
                        id="file"
                        className={`${showError.copyOfAgreement ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
                        // value={copyOfAgreement}
                        // onChange={(e) => onChangeHandelar(e.target.files[0], 'copyOfAgreement')}
                        onChange={(e) => onChangecopyOfAgreement(e.target.files[0])}
                        name="copyOfAgreement"
                      />
                      <span className='text-xs text-red-600'>* File must be Named as agreement.pdf</span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-row space-x-auto mt-5 items-center justify-between min-w-screen sm:mt-10">
                  <div class="flex flex-col text-end">
                    <button
                      onClick={() => setStep(3)}
                      className='border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white'
                    >Back
                    </button>
                  </div>
                  <div class="flex flex-col">
                    <button
                      onClick={onClickSubmit}
                      class="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
          )}

          <div>
            <Modal open={openSuccessModal} onClose={onCloseSuccessModal} center classNames=''>
              <div class="text-center p-6 bg-white rounded-lg shadow-md">
                <div class="flex items-center justify-center mb-4">
                  <svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m5 4a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"></path>
                  </svg>
                </div>
                <div>
                  <h1 class="text-2xl font-bold text-gray-800">Thank you!</h1>
                  <p class="text-gray-600 mb-4 text-xl mt-2">Your UserId is --- {uuid}</p>
                  <p class="text-gray-600 mb-4 text-sm">Our Team will Contect You within 4 Working hours.</p>
                </div>
                <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={onCloseSuccessModal}
                >
                  OK
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <RightContent />
      </div>
    </>
  )
}

export default VendorFinancingForm