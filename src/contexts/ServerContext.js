import React, { createContext, useState} from 'react';
import Pages from '../pages';


const ServerContext = createContext();

let users = [];
let books = [];
let transactions = [];

const testStatement = "rubber chicken";
const minFunds = 100;
let currentSearchQuery = "";
const setCurrentSearchQuery = function(query) {
    console.log("query recieved : " + query);
    currentSearchQuery = query
    console.log("current query set to :" + currentSearchQuery);
}


let loggedIn = false;


let currentUser;

const ServerObject = {
    getUser : id=>{

    },
    setUser : user => {

    },
    getTransaction : id => {

    },
    setTransaction : transaction => {

    },
    getBook : id => {

    },
    setBook : book => {

    },
    getPublicaion : id => {

    },
    setPublicaion : publication => {

    },   
}

function Login(email,password,setLoginFailed,setCurrentPage) {
    // make a call to the api here
    let response={
        successful : 1,                
        name : "Akshat Srivastava",
        email : "ajhgjhh",
        password : "djsadkgahjhg",
        idsOfBooksOwned : [],        
    }

    response.booksOwned = [];
    console.log("Email : " +email);
    // setting email and password 
    if( response.successful != 1){
        currentUser = null;
        setLoginFailed(true);
        return null;        
    } else{
        delete response.successful;
        currentUser = response;
        setCurrentPage(Pages.Home);
        return currentUser;
    }    
}

function SignUp(email,password,firstName,lastName,funds,contactNumber,setSignUpFailed,setCurrentPage){
    console.log(firstName + " " + lastName);
    console.log(email);
    console.log(typeof(funds));
    console.log(typeof(contactNumber));

    // make a call to the api here
    let response = {
        successful : 0,
        email,
        name : firstName + " " + lastName,
        password,
        wallet : funds,
    }

    if(response.successful != 1){
        setSignUpFailed(true);
        return null;
    } else {
        alert("Successfuly signed up")
        setCurrentPage(Pages.SignIn)
        delete response.successful;
        currentUser = response;
        return currentUser;
    }
}

function editProfile(email,oldPassword,newPassword,firstName,lastName,funds,contactNumber,setEditProfileFailed,setCurrentPage){
    let user
    let response
    if(response.successful != 1){
        setEditProfileFailed(true);
        return null;
    }
    else{
        alert("Profile Successfuly Edited")
        setCurrentPage(Pages.Home);
        return user;
    }
}



function LogOut(setCurrentPage){
    currentUser = null;
    setCurrentPage(Pages.SignIn);    
}

function Search(query){
    
}

function addBook(title,author,setCurrentPage){
    
    books.push({title,author});
    //users[currentUser.id].availableBooks.push(books.length-1);

    alert('Successfully Added book');
    setCurrentPage(Pages.Home)    

}

function requestBook(book){

}

function returnBook(book){

}

function removeBook(book){

}


function ServerContextProvider({children}){


    return (
        <ServerContext.Provider value = { {
            dummyProp : 'cheeseburger',
            testStatement,
            Login,
            SignUp,
            LogOut,
            currentSearchQuery,
            setCurrentSearchQuery,
            Search,
            addBook,
        }} >
            {children}
        </ServerContext.Provider>
    );
}

export {ServerContextProvider, ServerContext};