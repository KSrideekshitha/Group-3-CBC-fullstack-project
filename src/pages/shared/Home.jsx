import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CourseCard from "../../components/course/CourseCard";


function Home(){

return(

<>

<Navbar/>


<section className="hero">


<div className="hero-content">


<div className="hero-badge">
🚀 Learn smarter. Build your future.
</div>



<h1>
Learn skills that
<br/>
create your <span>future</span>
</h1>



<p>
Master modern skills with expert-led courses,
interactive quizzes, progress tracking and
certificates designed for your career growth.
</p>



<div className="hero-buttons">


<button className="primary-btn">
Explore Courses
</button>



<button className="secondary-btn">
Join as Instructor
</button>


</div>




<div className="hero-stats">


<div>
<h3>10K+</h3>
<p>Students</p>
</div>


<div>
<h3>500+</h3>
<p>Courses</p>
</div>


<div>
<h3>98%</h3>
<p>Success</p>
</div>


</div>


</div>





<div className="hero-dashboard">


<div className="dashboard-card">


<div className="dashboard-header">

<h3>
LearnVista
</h3>

<span>
● Live
</span>

</div>




<h2>
Your Learning Dashboard
</h2>



<p>
Track courses, complete lessons,
and improve your skills.
</p>




<div className="course-progress">


<div>
React Development
</div>


<strong>
85%
</strong>



<div className="progress">

<div></div>

</div>


</div>




<div className="dashboard-items">


<div>
📚
<br/>
Courses
</div>


<div>
📝
<br/>
Quizzes
</div>


<div>
🏆
<br/>
Certificates
</div>


</div>


</div>


</div>



</section>





<section className="features">


<h2>
Why LearnVista?
</h2>



<div className="feature-grid">


<div className="feature-card">

<h3>
📚 Expert Courses
</h3>

<p>
Learn from structured lessons created by professionals.
</p>

</div>



<div className="feature-card">

<h3>
📝 Smart Learning
</h3>

<p>
Practice through quizzes and assessments.
</p>

</div>




<div className="feature-card">

<h3>
📈 Progress Tracking
</h3>

<p>
Monitor your improvement easily.
</p>

</div>




<div className="feature-card">

<h3>
🏆 Certificates
</h3>

<p>
Showcase your achievements.
</p>

</div>


</div>


</section>





<section className="courses-section">


<h2>
Featured Courses
</h2>


<div className="courses-grid">


<CourseCard
title="React Development"
level="Beginner"
lessons="24 Lessons"
/>



<CourseCard
title="Node.js & Express"
level="Intermediate"
lessons="30 Lessons"
/>



<CourseCard
title="MongoDB Mastery"
level="Beginner"
lessons="20 Lessons"
/>



</div>


</section>





<section className="stats">


<div className="stat-box">
<h2>10000+</h2>
<p>Students</p>
</div>


<div className="stat-box">
<h2>500+</h2>
<p>Courses</p>
</div>


<div className="stat-box">
<h2>300+</h2>
<p>Quizzes</p>
</div>


<div className="stat-box">
<h2>98%</h2>
<p>Success</p>
</div>


</section>




<Footer/>


</>

)

}


export default Home;