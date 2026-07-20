import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


function Courses(){

return(

<>

<Navbar/>


<section className="courses-page">


<h1>
Explore Courses
</h1>


<p className="courses-subtitle">
Discover expert-led courses and upgrade your skills.
</p>




<div className="course-filter">


<input

type="text"

placeholder="Search courses..."

className="course-search"

/>



<select className="category-select">

<option>
All Categories
</option>

<option>
Web Development
</option>

<option>
Programming
</option>

<option>
Database
</option>

<option>
Design
</option>


</select>



</div>





<div className="all-courses">


<div className="course-card">

<h2>
React Development
</h2>

<p>
Learn modern React concepts.
</p>

<button>
View Course
</button>

</div>



<div className="course-card">

<h2>
Node.js Backend
</h2>

<p>
Build powerful APIs.
</p>

<button>
View Course
</button>

</div>




<div className="course-card">

<h2>
MongoDB Database
</h2>

<p>
Master database management.
</p>

<button>
View Course
</button>

</div>


</div>



</section>



<Footer/>


</>

)

}


export default Courses;