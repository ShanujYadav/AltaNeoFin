import React from 'react'

const Profile = () => {
    return (
        <div class="flex flex-col h-screen ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div class="bg-white p-4 rounded-md">
                    <h2 class="block text-sm uppercase leading-6 text-black pb-2"><b>Personal </b> Details</h2>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                    <div class="max-w-2xl">
                        <div class="grid grid-cols-2 gap-x-10 gap-y-10 mx-4 sm:grid-cols-3">
                            <div>
                                <img src="https://www.w3schools.com/howto/img_avatar.png"
                                    alt="Avatar"
                                    className="rounded-circle  h-20 w-20"
                                />
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">AgentId</label>
                                <h6 className='text-gray-600 text-sm'>123456</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Name</label>
                                <h6 className='text-gray-600 text-sm'>Shanuj Yadav</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Phone</label>
                                <h6 className='text-gray-600 text-sm'>9528492010</h6>
                            </div>

                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Pan Card</label>
                                <h6 className='text-gray-600 text-sm'>BJZPY8553R</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gendar</label>
                                <h6 className='text-gray-600 text-sm'>Male</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">DOB</label>
                                <h6 className='text-gray-600 text-sm'>15/01/2004</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Pin Code</label>
                                <h6 className='text-gray-600 text-sm'>262122</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Email</label>
                                <h6 className='text-gray-600 text-sm'>shanujyadav@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-4 rounded-md ">
                    <h2 class="block text-sm uppercase leading-6 text-black pb-2"><b>Business </b>Details</h2>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                    <div class="max-w-2xl">
                        <div class="grid grid-cols-2 gap-x-10 gap-y-10 mx-4 sm:grid-cols-3">
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gst Registered</label>
                                <h6 className='text-gray-600 text-sm'>987456123</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Gst Number</label>
                                <h6 className='text-gray-600 text-sm'>987456123</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Business Type</label>
                                <h6 className='text-gray-600 text-sm'>pvt ltd.</h6>
                            </div>
                            <div className='py-3'>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Business Age</label>
                                <h6 className='text-gray-600 text-sm'>5 yr</h6>
                            </div>

                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Business PinCode</label>
                                <h6 className='text-gray-600 text-sm'>262122</h6>
                            </div>
                            <div className=''>
                                <label for="pan-card" class="block font-semibold text-sm leading-6 text-black">Yearly Sales</label>
                                <h6 className='text-gray-600 text-sm'>5cr</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <table class="w-full table-auto text-sm">
                        <thead>
                            <tr class="leading-normal">
                                <th class="bg-grey-lightest text-sm text-grey-light border-b border-grey-light text-center">
                                    profileDetails.genderjdnnjn dn
                                </th>
                                <th class="px-3 bg-grey-lightest text-sm text-grey-light border-b border-grey-light">
                                    Phone
                                </th>
                                <th class="py-1 px-2 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                                    <img src="https://www.w3schools.com/howto/img_avatar.png"
                                        alt="Avatar"
                                        className="rounded-circle  h-20 w-20"
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            m jmjj
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">Shanuj Yadav</td>
                                <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">
                                    <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                                </td>
                                <td class="py-2 px-4 border-b border-grey-light">María Gómez</td>
                                <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">
                                    <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                                </td>
                                <td class="py-2 px-4 border-b border-grey-light">Carlos López</td>
                                <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">
                                    <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                                </td>
                                <td class="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                                <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">
                                    <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                                </td>
                                <td class="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-2 px-4 border-b border-grey-light">
                                    <img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10" />
                                </td>
                                <td class="py-2 px-4 border-b border-grey-light">Luis Martínez</td>
                                <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                        </tbody>
                    </table> */}


            {/* 
            <div className="row">
                <div className="col-md-6 col-12">
                    <h6 className="lh-base fw-normal">
                        <b>Personal</b> Details
                    </h6>
                    <div className="card p-4" style={{ maxHeight: "60vh", overflow: "scroll" }}>
                        <div className="row">
                            <div className="col-6">
                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">Name</small>
                                    <br />
                                    profileDetails.name
                                </h6>
                                <div className="d-flex  align-items-center mb-2" style={{ justifyContent: "flex-start" }}>
                                    <h6 className="font-size-12">
                                        <small className="text-muted">DOB</small>
                                        <br />
                                        profileDetails.dob
                                    </h6>
                                    <h6 className="font-size-12 mx-4">
                                        <small className="text-muted">Gender</small>
                                        <br />
                                        profileDetails.gender
                                    </h6>
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <div className="text-center">
                                    <img
                                        src="https://www.w3schools.com/howto/img_avatar.png"
                                        alt="Avatar"
                                        className="rounded-circle avatar-xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="d-flex  align-items-center my-3 py-3"
                            style={{
                                borderTop: "1px dashed #7c7b7b",
                                borderBottom: "1px dashed #7c7b7b",
                            }}
                        >
                            <i className="fa-solid fa-phone font-size-12 me-4"></i>
                            <h6 className="font-size-12">+91 profileDetails.mobileNo</h6>
                        </div>

                        <div className="row mb-3 pb-3" >
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">Address</small>
                                <br />
                                profileDetails.agentAdd
                            </h6>
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">District</small>
                                    <br />
                                    profileDetails.agentDist
                                </h6>

                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">State</small>
                                    <br />
                                    profileDetails.agentState
                                </h6>
                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">Pincode</small>
                                    <br />
                                    profileDetails.agentPinCode
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <h6 className="lh-base fw-normal">
                        <b>Business</b> Details
                    </h6>
                    <div className="card p-4" style={{ maxHeight: "60vh", overflow: "scroll" }}>
                        <h6 className="font-size-12 mb-2">
                            <small className="text-muted">Business Name</small>
                            <br />
                            profileDetails.businessName

                        </h6>
                        <h6 className="font-size-12 mb-2">
                            <small className="text-muted">Agent ID</small>
                            <br />
                            profileDetails.agentId
                        </h6>
                        <h6 className="font-size-12 mb-2">
                            <small className="text-muted">Terminal ID</small>
                            <br />
                            profileDetails.terminal
                        </h6>
                        <h6 className="font-size-12 mb-2">
                            <small className="text-muted">PAN Number</small>
                            <br />
                            profileDetails.panNo
                        </h6>
                        <div className="pt-3  mt-3" style={{
                            borderTop: "1px dashed #7c7b7b",
                        }}>
                            <h6 className="font-size-12 mb-2">
                                <small className="text-muted">Address</small>
                                <br />
                                profileDetails.businessAdd
                            </h6>
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">District</small>
                                    <br />
                                    profileDetails.businessDist
                                </h6>
                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">State</small>
                                    <br />
                                    profileDetails.businessState
                                </h6>
                                <h6 className="font-size-12 mb-2">
                                    <small className="text-muted">Pincode</small>
                                    <br />
                                    profileDetails.businessPinCode
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div >
    )
}

export default Profile