import React from 'react'
import Card from './components/card'

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    companyName: "Google",
    datePosted: "5 days ago",
    posts: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/KvkePuTrHTCF2cJEnwFbpPTy26zdZaawwZ5YREkpQKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/OTUzLzAwMC9zbWFs/bC9hbWF6b24tcGF5/LWxvZ28tZnJlZS1w/bmcucG5n",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    posts: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/b2Pr0jt8kcxpoNmCHIGqA84IF-3D6_K3xlp8WBbj-jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Meta",
    datePosted: "10 days ago",
    posts: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    companyName: "Apple",
    datePosted: "1 week ago",
    posts: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ooxXqITHt4SVhBVlRBD0fBCKeyKEma7-cgG4eGWmV88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzY5OC9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    posts: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/HD-7GVCteLEVBwQYV68xNioWidqjDAUZjjfqPGuYSTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY4MTA4/NjMuanBn",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    posts: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/2AONrVn84CWKH4JZPqiYXl69X4OfF9Qc0onZ67MjlrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzczNS9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Tesla",
    datePosted: "6 days ago",
    posts: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/RuqGqICOUNfVopTXwwJ_N2rARCFY67DkXT7u2eLY_LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    companyName: "Adobe",
    datePosted: "8 days ago",
    posts: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ELAGyNAMJn6LfRhxcU2fUyE8xrHGB9ZW5LcxDJShYcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NjUxNTYwL2NvbnZl/cnNpb25zLzEyMDB4/NjAwd2EtZGVza3Rv/cC5qcGc",
    companyName: "Uber",
    datePosted: "2 days ago",
    posts: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Cb12XMhep7_xpYNaIlJoZxkfGZEQk9wiLPg77-nvTYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvQWlyYm5iLVN5/bWJvbC03MDB4Mzk0/LmpwZw",
    companyName: "Airbnb",
    datePosted: "1 month ago",
    posts: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Remote"
  }
]; 

const App = () => {
  return (
    <div className='parent'>
    {jobOpenings.map(function(elem, idx){
      return <div key={idx}>
        <Card 
      brandLogo={elem.brandLogo}
      company={elem.companyName}
       post={elem.posts}
       tag1={elem.tag1}
       tag2={elem.tag2}
       datePosted={elem.datePosted}
       pay={elem.pay}
       location={elem.location}
       />
      </div>
    })}  
    </div>
  )
}

export default App
