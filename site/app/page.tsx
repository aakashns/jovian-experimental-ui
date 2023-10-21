import { CourseCard } from "@/components/course-card";

const courses = [
  {
    id: "data-analysis-with-python-zero-to-pandas",
    name: "Data Analysis with Python: Zero to Pandas",
  },
  {
    id: "web-development-with-html-and-css",
    name: "Web Development with HTML and CSS",
  },
  {
    id: "programming-with-javascript-and-node-js",
    name: "Programming with JavaScript and Node.js",
  },
  {
    id: "web-application-development-with-python",
    name: "Web Application Development with Python",
  },
  {
    id: "databases-sql-and-business-intelligence",
    name: "Databases, SQL and Business Intelligence",
  },
  {
    id: "applied-statistics-for-data-science",
    name: "Applied Statistics for Data Science",
  },
  {
    id: "machine-learning-with-python-zero-to-gbms",
    name: "Machine Learing with Python: Zero to GBMs",
  },
  {
    id: "deep-learning-with-python-zero-to-gans",
    name: "Deep Learning with Python: Zero to GANs",
  },
  {
    id: "data-structured-and-algorithms-in-python",
    name: "Data Structures and Algorithms in Python",
  },
  {
    id: "data-science-career-readiness-training",
    name: "Data Science Career Readiness Training",
  },
  {
    id: "data-structures-and-algorithms-in-python",
    name: "Data Structures and Algorithms in Python",
  },
];

export default function IndexPage() {
  return (
    <div className="container relative py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map(({ id, name }) => (
          <CourseCard key={id} name={name} />
        ))}
      </div>
    </div>
  );
}
