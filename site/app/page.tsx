import { CourseCard } from "@/components/course-card";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

const courses = [
  {
    id: "data-analysis-with-python-zero-to-pandas",
    name: "Data Analysis with Python: Zero to Pandas",
    description:
      "A coding-focused introduction Python, Numpy, Pandas, data visualization, and exploratory data analysis",
    cover:
      "https://api.jovian.com/api/learn/course/data-analysis-with-python-zero-to-pandas/images/252bf80ff86f499f95d657e714a85b7a/NMXgZCK.png",
  },
  {
    id: "data-structured-and-algorithms-in-python",
    name: "Data Structures and Algorithms in Python",
    description:
      "A beginner-friendly introduction to data structures and algorithms using the Python programming language to help you prepare for coding interviews",
    cover:
      "https://api.jovian.com/api/learn/course/data-analysis-with-python-zero-to-pandas/images/252bf80ff86f499f95d657e714a85b7a/NMXgZCK.png",
  },
];

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>
          Beginner-Friendly Practical Online Courses
        </PageHeaderHeading>
        <PageHeaderDescription>
          Learn practical tech skills. Build real-world projects. Showcase your
          work. Join a global community.
        </PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
        {courses.map(({ id, name, description, cover }) => (
          <CourseCard
            key={id}
            name={name}
            id={id}
            description={description}
            cover={cover}
          />
        ))}
      </div>
    </div>
  );
}
