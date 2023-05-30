import { useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import ConfirmationModel from './ConfirmationModel';



const RecentMessage = () => {


    const { user } = useContext(AuthContext);


    const [deletingMessage, setDeletingMessage] = useState(null);

    const closeModal = () => {
        setDeletingMessage(null);
    }

    // const [message, setMessage] = useState(null);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/message`).then(res => res.json()).then(data => { setMessage(data), console.log(data) })
    // }, [])



    const { data: message, isLoading, refetch } = useQuery({
        queryKey: ['message'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/message', {
                    // headers: {
                    //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                    // }
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


    let lastElement = null;
    if (message) {
        console.log(message)


        lastElement = message[message.length - 1];
        console.log(lastElement.messages);
    }


    const handleDelete = mes => {
        console.log('dhukse ', mes)
        fetch(`http://localhost:5000/message/${mes._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    alert('done')
                    refetch();
                    // toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    }

    console.log('message ', message)


    return (
        <div>
            <div>
                {/* <h1>temporary</h1> */}
                {/* <h1>Last Element {lastElement?.messages}</h1> */}

                {
                    message &&
                    message.slice().reverse().map((mes) => (
                        <div className="flex items-center flex-col justify-start bg-gray-100 p-6 rounded-lg w-70vw min-w-70 mt-12">
                            <div className="flex flex-col items-center mb-10">
                                <img
                                    className="w-16 h-16 rounded-full mb-2"
                                    src="https://th.bing.com/th/id/OIP.HmupTqmVvxZBxpSlCQrmngHaIn?pid=ImgDet&rs=1"
                                    alt="Profile"
                                />
                                <p className="text-gray-800 font-bold mt-2">John Doe</p>
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

                                            <label
                                                onClick={() => setDeletingMessage(mes)} htmlFor="my-modal" className="mt-4 btn btn-error">Delete</label>



                                        </div>



                                    </>

                                }


                            </div>


                        </div>
                    ))
                }


            </div>
            {
                deletingMessage && <ConfirmationModel
                    title={`Are you sure you want to delete?`}
                    message={`If you delete it. It cannot be undone.`}
                    successAction={handleDelete}
                    successButtonName="Delete"
                    modalData={deletingMessage}
                    closeModal={closeModal}
                >
                </ConfirmationModel>
            }
        </div>
    );
};

export default RecentMessage;