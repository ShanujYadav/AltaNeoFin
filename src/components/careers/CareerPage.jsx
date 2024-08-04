import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';

const jobs = [
    {
        category: 'Sales',
        roles: [
            {
                title: 'Business Development Executive',
                location: 'Gurugram, Haryana',
                type: 'Full Time',
                description: 'Lead Generation using portals like linkedin etc. Outbound sales Developing and executing sales strategies to grow business Maintaining and updating sales and business development documentation Support...'
            },
            {
                title: 'Business Development Intern',
                location: 'Gurugram, Haryana',
                type: 'Full Time',
                description: 'Business Development Intern duties and responsibilities: Developing and executing sales plans to meet and exceed monthly and quarterly sales goals Growing business through the development of new l...'
            },
            {
                title: 'Business Development Intern',
                location: 'Gurugram, Haryana',
                type: 'Full Time',
                description: 'Business Development Intern duties and responsibilities: Developing and executing sales plans to meet and exceed monthly and quarterly sales goals Growing business through the development of new l...'
            }
        ]
    },

];

const CareerPage = () => {
    const [remoteOnly, setRemoteOnly] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [displayedJobs, setDisplayedJobs] = useState(jobs);

    const handleRemoteToggle = () => {
        setRemoteOnly(!remoteOnly);
    };

    useEffect(() => {
        const filteredJobs = jobs
            .filter(category => departmentFilter === '' || category.category.toLowerCase().includes(departmentFilter.toLowerCase()))
            .map(category => ({
                ...category,
                roles: category.roles.filter(job =>
                    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    (locationFilter === '' || job.location.toLowerCase().includes(locationFilter.toLowerCase()))
                ),
            }))
            .filter(category => category.roles.length > 0);

        setDisplayedJobs(filteredJobs);
    }, [searchTerm, departmentFilter, locationFilter]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <section className="py-10 mt-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold font-serif italic text-center mb-6">Open Positions</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
                        <select className="border border-gray-300 p-2 rounded" onChange={(e) => setDepartmentFilter(e.target.value)}>
                            <option value="">Choose Department</option>
                            <option value="Sales">Sales</option>
                            <option value="IT">IT</option>

                        </select>
                        <select className="border border-gray-300 p-2 rounded" onChange={(e) => setLocationFilter(e.target.value)}>
                            <option value="">Choose Location</option>
                            <option value="New Delhi">New Delhi</option>
                            <option value="Gurugram">Gurugram</option>

                        </select>
                    </div>

                    <div className="flex justify-center mb-6">
                        <div className="flex w-full md:w-1/2 space-x-2">
                            <input
                                type="text"
                                placeholder="Search Job Title"
                                className="border border-white p-2 rounded w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {displayedJobs.map((category, idx) => (
                        <div key={idx} className="mb-10">
                            <h3 className="text-xl font-semibold text-purple-600 ml-2 mb-4">{category.category}</h3>
                            <div className="space-y-4">
                                {category.roles.map((job, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between">
                                        <div>
                                            <h4 className="text-lg font-semibold">{job.title}</h4>
                                            <p className="text-gray-700 text-base mb-2">{job.description}</p>
                                        </div>
                                        <div className="text-right mt-4 md:mt-0">
                                            <p className="text-gray-500 text-base">{job.location}</p>
                                            <p className="text-gray-500 text-base">{job.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default CareerPage;