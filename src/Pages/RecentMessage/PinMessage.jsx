import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import ConfirmationModel from './ConfirmationModel';
import { toast } from 'react-hot-toast';



const RecentMessage = () => {


    // Check if a value is provided, otherwise use the default value

    const { user } = useContext(AuthContext);






    const { data: message, isLoading, refetch } = useQuery({
        queryKey: ['message'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/pinmessage`, {

                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error)

            }
        }
    });

    if (isLoading) {
        return <p>loading.......</p>
    }





    console.log('message ', message)


    return (
        <div className='mb-20'>
            <div>
                <h1 className='text-3xl font-bold text-center text-green-600 ms-14 mt-20 me-14'>Reminder</h1>

                {/* <h1>temporary</h1> */}
                {/* <h1>Last Element {lastElement?.messages}</h1> */}

                {
                    message &&
                    message.slice().reverse().map((mes) => (
                        <div className="flex items-center flex-col justify-start  p-6 rounded-lg w-70vw min-w-70 mt-12">
                            <div className="flex flex-col items-center mb-10">
                                <img
                                    className="w-16 h-16 rounded-full mb-2"
                                    src="https://th.bing.com/th/id/OIP.HmupTqmVvxZBxpSlCQrmngHaIn?pid=ImgDet&rs=1"
                                    alt="Profile"
                                />
                                <p className="text-gray-800 text-3xl font-bold mt-2">{mes?.name}</p>
                                <p className="text-black-500 font-bold mt-2">{mes?.date} </p>
                            </div>
                            <div className="ml-4">
                                <p className="text-gray-600">
                                    {mes?.messages}

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
                                    tellus id magna lobortis tincidunt.
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic cumque, veritatis, dignissimos mollitia beatae sint sed laboriosam, aliquid iste aspernatur velit. Maiores, magni illum aliquid exercitationem consectetur quo sit eaque!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, fuga pariatur quas culpa sint cum nisi sunt maxime, autem corporis reprehenderit sit cupiditate nam alias! Sequi, tempora voluptas! Repudiandae, iusto.
                                    lorem lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repudiandae pariatur, ipsam quos omnis qui fugit sit aut sed earum modi natus. Consequatur sint, accusantium delectus quibusdam provident veniam fugiat!
                                    {/* Rest of the message content */}
                                </p>


                                {
                                    user?.email == 'admin@gmail.com' &&
                                    <>
                                        <div className="flex justify-center"> {/* Added flex justify-center classes here */}
                                            {/* <button htmlFor="my-modal"
                                                className="mt-4 btn btn-danger"
                                                // onClick={() => handleDelete(mes._id)}
                                                onClick={() => { setDeletingMessage('message'); console.log(deletingMessage) }}
                                            >
                                                delete
                                            </button> */}




                                        </div>



                                    </>

                                }


                            </div>


                        </div>
                    ))
                }


            </div>

        </div>
    );
};

export default RecentMessage;