import axios from 'axios'
import { imageUpload } from '../api/utils';
import { useState } from 'react';

const AddFood = () => {

    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const price = parseFloat(form.price.value)
        const food_title = form.food_title.value
        const location = form.location.value
        const rating = form.rating.value
        const category = form.category.value
        const description = form.description.value
        const image = form.image.files[0]

        try {
            const image_url = await imageUpload(image)
            const foodData = {
                price,
                food_title,
                location,
                rating,
                category,
                description,
                image: image_url,
            }
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/food`, foodData)
            console.log(data);

        } catch (err) {
            console.log(err)
            console.log('Hi, i am error', err.message)
        }
    }

    const handleImage = image => {
        setImagePreview(URL.createObjectURL(image))
        setImageText(image.name)
    }

    return (
        <div className='bg-[linear-gradient(115deg,_#9F7AEA,_#FEE2FE)] py-10'>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                        Post a Food
                    </h2>

                    <form onSubmit={handleFormSubmit}>
                        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                            <div>
                                <label className='text-gray-700 ' htmlFor='food_title'>
                                    Food Title
                                </label>
                                <input
                                    id='food_title'
                                    name='food_title'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='location'>
                                    Location
                                </label>
                                <input
                                    id='location'
                                    name='location'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='rating'>
                                    Rating
                                </label>
                                <input
                                    id='rating'
                                    name='rating'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='price'>
                                    Price
                                </label>
                                <input
                                    id='price'
                                    name='price'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='emailAddress'>
                                    Email Address
                                </label>
                                <input
                                    id='emailAddress'
                                    type='email'
                                    name='email'
                                    disabled
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700 ' htmlFor='category'>
                                    Category
                                </label>
                                <select
                                    name='category'
                                    id='category'
                                    className='border p-2 rounded-md text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                >
                                    <option value='Bangla Food'>Bangla Food</option>
                                    <option value='Chinese Food'>Chinese Food</option>
                                    <option value='Italian Food'>Italian Food</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>

                        {/* for image upload  */}
                        <div className=' p-4 bg-white w-full  m-auto rounded-lg flex'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            onChange={e => handleImage(e.target.files[0])}
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {imageText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='w-16 h-17'>
                                {
                                    imagePreview && <img src={imagePreview} />
                                }
                            </div>
                        </div>

                        {/* End image upload  */}

                        <div className='flex justify-end mt-6'>
                            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 cursor-pointer'>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddFood;