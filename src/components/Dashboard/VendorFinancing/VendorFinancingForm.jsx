import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import RmBox from '../RmBox';
import { toast } from 'react-toastify';
const todayDate = new Date()

let baseUrl = import.meta.env.VITE_SOME_KEY

const VendorFinancingForm = () => {
  const phone = sessionStorage.getItem('phone')
  const uuid = sessionStorage.getItem('uuid')
  // let uuid = '90de43cd-967c-4fa7-a6e0-c08bb7c82793'

  const history = useHistory();
  const dispatch = useDispatch();
  const profileDetails = useSelector((state) => state.profile)
  const [step, setStep] = useState(1)
  const [openSuccessModal, setOpenSuccessModal] = useState(true)
  const [date, setDate] = useState('')
  const [bankStatement, setBankStatementFile] = useState(null);
  const [purchaseOrder, setPurchaseOrderFile] = useState(null);
  const [copyOfAgreement, setCopyOfAgreementFile] = useState(null);
  const [auditedFinancials, setAuditedFinancialsFile] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null)
  const [showGstNoDiv, setShowGstNoDiv] = useState(false)



  useEffect(() => {
    if (!uuid || !phone ) {
      history.push('/')
      toast.error('Not a Valid User')
    }
  }, [])


  const [data, setData] = useState({
    annualTurnover: '',
    panNo: '',
    name: '',
    email: '',

    dob: date,
    gender: '',
    pinCode: '',

    gstRegistered: false,
    gstNo: '',
    businessType: '',
    businessAge: '',
    businessPinCode: '',
    yearlySales: '',
    msmeCft: '',
    buyerName: '',
  })

  const [saveData,setSaveData]=useState({
    pinCode: '',
    dob: '',
    gender: ''
  })

  const onChangeHandler = (value, name) => {
    setData({ ...data, [name]: value })
  }

  const  onSelectGstReg=(value)=>{
    if(value){
      setShowGstNoDiv(true)
    }
    else{
      setShowGstNoDiv(false)
    }
    setData({ ...data, gstRegistered:value})
  }
  const onChangeDate = (e) => {
    let originalDate=e.target.value
    let [year, month, day] = originalDate.split("-")
    let convertedDate = `${day}-${month}-${year}`
    setDate(e.target.value)
    setData({ ...data, dob:convertedDate});
  }

  const takeOnlyNumbers = (value,name,max) => {
    const enteredValue = value.replace(/\D/g, '').slice(0, max)
    setData({ ...data, [name]: enteredValue })
  }

  const onChangeGSTNumber=(value)=>{
    setData({...data,gstNo:value })
  }


  const onFileChange = (e, setFile) => {
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  }


const onSaveUserDetails = async (e) => {
    e.preventDefault()
    try{
      if (!data.annualTurnover || !data.panNo || !data.name || !data.email) {
        toast.error('All Fields Are Required !')
        return
      }
      else {
        let name=data.name
        let body = {
          turnover: data.annualTurnover,
          panCardNumber: data.panNo,
          fullName: name.toUpperCase().trim(),
          email: data.email,
        }

        console.log('body---',body)
        const response = await fetch(`${baseUrl}/saveUserDetails?uuid=${uuid}`,{
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-type': 'application/json'}
        })
        const res = await response.json()
        console.log('First res---', res)
        if (res.statuscode === 200){
          setSaveData({...saveData,
            pinCode:res.pincode,
            dob:res.dateOfBirth,
            gender:res.gender,
          })
          setStep(2)
          return
        }
        if (res.statuscode === 400){
          toast.error(res.nameMismatchStatus)
          return
        }
        else{
          console.log('resp not 200--',res)
        }
      }}
    catch(e){
      console.error(e)
    }
}


  const onSubmitSecondForm = (e) => {
    e.preventDefault()
    console.log(data.gender,data.dob,data.pinCode)
    console.log('saveData---',saveData)
    try{
      if (!data.gender || !data.dob  || !data.pinCode) {
        toast.error('All Fields Are Required !')
        return
      }
      if(data.gender==saveData.gender && data.dob==saveData.dob && data.pinCode==saveData.pinCode){
        setStep(3)
      }
      else{
        toast.error('Information does not align with PAN card.')
      }
    }
      catch(e){
        console.log(e)
      }
  }

  const onSubmitThirdForm = async (e) => {
    e.preventDefault()
    if(!data.businessType || !data.businessPinCode || !data.businessAge || !data.yearlySales){
      toast.error('Please Fill All Fields !')
      return
    }
    if(showGstNoDiv){
      if(!data.gstNo){
        toast.error('Please Enter Gst Number')
        return
      }
    }
  try {
    let yearlySales=Number(data.yearlySales)
    let businessAge=Number(data.businessAge)
    let body={
      gstRegistered: data.gstRegistered,
      businessType: data.businessType,
      businessPinCode: data.businessPinCode,
      gstNumber: data.gstNo,
      businessAge: businessAge,
      yearlySales: yearlySales,
    }
    console.log("body----",body)
    const response = await fetch(`${baseUrl}/createBusinessVerification?uuid=${uuid}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
    const res = await response.json()
    console.log('third form res---',res)
    if(res.statusCode==200){
      setStep(4)
    }
    else{
      toast.error(res.error)
    }
} catch (e) {
  console.log(e)
}
}



  const onClickSubmit = async (e) => {
    if (!bankStatement || !auditedFinancials || !copyOfAgreement || !purchaseOrder || !data.buyerName) {
      toast.error('Fill All fields !')
      return
    }

    else {
      const formData = new FormData()
      formData.append('copyOfAgreement', copyOfAgreement)
      formData.append('purchaseOrder', purchaseOrder)
      formData.append('auditedFinancials', auditedFinancials)
      formData.append('bankStatement', bankStatement)
      console.log([...formData])
      console.log('formData---',formData)
      console.log('data---',data)
      const response = await fetch(`${baseUrl}/documents/upload?uuid=${uuid}&buyerName=${data.buyerName}`, {
        method: "POST",
        body: formData,
        headers: {// 'Content-Type': 'multipart/form-data'
          }
      })
      const res = await response.json();
      console.log('res---', res)
      if (res.statusCode === 200){
        setOpenSuccessModal(true)
      }
    }
  }

  const onCloseSuccessModal = () => {
    history.push('/')
    setOpen(false)
  }

  
  return (
    <>
      {step === 1 && (
        <>
          <div className="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md">
            <ol className="flex items-center w-full z-10 text-xs text-gray-900 font-medium sm:text-base ml-4 sm:ml-12">
              <li className="flex w-full relative text-indigo-600 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-6 h-6 bg-gray-100 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white sm:w-10 sm:h-10"></span>
                </div>
              </li>
              <li className="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 sm:w-10 sm:h-10">1</span>
                </div>
              </li>
              <li className="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">2</span>
                </div>
              </li>
              <li className="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">3</span>
                </div>
              </li>
              <li className="flex w-full relative text-gray-900">
                <div className="block whitespace-nowrap z-10">
                  <span className="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">4</span>
                </div>
              </li>
            </ol>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
                <p className="text-gray-500 text-base">Add your personal information</p>
              </div>
            <RmBox/>
            </div>
            <hr className="border-gray-800" />
            <form onSubmit={onSaveUserDetails}>
              <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Applicant Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
                    placeholder="Enter your name as per Pan Card"
                    className="w-1/2 uppercase bg-gray-100 py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <hr className="border-gray-800" />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
                    placeholder="Enter your email"
                    className="w-1/2 bg-gray-100 py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <hr className="border-gray-800" />
                </div>

              </div>
              <div className="mt-4">
                <label className="block text-lg font-medium text-gray-700 mb-1">PAN Card Number</label>
                <input
                  type="text"
                  name="panNo"
                  value={data.panNo}
                  onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
                  placeholder="XXXX XXXX XXXX"
                  className="w-1/2 bg-gray-100 py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <hr className="border-gray-800 w-50" />
              </div>
              <div className="mt-4">
                <label className="block text-lg font-medium text-gray-700 mb-1">Annual turnover</label>
                <div className="flex flex-wrap bg-white text-sm gap-4 w-100 mb-2 mt-2">
                  {[
                    '1 Cr to 50 Cr',
                    '50 Cr to 250 Cr',
                    '250 Cr to 500 Cr',
                    '500 Cr to 1000 Cr',
                    '1000 Cr +',
                  ].map((range) => (
                    <button
                      type="button"
                      className={`px-3 py-1 rounded-md ${selectedRange === range ? 'bg-blue-200 border-blue-500 border' : 'bg-gray-100'
                        } text-gray-700 hover:bg-blue-200 focus:outline-none`}
                      key={range}
                      onClick={() => {
                        setSelectedRange(range);
                        setData({ ...data, annualTurnover: range });
                      }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
                <hr className="border-gray-800" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-6">
                <button type="button"></button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 mt-14 sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
                >
                  proceed to next step
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {step == 2 && (<>
        <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base ml-4 sm:ml-12">
          <li class="flex w-full relative text-indigo-600 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
            <div class="block whitespace-nowrap z-10">
              <span class="w-6 h-6 bg-gray-1000 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white sm:w-10 sm:h-10"></span>
            </div>
          </li>
          <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
            <div class="block whitespace-nowrap z-10">
              <span class="w-6 h-6 bg-indigo-600 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-800 sm:w-10 sm:h-10">1</span>
            </div>
          </li>
          <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
            <div class="block whitespace-nowrap z-10">
              <span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 sm:w-10 sm:h-10">2</span>
            </div>
          </li>
          <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
            <div class="block whitespace-nowrap z-10">
              <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">3</span>
            </div>
          </li>
          <li class="flex w-full relative text-gray-900">
            <div class="block whitespace-nowrap z-10">
              <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">4</span>
            </div>
          </li>
        </ol>
        <div class="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md ">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
              <p class="text-gray-500 text-base">Add your personal information</p>
            </div>
          <RmBox/>
          </div>
          <hr class="border-gray-800" />
          <form>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={date}
                  onChange={onChangeDate}
                  className="block w-90 rounded-md bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                />
                <hr class="border-gray-800" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
                <div className="flex gap-2 mt-2">
                  {['Male', 'Female'].map((gender, index) => (
                    <button
                      key={gender}
                      type="button"
                      className={`px-4 py-2 rounded-md focus:outline-none ${data.gender === gender ? 'bg-blue-200 text-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
                        }`}
                      onClick={() => setData({ ...data, gender: gender })
                    }>
                      {gender}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-700 mb-1">PIN Code</label>
              <input
                type="tel"
                value={data.pinCode}
                name="pinCode"
                onChange={(e) => takeOnlyNumbers(e.target.value, e.target.name,6)}
                placeholder="PinCode"
                className="w-1/2 bg-gray-100 text-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <hr class="border-gray-800 w-50" />
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-8">
              <button
                type="button"

                className="w-full sm:w-auto mb-0 mt-14 sm:mb-0 px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-yellow-300 focus:outline-none"
              >

              </button>
              <button
                type="submit"
                onClick={onSubmitSecondForm}
                className="w-full sm:w-auto px-4 py-2 mt-14  sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
              >
                proceed to next step
              </button>
            </div>
          </form>
        </div>
      </>
      )}

      {step === 3 && (
        <div className="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-2  rounded-md">
          <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base ml-4 sm:ml-12">
            <li class="flex w-full relative text-indigo-600 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-gray-100 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white sm:w-10 sm:h-10"></span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-600 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-800 sm:w-10 sm:h-10">1</span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-600 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">2</span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-200 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto text-indigo-600 mb-3 text-sm sm:w-10 sm:h-10">3</span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">4</span>
              </div>
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
            <div className='pl-4'>
              <h1 className="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
              <p className="text-gray-500 text-base">Add your business information</p>
            </div>
            <RmBox/>
          </div>
          <hr className="border-gray-800" />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 bg-gray-100 p-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">GST Registered?</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${data.gstRegistered === true ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => onSelectGstReg(true)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded ${data.gstRegistered === false ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => onSelectGstReg(false)}
                  >
                    No
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Business Type</label>
                <select
                  className="w-1/2 text-md bg-gray-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={data.businessType}
                  name='businessType'
                  onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
                  >
                  <option value="">Select Business Type</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Trading">Trading</option>
                  <option value="Services">Services</option>
                  <option value="Others">Others</option>
                </select>
                <hr className="border-gray-800 w-50" />
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Business PIN Code</label>
                <input
                  type="tel"
                  placeholder="Business PIN Code"
                  className="w-1/2 bg-gray-100 text-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={data.businessPinCode}
                  name="businessPinCode"
                  onChange={(e) => takeOnlyNumbers(e.target.value, e.target.name,6)}
                />
                <hr className="border-gray-800 w-50" />
              </div>

              {/* <div className="mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">UDYAM / MSME Certification (Optional)</label>
                <input
                  type="file"
                  className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => onFileChange(e, setBankStatementFile)}
                />
              </div> */}
            </div>
            <div className="flex-1 bg-gray-100 p-4">
              {showGstNoDiv && (
              <div className="w-full mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">GST Registration Number</label>
              <input
                type="text"
                placeholder="GST Registration Number"
                className="w-full py-2 px-3 text-md bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={data.gstNo}
                onChange={(e) => onChangeGSTNumber(e.target.value)}
                  />
                <hr className="border-gray-800 w-50" />
              </div>
              )}
          
              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Business Age</label>
                <input
                  type="tel"
                  placeholder="Enter Business Age in Number"
                  className="w-1/2 bg-gray-100 text-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={data.businessAge}
                  name="businessAge"
                  onChange={(e) => takeOnlyNumbers(e.target.value, e.target.name,3)}
                />
                <hr className="border-gray-800 w-50" />
              </div>
              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Yearly Sales</label>
                <input
                  type="tel"
                  placeholder="Enter Yearly Sales in Number"
                  className="w-1/2 bg-gray-100 text-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={data.yearlySales}
                  name="yearlySales"
                  onChange={(e) => takeOnlyNumbers(e.target.value, e.target.name,10)}
                />
                <hr className="border-gray-800 w-50" />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-0 mb-20">
            <button
              type="button"
              className="w-full sm:w-auto mb-0 mt-14 sm:mb-0 px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-yellow-300 focus:outline-none"
            >
            </button>
            <button
              type="submit"
              onClick={onSubmitThirdForm}
              className="w-full sm:w-auto px-4 py-2 mt-14 sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
            >
              Proceed to next step
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md">
          <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base ml-4 sm:ml-12">
            <li class="flex w-full relative text-indigo-600 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-gray-100 border-1 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white sm:w-10 sm:h-10"></span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-600 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-800 sm:w-10 sm:h-10">1</span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-600 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">2</span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-indigo-600 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-4">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-600 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm sm:w-10 sm:h-10">3</span>
              </div>
            </li>
            <li class="flex w-full relative text-gray-900">
              <div class="block whitespace-nowrap z-10">
                <span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-indigo-600 text-sm sm:w-10 sm:h-10">4</span>
              </div>
            </li>
          </ol>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
              <p className="text-gray-500 text-base">Add your business information</p>
            </div>
            <RmBox/>
          </div>
          <hr className="border-gray-800" />
          <div className="container mx-auto p-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-3 rounded-lg">
                <label className="block text-gray-700 text-lg font-bold mb-2">Bank Statement (Past 12 months)</label>
                <input
                  type="file"
                  className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => onFileChange(e, setBankStatementFile)}
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <label className="block text-gray-700 text-lg font-bold mb-2">Copy Of Agreement</label>
                <input
                  type="file"
                  className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => onFileChange(e, setCopyOfAgreementFile)}
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <label className="block text-gray-700 text-lg font-bold mb-2">Audited Financials</label>
                <input
                  type="file"
                  className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => onFileChange(e, setAuditedFinancialsFile)}
                />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <label className="block text-gray-700 text-lg font-bold mb-2">Purchase Order</label>
                <input
                  type="file"
                  className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => onFileChange(e, setPurchaseOrderFile)}
                />
              </div>

              <div className='px-4'>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Buyer Name</label>
                  <input
                    type="text"
                    name="buyerName"
                    value={data.buyerName}
                    onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
                    placeholder="Enter your Buyer Name"
                    className="w-1/2  bg-gray-100 py-2 px-3 text-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <hr className="border-gray-800" />
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-8">
              <button
                type="button"
                className="w-full sm:w-auto mb-0 mt-14 sm:mb-0 px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-yellow-300 focus:outline-none"
              >
              </button>
              <button
                type="button"
                onClick={onClickSubmit}
                className="w-full sm:w-auto px-4 py-2 mt-14 sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
              >
                Submit this application form
              </button>
            </div>

            </div>
       
          </div>
        </div>
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
    </>
  )
}

export default VendorFinancingForm








// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom';
// import RightContent from '../RightContent';
// import { getLocation } from '../../../store/libs/metaData';


// let baseUrl = import.meta.env.VITE_SOME_KEY


// const VendorFinancingForm = (props) => {
//   const history = useHistory()
//   const dispatch = useDispatch()
//   const profileDetails = useSelector((state) => state.profile)
//   const [openSuccessModal, setOpenSuccessModal] = useState(false)
//   const [step, setStep] = useState(1)
//   const [date, setDate] = useState(Date.now())

//   const [bankStatement, setBankStatementFile] = useState(null)
//   const [purchaseOrder, setPurchaseOrderFile] = useState(null)
//   const [copyOfAgreement, setCopyOfAgreementFile] = useState(null)
//   const [auditedFinancials, setAuditedFinancialsFile] = useState(null)

//   let uuid = profileDetails.userInfo.uuid

//   const [showError, setShowError] = useState({
//     annualTurnover: false,
//     panNo: false,
//     name: false,
//     email: false,
//     dob: false,
//     gender: false,
//     pinCode: false,

//     gstRegistered: false,
//     gstNo: false,
//     businessType: false,
//     businessAge: false,
//     businessPinCode: false,
//     yearlySales: false,

//     bankStatement: false,
//     auditedFinancials: false,
//     purchaseOrder: false,
//     copyOfAgreement: false,
//   })



//   const [data, setData] = useState({
//     annualTurnover: '',
//     panNo: "",
//     name: "",
//     email: '',

//     dob: date,
//     gender: "",
//     pinCode: "",

//     gstRegistered: '',
//     gstNo: '',
//     businessType: '',
//     businessAge: '',
//     businessPinCode: '',
//     yearlySales: "",
//     msmeCft: "",
//   })

  
//   const onChangeHandelar = (value, name) => {
//     setShowError(false)
//     setData({ ...data, [name]: value })
//   }

//   const onChangebankStatement = (file) => {
//     setShowError({ ...showError, bankStatement: false })
//     setBankStatementFile(file)
//   }

//   const onChangeauditedFinancials = (file) => {
//     setShowError({ ...showError, auditedFinancials: false })
//     setAuditedFinancialsFile(file)
//   }
//   const onChangepurchaseOrder = (file) => {
//     setShowError({ ...showError, purchaseOrder: false })
//     setPurchaseOrderFile(file)
//   }
//   const onChangecopyOfAgreement = (file) => {
//     setShowError({ ...showError, copyOfAgreement: false })
//     setCopyOfAgreementFile(file)
//   }




//   const onFetchDetails = async () => {
//     setStep(2)
//     return
//     if (!data.annualTurnover) {
//       setShowError({ ...showError, annualTurnover: true })
//       return
//     }
//     if (!data.panNo) {
//       setShowError({ ...showError, panNo: true })
//       return
//     }
//     if (!data.name) {
//       setShowError({ ...showError, name: true })
//       return
//     }
//     if (!data.email) {
//       setShowError({ ...showError, email: true })
//       return
//     }
//     else {
//       let body = {
//         turnover: data.annualTurnover,
//         panCardNumber: data.panNo,
//         fullName: data.name,
//         email: data.email,
//       }
//       console.log('body----', body)
//       const response = await fetch(`${baseUrl}/saveUserDetails?uuid=${uuid}`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: { 'Content-type': 'application/json' }
//       })
//       const res = await response.json()
//       console.log('res---', res)
//       if (res.statusCode === 200) {
//         setStep(2)
//       }
//     }
//   }

//   const onSubmitSecondForm = () => {
//     setStep(3)
//   }

//   const onSubmitThirdForm = async () => {
//     setStep(4)
//     console.log('data--',data)
//     return
//     if (!data.gstRegistered) {
//       setShowError({ ...showError, gstRegistered: true })
//       return
//     }
//     if (!data.gstNo) {
//       setShowError({ ...showError, gstNo: true })
//       return
//     }
//     if (!data.businessType) {
//       setShowError({ ...showError, businessType: true })
//       return
//     }
//     if (!data.businessAge) {
//       setShowError({ ...showError, businessAge: true })
//       return
//     }
//     if (!data.businessPinCode) {
//       setShowError({ ...showError, businessPinCode: true })
//       return
//     }
//     if (!data.yearlySales) {
//       setShowError({ ...showError, yearlySales: true })
//       return
//     }
//     else {
//       let gstReg
//       if (data.gstRegistered == 'true') {
//         gstReg = true
//       }
//       else if (data.gstRegistered == 'false') {
//         gstReg = false
//       }
//       let body = {
//         gstRegistered: gstReg,
//         businessAge: Number(data.businessAge),
//         yearlySales: Number(data.yearlySales),
//         gstNumber: data.gstNo.toString(),
//         businessType: "Retail",
//         businessPincode: data.businessPinCode.toString(),
//       }
//       const response = await fetch(`${baseUrl}/createBusinessVerification?uuid=${uuid}`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: { 'Content-type': 'application/json' }
//       })
//       const res = await response.json()
//       console.log('res---', res)
//       if (res.statusCode === 200) {
//         setStep(4)
//       }
//     }
//   }


//   const onClickSubmit = async (e) => {
//     setOpenSuccessModal(true)
//     return
//     if (!bankStatement) {
//       setShowError({ ...showError, bankStatement: true })
//       return
//     } 
//     if (!auditedFinancials) {
//       setShowError({ ...showError, auditedFinancials: true })
//       return
//     }
//     if (!copyOfAgreement) {
//       setShowError({ ...showError, copyOfAgreement: true })
//       return
//     }
//     if (!purchaseOrder) {
//       setShowError({ ...showError, purchaseOrder: true })
//       return
//     }
//     else {
//       const formData = new FormData()
//       formData.append('copyOfAgreement', copyOfAgreement);
//       formData.append('purchaseOrder', purchaseOrder);
//       formData.append('auditedFinancials', auditedFinancials);
//       formData.append('bankStatement', bankStatement);
//       console.log([...formData])
//       const response = await fetch(`${baseUrl}/documents/upload?uuid=${uuid}`, {
//         method: "POST",
//         body: formData,
//       })

      
//       const res = await response.json();
//       console.log('res---', res);
//       if (res.statusCode === 200) {
//         setOpenSuccessModal(true)
//       }
//     }
//   }


//   const onCloseSuccessModal = () => {
//     history.push("/");
//     setOpen(false)
//   }

//   return (
//     <>
//       <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
//         <div class="bg-white min-h-[80vh] shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
//           {step == 1 && (<>
//             <ProgressBar now={0} />
//             <div class="isolate bg-white px-6 lg:px-8">
//               {/* <div class="mx-auto max-w-2xl text-center">
//           <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tex</h2>
//           <p class="mt-2 text-lg leading-8 text-gray-600">Text who ever y ou want where ever you want any time you want enjoy contacting freinds and families.</p>
//         </div> */}
//               <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
//                 <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
//                   <div >
//                     <label for="annual-Turnover" class="block text-sm font-semibold leading-6 text-black">ANNUAL TURNOVER</label>
//                     <div class="mt-2.5">
//                       <select
//                         // className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
//                         // {`${colSpan ? 'col-span-2' : ''} ${rowSpan ? 'row-span-2' : ''} bg-white p-3 rounded`}
//                         className={`${showError.annualTurnover ? 'form-select is-invalid' : 'form-select'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.annualTurnover}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'annualTurnover')}
//                         name="annualTurnover"
//                       >
//                         <option value="">Select Annual Turnover</option>
//                         <option value="1 cr-50 cr">1 cr-50 cr</option>
//                         <option value="50-250 cr">50-250 cr</option>
//                         <option value="250-500 cr">250-500 cr</option>
//                         <option value="500-1000 cr">500-1000 cr</option>
//                         <option value="1000 cr & above">1000 cr & above</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div >
//                     <label for="pan-card" class="block text-sm font-semibold leading-6 text-black">PAN CARD</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="text"
//                         placeholder='Enter Pan No.'
//                         className={`${showError.panNo ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.panNo}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'panNo')}
//                         name="panNo"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label for="full-name" class="block text-sm font-semibold leading-6 text-black">FULL NAME</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="text"
//                         placeholder='Enter Full Name'
//                         className={`${showError.name ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.name}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'name')}
//                         name="name"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label for="email" class="block text-sm font-semibold leading-6 text-black">EMAIL</label>
//                     <div class="mt-2.5">
//                       <input type="email"
//                         placeholder='Enter Email'
//                         className={`${showError.email ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.email}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'email')}
//                         name="email"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div class="mt-10">
//                   <button
//                     type="submit"
//                     onClick={onFetchDetails}
//                     class="middle block w-full none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                   // class="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                   >Proceed
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//           )}

//           {step == 2 && (<>
//             <ProgressBar now={25} />
//             <div class="isolate bg-white px-6 lg:px-8">
//               <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
//                 <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
//                   <div >
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Dtae Of Birth</label>
//                     <div class="mt-2.5">
//                       <DatePicker
//                         selected={date}
//                         onChange={(date) => setDate(date)}
//                         dateFormat="dd/MM/yyyy"
//                         showYearDropdown
//                         scrollableYearDropdown
//                         yearDropdownItemNumber={70}
//                         className='form-control text-muted shadow-sm placeholder:text-gray-400'
//                         // className={showError.dob ? 'form-control is-invalid' : 'form-control'}
//                         autoComplete="off"
//                         placeholder="Enter DOB"
//                       />
//                     </div>
//                   </div>

//                   <div >
//                     <label for="last-name" class="block text-sm font-semibold leading-6 text-black">GENDER</label>
//                     <div class="mt-2.5">
//                       <select
//                         className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
//                       // className={showError.category ? 'form-select is-invalid' : 'form-select'}
//                       // onChange={(e) =>
//                       //   setData({ ...data, category: e.target.value })
//                       // }
//                       // value={data.category}
//                       >
//                         <option value="">Gender</option>
//                         <option value="">Male</option>
//                         <option value="">Female</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">PIN CODE</label>
//                     <div class="mt-2.5">
//                       <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Pin Code' />
//                     </div>
//                   </div>
//                   <div>
//                   </div>
//                 </div>

//                 <div class="flex flex-row space-x-auto mt-5 items-center justify-between min-w-screen sm:mt-10">
//                   <div class="flex flex-col text-end">
//                     <button
//                       onClick={() => setStep(1)}
//                       className='border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white'

//                     // className="middle none center mr-4 rounded-lg bg-green-500 py-2 px-4 font-sans text-sm outline outline-2 outline-offset-2 font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                     >Back</button>
//                   </div>
//                   <div class="flex flex-col">
//                     <button
//                       onClick={onSubmitSecondForm}
//                       class="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                     >Next</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//           )}

//           {step == 3 && (<>
//             <ProgressBar now={75} />
//             <div class="isolate bg-white px-6 lg:px-8">
//               <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
//                 <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
//                   <div >
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">GST REGISTERED</label>
//                     <div class="mt-2.5">
//                       <select
//                         className={`${showError.gstRegistered ? 'form-select is-invalid' : 'form-select'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.gstRegistered}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'gstRegistered')}
//                         name="gstRegistered"
//                       >
//                         <option value="">GST Reg.</option>
//                         <option value="true">Yes</option>
//                         <option value="false">No</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">GST No.</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="text"
//                         placeholder='Enter GST No.'
//                         className={`${showError.gstNo ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.gstNo}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'gstNo')}
//                         name="gstNo"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS TYPE</label>
//                     <div class="mt-2.5">
//                       <select
//                         className={`${showError.businessType ? 'form-select is-invalid' : 'form-select'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.businessType}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'businessType')}
//                         name="businessType"
//                       >
//                         <option value="">Select Type</option>
//                         <option value="Partner Firm">Partner Firm</option>
//                         <option value="Proprietorship">Proprietorship</option>
//                         <option value="Pvt. Ltd. Company">Pvt. Ltd. Company</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div >
//                     <label for="last-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS AGE</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="text"
//                         className={`${showError.businessAge ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.businessAge}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'businessAge')}
//                         name="businessAge"
//                         placeholder="Enter business Age"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS PINCODE</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="text"
//                         placeholder='Enter Business PinCode'
//                         className={`${showError.businessPinCode ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.businessPinCode}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'businessPinCode')}
//                         name="businessPinCode"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">YEARLY SALES</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="text"
//                         placeholder='Enter Yearly Sales'
//                         className={`${showError.yearlySales ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         value={data.yearlySales}
//                         onChange={(e) => onChangeHandelar(e.target.value, 'yearlySales')}
//                         name="yearlySales"
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">UDYAM/MSME CERTIFICATE (Optional)</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="file"
//                         placeholder='Enter Yearly Sales'
//                         className="form-control text-gray-600 shadow-sm placeholder:text-gray-400"
//                         value={data.msmeCft}
//                         onChange={(e) => setData({...data,msmeCft:e.target.value})}
//                         name="yearlySales"
//                       />
//                     </div>
//                   </div>

//                 </div>
//                 <div class="flex flex-row space-x-auto mt-5 items-center justify-between min-w-screen sm:mt-10">
//                   <div class="flex flex-col text-end">
//                     <button
//                       onClick={() => setStep(2)}
//                       className='border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white'
//                     >Back
//                     </button>
//                   </div>
//                   <div class="flex flex-col">
//                     <button
//                       onClick={onSubmitThirdForm}
//                       class="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                     >Next
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//           )}

//           {step == 4 && (<>
//             <ProgressBar now={100} />
//             <div class="isolate bg-white px-6 lg:px-8">
//               <div class="ml-3 mt-5 max-w-2xl sm:mt-20">
//                 <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
//                   <div >
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Bank Statement (Past 12 Month's) </label>
//                     <div class="mt-2.5">
//                       <input type="file"
//                         id="myFile"
//                         className={`${showError.bankStatement ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         // value={bankStatement}
//                         // onChange={(e) => onChangeHandelar(e.target.files[0], 'bankStatement')}
//                         // onChange={(e) => setBankStatementFile(e.target.files[0])}
//                         onChange={(e) => onChangebankStatement(e.target.files[0])}

//                         name="bankStatement"
//                       />
//                       <span className='text-xs text-red-600'>* File must be Named as Bank Statement.pdf</span>
//                     </div>
//                   </div>
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Audit Finincial</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="file"
//                         id="myFile"
//                         className={`${showError.auditedFinancials ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         // value={auditedFinancials}
//                         // onChange={(e) => onChangeHandelar(e.target.files[0], 'auditedFinancials')}
//                         onChange={(e) => onChangeauditedFinancials(e.target.files[0])}
//                         name="auditedFinancials"
//                       />
//                       <span className='text-xs text-red-600'>* File must be Named as auditedFinancials.pdf</span>
//                     </div>
//                   </div>
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Purches Order</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="file"
//                         id="myFile"
//                         className={`${showError.purchaseOrder ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         // value={purchaseOrder}
//                         // onChange={(e) => onChangeHandelar(e.target.files[0], 'purchaseOrder')}
//                         onChange={(e) => onChangepurchaseOrder(e.target.files[0])}
//                         name="purchaseOrder"
//                       />
//                       <span className='text-xs text-red-600'>* File must be Named as purchaseOrder.pdf</span>
//                     </div>
//                   </div>
//                   <div>
//                     <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Copy Of Agreement</label>
//                     <div class="mt-2.5">
//                       <input
//                         type="file"
//                         id="file"
//                         className={`${showError.copyOfAgreement ? 'form-control is-invalid' : 'form-control'} text-gray-600 shadow-sm placeholder:text-gray-400`}
//                         // value={copyOfAgreement}
//                         // onChange={(e) => onChangeHandelar(e.target.files[0], 'copyOfAgreement')}
//                         onChange={(e) => onChangecopyOfAgreement(e.target.files[0])}
//                         name="copyOfAgreement"
//                       />
//                       <span className='text-xs text-red-600'>* File must be Named as agreement.pdf</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="flex flex-row space-x-auto mt-5 items-center justify-between min-w-screen sm:mt-10">
//                   <div class="flex flex-col text-end">
//                     <button
//                       onClick={() => setStep(3)}
//                       className='border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-600 hover:text-white'
//                     >Back
//                     </button>
//                   </div>
//                   <div class="flex flex-col">
//                     <button
//                       onClick={onClickSubmit}
//                       class="middle none center mr-4 rounded-lg bg-blue-500 py-2 px-4 font-sans text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                     >Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//           )}

//           <div>
//             <Modal open={openSuccessModal} onClose={onCloseSuccessModal} center classNames=''>
//               <div class="text-center p-6 bg-white rounded-lg shadow-md">
//                 <div class="flex items-center justify-center mb-4">
//                   <svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m5 4a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"></path>
//                   </svg>
//                 </div>
//                 <div>
//                   <h1 class="text-2xl font-bold text-gray-800">Thank you!</h1>
//                   <p class="text-gray-600 mb-4 text-xl mt-2">Your UserId is --- {uuid}</p>
//                   <p class="text-gray-600 mb-4 text-sm">Our Team will Contect You within 4 Working hours.</p>
//                 </div>
//                 <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                   onClick={onCloseSuccessModal}
//                 >
//                   OK
//                 </button>
//               </div>
//             </Modal>
//           </div>
//         </div>
//         <RightContent />
//       </div>
//     </>
//   )
// }

// export default VendorFinancingForm







































// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom';

// import { getLocation } from '../../../store/libs/metaData';
// import Rmbox from '../Rmbox';

// let baseUrl = import.meta.env.VITE_SOME_KEY

// const VendorFinancingForm = (props) => {
//   const history = useHistory()
//   const dispatch = useDispatch()
//   const profileDetails = useSelector((state) => state.profile)
//   const [openSuccessModal, setOpenSuccessModal] = useState(false)
//   const [step, setStep] = useState(1)
//   const [date, setDate] = useState(Date.now())

//   const [bankStatement, setBankStatementFile] = useState(null)
//   const [purchaseOrder, setPurchaseOrderFile] = useState(null)
//   const [copyOfAgreement, setCopyOfAgreementFile] = useState(null)
//   const [auditedFinancials, setAuditedFinancialsFile] = useState(null)

//   let uuid = profileDetails.userInfo.uuid

//   const [showError, setShowError] = useState({
//     annualTurnover: false,
//     panNo: false,
//     name: false,
//     email: false,
//     dob: false,
//     gender: false,
//     pinCode: false,

//     gstRegistered: false,
//     gstNo: false,
//     businessType: false,
//     businessAge: false,
//     businessPinCode: false,
//     yearlySales: false,

//     bankStatement: false,
//     auditedFinancials: false,
//     purchaseOrder: false,
//     copyOfAgreement: false,
//   })


//   const [data, setData] = useState({
//     annualTurnover: '',
//     panNo: "",
//     name: "",
//     email: '',

//     dob: date,
//     gender: "",
//     pinCode: "",

//     gstRegistered: '',
//     gstNo: '',
//     businessType: '',
//     businessAge: '',
//     businessPinCode: '',
//     yearlySales: "",
//     msmeCft: "",
//   })

//   const onChangeHandelar = (value, name) => {
//     setShowError(false)
//     setData({ ...data, [name]: value })
//   }

//   const onChangebankStatement = (file) => {
//     setShowError({ ...showError, bankStatement: false })
//     setBankStatementFile(file)
//   }

//   const onChangeauditedFinancials = (file) => {
//     setShowError({ ...showError, auditedFinancials: false })
//     setAuditedFinancialsFile(file)
//   }
//   const onChangepurchaseOrder = (file) => {
//     setShowError({ ...showError, purchaseOrder: false })
//     setPurchaseOrderFile(file)
//   }
//   const onChangecopyOfAgreement = (file) => {
//     setShowError({ ...showError, copyOfAgreement: false })
//     setCopyOfAgreementFile(file)
//   }



//   const onFetchDetails = async () => {
//     setStep(2)
//     return
//     if (!data.annualTurnover) {
//       setShowError({ ...showError, annualTurnover: true })
//       return
//     }
//     if (!data.panNo) {
//       setShowError({ ...showError, panNo: true })
//       return
//     }
//     if (!data.name) {
//       setShowError({ ...showError, name: true })
//       return
//     }
//     if (!data.email) {
//       setShowError({ ...showError, email: true })
//       return
//     }
//     else {
//       let body = {
//         turnover: data.annualTurnover,
//         panCardNumber: data.panNo,
//         fullName: data.name,
//         email: data.email,
//       }
//       console.log('body----', body)
//       const response = await fetch(`${baseUrl}/saveUserDetails?uuid=${uuid}`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: { 'Content-type': 'application/json' }
//       })
//       const res = await response.json()
//       console.log('res---', res)
//       if (res.statusCode === 200) {
//         setStep(2)
//       }
//     }
//   }

//   const onSubmitSecondForm = () => {
//     setStep(3)
//   }

//   const onSubmitThirdForm = async () => {
//     setStep(4)
//     console.log('data--', data)
//     return
//     if (!data.gstRegistered) {
//       setShowError({ ...showError, gstRegistered: true })
//       return
//     }
//     if (!data.gstNo) {
//       setShowError({ ...showError, gstNo: true })
//       return
//     }
//     if (!data.businessType) {
//       setShowError({ ...showError, businessType: true })
//       return
//     }
//     if (!data.businessAge) {
//       setShowError({ ...showError, businessAge: true })
//       return
//     }
//     if (!data.businessPinCode) {
//       setShowError({ ...showError, businessPinCode: true })
//       return
//     }
//     if (!data.yearlySales) {
//       setShowError({ ...showError, yearlySales: true })
//       return
//     }
//     else {
//       let gstReg
//       if (data.gstRegistered == 'true') {
//         gstReg = true
//       }
//       else if (data.gstRegistered == 'false') {
//         gstReg = false
//       }
//       let body = {
//         gstRegistered: gstReg,
//         businessAge: Number(data.businessAge),
//         yearlySales: Number(data.yearlySales),
//         gstNumber: data.gstNo.toString(),
//         businessType: "Retail",
//         businessPincode: data.businessPinCode.toString(),
//       }
//       const response = await fetch(`${baseUrl}/createBusinessVerification?uuid=${uuid}`, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: { 'Content-type': 'application/json' }
//       })
//       const res = await response.json()
//       console.log('res---', res)
//       if (res.statusCode === 200) {
//         setStep(4)
//       }
//     }
//   }


//   const onClickSubmit = async (e) => {
//     setOpenSuccessModal(true)
//     return
//     if (!bankStatement) {
//       setShowError({ ...showError, bankStatement: true })
//       return
//     }
//     if (!auditedFinancials) {
//       setShowError({ ...showError, auditedFinancials: true })
//       return
//     }
//     if (!copyOfAgreement) {
//       setShowError({ ...showError, copyOfAgreement: true })
//       return
//     }
//     if (!purchaseOrder) {
//       setShowError({ ...showError, purchaseOrder: true })
//       return
//     }
//     else {
//       const formData = new FormData()
//       formData.append('copyOfAgreement', copyOfAgreement);
//       formData.append('purchaseOrder', purchaseOrder);
//       formData.append('auditedFinancials', auditedFinancials);
//       formData.append('bankStatement', bankStatement);
//       console.log([...formData])
//       const response = await fetch(`${baseUrl}/documents/upload?uuid=${uuid}`, {
//         method: "POST",
//         body: formData,
//       })

//       const res = await response.json();
//       console.log('res---', res);
//       if (res.statusCode === 200) {
//         setOpenSuccessModal(true)
//       }
//     }
//   }


//   const onCloseSuccessModal = () => {
//     history.push("/");
//     setOpen(false)
//   }

//   return (
//     <>
//       {step == 1 && (<>
//         <div class="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md ">
//           <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//             <div>
//               <h1 class="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
//               <p class="text-gray-500 text-base">Add your personal information</p>
//             </div>
//               <Rmbox/>
//           </div>
//           <hr class="border-gray-800" />
//           <form>
//             <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-lg font-medium text-gray-700 mb-1">Applicant Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="block w-full rounded-md bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
//                 />
//                 <hr class="border-gray-800" />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="block w-full rounded-md bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
//                 />
//                 <hr class="border-gray-800" />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-4">

//             <div className="mt-4">
//               <label className="block text-lg font-medium text-gray-700 mb-1">PAN Card Number</label>
//               <input
//                 type="text"
//                 placeholder="XXXX XXXX XXXX"
//                 className="block w-full rounded-md bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
//               />
//               <hr class="border-gray-800 w-50" />
//             </div>
//             <div className="mt-4">
//             </div>
// </div>
//             <div className="mt-4">
//               <label className="block text-lg font-medium text-gray-700 mb-1">Annual turnover</label>
//               <div className="flex flex-wrap bg-white text-sm gap-4 w-100 mb-2 mt-2">
//                 {[
//                   '1 Cr to 50 Cr',
//                   '50 Cr to 250 Cr',
//                   '250 Cr to 500 Cr',
//                   '500 Cr to 1000 Cr',
//                   '1000 Cr +'
//                 ].map((range, index) => (
//                   <button
//                     type="button"
//                     className={`px-3 py-1 rounded- ${index === 0 ? 'bg-blue-200' : 'bg-gray-100'} text-gray-700 hover:bg-blue-200 focus:outline-none`}
//                     key={range}
// onClick={()=>setSelectedRange(range)}                  
//                     >
//                     {range}
//                   </button>
//                 ))}
//               </div>
//               <hr class="border-gray-800" />
//             </div>
//             <div className="flex flex-col sm:flex-row justify-between mt-6">
//               <button
//                 type="button"
//               >
                
//               </button>
//               <button
//                 type="submit"
//                 onClick={onFetchDetails}
//                 className="w-full sm:w-auto px-4 py-2 mt-14  sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
//               >
//                 proceed to next step
//               </button>
//             </div>
//           </form>
//         </div>
//       </>
//       )}

//       {step == 2 && (<>
//         <div class="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md ">
//           <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//             <div>
//               <h1 class="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
//               <p class="text-gray-500 text-base">Add your personal information</p>
//             </div>
//             <Rmbox/>
//           </div>
//           <hr class="border-gray-800" />
//           <form>
//             <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
//                 <input
//                   type="date"

//                   className="block w-90 rounded-md bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
//                 />
//                 <hr class="border-gray-800" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
//                 <div className="flex gap-2 mt-2">
//                   {['Male', 'Female'].map((gender, index) => (
//                     <button
//                       type="button"
//                       className={`px-4 py-2 rounded-md ${index === 0 ? 'bg-blue-200' : 'bg-gray-100'} text-gray-700 hover:bg-blue-200 focus:outline-none`}
//                       key={gender}
//                     >
//                       {gender}
//                     </button>
//                   ))}
//                 </div>

//               </div>
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
//               <input
//                 type="text"
//                 placeholder="3492029"
//                 className="block w-full rounded-md bg-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
//               />
//               <hr class="border-gray-800 w-50" />
//             </div>
//             <div className="flex flex-col sm:flex-row justify-between mt-8">
//               <button
//                 type="button"
//                 onClick={()=>setStep(1)}
//                 className="w-full sm:w-auto mb-0 mt-14 sm:mb-0 px-4 py-2 rounded-md bg-yellow-200 text-gray-700 hover:bg-yellow-300 focus:outline-none"
//               >
//                 Back to last page
//               </button>
//               <button
//                 type="submit"
//                 onClick={onSubmitSecondForm}
//                 className="w-full sm:w-auto px-4 py-2 mt-14  sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
//               >
//                 proceed to next step
//               </button>
//             </div>
//           </form>
//         </div>
//       </>
//       )}

//       {step == 3 && (<>
//         <div class="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md ">
//           <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//             <div>
//               <h1 class="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
//               <p class="text-gray-500 text-base">Add your personal information</p>
//             </div>
//             <Rmbox/>
//           </div>
//           <hr class="border-gray-800" />
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//             <div className="flex-1 bg-gray-100 p-4">
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">GST Registered?</label>
//                 <div className="flex space-x-4">
//                   <button className="px-4 py-2 rounded bg-blue-500 text-white">Yes</button>
//                   <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">No</button>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Business Type</label>
//                 <input
//                   type="text"
//                   className="w-full bg-gray-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Business Type"
//                 />
//                 <hr className="border-gray-800 w-50" />
//               </div>
//               <div className="mt-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Business PIN Code</label>
//                 <input
//                   type="text"
//                   placeholder="Business PIN Code"
//                   className="w-full bg-gray-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  
//                 />
//                 <hr className="border-gray-800 w-50" />
//               </div>
//               <div className="mt-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">UDYAM / MSME Certification (Optional)</label>
//                 <input
//                   type="file"
//                   className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//             </div>
//             <div className="flex-1 bg-gray-100 p-4">
//               <div className="w-full mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">GST Registration Number</label>
//                 <input
//                   type="text"
//                   placeholder="GST Registration Number"
//                   className="w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 <hr className="border-gray-800 w-50" />
//               </div>
//               <div className="mt-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Business Age</label>
//                 <input
//                   type="number"
//                   placeholder="Business Age"
//                   className="w-full bg-gray-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 <hr className="border-gray-800 w-50" />
//               </div>
//               <div className="mt-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Yearly Sales</label>
//                 <input
//                   type="number"
//                   placeholder="Yearly Sales"
//                   className="w-full bg-gray-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  
//                 />
//                 <hr className="border-gray-800 w-50" />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between mb-8 text-start">
//             <button
//               type="button"
//               onClick={()=>setStep(2)}
//               className="w-full sm:w-auto mb-20 mt-14 px-4 py-2 sm:mb-0  rounded-md bg-yellow-200 text-gray-700 hover:bg-yellow-300 focus:outline-none"
//             >
//               Back to last page
//             </button>
//             <button
//               type="submit"
//               onClick={onSubmitThirdForm}
//               className="w-full sm:w-auto px-4 py-2 mt-14  sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
//             >
//               proceed to next step
//             </button>
//           </div>
//         </div>
//       </>
//       )}

//       {step == 4 && (<>
//         <div class="max-w-4xl lg:max-w-full mx-auto bg-gray-100 p-8 rounded-md ">
//           <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//             <div>
//               <h1 class="text-3xl font-bold text-gray-800">Application for vendor financing</h1>
//               <p class="text-gray-500 text-base">Add your business information</p>
//             </div> 
//             <Rmbox/>
//           </div>
//           <hr class="border-gray-800" />
//           <div className="container mx-auto p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-100 p-4 rounded-lg ">
//                 <label className="block text-gray-700 text-lg font-bold mb-2">Bank Statement (Past 12 months)</label>
//                 <input
//                   type="file"
//                   className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg ">
//                 <label className="block text-gray-700 text-lg font-bold mb-2">Copy Of Agreement</label>
//                 <input
//                   type="file"
//                   className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg ">
//                 <label className="block text-gray-700 text-lg font-bold mb-2">Audit Financial</label>
//                 <input
//                   type="file"
//                   className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="bg-gray-100 p-4 rounded-lg ">
//                 <label className="block text-gray-700 text-lg font-bold mb-2">Purchase Order</label>
//                 <input
//                   type="file"
//                   className="w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row justify-between mt-8">
//               <button
//                 type="button"
//                 onClick={()=>setStep(3)}
//                 className="w-full sm:w-auto mb-0 mt-14 sm:mb-0 px-4 py-2 rounded-md bg-yellow-200 text-gray-700 hover:bg-yellow-300 focus:outline-none"
//               >
//                 Back to last page
//               </button>
//               <button
//                 type="submit"
                
//                 className="w-full sm:w-auto px-4 py-2 mt-14  sm:mb-0 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
//               >
//                 Submit this application form
//               </button>
//             </div>
//           </div>

//         </div>
//       </>
//       )}

//       <div>
//         <Modal open={openSuccessModal} onClose={onCloseSuccessModal} center classNames=''>
//           <div class="text-center p-6 bg-white rounded-lg shadow-md">
//             <div class="flex items-center justify-center mb-4">
//               <svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m5 4a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"></path>
//               </svg>
//             </div>
//             <div>
//               <h1 class="text-2xl font-bold text-gray-800">Thank you!</h1>
//               <p class="text-gray-600 mb-4 text-xl mt-2">Your UserId is --- {uuid}</p>
//               <p class="text-gray-600 mb-4 text-sm">Our Team will Contect You within 4 Working hours.</p>
//             </div>
//             <button class="bg-blue-500 text-white px-4 py-0.5 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               onClick={onCloseSuccessModal}
//             >
//               OK
//             </button>
//           </div>
//         </Modal>
//       </div>
      
//     </>
//   )
// }
// export default VendorFinancingForm
