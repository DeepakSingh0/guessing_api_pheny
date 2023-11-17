"use client";
import ActivitySection from '@/components/ActivitySection';
import Slides from '@/components/Slides';
import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {

  const [catFacts, setCatFacts] = useState(false);
  const [gender, setGender] = useState();
  const [jokes, setJokes] = useState(undefined);
  const [nationality, setNationality] = useState();
  const [catFactsCount, setCatFactsCount] = useState(false);
  const [genderCount, setGenderCount] = useState(false);
  const [jokesCount, setJokesCount] = useState(false);
  const [NationalityCount, setNationalityCount] = useState(false);
  // const names = ['John', 'Jane', 'Mike', 'Emily', 'Alex'];
  // const [nameList, setNameList] = useState([]);
  const [nationalityCountry, setNationalityCountry] = useState();
  const [clickCount, setClickCount] = useState(0);
  const [names, setName] = useState('');
  // const [catFactsOpen, setCatFactsOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [nationalityOpen, setNationalityOpen] = useState(false);
  // const [JokesyOpen, setJokesOpen] = useState(false);


  const getCatFacts = async () => {

    try {
      console.log('Before fetching jokes:', catFactsCount, clickCount);
      if (clickCount >= 10) {
        // Change the message after 10 clicks
        setCatFactsCount(true);
      } 
      else {
        const response = await axios.get('https://catfact.ninja/fact')
        setClickCount(prevCount => prevCount + 1);
        // Set your regular cat facts message
        setCatFacts(response.data?.fact);
      }
      // setCatFacts(response.data?.fact) 
      // console.log(response.data.fact)
      console.log('After fetching jokes:', catFactsCount, clickCount);
    } 
    catch (error) {
      console.error('Error:', error);
    } 
  };

  // const fetchNameList = async () => {
  //   try {
  //     const response = await axios.get('https://api.genderize.io/names');
  //     setNameList(response.data.names);
  //   } catch (error) {
  //     console.error('Error fetching name list:', error);
  //   }
  // };
  // useEffect(() => {
  //   fetchNameList();
  // }, []);

  const getGenderByName = async (name:any) => {
    try {
      if (clickCount >= 10) {
        setGenderCount(true);
      } 
      else {
        const response = await axios.get(`https://api.genderize.io?name=${name}`);
        setGender(response.data);
        setName('')
        console.log(response.data)
        setClickCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const getGenderRandomName = () => {
  //   const randomIndex = Math.floor(Math.random() * names.length);
  //   return names[randomIndex];
  // };

  // const getRandomName = () => {
  //   const randomIndex = Math.floor(Math.random() * nameList.length);
  //   return nameList[randomIndex];
  // };

  // const handleGenderGetNames = () => {
  //   const randomName = getGenderRandomName();
  //   getGenderByName(randomName);
  // };


  const getNationalityByName = async (name:any) => {

    try {
      if (clickCount >= 10) {
        // Change the message after 10 clicks
        setNationalityCount(true);
      } 
      else {
        const response = await axios.get(`https://api.nationalize.io?name=${name}`)
        // Set your regular cat facts message
        console.log(response.data.country)
        setNationality(response.data)
        const countryData = response.data.country.map((country: { country_id: any}) => country.country_id).slice(0,3).join(',');
        setNationalityCountry(countryData)
        setClickCount(prevCount => prevCount + 1);
        setName('')
      }
    } 
    catch (error) {
      console.error('Error:', error);
    } 
  };

  // const getNationalityRandomName = () => {
  //   const randomIndex = Math.floor(Math.random() * names.length);
  //   return names[randomIndex];
  // };

  // const handleNationalityGetNames = () => {
  //   const randomName = getNationalityRandomName();
  //   getNationalityByName(randomName);
  // };

  const getJokes = async () => {
    console.log('Before fetching jokes:', jokesCount, clickCount);

    try {
      if (clickCount >= 10) {
        console.log('Changing message after 10 clicks');
        // Change the message after 10 clicks
        setJokesCount(true);
      } 
      else {
        // Set your regular cat facts message
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
        setJokes(response.data) 
        setClickCount(prevCount => prevCount + 1);
      }
      // console.log(response.data)
      console.log('After fetching jokes:', jokesCount, clickCount);
    } 
    catch (error) {
      console.error('Error:', error);
    } 
  };

  const toggleClose = () => {
    setCatFacts(false);
    // setGender(undefined);
    // setGenderOpen(false)
    // setNationalityOpen(false)
    // setNationality(undefined);
    // setJokes(undefined);
    setClickCount(0);
  }

  const genderToggle = async () => {
    setGenderOpen(!genderOpen)
    setClickCount(0);
  }

  const nationalityToggle = async () => {
    setNationalityOpen(!nationalityOpen)
    setClickCount(0);
  }

  const toggleJokesClose = async () => {
    setJokes(undefined)
    setClickCount(0);
  }

  // const commonMessage = 'You seem not to be liking the activity. Do you want to try ';

  // const activityOptions = [
  //   { id:1, text: 'Cat Facts', action: getCatFacts},
  //   { id:2, text: 'Gender',   action: genderToggle },
  //   { id:3, text: 'Nationality', action: nationalityToggle },
  //   { id:4, text: 'Jokes', action: getJokes },
  // ];

  // const randomActivity = activityOptions[Math.floor(Math.random() * activityOptions.length)];
  // console.log("activity", randomActivity, activityOptions.length)

  const catsActivity = {commonMessage : 'You seem not to be liking the activity. Do you want to try1 ', text: 'Cat Facts', action: getCatFacts };
  const genderActivity = { commonMessage : 'You seem not to be liking the activity. Do you want to try2 ', text: 'Gender', action: genderToggle };
  const nationalityActivity = {commonMessage : 'You seem not to be liking the activity. Do you want to try3 ',  text: 'Nationality', action: nationalityToggle };
  const jokesActivity = { commonMessage : 'You seem not to be liking the activity. Do you want to t4y4 ', text: 'Jokes', action: getJokes };

const randomActivity = [catsActivity, genderActivity, nationalityActivity, jokesActivity][Math.floor(Math.random() * 4)];
  console.log("randomActivity", randomActivity)

 
  return (
  <>
    <div className="w-full min-h-screen"> 
      <div className="container mx-auto min-h-screen bg-mygray py-[2rem]">
        <h1 className='text-[2rem] text-center text-[#005EB8]'> Boredom Killer</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col gap-8 py-[2rem]">

          <div className="col-span-1 w-full h-full bg-gray-50 rounded-lg p-4 md:p-8 hover:scale-95 duration-100">
            <div className="w-full space-y-4 cursor-pointer" onClick={getCatFacts}>
              <Image src="/svg/cat.svg" width={100} height={100} alt="" className='w-12 h-12'/> 
              <h2 className=" text-slate-500 text-lg font-extrabold md:text-xl">
                Know more about cats?
              </h2>
              <Image src="/svg/arrow.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
            </div>  
          </div>

          <div className="col-span-1 w-full h-full bg-gray-50 rounded-lg p-4 md:p-8 hover:scale-95 duration-100">
            <div className="w-full space-y-4 cursor-pointer" onClick={genderToggle}>
              <Image src="/svg/gender.svg" width={100} height={100} alt="" className='w-12 h-12'/> 
              <h2 className=" text-slate-500 text-lg font-extrabold md:text-xl">
                Let'me guess your gender by name?
              </h2>
              <Image src="/svg/arrow.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
            </div>
          </div>

          <div className="col-span-1 w-full h-full bg-gray-50 rounded-lg p-4 md:p-8 hover:scale-95 duration-100">
            <div className="w-full space-y-4 cursor-pointer" onClick={nationalityToggle}>
              <Image src="/svg/nationality.svg" width={100} height={100} alt="" className='w-12 h-12'/> 
              <h2 className=" text-slate-500 text-lg font-extrabold md:text-xl">
                Let'me guess your nationality by name?
              </h2>
              <Image src="/svg/arrow.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
            </div> 
          </div>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-4 grid-flow-row md:grid-flow-col gap-4 py-[2rem] ">
          <div className="md:col-start-2 col-span-2 w-full h-full bg-gray-50 rounded-lg p-4 md:p-8 hover:scale-95 duration-100">
            <div className="w-full  space-y-4 cursor-pointer" onClick={getJokes}>
              <Image src="/svg/joke.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
              <h2 className=" text-slate-500 text-lg font-extrabold md:text-xl">
                Let me tell you a joke?
              </h2>
              <Image src="/svg/arrow.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
            </div>
          </div>
          </div>  
      </div>
    </div>

    {/* {catFacts && (
  <ActivitySection
  content={catFacts}
  count={catFactsCount}
  fetchData={getCatFacts}
  toggleClose={toggleClose}
  data={{
    commonMessage: 'You seem not to be liking the activity. Do you want to try',
    text: 'gender',
    action: handleGenderGetNames,
  }}
  />
)} */}

    {catFacts && (
      <section className='w-full fixed bottom-0'>
        <div className="container mx-auto rounded shadow-lg py-[1rem] text-center space-y-4 bg-white relative">
          <button onClick={toggleClose} className="absolute top-0 right-2 font-bold">
          <Image src="/svg/close.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
          </button>
          <div className="text-sm md:text-normal font-semibold tracking-widest">
            
          {catFactsCount ? 
          (
            <p className="text-sm md:text-normal font-semibold tracking-widest">{randomActivity.commonMessage}
            <span onClick={() => randomActivity.action()} className='cursor-pointer'> - {randomActivity.text}</span>
            </p>
          )
          : 
          catFacts}
          </div>
          <button onClick={getCatFacts} className="w-40 active-button bg-myblue p-2 text-white">
            Next
          </button>
        </div>
      </section>
    )}

    {genderOpen && (
      <section className='w-full fixed bottom-0'>
        <div className="container mx-auto rounded shadow-lg py-[1rem] text-center space-y-4 bg-white relative">
          <button onClick={genderToggle} className="absolute top-0 right-2 font-bold">
          <Image src="/svg/close.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
          </button>
          <div className="text-sm md:text-normal font-semibold tracking-widest">
          {genderCount ? 
          (
            <p className="text-sm md:text-normal font-semibold tracking-widest">{randomActivity.commonMessage}
            <span onClick={() => randomActivity.action()} className='cursor-pointer'> - {randomActivity.text}</span>
            </p>
          )
          : 
          <>
          <input
            type="text"
            placeholder="Enter your name"
            value={names}
            onChange={(e) => setName(e.target.value)}
            className='mb-2'
          />
          {gender && (
            <>
            {/* <p> Your  name: {names} </p> <br/> */}
              <p> Your guessing gender:  {gender?.['gender']} </p>
            </>
            )
          }
          </>
          }
          </div>
          <button onClick={()=>getGenderByName(names)} className="w-40 active-button bg-myblue p-2 text-white">
            Next
          </button>
        </div>
      </section>
    )}

      {nationalityOpen && (
        <section className='w-full fixed bottom-0'>
          <div className="container mx-auto rounded shadow-lg py-[1rem] text-center space-y-4 bg-white relative">
            <button onClick={nationalityToggle} className="absolute top-0 right-2 font-bold">
            <Image src="/svg/close.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
            </button>
            <div className="text-sm md:text-normal font-semibold tracking-widest">
            {NationalityCount ? 
            (
              <p className="text-sm md:text-normal font-semibold tracking-widest">{randomActivity.commonMessage}
              <span onClick={() => randomActivity.action()} className='cursor-pointer'> - {randomActivity.text}</span>
              </p>
            )
            : 
            <>
            {/* <p> Your guessing name: {nationality?.['name']} </p> <br/>
            <p> Your guessing location:  {nationalityCountry} </p> */}
            <input
              type="text"
              placeholder="Enter your name"
              value={names}
              onChange={(e) => setName(e.target.value)}
              className='mb-2'
            />
            {nationality && (
              <>
              {/* <p> Your guessing name: {nationality?.['name']} </p> <br/> */}
              <p className=''> Your guessing location:  {nationalityCountry} </p> 
              </>
              )
            }
              
            </>
            }
          
            </div>
            <button onClick={()=>getNationalityByName(names)} className="w-40 active-button bg-myblue p-2 text-white">
              Next
            </button>
          </div>
        </section>
      )}

      {jokes && (
        <section className='w-full fixed bottom-0'>
          <div className="container mx-auto rounded shadow-lg py-[1rem] text-center space-y-4 bg-white relative">
            <button onClick={toggleJokesClose} className="absolute top-0 right-2 font-bold">
            <Image src="/svg/close.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
            </button>
            <div className="text-sm md:text-normal font-semibold tracking-widest">
            {jokesCount ? 
            (
              <p className="text-sm md:text-normal font-semibold tracking-widest">{randomActivity.commonMessage}
              <span onClick={() => randomActivity.action()} className='cursor-pointer'> - {randomActivity.text}</span>
              </p>
            )
            : 
            <>
            <p> Your guessing type: {jokes?.['type']} </p> <br/>
            <p> Your guessing setup: {jokes?.['setup']} </p> <br/>
            <p> Your guessing punchline: {jokes?.['punchline']} </p> 
            </>
            }
            </div>
            <button onClick={getJokes} className="w-40 active-button bg-myblue p-2 text-white">
              Next
            </button>
          </div>
        </section>
      )}  
  </>
  )
}
