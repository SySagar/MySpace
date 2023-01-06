import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const api = {
        base: "https://api.openweathermap.org/data/2.5/",
        key: "71b52e36f8fd3004c954ae4904da8749"
    }

    const [query, setQuery] = useState('');
    const [data, setData] = useState({
        name: localStorage.getItem('lastQuery'),
        main: {
            temp: localStorage.getItem('temp'),
            feels_like: localStorage.getItem('feel')
        }
    });


    const fetchData = query => {
        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
            console.log(data);
            localStorage.setItem('lastQuery',data.name);
            localStorage.setItem('temp',data.main.temp);
            localStorage.setItem('feel',data.main.feels_like);
        });

    }

    const formSubmit = e => {
        localStorage.setItem('lastQuery',e.target.city.value);
        e.preventDefault();
        fetchData(e.target.city.value);
    }

    const handleSubmit = e => {
        // console.log(e.target.city.value);
        if(e.key === "Enter"){
            localStorage.setItem('lastQuery',query);
            e.preventDefault();
            fetchData(query);
        }    
    };

    return (
        <div className="Search space-y-16 max-lg:scale-75 max-lg:pl-24 3xl:pl-20">
            <form onSubmit={formSubmit} className="bg-neutral-300 shadow-xl 
            rounded-2xl 
            w-full p-4 
            flex justify-between 
            hover:scale-105 hover:shadow-2xl duration-300 
            items-center">
                <input color='#d4d4d4' onChange={e => setQuery(e.target.value)} type="text" name="city" id="city" placeholder="Your City" value={query} onKeyPress={handleSubmit} className="bg-neutral-300 border-b focus:border-b p-1 flex-shrink"/>
                <button className="w-6 h-6 flex-grow">
                    <SearchIcon></SearchIcon>
                    </button>
            </form>
            {(typeof data.main != "undefined") ? 
                <div className="px-2">

                <div className='bg-neutral-300
                hover:scale-105 hover:shadow-2xl duration-300 
                 w-full
                  mx-auto
                   p-4 rounded-2xl
                    shadow-lg
                     grid
                     grid-rows-3 grid-flow-col gap-4 space-x-16'>
                        <div className="col-span-2 row-span-3 self-center">
                            <p className='font-medium text-xl'>{data.name}</p>
                            <p className='font-thin text-md'>Feels like {Math.round(data.main.feels_like)}ºC</p>
                        </div>
                        <div className='row-span-3 self-center text-4xl'>{Math.round(data.main.temp)}ºC</div>
                    </div>
                </div> : 
            ('')}
        </div>
    );
}
 
export default SearchBar;