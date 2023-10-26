import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SectionVideo({ className }: { className?: string }) {
  return (
    <AspectRatio ratio={16 / 9} className={cn("bg-muted", className)}>
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
        unoptimized
      />
    </AspectRatio>
  );
}

export async function generateStaticParams() {
  return [{ courseSlug: "a", sectionSlug: "b" }];
}

type LessonPageProps = {
  params: { courseSlug: string; sectionSlug: string };
};

export default function LessonPage({ params }: LessonPageProps) {
  const { courseSlug, sectionSlug } = params;

  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <div className="flex items-center space-x-1 text-muted-foreground">
          <Link href="/">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap hover:text-foreground/80">
              Data Analysis with Python: Zero to Pandas
            </div>
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="text-muted-foreground">Lesson 1</div>
        </div>
        <PageHeaderHeading>
          Introduction to Programming with Python
        </PageHeaderHeading>
        <PageHeaderDescription>
          This is some description. Some more description. Yet some more
          description. This is some description. Some more description. Yet some
          more description. This is some description. Some more description. Yet
          some more description.
        </PageHeaderDescription>
      </PageHeader>
      <div className="max-w-4xl pb-8">
        <SectionVideo />
      </div>
      <div>Some text. some text. some text.</div>
    </div>
  );
}
