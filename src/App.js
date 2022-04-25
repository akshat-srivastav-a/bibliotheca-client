import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import EditProfile from './components/EditProfile';
import SearchResults from './components/SearchResults';
import PublishBook from './components/PublishBook';
import React, { useState } from 'react';
import Pages from './pages'

function App() {
  const [currentPage,setCurrentPage] = useState(Pages.SignIn);
  const [searchQuery,setSearchQuery] = useState("");
  console.log(currentPage);
  if(currentPage === Pages.SignIn){
    return <SignIn setCurrentPage = {setCurrentPage}></SignIn>
  }
  else if(currentPage === Pages.SignUp){
    return <SignUp setCurrentPage = {setCurrentPage}></SignUp>
  }
  else if(currentPage === Pages.Home){
    return <Home setCurrentPage = {setCurrentPage} setSearchQuery = {setSearchQuery}></Home>
  }
  else if(currentPage === Pages.EditProfile){
    return <EditProfile setCurrentPage = {setCurrentPage}></EditProfile>
  }
  else if(currentPage === Pages.SearchResults){
    return <SearchResults setCurrentPage = {setCurrentPage} searchQuery = {searchQuery} setSearchQuery = {setSearchQuery}></SearchResults>
  }
  else if(currentPage === Pages.PublishBook){
    return <PublishBook setCurrentPage = {setCurrentPage}></PublishBook>
  }

  return <div/>
}

export default App;
