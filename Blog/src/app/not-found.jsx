import Link from "next/link";

Link
const Page = () => {
  return (
    <div>
        <h4>Not Found</h4>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Return to Home.</Link>        
    </div>
  );
}

export default Page;