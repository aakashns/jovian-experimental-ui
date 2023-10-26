export async function generateStaticParams() {
  return [{ courseSlug: "a", sectionSlug: "b" }];
}

export default function AssignmentPage() {
  return <div>Hello world</div>;
}
