import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function CourseCover({ src, alt }: { src: string; alt: string }) {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-t-md object-cover"
        unoptimized
      />
    </AspectRatio>
  );
}

type CourseCardProps = {
  id: string;
  name: string;
  description: string;
  cover: string;
  className: string;
};

export function CourseCard({ name, description, cover }: CourseCardProps) {
  return (
    <Card className="hover:scale-105 transition ease-in-out h-full hover:shadow-md">
      <CourseCover src={cover} alt={name} />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
