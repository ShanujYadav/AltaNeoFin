import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useHistory } from 'react-router-dom';

import {useNavigate} from 'react-router-dom';


const VendorFinancingForm = () => {
  // const history = useHistory()
  const navigate = useNavigate();

  const [open, setOpen] = useState(true)
  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => {
    console.log('dkjj');
    setOpen(false);
    // history.push("/");
  }

  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [date, setDate] = useState(Date.now())

  const [data, setData] = useState({
    fname: '',
    lname: '',
    turnOver: '',
    mobile: '',
    panNo: "",
    gender: "",
    dob: date,
  })




  const onFetchDetails = () => {
    // dispatch(getUserDetails(data))
    // navigate('/');

    // setStep(2)
  }

  const onSubmitSecondForm = () => {
    setStep(3)
  }
  const onSubmitThirdForm = () => {
    setStep(4)
  }

  const onClickSubmit = () => {
    console.log('submit ');
    setStep(5)
  }

  return (
    <>
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">

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
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Annual Turnover</label>
                  <div class="mt-2.5">
                    <select
                      className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
                    // className={showError.category ? 'form-select is-invalid' : 'form-select'}
                    // onChange={(e) =>
                    //   setData({ ...data, category: e.target.value })
                    // }
                    // value={data.category}
                    >
                      <option value="">Annual Turnover</option>
                      <option value="">1 cr-50 cr</option>
                      <option value="">50-250 cr</option>
                      <option value="">250-500 cr</option>
                      <option value="">500-1000 cr</option>
                      <option value="">1000 cr & above</option>
                    </select>
                  </div>
                </div>
                <div >
                  <label for="last-name" class="block text-sm font-semibold leading-6 text-black">PAN CARD</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Pan No.' />
                  </div>
                </div>
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">PIN CODE</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter First Name' />
                  </div>
                </div>

                <div>
                  <label for="last-name" class="block text-sm font-semibold leading-6 text-black">LAST NAME</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Last Name' />
                  </div>
                </div>
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">EMAIL</label>
                  <div class="mt-2.5">
                    <input type="email" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Email' />
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
                      className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
                    // className={showError.category ? 'form-select is-invalid' : 'form-select'}
                    // onChange={(e) =>
                    //   setData({ ...data, category: e.target.value })
                    // }
                    // value={data.category}
                    >
                      <option value="">GST Reg. </option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">GST No.</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter GST No.' />
                  </div>
                </div>

                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS TYPE</label>
                  <div class="mt-2.5">
                    <select
                      className='form-select  text-gray-400 shadow-sm placeholder:text-gray-400'
                    // className={showError.category ? 'form-select is-invalid' : 'form-select'}
                    // onChange={(e) =>
                    //   setData({ ...data, category: e.target.value })
                    // }
                    // value={data.category}
                    >
                      <option value="">Select Type</option>
                      <option value="">Partner Firm</option>
                      <option value="">Proprietorship</option>
                      <option value="">Pvt. Ltd. Company</option>
                    </select>
                  </div>
                </div>
                <div >
                  <label for="last-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS AGE</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Business Age' />
                  </div>
                </div>
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">BUSINESS PINCODE</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Business PinCode ' />
                  </div>
                </div>
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">YEARLY SALES</label>
                  <div class="mt-2.5">
                    <input type="text" className='form-control text-muted shadow-sm placeholder:text-gray-400' placeholder='Enter Yearly Sales ' />
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
                    <input type="file" id="myFile" name="filename" className='form-control text-muted shadow-sm placeholder:text-gray-400' />
                    <span className='text-xs text-red-600'>* File must be Named as Bank Statement.pdf</span>
                  </div>
                </div>
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Finincial Statement (Audited Past 3 Year's)</label>
                  <div class="mt-2.5">
                    <input type="file" id="myFile" name="filename" className='form-control text-muted shadow-sm placeholder:text-gray-400' />
                    <span className='text-xs text-red-600'>* File must be Named as Finincial Statement.pdf</span>
                  </div>
                </div>

                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-black">Purches Agreement</label>
                  <div class="mt-2.5">
                    <input type="file" id="myFile" name="filename" className='form-control text-muted shadow-sm placeholder:text-gray-400' />
                    <span className='text-xs text-red-600'>* File must be Named as Purches Agreement.pdf</span>
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
        {step == 5 && (
          <div>
            <Modal open={open} onClose={onCloseModal} center>
              <h2>Simple centered modal</h2>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
              </p>
            </Modal>
          </div>
        )}
      </div>
    </>
  )
}

export default VendorFinancingForm