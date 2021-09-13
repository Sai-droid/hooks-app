import React,{useState,useEffect} from 'react'
import '../App.css'


const initProfile ={
    followers:null,
    publicRepos:null
}

function FetchData() {
 const [profile,setProfile] =useState(initProfile)

 
const  getProfile = async () =>{
 
    const response = await fetch('https://api.github.com/users/sai-droid')
    const json = await response.json();

    setProfile({
        followers:json.followers,
        publicRepos:json.public_repos
    })

}


 useEffect(()=>{
     getProfile();
 },[])
    
    return (
        <div className="App">
            <header className ="App-header">
                <h2>Fetch Data</h2>
                <h1>
                    followers:{profile.followers}
                    publicRepos:{profile.publicRepos}

                </h1>
            </header>
            

        </div>
    )
}

export default FetchData
