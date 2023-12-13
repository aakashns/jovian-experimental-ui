import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { courses } from "@/config/courses";
import { BookCheck, BookText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const sections = [
  {
    id: 1,
    slug: "x1",
    type: "lesson",
    overtitle: "Lesson 1",
    title: "Introduction to Programming with Python",
    description:
      "This is some description. Some more description. Yet some more description. This is some description. Some more description. Yet some more description. This is some description. Some more description. Yet some more description.",
  },
  {
    id: 2,
    slug: "x1",
    type: "lesson",
    overtitle: "Lesson 2",
    title: "Introduction to Programming with Python",
    description:
      "This is some description. Some more description. Yet some more description",
  },
  {
    id: 3,
    slug: "x1",
    type: "assignment",
    overtitle: "Assignment 1",
    title: "Introduction to Programming with Python",
    description:
      "This is some description. Some more description. Yet some more description",
  },
  {
    id: 4,
    slug: "x1",
    type: "lesson",
    overtitle: "Lesson 2",
    title: "Introduction to Programming with Python",
    description:
      "This is some description. Some more description. Yet some more description",
  },
  {
    id: 5,
    slug: "x1",
    type: "lesson",
    overtitle: "Lesson 1",
    title: "Introduction to Programming with Python",
    description:
      "This is some description. Some more description. Yet some more description",
  },
  {
    id: 6,
    slug: "x1",
    type: "lesson",
    overtitle: "Lesson 2",
    title: "Introduction to Programming with Python",
    description:
      "This is some description. Some more description. Yet some more description",
  },
];

export async function generateStaticParams() {
  return courses.map((course) => ({ courseSlug: course.id }));
}

type CoursePageProps = {
  params: { courseSlug: string };
};

export default function CoursePage({ params }: CoursePageProps) {
  const { courseSlug } = params;
  const course = courses.find((c) => c.id === courseSlug);
  if (!course) {
    return notFound();
  }
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>{course.name}</PageHeaderHeading>
        <PageHeaderDescription>{course.description}</PageHeaderDescription>
      </PageHeader>
      <div>
        {sections.map((section) => (
          <Link href="/learn/a/lesson/b" key={section.id}>
            <Card className="mb-6 max-w-5xl hover:scale-[1.01] hover:shadow-md">
              <div className="flex">
                <div className="ml-6 p-6 bg-muted rounded-full self-start my-6">
                  {section.type === "lesson" ? (
                    <BookText size={24} />
                  ) : (
                    <BookCheck size={24} />
                  )}
                </div>
                <CardHeader>
                  <div className="uppercase text-muted-foreground text-sm font-semibold tracking-wide">
                    {section.overtitle}
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription className="text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
