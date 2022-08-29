import React from 'react';

const SpecialServices = () => {
    return (
        <div className='mt-20'>
            <h1 className="text-3xl font-bold text-primary text-center">Our Special Services</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-auto lg:px-60 p-0'>
                <div class="card w-96 bg-lime-300">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">Lifetime support</h2>
                        <p className='font-bold'>Even though the training is over, the relationship with you is not over. As our student, you are getting life time support. 24/7 online support anytime. Our subject wise experienced team ensures this support offline or online.</p>
                        
                    </div>

                </div>
                <div class="card w-96 bg-yellow-300">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">Virtual Internship</h2>
                        <p className='font-bold'>Our institute has internship opportunities for students. Although virtual, there are places to experience the real office. So after completing the course you will get an opportunity to work with industry experts at home through virtual internship. Besides, office work is also available..</p>
                      
                    </div>
                </div>
                <div class="card w-96 bg-red-200 text-neutral-conten">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-3xl font-bold">Career placement support</h2>
                        <p className='font-bold'>The job placement department works to get the CV to the right place according to the students' qualifications. From here you will get various seminars on post-course grooming and career guidelines. It will put you far ahead of anyone else in the career race.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialServices;