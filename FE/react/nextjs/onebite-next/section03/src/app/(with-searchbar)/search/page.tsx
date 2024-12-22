import ClientComponent from "@/components/client-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  console.log(searchParams);
  const { q } = await searchParams;
  return (
    <div>
      Search Page : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
