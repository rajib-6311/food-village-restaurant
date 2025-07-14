import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FoodCard from '../FoodsCards/FoodCard';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


const TabItem = () => {
    
    const [foods, setFoods] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/foods`)
            setFoods(data)
        }
        getData()
    },[])

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container mx-auto my-12'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'red'}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Bangla Food" value="1" 

                            sx={{ color: 'white', '&.Mui-selected': { color: 'sky blue' }}}
                            />
                            <Tab label="Chines Food" value="2" 

                            sx={{ color: 'white', '&.Mui-selected': { color: 'sky blue' } }}
                            />
                            <Tab label="Italian Food" value="3" 
                            sx={{ color: 'white', '&.Mui-selected': { color: 'sky blue' } }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                       <div className='grid grid-cols-4 gap-3'>
                          {
                            foods.filter(j => j.category === 'Bangla Food').map((food) =>
                                <FoodCard key={food._id} food={food}/>
                            )
                        }
                       </div>
                    </TabPanel>
                    <TabPanel value="2">
                       <div className='grid grid-cols-4 gap-3'>
                          {
                            foods.filter(j => j.category === 'Chinese Food').map((food) =>
                                <FoodCard key={food._id} food={food}/>
                            )
                        }
                       </div>
                    </TabPanel>
                    <TabPanel value="3">
                       <div className='grid grid-cols-4 gap-3'>
                          {
                            foods.filter(j => j.category === 'Italian Food').map((food) =>
                                <FoodCard key={food._id} food={food}/>
                            )
                        }
                       </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default TabItem;